import { AnimatedSection } from "@/components/ui/animated-section";

const partners = [
  "ALEP", "Fevitur", "APARTUR", "ACAVE", "ASOTUR", "Madrid Aloja",
  "AVVA", "APTUR", "AVAL", "HostnFly", "GuestReady", "Alterhome",
  "Luckey", "TheKey", "Joivy", "Ukio", "Limehome", "Casai",
  "Hostmaker", "City Relay", "Lavanda", "Pillow"
];

const stats = [
  { value: "30,500+", label: "Properties monitored" },
  { value: "1.5M", label: "Guests protected (2024)" },
  { value: "97.2%", label: "Satisfaction rate" },
  { value: "< 45 min", label: "Average resolution time" },
];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-32 h-14 sm:w-36 sm:h-16 bg-card/50 rounded-xl border flex items-center justify-center mx-3 hover:bg-card hover:border-primary/20 transition-all duration-300">
      <span className="text-sm font-semibold text-muted-foreground">{name}</span>
    </div>
  );
}

export function PartnersSection() {
  // Triple the items for seamless loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 overflow-hidden relative">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-muted/50" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by leading hospitality operators worldwide
          </p>
        </AnimatedSection>

        {/* Big Numbers */}
        <AnimatedSection delay={100} className="mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      
      <AnimatedSection delay={200}>
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex"
            style={{
              animation: "marquee-left 60s linear infinite",
            }}
          >
            {duplicatedPartners.map((name, index) => (
              <LogoCard key={`${name}-${index}`} name={name} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
