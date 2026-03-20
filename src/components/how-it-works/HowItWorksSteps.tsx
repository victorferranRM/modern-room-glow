import { AnimatedSection } from "@/components/ui/animated-section";

interface StepData {
  title: string;
  description: string;
  bullets: string[];
  stat?: string;
  statLabel?: string;
  imagePlaceholder: string;
}

interface HowItWorksStepsProps {
  steps: StepData[] | undefined;
  images: string[];
}

export function HowItWorksSteps({ steps, images }: HowItWorksStepsProps) {
  if (!steps) return null;

  return (
    <div className="max-w-6xl mx-auto space-y-20 lg:space-y-28">
      {steps.map((step, index) => {
        const imageOnRight = index % 2 === 0;
        const num = String(index + 1).padStart(2, "0");
        const img = images[index];

        const textContent = (
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                {num}
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground mb-5">{step.description}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
              {step.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
            {step.stat && (
              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-primary">{step.stat}</span>
                {step.statLabel && <span className="text-sm text-muted-foreground">{step.statLabel}</span>}
              </div>
            )}
          </div>
        );

        const imageContent = (
          <div className="rounded-2xl overflow-hidden aspect-video">
            {img ? (
              <img
                src={img}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center px-6">{step.imagePlaceholder}</p>
              </div>
            )}
          </div>
        );

        return (
          <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {imageOnRight ? (
                <>
                  {textContent}
                  {imageContent}
                </>
              ) : (
                <>
                  {imageContent}
                  {textContent}
                </>
              )}
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
