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

const inquiryTypes = [
{ value: "devices", label: "Dispositivo / Sensores" },
{ value: "cover", label: "Cover™ (Operativa delegada)" },
{ value: "pms", label: "Integraciones PMS" },
{ value: "support", label: "Soporte técnico" },
{ value: "careers", label: "Buscamos talento" },
{ value: "general", label: "Consulta general" }];



const benefits = [
"Demo personalizada de nuestra plataforma",
"Precios adaptados a tu portfolio",
"Consulta sin compromiso",
"Asesoramiento experto de nuestro equipo"];


const contactFormSchema = z.object({
  firstName: z.
  string().
  min(1, "El nombre es obligatorio").
  max(50, "El nombre debe tener menos de 50 caracteres").
  regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "El nombre contiene caracteres no válidos"),
  lastName: z.
  string().
  min(1, "Los apellidos son obligatorios").
  max(50, "Los apellidos deben tener menos de 50 caracteres").
  regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Los apellidos contienen caracteres no válidos"),
  email: z.
  string().
  min(1, "El email es obligatorio").
  email("Introduce un email válido").
  max(255, "El email debe tener menos de 255 caracteres"),
  phone: z.
  string().
  min(1, "El teléfono es obligatorio").
  max(30, "El teléfono debe tener menos de 30 caracteres"),
  company: z.
  string().
  min(1, "El nombre de la empresa es obligatorio").
  max(100, "El nombre de la empresa debe tener menos de 100 caracteres"),
  country: z.
  string().
  min(1, "El país es obligatorio"),
  city: z.
  string().
  min(1, "La ciudad es obligatoria").
  max(100, "La ciudad debe tener menos de 100 caracteres"),
  province: z.
  string().
  max(100, "La provincia debe tener menos de 100 caracteres").
  optional().
  or(z.literal("")),
  propertySize: z.
  string().
  min(1, "Indica el número de propiedades").
  regex(/^\d+$/, "Solo se permiten números"),
  inquiryType: z.
  string().
  min(1, "Selecciona un tipo de consulta"),
  message: z.
  string().
  min(1, "El mensaje es obligatorio").
  max(2000, "El mensaje debe tener menos de 2000 caracteres")
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
      const { error: dbError } = await supabase.
      from("contact_inquiries").
      insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone || null,
        company: data.company,
        country: data.country,
        city: data.city || null,
        province: data.province || null,
        property_size: data.propertySize || null,
        inquiry_type: data.inquiryType,
        message: data.message || null
      });

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke(
        "send-contact-notification",
        { body: data }
      );

      if (emailError) {
        console.error("Email notification failed:", emailError);
      }

      toast({
        title: "¡Mensaje enviado correctamente!",
        description: "Nuestro equipo te responderá en menos de 24 horas."
      });

      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Algo ha ido mal",
        description: "Inténtalo de nuevo o escríbenos directamente a info@roomonitor.com",
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
                <span>Contacta con nosotros</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">Hablemos de tu
necesidades operativas
                <span className="gradient-text block">necesidades operativas</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">Tanto si gestionas 10 propiedades como 10.000, nuestro equipo está listo para mostrarte cómo podemos transformar tus operaciones

              </p>
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
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1 md:mb-2">Envíanos un mensaje</h2>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                    Rellena el formulario y te responderemos en menos de 24 horas.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">Nombre *</FormLabel>
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
                              <FormLabel className="text-sm">Apellidos *</FormLabel>
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
                              <FormLabel className="text-sm">Email profesional *</FormLabel>
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
                              <FormLabel className="text-sm">Empresa *</FormLabel>
                              <FormControl>
                                <Input placeholder="Tu empresa" {...field} />
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
                              <FormLabel className="text-sm">País *</FormLabel>
                              <FormControl>
                                <CountrySelect
                                value={field.value}
                                onValueChange={field.onChange}
                                placeholder="Selecciona país" />
                              
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          } />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) =>
                          <FormItem>
                              <FormLabel className="text-sm">Teléfono</FormLabel>
                              <FormControl>
                                <PhoneInput
                                value={field.value}
                                onChange={field.onChange}
                                countryCode={selectedCountry}
                                placeholder="Número de teléfono" />
                              
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
                              <FormLabel className="text-sm">Ciudad *</FormLabel>
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
                              <FormLabel className="text-sm">Provincia / Estado</FormLabel>
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
                              <FormLabel className="text-sm">Tipo de consulta *</FormLabel>
                              <Select
                              value={field.value}
                              onValueChange={field.onChange}>
                              
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona tipo" />
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
                              <FormLabel className="text-sm">Tamaño del portfolio *</FormLabel>
                              <FormControl>
                                <Input
                                type="text"
                                inputMode="numeric"
                                placeholder="Escribe un número"
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
                            <FormLabel className="text-sm">Mensaje *</FormLabel>
                            <FormControl>
                              <Textarea
                              placeholder="Cuéntanos sobre tus propiedades y qué necesitas..."
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
                        
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Al enviar este formulario, aceptas nuestra{" "}
                        <Link to="/legal#privacy-policy" className="text-primary hover:underline">Política de Privacidad</Link>.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8 order-2">
                {/* Benefits Card */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Qué puedes esperar</h3>
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
                  <h3 className="text-base md:text-lg font-semibold text-foreground">Información de contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Email</p>
                        <a
                          href="mailto:info@roomonitor.com"
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                          
                          info@roomonitor.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Teléfono</p>
                        <a
                          href="tel:+34930180130"
                          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
                          
                          +34 930 180 130
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Oficina

                        </p>
                        <p className="text-sm md:text-base text-muted-foreground">
                          Barcelona, España
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm md:text-base text-foreground">Tiempo de respuesta</p>
                        <p className="text-sm md:text-base text-muted-foreground">Menos de 24 horas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Help */}
                <div className="bg-foreground text-background rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8">
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6" />
                    <h3 className="text-base md:text-lg font-semibold">¿Necesitas ayuda inmediata?</h3>
                  </div>
                  <p className="text-background/70 mb-4 text-xs md:text-sm">Los clientes pueden contactar con su agente de Client Success directamente.

                  </p>
                  <Button variant="secondary" className="w-full bg-background text-foreground hover:bg-background/90"
                  asChild>
                    
                    <a href="tel:+34930180130">
                      <Phone className="w-4 h-4 mr-2" />
                      Llámanos
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
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">+5.000 propiedades</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Protegidas en todo el mundo</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">+500 gestores</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Confían en Roomonitor</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground">Cobertura 24/7</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Las 24 horas del día</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}