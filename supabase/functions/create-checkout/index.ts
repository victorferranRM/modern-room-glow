import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface CheckoutRequest {
  lineItems: Array<{
    price_data?: {
      currency: string;
      product_data: { name: string; description?: string };
      unit_amount: number;
      recurring?: { interval: string };
    };
    price?: string;
    quantity: number;
    isOneTime?: boolean;
  }>;
  plan: string;
  properties: number;
  isReactivation?: boolean;
  includeShipping?: boolean;
  shippingRateId?: string;
  devicePriceId?: string;
  successUrl: string;
  cancelUrl: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }

    const body: CheckoutRequest = await req.json();
    const {
      lineItems,
      plan,
      properties,
      isReactivation,
      includeShipping,
      shippingRateId,
      devicePriceId,
      successUrl,
      cancelUrl,
    } = body;

    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return new Response(JSON.stringify({ error: "lineItems is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!successUrl || !cancelUrl) {
      return new Response(
        JSON.stringify({ error: "successUrl and cancelUrl are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Separate one-time items (device) from recurring items (subscription)
    const recurringItems = lineItems.filter((item) => item.price !== devicePriceId);
    const oneTimeItems = lineItems.filter((item) => item.price === devicePriceId);

    // Build Stripe checkout session params
    const params = new URLSearchParams();
    params.append("mode", "subscription");
    params.append("success_url", successUrl);
    params.append("cancel_url", cancelUrl);

    // Add recurring items as line_items
    recurringItems.forEach((item, index) => {
      if (item.price) {
        params.append(`line_items[${index}][price]`, item.price);
      } else if (item.price_data) {
        params.append(`line_items[${index}][price_data][currency]`, item.price_data.currency);
        params.append(`line_items[${index}][price_data][product_data][name]`, item.price_data.product_data.name);
        if (item.price_data.product_data.description) {
          params.append(`line_items[${index}][price_data][product_data][description]`, item.price_data.product_data.description);
        }
        params.append(`line_items[${index}][price_data][unit_amount]`, item.price_data.unit_amount.toString());
        if (item.price_data.recurring) {
          params.append(`line_items[${index}][price_data][recurring][interval]`, item.price_data.recurring.interval);
        }
      }
      params.append(`line_items[${index}][quantity]`, item.quantity.toString());
    });

    // Add one-time device items as invoice items on the subscription
    oneTimeItems.forEach((item, index) => {
      if (item.price) {
        params.append(`subscription_data[invoice_items][${index}][price]`, item.price);
        params.append(`subscription_data[invoice_items][${index}][quantity]`, item.quantity.toString());
      }
    });
    // Add shipping if requested
    if (includeShipping && shippingRateId) {
      params.append("shipping_options[0][shipping_rate]", shippingRateId);
    } else if (includeShipping) {
      params.append("shipping_address_collection[allowed_countries][0]", "ES");
      params.append("shipping_address_collection[allowed_countries][1]", "PT");
      params.append("shipping_address_collection[allowed_countries][2]", "FR");
      params.append("shipping_address_collection[allowed_countries][3]", "IT");
      params.append("shipping_address_collection[allowed_countries][4]", "DE");
    }

    // Add metadata
    params.append("metadata[plan]", plan || "");
    params.append("metadata[properties]", (properties || 1).toString());
    if (isReactivation) {
      params.append("metadata[is_reactivation]", "true");
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2024-06-20",
      },
      body: params.toString(),
    });

    const session = await response.json();

    if (!response.ok) {
      console.error("Stripe error:", session);
      return new Response(
        JSON.stringify({ error: session.error?.message || "Failed to create checkout session" }),
        {
          status: response.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
