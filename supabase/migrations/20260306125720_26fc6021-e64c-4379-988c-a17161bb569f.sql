ALTER TABLE public.contact_inquiries
  ADD CONSTRAINT first_name_max CHECK (char_length(first_name) <= 100),
  ADD CONSTRAINT last_name_max CHECK (char_length(last_name) <= 100),
  ADD CONSTRAINT email_max CHECK (char_length(email) <= 255),
  ADD CONSTRAINT company_max CHECK (char_length(company) <= 200),
  ADD CONSTRAINT message_max CHECK (char_length(message) <= 2000),
  ADD CONSTRAINT phone_max CHECK (char_length(phone) <= 50),
  ADD CONSTRAINT property_size_max CHECK (char_length(property_size) <= 100),
  ADD CONSTRAINT inquiry_type_max CHECK (char_length(inquiry_type) <= 50),
  ADD CONSTRAINT city_max CHECK (char_length(city) <= 100),
  ADD CONSTRAINT country_max CHECK (char_length(country) <= 100),
  ADD CONSTRAINT province_max CHECK (char_length(province) <= 100);