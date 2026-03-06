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

    const PRICES = {
      device: 'price_1T7v3uHW6UdvG7qBZUphbeXB',
      noise_alarm: 'price_1T7w4iHW6UdvG7qBAs5Fx7bf',
      alarm_assistant: 'price_1T7wfMHW6UdvG7qBnSvlyY17',
      shipping: 'shr_1T7vldHW6UdvG7qBZCdzYXN3',
    };

    const lineItems = [];
    for (let i = 0; i < properties; i++) {
      lineItems.push({ price: PRICES[plan], quantity: 1 });
    }

    const sessionData = {
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
      sessionData.subscription_data.add_invoice_items = [
        { price: PRICES.device, quantity: properties }
      ];
      sessionData.shipping_address_collection = {
        allowed_countries: ['ES','FR','DE','IT','PT','NL','BE','AT','PL','SE','DK','FI','IE','GR','HR','CZ','HU','RO'],
      };
      sessionData.shipping_options = [{ shipping_rate: PRICES.shipping }];
    }

    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(flattenObject(sessionData)).toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Stripe API error');
    }

    return new Response(JSON.stringify({ url: data.url }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
});

function flattenObject(obj: any, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}[${key}]` : key;
    
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          Object.assign(result, flattenObject(item, `${newKey}[${index}]`));
        } else {
          result[`${newKey}[${index}]`] = String(item);
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenObject(value, newKey));
    } else {
      result[newKey] = String(value);
    }
  }
  
  return result;
}
