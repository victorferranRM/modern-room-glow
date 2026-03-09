import Stripe from "npm:stripe@14.21.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { plan, properties, isReactivation, successUrl, cancelUrl } = await req.json();

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
      apiVersion: '2024-06-20',
    });

    const PRICES: Record<string, string> = {
      device: 'price_1T7v3uHW6UdvG7qBZUphbeXB',
      noise_alarm: 'price_1T7w4iHW6UdvG7qBAs5Fx7bf',
      alarm_assistant: 'price_1T7wfMHW6UdvG7qBnSvlyY17',
      shipping: 'shr_1T7vldHW6UdvG7qBZCdzYXN3',
    };

    const lineItems = Array.from({ length: properties }, () => ({
      price: PRICES[plan],
      quantity: 1,
    }));

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      automatic_tax: { enabled: true },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      subscription_data: {
        metadata: { plan, properties: String(properties) },
      },
      metadata: { plan, properties: String(properties), is_reactivation: String(isReactivation) },
    };

    if (!isReactivation) {
      sessionParams.subscription_data!.add_invoice_items = [
        { price: PRICES.device, quantity: properties }
      ];
      sessionParams.shipping_address_collection = {
        allowed_countries: ['ES','FR','DE','IT','PT','NL','BE','AT','PL','SE','DK','FI','IE','GR','HR','CZ','HU','RO'],
      };
      sessionParams.shipping_options = [{ shipping_rate: PRICES.shipping }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('create-checkout error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
