import { Radio, Brain, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Radio,
    title: "Detection",
    description: "Signals come from multiple sources: guests, PMS, operational channels and on-site monitoring devices.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Decision",
    description: "Our 24/7 Control Center verifies each case and applies predefined operational protocols.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Action",
    description: "We resolve remotely or activate our Field Service team to intervene physically when required.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              From detection to resolution
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-px bg-border" />
                )}
                
                <div className="relative space-y-5">
                  {/* Number badge */}
                  <div className="flex items-center gap-4">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-card border shadow-soft flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
