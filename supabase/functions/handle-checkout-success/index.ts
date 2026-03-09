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
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

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

      // Admin client for user management
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

        await supabaseAdmin
          .from("profiles")
          .update({ stripe_customer_id: stripeCustomerId })
          .eq("id", userId);
      } else {
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

        await new Promise((resolve) => setTimeout(resolve, 1500));

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

      // Send magic link via native auth email system
      // Uses the configured email domain and auth email templates
      const siteUrl = Deno.env.get("SITE_URL") || "https://modern-room-glow.lovable.app";

      const anonClient = createClient(supabaseUrl, supabaseAnonKey);
      const { error: otpError } = await anonClient.auth.signInWithOtp({
        email: customerEmail,
        options: {
          emailRedirectTo: `${siteUrl}/portal`,
          shouldCreateUser: false,
        },
      });

      if (otpError) {
        console.error("Error sending magic link via auth system:", otpError.message);
      } else {
        console.log("Magic link sent via native auth system to:", customerEmail);
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
