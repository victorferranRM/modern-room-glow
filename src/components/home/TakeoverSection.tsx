import { AnimatedSection } from "@/components/ui/animated-section";
import { Headphones, ShieldCheck, Clock } from "lucide-react";

const responsibilities = [
  {
    icon: Headphones,
    title: "Atención a huéspedes",
    description: "Atendemos llamadas y mensajes 24/7, resolviendo incidencias sin escalar innecesariamente a tu equipo.",
    tagline: "Tú descansas. Nosotros actuamos.",
  },
  {
    icon: ShieldCheck,
    title: "Gestión de incidencias",
    description: "Coordinamos y resolvemos incidencias técnicas y operativas, actuando según impacto y urgencia.",
    tagline: "Cada incidencia, una decisión. No una alarma.",
  },
  {
    icon: Clock,
    title: "Continuidad operativa",
    description: "Garantizamos que tu operativa siga funcionando fuera de horario, sin improvisaciones.",
    tagline: "Tu negocio no se detiene cuando acaba la jornada.",
  },
];

export function TakeoverSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              La solución
            </p>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Nos hacemos cargo de tu{" "}
              <span className="text-primary">operativa nocturna</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Cuando tu equipo no está disponible, Roomonitor actúa como una extensión directa de tu operativa.
            </p>
          </AnimatedSection>

          {/* 3-column cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {responsibilities.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150}>
                <div className="bg-card rounded-2xl border p-6 lg:p-8 h-full flex flex-col shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <p className="text-primary font-medium text-sm italic">
                    {item.tagline}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Dark banner */}
          <AnimatedSection delay={500}>
            <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mb-4">
                "Actuamos como si fuéramos tú"
              </h3>
              <p className="text-background/70 max-w-2xl mx-auto leading-relaxed mb-4">
                Accedemos a tus herramientas, utilizamos tus flujos y hablamos con los huéspedes desde tu identidad. Para ellos, no hay intermediarios. Para ti, no hay interrupciones.
              </p>
              <p className="text-primary font-bold text-sm uppercase tracking-wider">
                No es soporte. Es operativa delegada.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
