import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ChevronDown, Book, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProtocolExample {
  title: string;
  steps: string[];
}

interface ProtocolExamplesProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  protocols: ProtocolExample[];
}

export function ProtocolExamples({ eyebrow, title, subtitle, protocols }: ProtocolExamplesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-4">
          {protocols.map((protocol, i) => {
            const isActive = activeIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-500 overflow-hidden",
                    isActive
                      ? "bg-card shadow-xl border-primary/30 ring-1 ring-primary/10"
                      : "bg-card/60 hover:bg-card hover:shadow-md border-border/50 hover:border-primary/20"
                  )}
                >
                  {/* Header - clickable */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group"
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                      isActive
                        ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30"
                        : "bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105"
                    )}>
                      <Book className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-semibold text-lg transition-colors duration-300",
                        isActive ? "text-primary" : "group-hover:text-primary"
                      )}>
                        {protocol.title}
                      </h3>
                      <p className={cn(
                        "text-sm text-muted-foreground transition-all duration-300",
                        isActive ? "opacity-0 h-0" : "opacity-100"
                      )}>
                        {protocol.steps.length} pasos
                      </p>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-muted-foreground shrink-0 transition-all duration-500",
                      isActive ? "rotate-180 text-primary" : "group-hover:text-primary"
                    )} />
                  </button>

                  {/* Expandable steps */}
                  <div className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-0">
                        <div className="relative pl-8 space-y-0">
                          {/* Vertical connector line */}
                          <div className="absolute left-[13px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

                          {protocol.steps.map((step, j) => (
                            <div
                              key={j}
                              className="relative flex items-start gap-4 py-3 group/step"
                              style={{
                                animationDelay: isActive ? `${j * 80}ms` : "0ms",
                                animation: isActive ? "fadeSlideIn 0.4s ease-out forwards" : "none",
                                opacity: isActive ? 0 : 1,
                              }}
                            >
                              {/* Step dot */}
                              <div className="absolute left-[-22px] top-[18px] w-[14px] h-[14px] rounded-full border-2 border-primary/40 bg-card flex items-center justify-center transition-all duration-300 group-hover/step:border-primary group-hover/step:scale-125">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover/step:bg-primary transition-colors" />
                              </div>

                              {/* Step number badge */}
                              <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary transition-all duration-300 group-hover/step:bg-primary group-hover/step:text-primary-foreground group-hover/step:scale-110">
                                {j + 1}
                              </span>

                              {/* Step text */}
                              <span className="text-sm sm:text-base text-foreground/80 transition-colors group-hover/step:text-foreground leading-relaxed pt-0.5">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Keyframe animation for step reveal */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
