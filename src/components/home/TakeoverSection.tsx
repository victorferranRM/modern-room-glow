import { AnimatedSection } from "@/components/ui/animated-section";

export function TakeoverSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              We take over your operations outside office hours
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              When your team is offline, Roomonitor acts as a direct extension of your operations.
              We handle guests, incidents and emergencies with full access to your tools, workflows and protocols.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
