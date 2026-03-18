import { AnimatedSection } from "@/components/ui/animated-section";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  eyebrow: string;
  title: string;
  features: Feature[];
  background?: "default" | "secondary" | "white";
}

export function ServiceFeatures({
  eyebrow,
  title,
  features,
  background = "default",
}: ServiceFeaturesProps) {
  return (
    <section className={cn(
      "py-20 lg:py-28 relative overflow-hidden",
      background === "secondary" ? "bg-secondary/30" : background === "white" ? "bg-[hsl(0,0%,100%)]" : "bg-background"
    )}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
            {eyebrow}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            {title}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <div className="group p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <feature.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
