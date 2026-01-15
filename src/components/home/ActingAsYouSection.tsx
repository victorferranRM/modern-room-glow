import { AnimatedSection } from "@/components/ui/animated-section";

export function ActingAsYouSection() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimatedSection>
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Key differentiator
            </p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              We operate as if we were you
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
              We access your PMS and tools, follow your workflows and communicate with guests using your brand identity.
              <span className="block mt-4 text-background font-medium">
                For guests, there is no intermediary. For you, there are no interruptions.
              </span>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
