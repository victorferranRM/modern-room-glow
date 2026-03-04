import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Volume2, Users, Flame, Thermometer, Wifi, Battery, 
  Shield, ArrowRight, Check, X, Zap, Settings, Download, Clock
} from "lucide-react";
import roomonitorDevice from "@/assets/roomonitor-device.jpg";

import monitoringNoise from "@/assets/monitoring-noise.jpg";
import monitoringOccupancy from "@/assets/monitoring-occupancy.jpg";
import monitoringAir from "@/assets/monitoring-air.jpg";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";

const monitoringCapabilities = [
  {
    icon: Volume2,
    title: "Monitorización de Ruido",
    description: "Detección acústica en tiempo real y alertas instantáneas cuando se superan tus umbrales.",
    href: "/monitoring/noise",
    image: monitoringNoise,
  },
  {
    icon: Users,
    title: "Detección de Ocupación",
    description: "Seguimiento de presencia de huéspedes e identificación de situaciones de sobreocupación.",
    href: "/monitoring/occupancy",
    image: monitoringOccupancy,
  },
  {
    icon: Flame,
    title: "Detección de Humo",
    description: "Alertas inmediatas de humo para proteger tus activos y aplicar políticas de no fumadores.",
    href: "/monitoring/smoke",
    image: monitoringAir,
  },
  {
    icon: Thermometer,
    title: "Monitorización Ambiental",
    description: "Control de temperatura, humedad y calidad del aire para el confort del huésped y la protección de la propiedad.",
    href: "/monitoring/environment",
    image: monitoringEnvironment,
  },
];

const deviceSpecs = [
  { label: "Dimensiones", value: "85 × 85 × 28 mm" },
  { label: "Peso", value: "120g" },
  { label: "Alimentación", value: "USB-C (5V/1A)" },
  { label: "Conectividad", value: "Wi-Fi 2.4GHz" },
  { label: "Batería de respaldo", value: "Hasta 4 horas" },
  { label: "Rango operativo", value: "-10°C a 45°C" },
];

const comparisonFeatures = [
  { feature: "Dispositivo todo-en-uno (ruido, ocupación, humo, ambiente)", roomonitor: true, competitor: false },
  { feature: "Monitorización en la nube en tiempo real", roomonitor: true, competitor: true },
  { feature: "Verificación humana 24/7 disponible", roomonitor: true, competitor: false },
  { feature: "Respetuoso con la privacidad (sin grabación de audio)", roomonitor: true, competitor: true },
  { feature: "Respuesta a incidencias integrada", roomonitor: true, competitor: false },
  { feature: "Integraciones PMS incluidas", roomonitor: true, competitor: false },
  { feature: "Red de servicio de campo presencial", roomonitor: true, competitor: false },
  { feature: "Batería de respaldo incluida", roomonitor: true, competitor: false },
  { feature: "Calibración multi-sensor", roomonitor: true, competitor: false },
];

const installationSteps = [
  {
    step: 1,
    title: "Desembala y enciende",
    description: "Conecta el dispositivo a la corriente con el cable USB-C incluido. El LED parpadeará en azul indicando que está listo para configurar.",
  },
  {
    step: 2,
    title: "Descarga la app",
    description: "Descarga la app de Roomonitor desde App Store o Google Play y crea tu cuenta o inicia sesión.",
  },
  {
    step: 3,
    title: "Conecta al Wi-Fi",
    description: "Sigue las instrucciones de la app para conectar tu dispositivo a la red Wi-Fi de la propiedad.",
  },
  {
    step: 4,
    title: "Instala y configura",
    description: "Usa el kit de montaje incluido para instalar el dispositivo y configura tus umbrales de alerta y preferencias de notificación.",
  },
];

export default function Monitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                El Dispositivo Roomonitor
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Un dispositivo.
                <br />
                <span className="text-primary">Protección completa.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                El sensor Roomonitor combina monitorización de ruido, detección de ocupación, detección de humo y seguimiento ambiental en un único dispositivo respetuoso con la privacidad.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/pricing">
                    Ver precios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Solicitar una demo</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <img
                  src={roomonitorDevice}
                  alt="Dispositivo Roomonitor"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features Strip */}
      <section className="py-8 bg-foreground/5 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Conectado por Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Batería de respaldo</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Respetuoso con la privacidad</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Alertas en tiempo real</span>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Capacidades de monitorización
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Todo lo que necesitas en un dispositivo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Controla ruido, ocupación, humo y condiciones ambientales — todo sin comprometer la privacidad del huésped.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {monitoringCapabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 100}>
                <Link
                  to={capability.href}
                  className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${capability.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-colors duration-300" />
                  
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-white/80 mb-4 text-sm">
                      {capability.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Saber más
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Especificaciones técnicas
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Diseñado para la fiabilidad
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                El dispositivo Roomonitor está diseñado para operar 24/7 en entornos de hospitalidad, con conectividad robusta y alimentación de respaldo.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {deviceSpecs.map((spec) => (
                  <div key={spec.label} className="p-4 rounded-xl bg-card border">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={roomonitorDevice}
                  alt="Especificaciones del Dispositivo Roomonitor"
                  className="relative w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Por qué elegir Roomonitor
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              La solución completa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo Roomonitor se compara con los dispositivos de monitorización estándar del mercado.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border bg-card">
              <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b">
                <div className="font-semibold">Característica</div>
                <div className="text-center font-semibold text-primary">Roomonitor</div>
                <div className="text-center font-semibold text-muted-foreground">Otros</div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div 
                  key={item.feature} 
                  className={`grid grid-cols-3 p-4 items-center ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="text-sm">{item.feature}</div>
                  <div className="flex justify-center">
                    {item.roomonitor ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.competitor ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Precios sencillos
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Empieza hoy
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-md mx-auto">
              <div className="relative p-8 rounded-3xl border-2 border-primary bg-card shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Más popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Dispositivo Roomonitor</h3>
                  <p className="text-muted-foreground">Solución de monitorización todo-en-uno</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">€149</span>
                    <span className="text-muted-foreground">/dispositivo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    + €5,99/mes de suscripción
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Todas las capacidades de monitorización incluidas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Alertas en tiempo real y dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Envío gratis y devolución en 30 días</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Garantía de 2 años</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/checkout">Comprar ahora</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/contact">Solicitar demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Guía de instalación
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Funcionando en minutos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Configurar tu dispositivo Roomonitor es sencillo — no se necesita experiencia técnica.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {installationSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 100}>
                <div className="relative p-6 rounded-2xl border bg-card h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Descargar manual de instalación
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Base de conocimiento
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Guías y recursos útiles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprende a sacar el máximo partido a tu dispositivo Roomonitor con nuestras guías paso a paso.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Manual de instalación del dispositivo",
                description: "Guía completa para instalar dispositivos de monitorización",
                type: "Instalación",
                readTime: "12 min",
                href: "/resources/guides/guide/device-installation",
              },
              {
                title: "Ubicación óptima del sensor",
                description: "Mejores prácticas para posicionar sensores en tu propiedad",
                type: "Buenas prácticas",
                readTime: "6 min",
                href: "/resources/guides/guide/sensor-placement",
              },
              {
                title: "Configurar umbrales de alerta",
                description: "Establece niveles personalizados de alerta de ruido y ocupación",
                type: "Configuración",
                readTime: "7 min",
                href: "/resources/guides/guide/alert-thresholds",
              },
              {
                title: "Requisitos de red",
                description: "Configuración de WiFi y conectividad para dispositivos",
                type: "Instalación",
                readTime: "4 min",
                href: "/resources/guides/guide/network-requirements",
              },
              {
                title: "El dispositivo aparece offline",
                description: "Pasos para solucionar problemas de conectividad",
                type: "FAQ",
                readTime: "4 min",
                href: "/resources/guides/guide/device-offline",
              },
              {
                title: "Reducir alertas falsas",
                description: "Ajusta la sensibilidad para minimizar falsos positivos",
                type: "FAQ",
                readTime: "5 min",
                href: "/resources/guides/guide/false-alerts",
              },
            ].map((guide, index) => (
              <AnimatedSection key={guide.title} delay={index * 80}>
                <Link
                  to={guide.href}
                  className="group block bg-card border rounded-2xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/15 text-primary">
                      {guide.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Leer guía
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources/guides">
                Ver todas las guías
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              ¿Listo para proteger tus propiedades?
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Únete a miles de gestores de propiedades que confían en Roomonitor para la monitorización 24/7 y la prevención de incidencias.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/pricing">Ver precios</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10" asChild>
                <Link to="/contact">Hablar con ventas</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
