import { Link } from "react-router-dom";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    icon: Building2,
    number: "01",
    title: "Gestor de +50 propiedades",
    desc: "Tu equipo no puede cubrir las noches. Necesitas estructura, no más turnos. Cover se convierte en tu equipo nocturno sin los costes ni la complejidad de contratar.",
  },
  {
    icon: Users,
    number: "02",
    title: "Empresa de property management",
    desc: "Ofreces gestión integral a propietarios. Cover es tu back-office nocturno. Atendemos huéspedes en tu nombre, con tus protocolos.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Cadena o grupo hotelero",
    desc: "Gestionas múltiples ubicaciones. Necesitas consistencia operativa en todas. Cover garantiza el mismo nivel de servicio en cada ciudad.",
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

        <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-border border rounded-2xl bg-card shadow-soft overflow-hidden">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative p-8 lg:p-10 h-full group hover:bg-muted/40 transition-colors duration-300">
                  <span className="text-5xl font-black text-muted-foreground/[0.06] absolute top-6 right-8 select-none leading-none">{profile.number}</span>
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3">{profile.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{profile.desc}</p>
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
