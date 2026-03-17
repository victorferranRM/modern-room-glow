import { Link } from "react-router-dom";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

const profiles = [
  {
    icon: Building2,
    number: "01",
    title: "Gestor de +50 propiedades",
    desc: "Tu equipo no puede cubrir las noches. Cover se convierte en tu equipo nocturno.",
    stat: "+50",
    statLabel: "propiedades",
  },
  {
    icon: Users,
    number: "02",
    title: "Empresa de property management",
    desc: "Ofreces gestión integral. Cover es tu back-office nocturno, con tus protocolos.",
    stat: "24/7",
    statLabel: "cobertura",
  },
  {
    icon: Globe,
    number: "03",
    title: "Cadena o grupo hotelero",
    desc: "Múltiples ubicaciones, mismo nivel de servicio. Consistencia operativa garantizada.",
    stat: "8",
    statLabel: "ciudades",
  },
];

export function CoverAudience() {
  return (
    <section className="relative bg-foreground text-background py-20 lg:py-28 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Diseñado para gestores{" "}
            <span className="text-primary">que escalan</span>
          </h2>
          <p className="text-lg text-background/60 max-w-xl mx-auto leading-relaxed">
            Cover™ está diseñado para gestores profesionales que necesitan estructura operativa real fuera de horario.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative group rounded-2xl border border-background/10 bg-background/[0.05] backdrop-blur-sm p-6 lg:p-8 hover:bg-background/[0.08] transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary leading-none">{profile.stat}</div>
                      <div className="text-[11px] text-background/40 mt-0.5">{profile.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-background mb-2">{profile.title}</h3>
                  <p className="text-sm text-background/50 leading-relaxed">{profile.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={500} className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 text-base px-8 py-6">
              <Link to="/contact" className="gap-2">
                Hablar con un experto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-background/30 bg-transparent text-background hover:bg-background/10 text-base px-8 py-6">
              <Link to="/pricing">Ver precios</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
