import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactNotificationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  propertySize?: string;
  inquiryType: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactNotificationRequest = await req.json();
    const { firstName, lastName, email, phone, company, propertySize, inquiryType, message } = data;

    // Format inquiry type for display
    const inquiryLabels: Record<string, string> = {
      demo: "Book a Demo",
      sales: "Sales Inquiry",
      enterprise: "Enterprise Solutions",
      services: "Services Information",
      support: "Customer Support",
      partnership: "Partnership Opportunity",
      other: "Other",
    };

    const inquiryLabel = inquiryLabels[inquiryType] || inquiryType;

    // Send notification email to the team
    const teamEmailResponse = await resend.emails.send({
      from: "Roomonitor <onboarding@resend.dev>",
      to: ["info@roomonitor.com"],
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

    console.log("Team notification sent:", teamEmailResponse);

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Roomonitor <onboarding@resend.dev>",
      to: [email],
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
