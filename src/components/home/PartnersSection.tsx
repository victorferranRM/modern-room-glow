import { AnimatedSection } from "@/components/ui/animated-section";

const partners = [
  "Checkmyguest", "Sonder", "GuestReady", "You Stylish", "Mun Stays",
  "HostnFly", "Alterhome", "Luckey", "TheKey", "Joivy",
  "Ukio", "Limehome", "Casai", "Hostmaker", "City Relay",
  "Lavanda", "Pillow", "ALEP", "Fevitur", "APARTUR",
  "ACAVE", "ASOTUR", "Madrid Aloja", "AVVA"
];

const stats = [
  { value: "30.500+", label: "Apartamentos monitorizados" },
  { value: "97%", label: "Tasa de satisfacción (CSAT)" },
  { value: "<4 min", label: "Tiempo medio de gestión" },
  { value: "8", label: "Ciudades con Field Service" },
];

export function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {/* Trust bar */}
      <section className="py-12 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Confían en nosotros
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={100}>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="flex items-center"
              style={{ animation: "marquee-left 80s linear infinite" }}
            >
              {duplicatedPartners.map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 text-sm sm:text-base font-medium text-muted-foreground/60 hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  {name}
                </span>
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

      {/* Stats bar with visual depth */}
      <section className="relative py-16 lg:py-20 bg-foreground overflow-hidden">
        {/* Subtle glow accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary/6 rounded-full blur-[80px]" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center group">
                  <div className="relative inline-block">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/40 rounded-full" />
                  </div>
                  <div className="text-xs sm:text-sm text-background/50 mt-3">
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
