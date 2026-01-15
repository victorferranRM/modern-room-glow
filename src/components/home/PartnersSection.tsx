import { AnimatedSection } from "@/components/ui/animated-section";

export function PartnersSection() {
  const partners = [
    { name: "ALEP", logo: "ALEP" },
    { name: "Fevitur", logo: "Fevitur" },
    { name: "APARTUR", logo: "APARTUR" },
    { name: "ACAVE", logo: "ACAVE" },
    { name: "ASOTUR", logo: "ASOTUR" },
    { name: "Madrid", logo: "MAD" },
  ];

  return (
    <section className="py-16 border-y bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by industry leaders across Europe
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={150}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center px-6 py-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
