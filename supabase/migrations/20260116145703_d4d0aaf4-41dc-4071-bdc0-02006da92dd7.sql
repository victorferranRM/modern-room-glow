-- Update the handle_new_user function to add demo data for new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_company_id UUID;
  prop1_id UUID;
  prop2_id UUID;
  prop3_id UUID;
BEGIN
  -- Create a new company for the user
  INSERT INTO public.companies (name, address, city, country)
  VALUES (
    COALESCE(NEW.raw_user_meta_data ->> 'company_name', 'My Company'),
    '123 Main Street',
    'Barcelona',
    'Spain'
  )
  RETURNING id INTO new_company_id;
  
  -- Create the user profile
  INSERT INTO public.profiles (id, email, first_name, last_name, company_id)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    new_company_id
  );
  
  -- Create a default subscription for the company
  INSERT INTO public.subscriptions (company_id, plan_name, billing_frequency, monthly_cost, next_billing_date, payment_method, payment_last_four, status)
  VALUES (new_company_id, 'Pro', 'monthly', 239.20, CURRENT_DATE + INTERVAL '30 days', 'Visa', '4242', 'active');
  
  -- Create demo properties
  INSERT INTO public.properties (id, company_id, name, address, city, country)
  VALUES (gen_random_uuid(), new_company_id, 'Apartment 12A', 'Carrer de Mallorca 234', 'Barcelona', 'Spain')
  RETURNING id INTO prop1_id;
  
  INSERT INTO public.properties (id, company_id, name, address, city, country)
  VALUES (gen_random_uuid(), new_company_id, 'Villa Costa', 'Carrer del Mar 15', 'Mallorca', 'Spain')
  RETURNING id INTO prop2_id;
  
  INSERT INTO public.properties (id, company_id, name, address, city, country)
  VALUES (gen_random_uuid(), new_company_id, 'Studio Downtown', 'Gran Via 456', 'Madrid', 'Spain')
  RETURNING id INTO prop3_id;
  
  -- Create demo devices
  INSERT INTO public.devices (company_id, property_id, device_id, name, status, installation_date, last_online)
  VALUES 
    (new_company_id, prop1_id, 'RM-001-ABC', 'Living Room Monitor', 'active', CURRENT_DATE - INTERVAL '180 days', NOW() - INTERVAL '2 minutes'),
    (new_company_id, prop1_id, 'RM-002-DEF', 'Bedroom Monitor', 'active', CURRENT_DATE - INTERVAL '180 days', NOW() - INTERVAL '5 minutes'),
    (new_company_id, prop2_id, 'RM-003-GHI', 'Main Area Sensor', 'active', CURRENT_DATE - INTERVAL '120 days', NOW() - INTERVAL '1 minute'),
    (new_company_id, prop3_id, 'RM-004-JKL', 'Entrance Monitor', 'offline', CURRENT_DATE - INTERVAL '90 days', NOW() - INTERVAL '3 hours'),
    (new_company_id, prop2_id, 'RM-005-MNO', 'Living Space', 'attention', CURRENT_DATE - INTERVAL '150 days', NOW() - INTERVAL '30 minutes');
  
  -- Create demo orders
  INSERT INTO public.orders (company_id, order_number, order_date, status, total, items, invoice_url)
  VALUES 
    (new_company_id, 'ORD-2026-0042', CURRENT_DATE - INTERVAL '5 days', 'delivered', 179.40, 
     '[{"name": "Roomonitor Pro Device", "quantity": 3, "price": "€149.70"}, {"name": "Installation Kit", "quantity": 3, "price": "€29.70"}]'::jsonb, NULL),
    (new_company_id, 'ORD-2025-0038', CURRENT_DATE - INTERVAL '60 days', 'delivered', 99.80,
     '[{"name": "Roomonitor Pro Device", "quantity": 2, "price": "€99.80"}]'::jsonb, NULL),
    (new_company_id, 'ORD-2025-0031', CURRENT_DATE - INTERVAL '120 days', 'delivered', 373.50,
     '[{"name": "Roomonitor Pro Device", "quantity": 5, "price": "€249.50"}, {"name": "Premium Installation Kit", "quantity": 5, "price": "€74.50"}, {"name": "Extended Warranty", "quantity": 5, "price": "€49.50"}]'::jsonb, NULL);
  
  -- Create demo active service
  INSERT INTO public.services (company_id, service_name, status, monthly_cost, activated_at)
  VALUES (new_company_id, 'Pro Monitoring', 'active', 0, NOW() - INTERVAL '180 days');
  
  RETURN NEW;
END;
$$;