import Stripe from "npm:stripe@14.21.0";
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, stripe-signature",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY")?.trim().replace(/^['"]|['"]$/g, "");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")?.trim().replace(/^['"]|['"]$/g, "");
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const hubspotAccessToken = Deno.env.get("HUBSPOT_ACCESS_TOKEN")?.trim().replace(/^['"]|['"]$/g, "").replace(/\u200B/g, "");

    if (!stripeSecretKey || !webhookSecret) {
      throw new Error("Missing Stripe secrets");
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

    // Get the raw body and signature header
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response(JSON.stringify({ error: "Missing stripe-signature header" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return new Response(JSON.stringify({ error: "Invalid signature" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Webhook event received:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || "";
      const stripeCustomerId = session.customer as string;
      const metadata = session.metadata || {};

      if (!customerEmail) {
        console.error("No customer email found in session");
        return new Response(JSON.stringify({ error: "No customer email" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      console.log("Processing checkout for:", customerEmail);

      // Create Supabase admin client
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      // Check if user already exists
      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existingUser = existingUsers?.users?.find(
        (u) => u.email === customerEmail
      );

      let userId: string;

      if (existingUser) {
        userId = existingUser.id;
        console.log("User already exists:", userId);

        // Update profile with Stripe customer ID if not set
        await supabaseAdmin
          .from("profiles")
          .update({ stripe_customer_id: stripeCustomerId })
          .eq("id", userId);
      } else {
        // Create new auth user (auto-confirmed, no password — magic link only)
        const nameParts = customerName.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        const { data: newUser, error: createError } =
          await supabaseAdmin.auth.admin.createUser({
            email: customerEmail,
            email_confirm: true,
            user_metadata: {
              first_name: firstName,
              last_name: lastName,
              plan: metadata.plan,
              properties: metadata.properties,
            },
          });

        if (createError) {
          console.error("Error creating user:", createError.message);
          throw createError;
        }

        userId = newUser.user.id;
        console.log("Created new user:", userId);

        // Wait for the handle_new_user trigger to complete
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Update profile with Stripe customer ID and name
        await supabaseAdmin
          .from("profiles")
          .update({
            stripe_customer_id: stripeCustomerId,
            first_name: firstName || null,
            last_name: lastName || null,
          })
          .eq("id", userId);
      }

      // Update subscription with Stripe IDs
      const { data: profile } = await supabaseAdmin
        .from("profiles")
        .select("company_id")
        .eq("id", userId)
        .single();

      if (profile?.company_id) {
        await supabaseAdmin
          .from("subscriptions")
          .update({
            stripe_customer_id: stripeCustomerId,
            stripe_subscription_id: session.subscription as string,
            plan: metadata.plan || null,
          })
          .eq("company_id", profile.company_id);
      }

      // Generate magic link and send via Resend
      const siteUrl = Deno.env.get("SITE_URL") || "https://modern-room-glow.lovable.app";
      const { data: linkData, error: linkError } =
        await supabaseAdmin.auth.admin.generateLink({
          type: "magiclink",
          email: customerEmail,
          options: { redirectTo: `${siteUrl}/portal` },
        });

      if (linkError) {
        console.error("Error generating magic link:", linkError.message);
      } else {
        const magicLink = linkData?.properties?.action_link;
        console.log("Magic link generated for:", customerEmail);

        // Send magic link email via Resend
        if (resendApiKey && magicLink) {
          try {
            const emailResponse = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
              },
              body: JSON.stringify({
                from: "Roomonitor <noreply@roomonitor.com>",
                to: [customerEmail],
                subject: "Accede a tu portal de Roomonitor",
                html: `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
                    <div style="text-align: center; margin-bottom: 32px;">
                      <h1 style="font-size: 24px; font-weight: 700; color: #1a1a1a; margin: 0;">¡Bienvenido a Roomonitor!</h1>
                    </div>
                    <p style="font-size: 16px; color: #444; line-height: 1.6;">
                      Hola${customerName ? ` ${customerName.split(" ")[0]}` : ""},
                    </p>
                    <p style="font-size: 16px; color: #444; line-height: 1.6;">
                      Tu pedido ha sido confirmado. Haz clic en el botón de abajo para acceder a tu portal de cliente, donde podrás gestionar tus dispositivos, suscripciones y pedidos.
                    </p>
                    <div style="text-align: center; margin: 32px 0;">
                      <a href="${magicLink}" style="display: inline-block; background-color: #E8836B; color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 8px;">
                        Acceder a mi portal
                      </a>
                    </div>
                    <p style="font-size: 14px; color: #888; line-height: 1.5;">
                      Este enlace es válido durante 24 horas. Si no has realizado esta compra, puedes ignorar este email.
                    </p>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />
                    <p style="font-size: 12px; color: #aaa; text-align: center;">
                      © ${new Date().getFullYear()} Roomonitor. Todos los derechos reservados.
                    </p>
                  </div>
                `,
              }),
            });

            if (emailResponse.ok) {
              console.log("Magic link email sent via Resend to:", customerEmail);
            } else {
              const errBody = await emailResponse.text();
              console.error("Resend email error:", errBody);
            }
          } catch (emailErr: any) {
            console.error("Failed to send email via Resend:", emailErr.message);
          }
        } else {
          console.warn("Missing RESEND_API_KEY or magic link — email not sent");
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Webhook handler error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
