import { AnimatedSection } from "@/components/ui/animated-section";

const partners = [
  "ALEP", "Fevitur", "APARTUR", "ACAVE", "ASOTUR", "Madrid Aloja",
  "AVVA", "APTUR", "AVAL", "HostnFly", "GuestReady", "Alterhome",
  "Luckey", "TheKey", "Joivy", "Ukio", "Limehome", "Casai",
  "Hostmaker", "City Relay", "Lavanda", "Pillow"
];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-32 h-16 sm:w-36 sm:h-20 bg-card/50 rounded-xl border flex items-center justify-center mx-3 hover:bg-card hover:border-primary/20 transition-all duration-300">
      <span className="text-sm font-semibold text-muted-foreground">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", speed = 40 }: { items: string[]; direction?: "left" | "right"; speed?: number }) {
  // Triple the items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-secondary/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-secondary/50 to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((name, index) => (
          <LogoCard key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  const firstRow = partners.slice(0, 11);
  const secondRow = partners.slice(11, 22);

  return (
    <section className="py-16 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by industry leaders across Europe
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={150}>
          <div className="space-y-4">
            <MarqueeRow items={firstRow} direction="left" speed={45} />
            <MarqueeRow items={secondRow} direction="right" speed={50} />
          </div>
        </AnimatedSection>
      </div>
      
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
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
