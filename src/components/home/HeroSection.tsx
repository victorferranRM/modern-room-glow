import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Building2 } from "lucide-react";
import heroControlCenter from "@/assets/hero-control-center.jpg";
import heroFieldService from "@/assets/hero-field-service.jpg";
import heroMonitoring from "@/assets/hero-monitoring.jpg";

export function HeroSection() {
  const cards = [
    {
      image: heroControlCenter,
      title: "Centro de Control 24/7",
      description: "Agentes formados en hospitality evaluando, mediando y resolviendo.",
    },
    {
      image: heroFieldService,
      title: "Field Service en 8 ciudades",
      description: "Intervención presencial cuando la resolución remota no basta.",
    },
    {
      image: heroMonitoring,
      title: "Monitorización inteligente",
      description: "Sensor de ruido, humo, ocupación y ambiente.",
    },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="animate-fade-in flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-shadow duration-300">
              <Building2 className="w-4 h-4" />
              <span>Infraestructura operativa para propiedades turísticas</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-3 animate-fade-in mb-6" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
              Tu operativa nocturna, resuelta.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance">
              De 22:00 a 07:00, nosotros nos encargamos.
            </p>
          </div>

          {/* Description */}
          <p
            className="text-[15px] sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in mb-10"
            style={{ animationDelay: "0.1s" }}
          >
            Roomonitor combina monitorización inteligente, un Centro de Control y agentes de campo. Gestionamos incidencias, atendemos huéspedes y protegemos tus activos. En tu nombre, con tus protocolos. Tú descansas. Nosotros actuamos.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in mb-16"
            style={{ animationDelay: "0.15s" }}
          >
            <Button size="lg" className="text-base px-8 py-6 shadow-soft-lg" asChild>
              <Link to="/cover">
                Descubre Cover™
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <Link to="/how-it-works">
                <MessageSquare className="w-4 h-4 mr-2" />
                Ver cómo funciona
              </Link>
            </Button>
          </div>

          {/* Value proposition cards with images */}
          <div
            className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            {cards.map((card, index) => (
              <div key={index} className="group text-left">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
