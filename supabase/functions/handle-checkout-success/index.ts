import Stripe from "npm:stripe@14.21.0";
import { createClient } from "npm:@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, stripe-signature",
};

async function createHubSpotContact(
  accessToken: string,
  email: string,
  firstName: string,
  lastName: string,
  country: string,
  city: string,
  address: string,
  zip: string,
  state: string,
  properties: number
): Promise<string> {
  const contactProperties = {
    email,
    firstname: firstName,
    lastname: lastName,
    address,
    city,
    state,
    zip,
    country,
    inmuebles__c: String(properties),
    hs_lead_status: "NEW",
    lifecyclestage: "customer",
    hs_analytics_source: "DIRECT_TRAFFIC",
    leadsource: "OnlineStore",
  };

  console.log("HubSpot: Contact properties to send:", JSON.stringify(contactProperties));

  const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: contactProperties }),
  });

  if (res.status === 409) {
    console.log("HubSpot: Contact already exists (409), searching to update...");
    const searchRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filterGroups: [{
          filters: [{ propertyName: "email", operator: "EQ", value: email }],
        }],
      }),
    });
    const searchData = await searchRes.json();
    console.log("HubSpot: Search result:", JSON.stringify(searchData));
    if (searchData.results?.[0]?.id) {
      const contactId = searchData.results[0].id;
      console.log("HubSpot: Updating contact", contactId, "with properties:", JSON.stringify(contactProperties));
      const patchRes = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ properties: contactProperties }),
      });
      const patchBody = await patchRes.text();
      console.log("HubSpot: PATCH response status:", patchRes.status, "body:", patchBody);
      if (!patchRes.ok) {
        console.error("HubSpot: PATCH failed:", patchRes.status, patchBody);
      }
      return contactId;
    }
    throw new Error("Contact conflict but could not find existing contact");
  }

  const createBody = await res.text();
  console.log("HubSpot: POST response status:", res.status, "body:", createBody);
  
  if (!res.ok) {
    throw new Error(`HubSpot create contact failed [${res.status}]: ${createBody}`);
  }

  const data = JSON.parse(createBody);
  return data.id;
}

async function createHubSpotDeal(
  accessToken: string,
  contactName: string,
  oneTimeAmount: number
): Promise<string> {
  const dealProperties: Record<string, string> = {
    dealname: `RM - ${contactName}`,
    pipeline: "3032965352",
    dealstage: "4150681833",
    dealtype: "New Business",
    amount: String(oneTimeAmount),
    hubspot_owner_id: "71977733",
    contract_start_date: new Date().toISOString(),
  };

  let res = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: dealProperties }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.warn("HubSpot: Deal creation with owner failed, retrying without hubspot_owner_id:", errBody);
    delete dealProperties.hubspot_owner_id;
    res = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties: dealProperties }),
    });
    if (!res.ok) {
      const errBody2 = await res.text();
      throw new Error(`HubSpot create deal failed [${res.status}]: ${errBody2}`);
    }
  }

  const data = await res.json();
  return data.id;
}

async function associateDealToContact(
  accessToken: string,
  dealId: string,
  contactId: string
): Promise<void> {
  const res = await fetch(
    `https://api.hubapi.com/crm/v3/objects/deals/${dealId}/associations/contacts/${contactId}/deal_to_contact`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`HubSpot associate deal failed [${res.status}]: ${errBody}`);
  }
}

// Map Stripe price IDs to HubSpot product IDs
const STRIPE_TO_HUBSPOT_PRODUCT: Record<string, string> = {
  "price_1T9hcaHW6UdvG7qBZ1zXg1J2": "328727462076",   // Dispositivo
  "price_1T9hfwHW6UdvG7qBya8cSTWF": "328937826529",   // Noise Alarm Service
  "price_1T9hhMHW6UdvG7qBjd0TLTJn": "329024188649",   // Alarm Assistant Remoto
  "price_1T91ymHW6UdvG7qBhGXsJTit": "328791818468",   // Gastos de envío
};

async function createHubSpotLineItems(
  accessToken: string,
  dealId: string,
  stripeLineItems: Array<{ priceId: string; quantity: number; unitAmount: number }>
): Promise<void> {
  for (const item of stripeLineItems) {
    const hsProductId = STRIPE_TO_HUBSPOT_PRODUCT[item.priceId];
    if (!hsProductId) {
      console.log("HubSpot: Skipping line item with no product mapping, priceId:", item.priceId);
      continue;
    }

    // Create line item
    const createRes = await fetch("https://api.hubapi.com/crm/v3/objects/line_items", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          hs_product_id: hsProductId,
          quantity: String(item.quantity),
          price: String(item.unitAmount),
        },
      }),
    });

    if (!createRes.ok) {
      const errBody = await createRes.text();
      console.error(`HubSpot: Line item creation failed [${createRes.status}]:`, errBody);
      continue;
    }

    const lineItemData = await createRes.json();
    const lineItemId = lineItemData.id;
    console.log("HubSpot: Line item created:", lineItemId, "product:", hsProductId);

    // Associate line item to deal (association type 20 = line_item_to_deal)
    const assocRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/deals/${dealId}/associations/line_items/${lineItemId}/20`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!assocRes.ok) {
      const errBody = await assocRes.text();
      console.error(`HubSpot: Line item association failed [${assocRes.status}]:`, errBody);
    } else {
      console.log("HubSpot: Line item", lineItemId, "associated to deal", dealId);
    }
  }
}

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
    const hubspotAccessToken = Deno.env.get("HUBSPOT_ACCESS_TOKEN")?.trim();

    if (!stripeSecretKey || !webhookSecret) {
      throw new Error("Missing Stripe secrets");
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: "2024-06-20" });

    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response(JSON.stringify({ error: "Missing stripe-signature header" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

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

      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();
      const existingUser = existingUsers?.users?.find(
        (u) => u.email === customerEmail
      );

      let userId: string;

      const nameParts = customerName.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      if (existingUser) {
        userId = existingUser.id;
        console.log("User already exists:", userId);
        await supabaseAdmin
          .from("profiles")
          .update({ stripe_customer_id: stripeCustomerId })
          .eq("id", userId);
      } else {
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
        console.error("Error sending magic link:", otpError.message);
      } else {
        console.log("Magic link sent to:", customerEmail);
      }

      if (hubspotAccessToken) {
        try {
          const customerAddress = session.customer_details?.address || session.shipping_details?.address;
          const hsCountry = customerAddress?.country || "";
          const hsCity = customerAddress?.city || "";
          const hsAddress = customerAddress?.line1 || "";
          const hsZip = customerAddress?.postal_code || "";
          const hsState = customerAddress?.state || "";
          const numProperties = parseInt(metadata.properties || "1", 10);
          const fullName = `${firstName} ${lastName}`.trim();

          let oneTimeAmount = 0;
          let recurringAmount = 0;
          const stripeItems: Array<{ priceId: string; quantity: number; unitAmount: number }> = [];

          if (session.subscription) {
            const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
              expand: ["line_items.data.price"],
            });

            for (const item of fullSession.line_items?.data || []) {
              const price = item.price as Stripe.Price;
              const unitAmount = (price.unit_amount || 0) / 100;
              const qty = item.quantity || 1;

              if (price.type === "one_time") {
                oneTimeAmount += unitAmount * qty;
              } else if (price.type === "recurring") {
                recurringAmount += unitAmount * qty;
              }

              // Collect for HubSpot line items
              stripeItems.push({
                priceId: price.id,
                quantity: qty,
                unitAmount,
              });
            }
          }

          console.log("HubSpot: Creating contact for", customerEmail);
          const contactId = await createHubSpotContact(
            hubspotAccessToken,
            customerEmail,
            firstName,
            lastName,
            hsCountry,
            hsCity,
            hsAddress,
            hsZip,
            hsState,
            numProperties
          );
          console.log("HubSpot: Contact created/found:", contactId);

          // Activate communication subscriptions (non-blocking)
          try {
            const subHeaders = {
              Authorization: `Bearer ${hubspotAccessToken}`,
              "Content-Type": "application/json",
            };
            const [marketingRes, serviceRes] = await Promise.all([
              fetch("https://api.hubapi.com/communication-preferences/v3/subscribe", {
                method: "POST",
                headers: subHeaders,
                body: JSON.stringify({
                  emailAddress: customerEmail,
                  subscriptionId: "subscriptionType_marketing",
                  legalBasis: "LEGITIMATE_INTEREST_PQL",
                  legalBasisExplanation: "Customer purchased a product",
                }),
              }),
              fetch("https://api.hubapi.com/communication-preferences/v3/subscribe", {
                method: "POST",
                headers: subHeaders,
                body: JSON.stringify({
                  emailAddress: customerEmail,
                  subscriptionId: "subscriptionType_customer_service",
                  legalBasis: "LEGITIMATE_INTEREST_PQL",
                  legalBasisExplanation: "Customer purchased a product",
                }),
              }),
            ]);
            console.log("HubSpot: Marketing subscription status:", marketingRes.status);
            console.log("HubSpot: Customer service subscription status:", serviceRes.status);
          } catch (subError: any) {
            console.warn("HubSpot: Subscription activation error (non-blocking):", subError.message);
          }

          console.log("HubSpot: Creating deal for", fullName, { oneTimeAmount, recurringAmount });
          const dealId = await createHubSpotDeal(
            hubspotAccessToken,
            fullName,
            oneTimeAmount
          );
          console.log("HubSpot: Deal created:", dealId);

          await associateDealToContact(hubspotAccessToken, dealId, contactId);
          console.log("HubSpot: Deal associated to contact");

          // Create line items from Stripe products and associate to deal
          if (stripeItems.length > 0) {
            console.log("HubSpot: Creating", stripeItems.length, "line items for deal", dealId);
            await createHubSpotLineItems(hubspotAccessToken, dealId, stripeItems);
            console.log("HubSpot: Line items processing complete");
          }
        } catch (hubspotError: any) {
          console.error("HubSpot integration error:", hubspotError.message);
        }
      } else {
        console.warn("HUBSPOT_ACCESS_TOKEN not configured, skipping HubSpot integration");
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