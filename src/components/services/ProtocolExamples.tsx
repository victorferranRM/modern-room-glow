import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ChevronDown, Volume2, Key, Flame, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ProtocolExample {
  title: string;
  steps: string[];
}

interface ProtocolExamplesProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  protocols: ProtocolExample[];
  images?: string[];
  icons?: LucideIcon[];
}

const defaultIcons: LucideIcon[] = [Volume2, Key, Flame];

export function ProtocolExamples({ eyebrow, title, subtitle, protocols, images, icons = defaultIcons }: ProtocolExamplesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

        <div className="max-w-5xl mx-auto space-y-4">
          {protocols.map((protocol, i) => {
            const isActive = activeIndex === i;
            const protocolImage = images?.[i];
            const Icon = icons[i] ?? Volume2;

            return (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className={cn(
                    "rounded-2xl border overflow-hidden transition-all duration-500",
                    isActive
                      ? "shadow-xl border-primary/30 ring-1 ring-primary/10"
                      : "shadow-md hover:shadow-lg border-border/50 hover:border-primary/20"
                  )}
                >
                  {/* Header with background image */}
                  <button
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className="w-full relative group text-left"
                  >
                    {/* Background image */}
                    {protocolImage && (
                      <div className="absolute inset-0">
                        <OptimizedImage
                          src={protocolImage}
                          alt=""
                          className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                          containerClassName="w-full h-full"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                      </div>
                    )}

                    {/* Header content */}
                    <div className={cn(
                      "relative flex items-center gap-4 p-5 sm:p-6",
                      !protocolImage && "bg-card"
                    )}>
                      {/* Icon badge */}
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>

                      <h3 className={cn(
                        "font-semibold text-lg flex-1",
                        protocolImage ? "text-white" : "text-foreground"
                      )}>
                        {protocol.title}
                      </h3>

                      <ChevronDown className={cn(
                        "w-5 h-5 shrink-0 transition-transform duration-500",
                        protocolImage ? "text-white/80" : "text-muted-foreground",
                        isActive && "rotate-180"
                      )} />
                    </div>
                  </button>

                  {/* Expandable steps */}
                  <div className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden">
                      <div className="p-5 sm:p-6 bg-card space-y-3">
                        {protocol.steps.map((step, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-3 group/step"
                            style={{
                              animation: isActive ? `fadeSlideIn 0.35s ease-out ${j * 60}ms forwards` : "none",
                              opacity: isActive ? 0 : 1,
                            }}
                          >
                            <span className="shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                              {j + 1}
                            </span>
                            <span className="text-sm sm:text-base text-muted-foreground group-hover/step:text-foreground transition-colors leading-relaxed pt-0.5">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
