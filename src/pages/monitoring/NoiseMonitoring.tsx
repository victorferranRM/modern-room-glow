import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { Button } from "@/components/ui/button";
import { 
  Volume2, Bell, Shield, Clock, ArrowRight, Check, BarChart3
} from "lucide-react";

import monitoringNoise from "@/assets/monitoring-noise.jpg";
import managerDevices from "@/assets/manager-devices.png";

const noiseFeatures = [
  {
    icon: Bell,
    title: "Alertas instantáneas",
    description: "Recibe notificaciones en tiempo real cuando los niveles de ruido superan tus umbrales personalizados."
  },
  {
    icon: Clock,
    title: "Monitorización 24/7",
    description: "Monitorización acústica continua sin grabar conversaciones ni voces."
  },
  {
    icon: Shield,
    title: "Respetuoso con la privacidad",
    description: "Solo mide niveles de decibelios — sin grabación de audio, totalmente compatible con GDPR."
  },
  {
    icon: BarChart3,
    title: "Analítica histórica",
    description: "Sigue patrones y tendencias para optimizar la configuración de tus umbrales."
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Configura umbrales personalizados",
    description: "Define niveles de ruido aceptables para diferentes momentos del día y tipos de propiedad."
  },
  {
    step: "02",
    title: "Detección en tiempo real",
    description: "El dispositivo monitoriza continuamente los niveles de sonido sin grabar audio."
  },
  {
    step: "03",
    title: "Notificación instantánea",
    description: "Cuando se superan los umbrales, recibes alertas inmediatas a través de la app o SMS."
  },
  {
    step: "04",
    title: "Respuesta automatizada",
    description: "Configura mensajería automática al huésped o escala a tu equipo."
  },
];



function ManagerCheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="w-5 h-5 mt-0.5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
        <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={3} />
      </div>
      <span className="text-sm sm:text-base text-foreground/80 transition-colors group-hover:text-foreground">{text}</span>
    </li>
  );
}

export default function NoiseMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <MonitoringHero
        icon={Volume2}
        badge="Monitorización de Ruido"
        title="Prevén quejas por ruido"
        titleHighlight="antes de que ocurran"
        description="Detección de ruido en tiempo real que protege tu reputación con los vecinos y asegura que los huéspedes respeten las normas — sin grabar audio."
        image={monitoringNoise}
        imageAlt="Monitorización de niveles de ruido"
        breadcrumbLabel="Monitorización de Ruido"
      />

      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Reducción de quejas" },
              { value: "<2min", label: "Tiempo medio de respuesta" },
              { value: "24/7", label: "Monitorización continua" },
              { value: "100%", label: "Compatible con privacidad" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Características principales
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Detección inteligente de ruido, sin comprometer la privacidad
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestra tecnología de monitorización de ruido mide los niveles de sonido sin grabar audio, 
              manteniendo satisfechos tanto a los gestores como a los huéspedes.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {noiseFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Cómo funciona
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              De la detección a la resolución
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-card border">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Roomonitor Manager
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Monitoriza los niveles de ruido desde tu panel
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visualiza niveles de ruido en tiempo real, configura umbrales personalizados y gestiona alertas — todo desde 
                un único centro de control intuitivo.
              </p>
              <ul className="space-y-3 mb-8">
                <ManagerCheckItem text="Visualización de niveles de dB en tiempo real" />
                <ManagerCheckItem text="Configuración de umbrales personalizada por propiedad" />
                <ManagerCheckItem text="Datos históricos y patrones de ruido" />
                <ManagerCheckItem text="Integración con mensajería automatizada a huéspedes" />
              </ul>
              <Button asChild>
                <Link to="/how-it-works">
                  Explorar Manager
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-muted/80" />
                <img
                  src={managerDevices}
                  alt="Panel de Roomonitor Manager"
                  className="relative w-full rounded-2xl shadow-lg border border-border/50"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              ¿Listo para eliminar las quejas por ruido?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Únete a miles de gestores de propiedades que han reducido los incidentes de ruido hasta un 85% 
              con la tecnología de monitorización inteligente de Roomonitor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
