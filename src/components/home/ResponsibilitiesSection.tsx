import { Users, AlertTriangle, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const responsibilities = [
  {
    icon: Users,
    title: "Guest management",
    description: "24/7 call and message handling, resolving operational issues without escalating unnecessarily.",
  },
  {
    icon: AlertTriangle,
    title: "Incident management",
    description: "Technical, operational and emergency incidents handled with prioritization and decision-making.",
  },
  {
    icon: Clock,
    title: "Operational continuity",
    description: "Your business keeps running outside office hours, without improvisation or dependency on internal teams.",
  },
];

export function ResponsibilitiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              What we manage for you
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Responsibilities, not tasks
            </h2>
          </AnimatedSection>

          {/* 3-column grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {responsibilities.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150}>
                <div className="text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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
