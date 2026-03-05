import { Link } from "react-router-dom";
import { Eye, Truck, Phone, Moon, Settings, FileText, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const coverCards = [
  {
    icon: Eye,
    title: "Centro de Control",
    description: "Verificación humana, toma de decisiones y escalado.",
    href: "/services/control-center",
  },
  {
    icon: Truck,
    title: "Agentes Field Service",
    description: "Intervención in situ cuando la resolución remota no es suficiente.",
    href: "/services/field-service",
  },
  {
    icon: Phone,
    title: "Atención telefónica",
    description: "Atención telefónica para huéspedes fuera de horario.",
    href: "/services/guest-assist",
  },
  {
    icon: Moon,
    title: "Night Watch",
    description: "Agentes dedicados monitorizando tus propiedades para prevenir fiestas.",
    href: "/services/night-watch",
  },
  {
    icon: Settings,
    title: "Acceso PMS y Herramientas",
    description: "Operamos directamente desde tu ecosistema operativo.",
    href: "/services/pms-access",
  },
  {
    icon: FileText,
    title: "Protocolos Operativos",
    description: "Actuamos según tus prioridades y patrones de actuación.",
    href: "/services/protocols",
  },
];

export function CoverSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              ROOMONITOR COVER™
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
              Operativa delegada. Cobertura real.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cuando tu equipo no está disponible, el nuestro toma el control. Centro de Control 24/7, agentes de campo y protocolos a medida para que tu operativa nocturna no dependa de ti.
            </p>
            <Link
              to="/cover"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4 transition-colors"
            >
              Descubre Cover™
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coverCards.map((card, index) => (
            <AnimatedSection key={card.title} animation="fade-up" delay={index * 100}>
              <div className="group rounded-xl border bg-card p-6 transition-all duration-200 ease-out hover:bg-muted/80 hover:shadow-md h-full flex flex-col">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                  <card.icon className="w-5 h-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
                >
                  Saber más
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
