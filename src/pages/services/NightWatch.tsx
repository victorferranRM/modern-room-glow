import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Moon, Eye, Bell, Shield, Users, Volume2, UserCheck
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-night-watch.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "90%", label: "Fiestas prevenidas" },
  { value: "Noche+", label: "Cobertura fin de semana" },
  { value: "Proactivo", label: "Enfoque de monitorización" },
  { value: "Temprana", label: "Intervención" },
];

const features = [
  { icon: Moon, title: "Equipo Nocturno Dedicado", description: "Agentes especializados monitorizando tus propiedades durante las horas de mayor riesgo: noches y fines de semana." },
  { icon: Eye, title: "Monitorización Proactiva", description: "No esperamos a las alertas — vigilamos activamente señales tempranas de problemas." },
  { icon: Volume2, title: "Análisis de Patrones de Ruido", description: "Identificamos tendencias de ruido creciente antes de que se conviertan en quejas." },
  { icon: UserCheck, title: "Seguimiento de Ocupación", description: "Monitorizamos el número de huéspedes para detectar fiestas no autorizadas a tiempo." },
  { icon: Bell, title: "Intervención Temprana", description: "Recordatorios amables a los huéspedes antes de que las situaciones escalen." },
  { icon: Shield, title: "Listo para Escalar", description: "Protocolos completos de escalado si la intervención temprana no es suficiente." },
];

const coverageHours = [
  { day: "Lunes - Jueves", hours: "18:00 - 9:00" },
  { day: "Viernes", hours: "18:00 - 00:00 (Sáb)" },
  { day: "Sábado", hours: "Todo el día" },
  { day: "Domingo", hours: "Todo el día hasta 9:00 (Lun)" },
];

const preventionProcess = [
  { step: "01", title: "Vigilancia Continua", description: "Agentes monitorizan todas las propiedades durante horario nocturno." },
  { step: "02", title: "Detección de Patrones", description: "Análisis asistido por IA identifica tendencias preocupantes." },
  { step: "03", title: "Recordatorio Amable", description: "Contacto educado con el huésped cuando la actividad aumenta." },
  { step: "04", title: "Escalado si es Necesario", description: "Respuesta completa a incidencias si los recordatorios no funcionan." },
];

const partyPrevention = [
  "Niveles de ruido crecientes detectados a tiempo",
  "Patrones de ocupación inusuales marcados",
  "Mensajes a huéspedes antes de que los problemas escalen",
  "Prevención de quejas de vecinos",
  "Protección de propiedades durante horas de alto riesgo",
  "Cobertura de fines de semana y festivos",
];

export default function NightWatch() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Moon}
        badge="Night Watch"
        title="Prevención de fiestas"
        titleHighlight="antes de que empiecen"
        description="Agentes dedicados monitorizando tus propiedades durante las horas de mayor riesgo. Prevenimos fiestas antes de que escalen, protegiendo tu reputación y vecinos."
        image={serviceImage}
        imageAlt="Servicio Night Watch"
      />

      <ServiceStats stats={stats} />

      {/* Coverage Hours */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Cobertura</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Cuándo vigilamos</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Night Watch cubre las horas de mayor riesgo cuando es más probable que ocurran fiestas.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {coverageHours.map((item, i) => (
              <AnimatedSection key={item.day} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Moon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base transition-colors group-hover:text-primary">{item.day}</h3>
                  <p className="text-primary font-medium text-lg">{item.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow="Capacidades" title="Prevención proactiva de fiestas" features={features} background="secondary" />
      <ServiceProcess eyebrow="Nuestro Enfoque" title="Proceso de prevención primero" steps={preventionProcess} />

      <ServiceImageSection
        eyebrow="Beneficios"
        title="Qué previene Night Watch"
        description="Nuestro enfoque de monitorización proactiva detecta problemas antes de que se conviertan en incidencias, protegiendo tu propiedad y relación con los vecinos."
        features={partyPrevention}
        image={managerDevices}
        imageAlt="Panel Night Watch"
        ctaText="Activar Night Watch"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceCTA
        title="Duerme tranquilo mientras vigilamos"
        description="Nuestro equipo Night Watch está preparado para proteger tus propiedades durante las horas de mayor riesgo. Habla con nosotros sobre la cobertura para tu portfolio."
      />

      <Footer />
    </div>
  );
}
