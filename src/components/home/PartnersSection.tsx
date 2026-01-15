import { AnimatedSection } from "@/components/ui/animated-section";

const partners = [
  "ALEP", "Fevitur", "APARTUR", "ACAVE", "ASOTUR", "Madrid Aloja",
  "AVVA", "APTUR", "AVAL", "HostnFly", "GuestReady", "Alterhome",
  "Luckey", "TheKey", "Joivy", "Ukio", "Limehome", "Casai",
  "Hostmaker", "City Relay", "Lavanda", "Pillow"
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
    <section className="py-12 bg-secondary/30 overflow-hidden border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by industry leaders across Europe
          </p>
        </AnimatedSection>
      </div>
      
      <AnimatedSection delay={150}>
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />
          
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
