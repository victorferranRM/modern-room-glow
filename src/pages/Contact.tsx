import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CountrySelect } from "@/components/ui/country-select";
import { PhoneInput } from "@/components/ui/phone-input";
import { 
  ArrowRight, 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Shield,
  CheckCircle2,
  Headphones
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const inquiryTypes = [
  { value: "demo", label: "Book a Demo" },
  { value: "sales", label: "Sales Inquiry" },
  { value: "enterprise", label: "Enterprise" },
  { value: "support", label: "Support" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
];

const propertySizes = [
  { value: "1-10", label: "1-10 properties" },
  { value: "11-50", label: "11-50 properties" },
  { value: "51-200", label: "51-200 properties" },
  { value: "200+", label: "200+ properties" },
];

const benefits = [
  "Personalized demo of our platform",
  "Custom pricing for your portfolio",
  "No-obligation consultation",
  "Expert guidance from our team",
];

// Zod validation schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "First name contains invalid characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Last name contains invalid characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(30, "Phone number must be less than 30 characters"),
  company: z
    .string()
    .min(1, "Company name is required")
    .max(100, "Company name must be less than 100 characters"),
  country: z
    .string()
    .min(1, "Country is required"),
  propertySize: z
    .string()
    .min(1, "Please select portfolio size"),
  inquiryType: z
    .string()
    .min(1, "Please select an inquiry type"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      propertySize: "",
      inquiryType: "",
      message: "",
    },
  });

  // Watch country for phone input
  const selectedCountry = form.watch("country");

  // Get inquiry type from URL params on mount
  useEffect(() => {
    const initialInquiry = searchParams.get("inquiry") || "";
    if (initialInquiry && inquiryTypes.some(t => t.value === initialInquiry)) {
      form.setValue("inquiryType", initialInquiry);
    }
  }, [searchParams, form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_inquiries")
        .insert({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || null,
          company: data.company,
          country: data.country,
          property_size: data.propertySize || null,
          inquiry_type: data.inquiryType,
          message: data.message || null,
        });

      if (dbError) throw dbError;

      // Send email notifications
      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-notification",
        {
          body: data,
        }
      );

      if (emailError) {
        console.error("Email notification failed:", emailError);
        // Don't throw - form was still saved successfully
      }

      toast({
        title: "Message sent successfully!",
        description: "Our team will get back to you within 24 hours.",
      });

      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at info@roomonitor.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Mobile first */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Get in touch</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Let's talk about your
                <span className="gradient-text block">operational needs</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Whether you're managing 10 properties or 10,000, our team is ready to show you how Roomonitor can transform your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - Mobile first grid */}
        <section className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3 order-1">
                <div className="bg-card border rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">Send us a message</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      {/* Names - Stack on mobile, side by side on larger */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">First name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Last name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email and Company - Stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Work email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@company.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Company name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Country and Phone - Stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Country *</FormLabel>
                              <FormControl>
                                <CountrySelect
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  placeholder="Select country"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Phone number</FormLabel>
                              <FormControl>
                                <PhoneInput
                                  value={field.value}
                                  onChange={field.onChange}
                                  countryCode={selectedCountry}
                                  placeholder="Phone number"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Inquiry type and Property size - Stack on mobile */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Inquiry type *</FormLabel>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {inquiryTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value}>
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="propertySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm">Portfolio size *</FormLabel>
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {propertySizes.map((size) => (
                                    <SelectItem key={size.value} value={size.value}>
                                      {size.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your properties and what you're looking for..."
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our{" "}
                        <Link to="/legal#privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Sidebar - Shows after form on mobile */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8 order-2">
                {/* Benefits Card */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">What to expect</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-card border rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Contact information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Email</p>
                        <a 
                          href="mailto:info@roomonitor.com" 
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@roomonitor.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Phone</p>
                        <a 
                          href="tel:+34900123456" 
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                        >
                          +34 900 123 456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Headquarters</p>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Barcelona, Spain
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Response time</p>
                        <p className="text-sm md:text-base text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Help */}
                <div className="bg-foreground text-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6" />
                    <h3 className="text-base md:text-lg font-semibold">Need immediate help?</h3>
                  </div>
                  <p className="text-background/70 mb-4 text-xs md:text-sm">
                    Existing customers can reach our 24/7 support team directly through the customer portal.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-background text-foreground hover:bg-background/90"
                    asChild
                  >
                    <Link to="/portal/dashboard">
                      Go to Customer Portal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section - Responsive */}
        <section className="py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">5,000+ Properties</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Protected worldwide</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">500+ Operators</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Trust Roomonitor</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">24/7 Coverage</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Around the clock</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}