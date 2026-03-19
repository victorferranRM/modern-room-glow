import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  eyebrow: string;
  title: string;
  steps: Step[];
  background?: "default" | "secondary" | "white";
  columns?: 3 | 4 | 5;
}

export function ServiceProcess({
  eyebrow,
  title,
  steps,
  background = "default",
  columns = 4,
}: ServiceProcessProps) {
  const gridCols = {
    3: "md:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  };

  return (
    <section className={cn(
      "py-20 lg:py-28 relative overflow-hidden",
      background === "secondary" ? "bg-secondary/30" : background === "white" ? "bg-[hsl(0,0%,100%)]" : "bg-background"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">
            {eyebrow}
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            {title}
          </h2>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className={cn("grid gap-6", gridCols[columns])}>
             {steps.map((step, i) => (
               <AnimatedSection key={step.step} delay={i * 150}>
                 <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 relative text-left">
                   {/* Step number with glow effect */}
                   <div className="relative mb-4 inline-block">
                     <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                       {step.step}
                     </div>
                     <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                   <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                     {step.title}
                   </h3>
                   <p className="text-muted-foreground text-sm">
                     {step.description}
                   </p>
                 </div>
               </AnimatedSection>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
