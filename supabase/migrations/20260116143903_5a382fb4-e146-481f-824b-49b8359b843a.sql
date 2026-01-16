-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  company_id UUID,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create companies table
CREATE TABLE public.companies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  country TEXT,
  tax_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add foreign key for company after table is created
ALTER TABLE public.profiles ADD CONSTRAINT profiles_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.companies(id);

-- Create subscriptions table
CREATE TABLE public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL DEFAULT 'Basic',
  billing_frequency TEXT NOT NULL DEFAULT 'monthly',
  monthly_cost DECIMAL(10,2) NOT NULL DEFAULT 0,
  next_billing_date DATE,
  payment_method TEXT,
  payment_last_four TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create properties table
CREATE TABLE public.properties (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create devices table
CREATE TABLE public.devices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
  device_id TEXT NOT NULL,
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  installation_date DATE,
  last_online TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  order_number TEXT NOT NULL,
  order_date DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT NOT NULL DEFAULT 'pending',
  total DECIMAL(10,2) NOT NULL DEFAULT 0,
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  invoice_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create services table for add-ons
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  service_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'inactive',
  monthly_cost DECIMAL(10,2),
  activated_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create returns/RMA table
CREATE TABLE public.returns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  device_id UUID REFERENCES public.devices(id) ON DELETE SET NULL,
  order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
  ticket_number TEXT NOT NULL,
  reason TEXT NOT NULL,
  request_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.returns ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for companies (users can access their company)
CREATE POLICY "Users can view their company" ON public.companies FOR SELECT USING (
  id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);
CREATE POLICY "Users can update their company" ON public.companies FOR UPDATE USING (
  id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for subscriptions
CREATE POLICY "Users can view their company subscriptions" ON public.subscriptions FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for properties
CREATE POLICY "Users can view their company properties" ON public.properties FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);
CREATE POLICY "Users can manage their company properties" ON public.properties FOR ALL USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for devices
CREATE POLICY "Users can view their company devices" ON public.devices FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);
CREATE POLICY "Users can manage their company devices" ON public.devices FOR ALL USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for orders
CREATE POLICY "Users can view their company orders" ON public.orders FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for services
CREATE POLICY "Users can view their company services" ON public.services FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);
CREATE POLICY "Users can manage their company services" ON public.services FOR ALL USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- RLS Policies for returns
CREATE POLICY "Users can view their company returns" ON public.returns FOR SELECT USING (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);
CREATE POLICY "Users can create returns for their company" ON public.returns FOR INSERT WITH CHECK (
  company_id IN (SELECT company_id FROM public.profiles WHERE id = auth.uid())
);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  new_company_id UUID;
BEGIN
  -- Create a new company for the user
  INSERT INTO public.companies (name)
  VALUES (COALESCE(NEW.raw_user_meta_data ->> 'company_name', 'My Company'))
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
  INSERT INTO public.subscriptions (company_id, plan_name, billing_frequency, monthly_cost, next_billing_date)
  VALUES (new_company_id, 'Basic', 'monthly', 0, CURRENT_DATE + INTERVAL '30 days');
  
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON public.properties FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_devices_updated_at BEFORE UPDATE ON public.devices FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_returns_updated_at BEFORE UPDATE ON public.returns FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();