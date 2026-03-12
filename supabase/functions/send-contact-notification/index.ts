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

    // --- Email 1: Notificación interna al equipo Roomonitor ---
    const teamEmailResponse = await resend.emails.send({
      from: "Roomonitor <hello@roomonitor.com>",
      to: [teamEmail],
      subject: `Nueva consulta: ${inquiryLabel} — ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <h2 style="margin-bottom: 8px;">Nueva consulta desde el formulario web</h2>
          <p style="color: #555; margin-top: 0;">Has recibido una nueva consulta a través del formulario de contacto de la web. Aquí tienes el detalle:</p>
          <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2; width: 35%;">Nombre</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Email</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Teléfono</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Empresa</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${company}</td>
            </tr>
            ${data.country ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">País</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${escapeHtml(data.country)}</td>
            </tr>` : ''}
            ${data.city ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Ciudad</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${escapeHtml(data.city)}</td>
            </tr>` : ''}
            ${data.province ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Provincia / Estado</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${escapeHtml(data.province)}</td>
            </tr>` : ''}
            ${propertySize ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Tamaño del portfolio</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${propertySize}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Tipo de consulta</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${inquiryLabel}</td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0; font-weight: bold; background: #f9f7f2;">Mensaje</td>
              <td style="padding: 10px 12px; border: 1px solid #e0e0e0;">${message}</td>
            </tr>` : ''}
          </table>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">Este mensaje ha sido enviado automáticamente desde el formulario de contacto de roomonitor.com.</p>
        </div>
      `,
    });

    console.log("Team notification sent to:", teamEmail, teamEmailResponse);

    // --- Email 2: Confirmación al usuario ---
    const customerEmailResponse = await resend.emails.send({
      from: "Roomonitor <hello@roomonitor.com>",
      to: [data.email],
      subject: "Hemos recibido tu consulta — Roomonitor",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <h1 style="font-size: 22px; margin-bottom: 8px;">Hola ${firstName}, ¡gracias por escribirnos!</h1>
          <p>Hemos recibido tu consulta y nuestro equipo se pondrá en contacto contigo en menos de <strong>24 horas</strong>.</p>
          <p>Mientras tanto, aquí tienes un resumen de lo que nos has enviado:</p>
          <div style="background-color: #f9f7f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 4px 0;"><strong>Empresa:</strong> ${company}</p>
            ${propertySize ? `<p style="margin: 4px 0;"><strong>Tamaño del portfolio:</strong> ${propertySize}</p>` : ''}
            <p style="margin: 4px 0;"><strong>Tipo de consulta:</strong> ${inquiryLabel}</p>
            ${message ? `<p style="margin: 4px 0;"><strong>Tu mensaje:</strong> ${message}</p>` : ''}
          </div>
          <p>Si tienes alguna duda urgente, puedes escribirnos a <a href="mailto:info@roomonitor.com">info@roomonitor.com</a> o llamarnos al <a href="tel:+34930180130">+34 930 180 130</a>.</p>
          <p style="margin-top: 30px;">Un saludo,<br><strong>El equipo de Roomonitor</strong></p>
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
