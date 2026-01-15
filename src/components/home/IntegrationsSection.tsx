import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Code } from "lucide-react";

interface Partner {
  name: string;
  category: string;
}

// Partner logos as text-based representations (would be replaced with actual logos)
const partners: Partner[] = [
  { name: "Guesty", category: "PMS" },
  { name: "Hostaway", category: "PMS" },
  { name: "Lodgify", category: "PMS" },
  { name: "Hostify", category: "PMS" },
  { name: "Smoobu", category: "PMS" },
  { name: "Avantio", category: "PMS" },
  { name: "Icnea", category: "PMS" },
  { name: "Booking.com", category: "OTA" },
  { name: "Airbnb", category: "OTA" },
  { name: "Vrbo", category: "OTA" },
  { name: "Expedia", category: "OTA" },
  { name: "Rentlio", category: "PMS" },
  { name: "Beds24", category: "PMS" },
  { name: "Octorate", category: "PMS" },
  { name: "Cloudbeds", category: "PMS" },
  { name: "Escapia", category: "PMS" },
];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 bg-card rounded-xl border shadow-sm flex items-center justify-center mx-2 hover:shadow-soft hover:border-primary/20 transition-all duration-300">
      <span className="text-sm font-semibold text-foreground/80">{name}</span>
    </div>
  );
}

function MarqueeRow({ partners, direction = "left", speed = 30 }: { partners: Partner[]; direction?: "left" | "right"; speed?: number }) {
  const duplicatedPartners = [...partners, ...partners, ...partners];
  
  return (
    <div className="relative overflow-hidden">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div 
        className="flex"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <LogoCard key={`${partner.name}-${index}`} name={partner.name} />
        ))}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const firstRow = partners.slice(0, 8);
  const secondRow = partners.slice(8, 16);

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Integrations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Connect with your favorite tools
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Roomonitor integrates seamlessly with the leading property management systems and booking platforms in the industry.
            </p>
          </AnimatedSection>

          {/* Animated Logo Rows */}
          <AnimatedSection delay={200} className="mb-12 lg:mb-16">
            <div className="space-y-4">
              <MarqueeRow partners={firstRow} direction="left" speed={35} />
              <MarqueeRow partners={secondRow} direction="right" speed={40} />
            </div>
          </AnimatedSection>

          {/* Two CTA Cards */}
          <AnimatedSection delay={400}>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* CTA 1: See Integrations */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card rounded-2xl border p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Plug className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                        Integrations
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold">
                        Already using a PMS?
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Explore our marketplace of integrations. Connect your property management system and start operating in minutes.
                  </p>
                  <Button className="w-full sm:w-auto gap-2 group/btn">
                    See Integrations
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* CTA 2: Connect API */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card rounded-2xl border p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
                        API
                      </p>
                      <h3 className="text-xl lg:text-2xl font-bold">
                        Build your own solution
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Use our public API to integrate Roomonitor capabilities into any system you already use, maintaining your brand identity.
                  </p>
                  <Button variant="outline" className="w-full sm:w-auto gap-2 group/btn">
                    Explore API
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
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
