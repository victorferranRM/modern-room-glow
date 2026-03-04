import { Link } from "react-router-dom";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const profiles = [
  {
    icon: Building2,
    title: "Gestor de +50 propiedades",
    desc: "Tu equipo no puede cubrir las noches. Necesitas estructura, no más turnos. Cover se convierte en tu equipo nocturno sin los costes ni la complejidad de contratar.",
    accent: "from-primary/20 to-primary/5",
    border: "hover:border-primary/30",
  },
  {
    icon: Users,
    title: "Empresa de property management",
    desc: "Ofreces gestión integral a propietarios. Cover es tu back-office nocturno. Atendemos huéspedes en tu nombre, con tus protocolos.",
    accent: "from-blue-500/20 to-blue-500/5",
    border: "hover:border-blue-500/30",
  },
  {
    icon: Globe,
    title: "Cadena o grupo hotelero",
    desc: "Gestionas múltiples ubicaciones. Necesitas consistencia operativa en todas. Cover garantiza el mismo nivel de servicio en cada ciudad.",
    accent: "from-emerald-500/20 to-emerald-500/5",
    border: "hover:border-emerald-500/30",
  },
];

export function CoverAudience() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Diseñado para gestores{" "}
            <span className="gradient-text">que escalan</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className={cn(
                  "relative rounded-2xl border bg-card p-8 transition-all duration-300 shadow-soft hover:shadow-soft-lg h-full",
                  profile.border
                )}>
                  {/* Gradient top accent */}
                  <div className={cn("absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r", profile.accent)} />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{profile.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{profile.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={500} className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/contact" className="gap-2">
              ¿Te identificas? Hablemos.
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
