import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&#39;');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactNotificationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  propertySize?: string;
  inquiryType: string;
  message?: string;
  website?: string;
  country?: string;
  city?: string;
  province?: string;
}

// HubSpot inquiry type mapping
const HUBSPOT_INQUIRY_MAP: Record<string, string> = {
  devices: "Dispositivo",
  cover: "Servicios",
  pms: "Integraciones",
  support: "Soporte",
  careers: "Buscamos talento",
  general: "Consulta general",
};

// Email routing by inquiry type
function getTeamEmail(inquiryType: string): string {
  switch (inquiryType) {
    case "devices":
    case "cover":
      return "sales@roomonitor.com";
    case "pms":
    case "support":
    case "general":
      return "support@roomonitor.com";
    case "careers":
      return "info@roomonitor.com";
    default:
      return "info@roomonitor.com";
  }
}

async function checkRateLimit(
  supabase: ReturnType<typeof createClient>,
  ipKey: string,
  maxRequests: number = 5,
  windowMs: number = 3600000
): Promise<boolean> {
  const windowStart = new Date(Date.now() - windowMs).toISOString();

  const { data } = await supabase
    .from("rate_limit_state")
    .select("request_count, window_start")
    .eq("ip_key", ipKey)
    .maybeSingle();

  if (!data || new Date(data.window_start).toISOString() < windowStart) {
    await supabase.from("rate_limit_state").upsert({
      ip_key: ipKey,
      request_count: 1,
      window_start: new Date().toISOString(),
    });
    return true;
  }

  if (data.request_count >= maxRequests) {
    return false;
  }

  await supabase
    .from("rate_limit_state")
    .update({ request_count: data.request_count + 1 })
    .eq("ip_key", ipKey);

  return true;
}

async function createOrUpdateHubSpotContact(data: ContactNotificationRequest): Promise<void> {
  const accessToken = (Deno.env.get("HUBSPOT_PRIVATE_APP_TOKEN") || "").replace(/[\r\n\t\s]+/g, "");
  if (!accessToken) {
    console.warn("HUBSPOT_PRIVATE_APP_TOKEN not configured, skipping HubSpot sync");
    return;
  }

  const properties: Record<string, string> = {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.email,
    company: data.company,
  };

  if (data.phone) properties.phone = data.phone;
  if (data.country) properties.country = data.country;
  if (data.city) properties.city = data.city;
  if (data.province) properties.state = data.province;
  if (data.message) properties.message = data.message;
  if (data.propertySize) properties.inmuebles__c = data.propertySize;
  if (data.inquiryType && HUBSPOT_INQUIRY_MAP[data.inquiryType]) {
    properties.consultation_type = HUBSPOT_INQUIRY_MAP[data.inquiryType];
  }

  try {
    // Try to create contact
    const createRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    });

    if (createRes.ok) {
      console.log("HubSpot contact created successfully");
      return;
    }

    const createBody = await createRes.json();

    // If conflict (contact exists), update by email
    if (createRes.status === 409) {
      const existingId = createBody?.message?.match(/Existing ID: (\d+)/)?.[1];
      if (existingId) {
        const updateRes = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ properties }),
        });
        if (updateRes.ok) {
          console.log("HubSpot contact updated successfully");
        } else {
          const updateErr = await updateRes.text();
          console.error("HubSpot contact update failed:", updateErr);
        }
      }
    } else {
      console.error("HubSpot contact creation failed:", JSON.stringify(createBody));
    }
  } catch (err) {
    console.error("HubSpot sync error:", err);
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const allowed = await checkRateLimit(supabaseAdmin, ip);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const data: ContactNotificationRequest = await req.json();

    // Honeypot check
    if (data.website && data.website.trim() !== "") {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.company || !data.inquiryType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!EMAIL_REGEX.test(data.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (data.firstName.length > 100 || data.lastName.length > 100 || data.email.length > 255 || data.company.length > 200) {
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Insert into DB
    const { error: dbError } = await supabaseAdmin
      .from("contact_inquiries")
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        company: data.company,
        country: data.country || null,
        city: data.city || null,
        province: data.province || null,
        property_size: data.propertySize || null,
        inquiry_type: data.inquiryType,
        message: data.message || null,
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save inquiry." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sync to HubSpot (non-blocking)
    createOrUpdateHubSpotContact(data).catch((err) =>
      console.error("HubSpot sync failed (non-blocking):", err)
    );

    const firstName = escapeHtml(data.firstName);
    const lastName = escapeHtml(data.lastName);
    const email = escapeHtml(data.email);
    const phone = data.phone ? escapeHtml(data.phone) : undefined;
    const company = escapeHtml(data.company);
    const propertySize = data.propertySize ? escapeHtml(data.propertySize) : undefined;
    const inquiryType = escapeHtml(data.inquiryType);
    const message = data.message ? escapeHtml(data.message) : undefined;

    const inquiryLabels: Record<string, string> = {
      devices: "Dispositivo / Sensores",
      cover: "Cover™ (Operativa delegada)",
      pms: "Integraciones PMS",
      support: "Soporte técnico",
      careers: "Buscamos talento",
      general: "Consulta general",
    };

    const inquiryLabel = inquiryLabels[inquiryType] || inquiryType;
    const teamEmail = getTeamEmail(data.inquiryType);

    const teamEmailResponse = await resend.emails.send({
      from: "Roomonitor <onboarding@resend.dev>",
      to: [teamEmail],
      subject: `New Contact Inquiry: ${inquiryLabel} from ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
          </tr>
          ${propertySize ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Portfolio Size</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${propertySize}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Inquiry Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${inquiryLabel}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px; color: #666;">This inquiry was submitted via the Roomonitor website contact form.</p>
      `,
    });

    console.log("Team notification sent to:", teamEmail, teamEmailResponse);

    const customerEmailResponse = await resend.emails.send({
      from: "Roomonitor <onboarding@resend.dev>",
      to: [data.email],
      subject: "We've received your inquiry - Roomonitor",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a1a2e;">Thank you for contacting us, ${firstName}!</h1>
          <p>We've received your inquiry about <strong>${inquiryLabel}</strong> and our team will get back to you within 24 hours.</p>
          <p>In the meantime, here's a summary of your submission:</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company:</strong> ${company}</p>
            ${propertySize ? `<p><strong>Portfolio Size:</strong> ${propertySize}</p>` : ''}
            <p><strong>Inquiry Type:</strong> ${inquiryLabel}</p>
            ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
          </div>
          <p>If you have any urgent questions, feel free to reach out to us at <a href="mailto:info@roomonitor.com">info@roomonitor.com</a>.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>The Roomonitor Team</strong></p>
        </div>
      `,
    });

    console.log("Customer confirmation sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        teamEmail: teamEmailResponse, 
        customerEmail: customerEmailResponse 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
