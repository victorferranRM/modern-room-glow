import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingCarousel } from "@/components/pricing/PricingCarousel";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  Shield, 
  Clock, 
  Users,
  Headphones,
  Zap,
  BadgeCheck,
  Bell,
  Smartphone,
  Mail,
  PhoneCall,
  Home,
  BarChart3,
  Moon,
  MapPin,
  FileText,
  AlertCircle,
  KeyRound
} from "lucide-react";
import serviceControlCenter from "@/assets/service-control-center.jpg";

const PRICE_IDS = {
  device: "price_1T7v3uHW6UdvG7qBZUphbeXB",
  noise_alarm: "price_1T7w4iHW6UdvG7qBAs5Fx7bf",
  alarm_assistant: "price_1T7wfMHW6UdvG7qBnSvlyY17",
  shipping_rate: "shr_1T7vldHW6UdvG7qBZCdzYXN3",
};

export default function Pricing() {
  const navigate = useNavigate();
  const [properties, setProperties] = useState(3);
  const isEnterprise = properties > 10;

  const basicDeviceTotal = 45 * properties;
  const basicMonthlyTotal = 13 * properties;
  const proMonthlyTotal = 29.90 * properties;

  const goToCheckout = (plan: "basic" | "pro") => {
    navigate(`/checkout?plan=${plan}&properties=${properties}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BadgeCheck className="w-4 h-4" />
              <span>Tecnología + Personas — Cobertura operativa completa</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
              Un dispositivo. Una suscripción.{" "}
              <span className="gradient-text block sm:inline">Tu operativa, resuelta.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que se adapte a tu portfolio. Autoservicio para hasta 10 propiedades, 
              o habla con un especialista para cobertura operativa completa.
            </p>
          </AnimatedSection>
        </section>

        {/* Property Selector */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <AnimatedSection delay={100} className="max-w-2xl mx-auto">
            <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">¿Cuántas propiedades gestionas?</h3>
                  <p className="text-sm text-muted-foreground">Ajusta para ver los precios de tu portfolio</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground">{properties}</span>
                  <span className="text-muted-foreground">{properties === 1 ? "propiedad" : "propiedades"}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Slider
                  value={[properties]}
                  onValueChange={(value) => setProperties(value[0])}
                  min={1}
                  max={15}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span className="text-primary font-medium">Autoservicio hasta 10</span>
                  <span>15+</span>
                </div>
              </div>

              {isEnterprise && (
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">¿Portfolio más grande?</span>{" "}
                    Para más de 10 propiedades, habla con un especialista para precios personalizados y soporte operativo completo.
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <PricingCarousel 
            properties={properties}
            isEnterprise={isEnterprise}
            basicDeviceTotal={basicDeviceTotal}
            basicMonthlyTotal={basicMonthlyTotal}
            proMonthlyTotal={proMonthlyTotal}
          />

          <div className="hidden lg:block max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Basic Plan */}
              <AnimatedSection delay={150} animation="fade-up">
              <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Noise Alarm</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Dispositivo + suscripción de monitorización
                    </p>
                  </div>

                  <div className="space-y-3">
                    {!isEnterprise ? (
                      <>
                        <div className="space-y-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg text-muted-foreground line-through">€90</span>
                            <span className="text-3xl font-bold text-foreground">€45</span>
                            <span className="text-sm text-muted-foreground">pago único</span>
                          </div>
                          <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">
                            Precio exclusivo web
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t border-border">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-foreground">€13</span>
                            <span className="text-muted-foreground">/ mes por propiedad</span>
                          </div>
                        </div>

                        {properties > 1 && (
                          <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                            {properties} propiedades: €{basicDeviceTotal} pago único + €{basicMonthlyTotal}/mes
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-foreground">Contactar ventas</div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {[
                      { icon: Bell, text: "Dispositivo de monitorización Roomonitor" },
                      { icon: Zap, text: "Alertas en tiempo real" },
                      { icon: Smartphone, text: "Dashboard y app móvil" },
                      { icon: Mail, text: "Notificaciones email y push" },
                    ].map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {!isEnterprise ? (
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={() => goToCheckout("basic")}
                    >
                      Comprar ahora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to="/contact?inquiry=enterprise">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Hablar con un especialista
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              </AnimatedSection>

              {/* Pro Plan */}
              <AnimatedSection delay={250} animation="fade-up">
              <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-soft-lg hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                    Más popular
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Alarm Assistant</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Todo lo de Noise Alarm + monitorización 24/7
                    </p>
                  </div>

                  <div className="space-y-3">
                    {!isEnterprise ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-foreground">€29,90</span>
                          <span className="text-muted-foreground">/ mes por propiedad</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          + €45 pago único por dispositivo (exclusivo web)
                        </p>

                        {properties > 1 && (
                          <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                            {properties} propiedades: €{basicDeviceTotal} pago único + €{(proMonthlyTotal).toFixed(2).replace('.00', '')}/mes
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-foreground">Contactar ventas</div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {[
                      { icon: Check, text: "Todo lo de Noise Alarm" },
                      { icon: PhoneCall, text: "Alarm Assistant" },
                      { icon: Headphones, text: "Agentes humanos monitorizando alarmas" },
                      { icon: Clock, text: "Gestión de alarmas 24/7" },
                    ].map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {!isEnterprise ? (
                    <Button 
                      className="w-full shadow-soft" 
                      size="lg" 
                      onClick={() => goToCheckout("pro")}
                    >
                      Comprar ahora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to="/contact?inquiry=enterprise">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Hablar con un especialista
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              </AnimatedSection>

              {/* Enterprise Plan */}
              <AnimatedSection delay={350} animation="fade-up">
              <div className="bg-gradient-to-br from-secondary to-muted border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Guest & Property Services</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Gestión operativa completa
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <span className="text-3xl font-bold text-foreground">€79,90</span>
                      <span className="text-muted-foreground">/ propiedad</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Precio variable según tamaño del portfolio
                    </p>
                  </div>

                   <ul className="space-y-3">
                     {[
                       { icon: Check, text: "Todo lo de Alarm Assistant" },
                       { icon: BarChart3, text: "Centro de Control 24/7 con agentes dedicados" },
                       { icon: PhoneCall, text: "Atención telefónica a huéspedes en tu nombre" },
                       { icon: Moon, text: "Night Watch: prevención activa de fiestas" },
                       { icon: MapPin, text: "Field Service: intervención presencial en 8 ciudades" },
                       { icon: FileText, text: "Protocolos operativos personalizados por propiedad" },
                       { icon: AlertCircle, text: "Gestión de incidencias de extremo a extremo" },
                       { icon: KeyRound, text: "Apoyo en accesos y check-ins" },
                       { icon: Users, text: "Servicio de conserjería" },
                     ].map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <Link to="/contact?inquiry=enterprise">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Hablar con un especialista
                    </Link>
                  </Button>
                </div>
              </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <AnimatedSection delay={200}>
        <ComparisonTable properties={properties} />
        </AnimatedSection>

        {/* Services Explainer */}
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                  ¿Qué incluye Cover™?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Cover™ es la capa operativa que se activa sobre tu monitorización. Nuestro equipo actúa en tu nombre, con tus protocolos, dentro de tu ecosistema. Precio personalizado según tamaño y necesidades de tu portfolio.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    icon: Headphones,
                    title: "Centro de Control",
                    description: "Agentes formados en hospitality monitorizando, evaluando y resolviendo incidencias en tiempo real.",
                  },
                  {
                    icon: PhoneCall,
                    title: "Atención telefónica",
                    description: "Atendemos llamadas de huéspedes en tu nombre, fuera de horario. Mediación, gestión de quejas y coordinación.",
                  },
                  {
                    icon: Users,
                    title: "Field Service",
                    description: "Intervención presencial en 8 ciudades cuando la resolución remota no es suficiente.",
                  },
                  {
                    icon: FileText,
                    title: "Protocolos a medida",
                    description: "Definimos juntos cómo actuar en cada escenario. Tus reglas, nuestra ejecución.",
                  },
                ].map((service, i) => (
                  <AnimatedSection key={service.title} delay={i * 100}>
                    <div className="bg-card border rounded-xl p-5 text-center hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={200}>
                <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative">
                      <img 
                        src={serviceControlCenter} 
                        alt="Centro de Control Roomonitor" 
                        className="w-full h-56 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/30 to-transparent" />
                    </div>
                    <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-medium uppercase tracking-wider text-primary">Nuestro enfoque</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                        Roomonitor = <span className="gradient-text">Tecnología + Personas</span>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Combinamos dispositivos de monitorización inteligentes con operadores humanos reales que actúan en tu nombre. 
                        No son solo alertas — es resolución.
                      </p>
                      <div>
                        <Button size="lg" asChild>
                          <Link to="/contact?inquiry=services">
                            Hablar con un especialista
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
