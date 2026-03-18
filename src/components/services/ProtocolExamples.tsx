import { AnimatedSection } from "@/components/ui/animated-section";
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
}

export function ProtocolExamples({ eyebrow, title, subtitle, protocols, images }: ProtocolExamplesProps) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {protocols.map((protocol, i) => {
            const protocolImage = images?.[i];
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="rounded-2xl border border-border/50 bg-card shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col group">
                  {/* Image */}
                  {protocolImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <OptimizedImage
                        src={protocolImage}
                        alt={protocol.title}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                        containerClassName="w-full h-full"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <h3 className="absolute bottom-0 left-0 right-0 p-5 text-lg font-semibold text-white">
                        {protocol.title}
                      </h3>
                    </div>
                  )}

                  {/* If no image, show title normally */}
                  {!protocolImage && (
                    <div className="px-5 pt-5 pb-2">
                      <h3 className="text-lg font-semibold text-foreground">{protocol.title}</h3>
                    </div>
                  )}

                  {/* Steps */}
                  <div className="p-5 pt-4 flex-1">
                    <div className="relative pl-6 space-y-0">
                      {/* Vertical line */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

                      {protocol.steps.map((step, j) => (
                        <div key={j} className="relative flex items-start gap-3 py-2 group/step">
                          {/* Dot */}
                          <div className="absolute left-[-18px] top-[12px] w-[10px] h-[10px] rounded-full border-2 border-primary/30 bg-card group-hover/step:border-primary transition-colors" />

                          {/* Number */}
                          <span className="shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs font-bold text-primary group-hover/step:bg-primary group-hover/step:text-primary-foreground transition-all">
                            {j + 1}
                          </span>

                          {/* Text */}
                          <span className="text-sm text-muted-foreground group-hover/step:text-foreground transition-colors leading-relaxed">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
