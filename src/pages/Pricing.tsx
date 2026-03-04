import { useState } from "react";
import { Link } from "react-router-dom";
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
  Home
} from "lucide-react";
import serviceControlCenter from "@/assets/service-control-center.jpg";

export default function Pricing() {
  const [properties, setProperties] = useState(3);
  const isEnterprise = properties > 10;

  const basicDeviceTotal = 45 * properties;
  const basicMonthlyTotal = 13 * properties;
  const proMonthlyTotal = 29.90 * properties;

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
                    <h3 className="text-xl font-bold text-foreground">Basic</h3>
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
                    <Button className="w-full" size="lg" asChild>
                      <Link to={`/checkout?plan=basic&properties=${properties}`}>
                        Comprar ahora
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
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
                    <h3 className="text-xl font-bold text-foreground">Pro</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Todo lo de Basic + Alarm Assistant
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
                      { icon: Check, text: "Todo lo de Basic" },
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
                    <Button className="w-full shadow-soft" size="lg" asChild>
                      <Link to={`/checkout?plan=pro&properties=${properties}`}>
                        Comprar ahora
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
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
                    <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
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
                      { icon: Check, text: "Todo lo de Pro" },
                      { icon: Home, text: "Servicios de huésped y propiedad" },
                      { icon: Users, text: "Gestión operativa completa" },
                      { icon: Shield, text: "Acuerdos SLA personalizados" },
                      { icon: Zap, text: "Account manager dedicado" },
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
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                  ¿Qué incluyen los Servicios?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Esta es la cobertura operativa que puedes activar cuando trabajas con un especialista de Roomonitor. 
                  Los servicios no se incluyen automáticamente — se activan después de la compra, con precios 
                  basados en tu número de propiedades y necesidades operativas.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Headphones,
                    title: "Centro de Control 24/7",
                    description: "Operadores humanos monitorizando tus propiedades las 24 horas",
                  },
                  {
                    icon: Shield,
                    title: "Guest Assist™",
                    description: "Comunicación profesional con huéspedes y gestión de incidencias en tu nombre",
                  },
                  {
                    icon: Users,
                    title: "Field Service",
                    description: "Intervención presencial cuando la resolución remota no es suficiente",
                  },
                  {
                    icon: Zap,
                    title: "Respuesta inmediata",
                    description: "Acción real en minutos, no en horas",
                  },
                ].map((service, i) => (
                  <AnimatedSection key={service.title} delay={i * 100}>
                    <div 
                      className="bg-card border rounded-xl p-5 text-center hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={200}>
                <div className="mt-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="flex-shrink-0 w-full lg:w-[280px]">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={serviceControlCenter} 
                            alt="Centro de Control Roomonitor — Tecnología y Personas" 
                            className="w-full h-48 lg:h-56 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      </div>

                      <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-wider text-primary">Nuestro enfoque</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          Roomonitor = <span className="gradient-text">Tecnología + Personas</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Combinamos dispositivos de monitorización inteligentes con operadores humanos reales que actúan en tu nombre. 
                          No son solo alertas — es resolución.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 w-full lg:w-auto">
                        <div className="bg-card border rounded-xl p-6 text-center shadow-soft">
                          <p className="text-sm text-muted-foreground mb-4">
                            Precio de servicios según tamaño del portfolio
                          </p>
                          <Button size="lg" className="w-full lg:w-auto" asChild>
                            <Link to="/contact?inquiry=services">
                              Hablar con un especialista
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10 sm:mb-12 text-balance">
                Preguntas frecuentes
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  question: "¿Qué incluye el dispositivo?",
                  answer: "Cada dispositivo Roomonitor monitoriza niveles de ruido, ocupación, humo, temperatura, humedad y calidad del aire en tiempo real. El precio único incluye el hardware y el envío.",
                },
                {
                  question: "¿Puedo empezar con Basic y actualizar después?",
                  answer: "Por supuesto. Puedes actualizar de Basic a Pro en cualquier momento. Tus dispositivos y datos se migrarán sin problemas al nivel de servicio mejorado con Alarm Assistant.",
                },
                {
                  question: "¿Qué es el Alarm Assistant?",
                  answer: "El Alarm Assistant es nuestro equipo de agentes humanos que monitorizan y gestionan alarmas en tu nombre 24/7. Cuando se activa una alerta, nuestro equipo actúa para que tú no tengas que hacerlo.",
                },
                {
                  question: "¿Qué pasa si tengo más de 10 propiedades?",
                  answer: "Para portfolios de más de 10 propiedades, ofrecemos precios enterprise personalizados con descuentos por volumen y servicios operativos completos incluyendo gestión de huéspedes y propiedades. Contacta con nuestro equipo de ventas.",
                },
                {
                  question: "¿Cómo se cobran los servicios?",
                  answer: "Los servicios (como Guest Assist™ y Field Service) se activan después de la compra y su precio se basa en el tamaño de tu portfolio y tus necesidades operativas específicas. Habla con un especialista para un presupuesto personalizado.",
                },
                {
                  question: "¿Hay contrato o compromiso de permanencia?",
                  answer: "Nuestras suscripciones se facturan mensualmente sin compromiso de permanencia. Los clientes Enterprise pueden optar por facturación anual con descuentos adicionales.",
                },
              ].map((faq, index) => (
                <AnimatedSection key={index} delay={index * 50}>
                  <div 
                    className="bg-card border rounded-xl p-6 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
                ¿Listo para tomar el control de tu operativa?
              </h2>
              <p className="text-primary-foreground/90 text-base sm:text-lg">
                Empieza con una demo para ver cómo Roomonitor combina tecnología y personas para gestionar tus propiedades.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-base px-8"
                  asChild
                >
                  <Link to="/demo">
                    Reservar una demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contactar ventas
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
