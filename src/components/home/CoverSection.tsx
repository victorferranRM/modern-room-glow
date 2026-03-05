import { Link } from "react-router-dom";
import { Eye, Truck, Phone, Moon, Settings, FileText, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

import imgControlCenter from "@/assets/cover-control-center.jpg";
import imgFieldService from "@/assets/cover-field-service.jpg";
import imgPhoneAssist from "@/assets/cover-phone-assist.jpg";
import imgNightWatch from "@/assets/cover-night-watch.jpg";
import imgPmsTools from "@/assets/cover-pms-tools.jpg";
import imgProtocols from "@/assets/cover-protocols.jpg";

const coverCards = [
  {
    icon: Eye,
    title: "Centro de Control",
    description: "Verificación humana, toma de decisiones y escalado.",
    href: "/services/control-center",
    image: imgControlCenter,
  },
  {
    icon: Truck,
    title: "Agentes Field Service",
    description: "Intervención in situ cuando la resolución remota no es suficiente.",
    href: "/services/field-service",
    image: imgFieldService,
  },
  {
    icon: Phone,
    title: "Atención telefónica",
    description: "Atención telefónica para huéspedes fuera de horario.",
    href: "/services/guest-assist",
    image: imgPhoneAssist,
  },
  {
    icon: Moon,
    title: "Night Watch",
    description: "Agentes dedicados monitorizando tus propiedades para prevenir fiestas.",
    href: "/services/night-watch",
    image: imgNightWatch,
  },
  {
    icon: Settings,
    title: "Acceso PMS y Herramientas",
    description: "Operamos directamente desde tu ecosistema operativo.",
    href: "/services/pms-access",
    image: imgPmsTools,
  },
  {
    icon: FileText,
    title: "Protocolos Operativos",
    description: "Actuamos según tus prioridades y patrones de actuación.",
    href: "/services/protocols",
    image: imgProtocols,
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
              Operativa delegada.<br />Cobertura real.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Cuando tu equipo no está disponible, el nuestro toma el control. Centro de Control, atención telefónica, agentes de campo y protocolos a medida.
            </p>
            <Button size="lg" asChild>
              <Link to="/cover" className="gap-2">
                Descubre Cover™
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coverCards.map((card, index) => (
            <AnimatedSection key={card.title} animation="fade-up" delay={index * 100}>
              <Link
                to={card.href}
                className="group relative rounded-2xl border border-border/60 overflow-hidden h-full flex flex-col bg-card transition-all duration-300 ease-out hover:shadow-soft-lg hover:-translate-y-1 hover:border-primary/30 shadow-soft"
              >
                {/* Image section */}
                <div className="relative h-44 overflow-hidden rounded-t-2xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Warm subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                  {/* Icon on image */}
                  <div className="absolute top-3 left-3">
                    <div className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <card.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Text content on light background */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                    Saber más
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
