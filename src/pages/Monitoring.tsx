import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import {
  Volume2, Users, Flame, Thermometer, Wifi, Battery,
  Shield, ArrowRight, Check, X, Zap, Settings, Download, Clock, Headphones } from
"lucide-react";
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
  image: monitoringNoise
},
{
  icon: Users,
  title: "Detección de Ocupación",
  description: "Seguimiento de presencia de huéspedes e identificación de situaciones de sobreocupación.",
  href: "/monitoring/occupancy",
  image: monitoringOccupancy
},
{
  icon: Flame,
  title: "Detección de Humo",
  description: "Alertas inmediatas de humo para proteger tus activos y aplicar políticas de no fumadores.",
  href: "/monitoring/smoke",
  image: monitoringAir
},
{
  icon: Thermometer,
  title: "Monitorización Ambiental",
  description: "Control de temperatura, humedad y calidad del aire para el confort del huésped y la protección de la propiedad.",
  href: "/monitoring/environment",
  image: monitoringEnvironment
}];


const deviceSpecs = [
{ label: "Dimensiones", value: "85 × 85 × 28 mm" },
{ label: "Peso", value: "120g" },
{ label: "Alimentación", value: "USB-C (5V/1A)" },
{ label: "Conectividad", value: "Wi-Fi 2.4GHz" },
{ label: "Batería de respaldo", value: "Hasta 4 horas" },
{ label: "Rango operativo", value: "-10°C a 45°C" }];


const comparisonFeatures = [
{ feature: "Dispositivo todo-en-uno (ruido, ocupación, humo, ambiente)", roomonitor: true, competitor: false },
{ feature: "Monitorización en la nube en tiempo real", roomonitor: true, competitor: true },
{ feature: "Verificación humana 24/7 disponible", roomonitor: true, competitor: false },
{ feature: "Respetuoso con la privacidad (sin grabación de audio)", roomonitor: true, competitor: true },
{ feature: "Respuesta a incidencias integrada", roomonitor: true, competitor: false },
{ feature: "Integraciones PMS incluidas", roomonitor: true, competitor: false },
{ feature: "Red de servicio de campo presencial", roomonitor: true, competitor: false },
{ feature: "Batería de respaldo incluida", roomonitor: true, competitor: false },
{ feature: "Calibración multi-sensor", roomonitor: true, competitor: false }];


const installationSteps = [
{
  step: 1,
  title: "Desembala y enciende",
  description: "Conecta el dispositivo a la corriente con el cable USB-C incluido. El LED parpadeará en azul indicando que está listo para configurar."
},
{
  step: 2,
  title: "Descarga la app",
  description: "Descarga la app de Roomonitor desde App Store o Google Play y crea tu cuenta o inicia sesión."
},
{
  step: 3,
  title: "Conecta al Wi-Fi",
  description: "Sigue las instrucciones de la app para conectar tu dispositivo a la red Wi-Fi de la propiedad."
},
{
  step: 4,
  title: "Instala y configura",
  description: "Usa el kit de montaje incluido para instalar el dispositivo y configura tus umbrales de alerta y preferencias de notificación."
}];


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
                Sensor de Ruido Roomonitor V5
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Detección de ruido en tiempo real <span className="gradient-text">para alquiler vacacional.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Protege tus propiedades sin invadir la privacidad de los huéspedes. El sensor V5 no graba conversaciones: analiza patrones de sonido, humo y ambiente para adelantarse a los problemas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/pricing">
                    Ver planes y precios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/how-it-works">Cómo funciona</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <img
                  src={roomonitorDevice}
                  alt="Dispositivo Roomonitor"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl" />
                
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Controla ruido, ocupación, probabilidad de humo, temperatura y humedad — todo sin comprometer la privacidad del huésped.

            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {monitoringCapabilities.map((capability, index) =>
            <AnimatedSection key={capability.title} delay={index * 100}>
                <Link
                to={capability.href}
                className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                
                  <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${capability.image})` }} />
                
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
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Planes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Elige cómo quieres <span className="gradient-text italic">gestionar tus alertas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ambos planes incluyen el dispositivo V5. La diferencia es quién gestiona las incidencias.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Noise Alarm Plan */}
              <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Volume2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Noise Alarm</h3>
                      <p className="text-sm text-muted-foreground">Tú gestionas las alertas</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                    "Dispositivo V5 incluido",
                    "Dashboard Manager completo",
                    "Alertas en tiempo real",
                    "Umbrales configurables por propiedad",
                    "Histórico de datos y tendencias",
                    "Notificaciones push, email, SMS",
                    "Monitorización de ruido, humo, clima",
                    "Tú gestionas las alertas"].
                    map((text) =>
                    <li key={text} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{text}</span>
                      </li>
                    )}
                  </ul>
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/pricing">
                      Ver precios
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Alarm Assistant Plan */}
              <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                    Recomendado
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Alarm Assistant</h3>
                      <p className="text-sm text-muted-foreground">Nosotros gestionamos por ti</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                    "Todo lo de Noise Alarm, más:",
                    "Roomonitor monitoriza por ti 24/7",
                    "Centro de Control recibe tus alertas",
                    "Agente contacta al huésped en tu nombre",
                    "Mediación y resolución remota",
                    "Informe de incidencia en tu dashboard",
                    "96% de incidencias resueltas sin tu intervención",
                    "Protocolo personalizado por propiedad"].
                    map((text) =>
                    <li key={text} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{text}</span>
                      </li>
                    )}
                  </ul>
                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <Link to="/pricing">
                      Ver precios
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
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
              
              {comparisonFeatures.map((item, index) =>
              <div
                key={item.feature}
                className={`grid grid-cols-3 p-4 items-center ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}>
                
                  <div className="text-sm">{item.feature}</div>
                  <div className="flex justify-center">
                    {item.roomonitor ?
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div> :

                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                  }
                  </div>
                  <div className="flex justify-center">
                    {item.competitor ?
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div> :

                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                  }
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 lg:py-28 bg-secondary/30">
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
            {installationSteps.map((step, index) =>
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
            )}
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Descargar manual de instalación
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="py-20 lg:py-28">
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
                {deviceSpecs.map((spec) =>
                <div key={spec.label} className="p-4 rounded-xl bg-card border">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold">{spec.value}</div>
                  </div>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-foreground/5 to-muted/40 rounded-3xl blur-2xl" />
                <video
                  src="/videos/roomonitor-floating.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative w-full max-w-sm mx-auto rounded-2xl" />
                
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}