import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  SelectValue } from
"@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage } from
"@/components/ui/form";
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
  Headphones } from
"lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

export default function Contact() {
  const { t, tObject } = useTranslation();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const inquiryTypes = tObject<{ value: string; label: string }[]>('contact.inquiryTypes');
  const benefits = tObject<string[]>('contact.benefits');
  const trustItems = tObject<{ title: string; desc: string }[]>('contact.trust');

  const contactFormSchema = z.object({
    firstName: z.string()
      .min(1, t('contact.validation.firstNameRequired'))
      .max(50, t('contact.validation.firstNameMax'))
      .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, t('contact.validation.firstNameInvalid')),
    lastName: z.string()
      .min(1, t('contact.validation.lastNameRequired'))
      .max(50, t('contact.validation.lastNameMax'))
      .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, t('contact.validation.lastNameInvalid')),
    email: z.string()
      .min(1, t('contact.validation.emailRequired'))
      .email(t('contact.validation.emailInvalid'))
      .max(255, t('contact.validation.emailMax')),
    phone: z.string()
      .min(1, t('contact.validation.phoneRequired'))
      .max(30, t('contact.validation.phoneMax')),
    company: z.string()
      .min(1, t('contact.validation.companyRequired'))
      .max(100, t('contact.validation.companyMax')),
    country: z.string()
      .min(1, t('contact.validation.countryRequired')),
    city: z.string()
      .min(1, t('contact.validation.cityRequired'))
      .max(100, t('contact.validation.cityMax')),
    province: z.string()
      .min(1, t('contact.validation.provinceRequired'))
      .max(100, t('contact.validation.provinceMax')),
    propertySize: z.string()
      .min(1, t('contact.validation.propertySizeRequired'))
      .regex(/^\d+$/, t('contact.validation.propertySizeInvalid')),
    inquiryType: z.string()
      .min(1, t('contact.validation.inquiryTypeRequired')),
    message: z.string()
      .min(1, t('contact.validation.messageRequired'))
      .max(2000, t('contact.validation.messageMax')),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      city: "",
      province: "",
      propertySize: "",
      inquiryType: "",
      message: ""
    }
  });

  const selectedCountry = form.watch("country");

  useEffect(() => {
    const initialInquiry = searchParams.get("inquiry") || "";
    if (initialInquiry && inquiryTypes.some((t) => t.value === initialInquiry)) {
      form.setValue("inquiryType", initialInquiry);
    }
  }, [searchParams, form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const { data: result, error: fnError } = await supabase.functions.invoke(
        "send-contact-notification",
        { body: { ...data, website: honeypot } }
      );

      if (fnError) throw fnError;

      toast({
        title: t('contact.successTitle'),
        description: t('contact.successDesc'),
      });

      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: t('contact.errorTitle'),
        description: t('contact.errorDesc'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                <MessageSquare className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>{t('contact.badge')}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">{t('contact.title')} <span className="gradient-text">{t('contact.titleHighlight')}</span></h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">{t('contact.description')}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-3 order-1">
                <div className="bg-card border rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-soft">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">{t('contact.sendMessage')}</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                    {t('contact.formSubtitle')}
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      {/* Honeypot */}
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.firstName')} *</FormLabel>
                              <FormControl>
                                <Input placeholder="Juan" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.lastName')} *</FormLabel>
                              <FormControl>
                                <Input placeholder="García" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.email')} *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="juan@empresa.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.company')} *</FormLabel>
                              <FormControl>
                                <Input placeholder={t('contact.company')} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.country')} *</FormLabel>
                              <FormControl>
                                <CountrySelect
                                value={field.value}
                                onValueChange={field.onChange}
                                placeholder={t('contact.selectCountry')} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.phone')} *</FormLabel>
                              <FormControl>
                                <PhoneInput
                                value={field.value}
                                onChange={field.onChange}
                                countryCode={selectedCountry}
                                placeholder={t('contact.phoneNumber')} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.city')} *</FormLabel>
                              <FormControl>
                                <Input placeholder="Barcelona" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="province"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.province')} *</FormLabel>
                              <FormControl>
                                <Input placeholder="Barcelona" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="inquiryType"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.inquiryType')} *</FormLabel>
                              <Select
                              value={field.value}
                              onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder={t('contact.selectType')} />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {inquiryTypes.map((type) =>
                                <SelectItem key={type.value} value={type.value}>
                                      {type.label}
                                    </SelectItem>
                                )}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="propertySize"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">{t('contact.portfolioSize')} *</FormLabel>
                              <FormControl>
                                <Input
                                type="text"
                                inputMode="numeric"
                                placeholder={t('contact.writeNumber')}
                                value={field.value}
                                onChange={(e) => {
                                  const val = e.target.value.replace(/\D/g, "");
                                  field.onChange(val);
                                }} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) =>
                        <FormItem>
                            <FormLabel className="text-sm">{t('contact.message')} *</FormLabel>
                            <FormControl>
                              <Textarea
                              placeholder={t('contact.messagePlaceholder')}
                              rows={4}
                              {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        } />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}>
                        {isSubmitting ? t('contact.sending') : t('contact.sendBtn')}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        {t('contact.privacyNote')}{" "}
                        <LocalizedLink to="/legal#privacy-policy" className="text-primary hover:underline">{t('contact.privacyPolicy')}</LocalizedLink>.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8 order-2">
                {/* Benefits Card */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">{t('contact.sidebar.benefitsTitle')}</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {benefits.map((benefit) =>
                    <li key={benefit} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-card border rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">{t('contact.sidebar.directContact')}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">{t('contact.sidebar.emailLabel')}</p>
                        <a href="mailto:info@roomonitor.com" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                          info@roomonitor.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">{t('contact.sidebar.phoneLabel')}</p>
                        <a href="tel:+34930180130" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                          +34 930 180 130
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">{t('contact.sidebar.officeLabel')}</p>
                        <p className="text-sm md:text-base text-muted-foreground">{t('contact.sidebar.officeAddress')}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">{t('contact.sidebar.responseTime')}</p>
                        <p className="text-sm md:text-base text-muted-foreground">{t('contact.sidebar.responseValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Help */}
                <div className="bg-foreground text-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6" />
                    <h3 className="text-base md:text-lg font-semibold">{t('contact.sidebar.quickHelpTitle')}</h3>
                  </div>
                  <p className="text-background/70 mb-4 text-xs md:text-sm">{t('contact.sidebar.quickHelpDesc')}</p>
                  <Button variant="secondary" className="w-full bg-background text-foreground hover:bg-background/90" asChild>
                    <a href="tel:+34930180130">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('contact.sidebar.callUs')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
              {trustItems.map((item, idx) => {
                const icons = [Building2, Users, Shield];
                const Icon = icons[idx];
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm md:text-base text-foreground">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);
}
