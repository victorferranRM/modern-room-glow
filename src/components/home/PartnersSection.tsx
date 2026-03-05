import { AnimatedSection } from "@/components/ui/animated-section";

const partners = [
  "ALEP", "Fevitur", "APARTUR", "ACAVE", "ASOTUR", "Madrid Aloja",
  "AVVA", "APTUR", "AVAL", "HostnFly", "GuestReady", "Alterhome",
  "Luckey", "TheKey", "Joivy", "Ukio", "Limehome", "Casai",
  "Hostmaker", "City Relay", "Lavanda", "Pillow"
];

const stats = [
  { value: "30.500+", label: "Apartamentos monitorizados" },
  { value: "97%", label: "Tasa de satisfacción (CSAT)" },
  { value: "<4 min", label: "Tiempo medio de gestión" },
  { value: "8", label: "Ciudades con Field Service" },
];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-32 h-14 sm:w-36 sm:h-16 bg-card/50 rounded-xl border flex items-center justify-center mx-3 hover:bg-card hover:border-primary/20 transition-all duration-300">
      <span className="text-sm font-semibold text-muted-foreground">{name}</span>
    </div>
  );
}

export function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {/* Confían en nosotros + logo carousel */}
      <section className="pt-16 pb-10 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.15em]">
              Confían en nosotros
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={100}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="flex"
              style={{ animation: "marquee-left 60s linear infinite" }}
            >
              {duplicatedPartners.map((name, index) => (
                <LogoCard key={`${name}-${index}`} name={name} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* Dark stats bar */}
      <section className="py-14 lg:py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-background/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
