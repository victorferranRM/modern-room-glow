import Stripe from "npm:stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { plan, properties, isReactivation, successUrl, cancelUrl } = await req.json();

    const PRICES: Record<string, string> = {
      device: "price_1T7v3uHW6UdvG7qBZUphbeXB",
      noise_alarm: "price_1T7w4iHW6UdvG7qBAs5Fx7bf",
      alarm_assistant: "price_1T7wfMHW6UdvG7qBnSvlyY17",
      shipping: "price_1T914GHW6UdvG7qBWNQLR9Rv",
    };

    const planPriceId = PRICES[plan];
    if (!planPriceId) {
      return new Response(JSON.stringify({ error: "Invalid plan" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!Number.isInteger(properties) || properties < 1) {
      return new Response(JSON.stringify({ error: "Invalid properties value" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const stripeSecretKey = Deno.env
      .get("STRIPE_SECRET_KEY")
      ?.trim()
      .replace(/^['"]|['"]$/g, "")
      .replace(/[\u200B-\u200D\uFEFF]/g, "");

    if (!stripeSecretKey || !stripeSecretKey.startsWith("sk_")) {
      throw new Error("STRIPE_SECRET_KEY missing or invalid format");
    }

    console.log("create-checkout: request", {
      plan,
      properties,
      isReactivation,
      keyPrefix: stripeSecretKey.slice(0, 7),
      keyLength: stripeSecretKey.length,
    });

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    });

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price: planPriceId,
        quantity: properties,
      },
    ];

    if (!isReactivation) {
      lineItems.push(
        { price: PRICES.device, quantity: properties },
        { price: PRICES.shipping, quantity: 1 },
      );
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: "subscription",
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { plan, properties: String(properties) },
        ...(!isReactivation && {
          add_invoice_items: [
            { price: PRICES.device, quantity: properties },
            { price: "price_1T914GHW6UdvG7qBWNQLR9Rv", quantity: 1 },
          ],
        }),
      },
      metadata: {
        plan,
        properties: String(properties),
        is_reactivation: String(isReactivation),
      },
    };

    if (!isReactivation) {
      sessionParams.shipping_address_collection = {
        allowed_countries: ["ES", "FR", "DE", "IT", "PT", "NL", "BE", "AT", "PL", "SE", "DK", "FI", "IE", "GR", "HR", "CZ", "HU", "RO"],
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("create-checkout error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
