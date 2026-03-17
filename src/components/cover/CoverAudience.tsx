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
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Diseñado para gestores{" "}
            <span className="text-primary">que escalan</span>
          </h2>
          <p className="text-lg text-background/60 max-w-xl mx-auto leading-relaxed">
            Cover™ está diseñado para gestores profesionales que necesitan estructura operativa real fuera de horario.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="relative group rounded-2xl border border-background/10 bg-background/[0.04] p-8 lg:p-10 min-h-[320px] lg:min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:bg-background/[0.08] hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)] hover:-translate-y-1">
                  {/* Stat as decorative watermark */}
                  <span className="absolute top-5 right-6 text-[64px] lg:text-[80px] font-black leading-none text-background/[0.06] select-none pointer-events-none transition-colors duration-500 group-hover:text-primary/[0.08]">
                    {profile.stat}
                  </span>

                  {/* Top: Icon + stat label */}
                  <div>
                    <Icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className="font-bold text-2xl lg:text-[1.7rem] text-background leading-tight mb-3">
                      {profile.title}
                    </h3>
                    <p className="text-base text-background/50 leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>

                  {/* Bottom: stat pill */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                      {profile.stat} <span className="text-primary/70 font-normal">{profile.statLabel}</span>
                    </span>
                  </div>
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
