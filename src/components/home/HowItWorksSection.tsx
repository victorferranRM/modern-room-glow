import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Radio, Headphones, Car, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const pillarMeta = [
  {
    linkHref: "/monitoring",
    floatingIcons: [Radio, CheckCircle, CheckCircle],
    floatingPositions: ["top-8 left-8", "top-24 right-6", "bottom-16 left-12"],
    floatingDelays: ["0s", "0.5s", "1s"],
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
  {
    linkHref: "/services/control-center",
    floatingIcons: [Headphones, CheckCircle, CheckCircle],
    floatingPositions: ["top-10 right-8", "bottom-20 left-8", "top-28 left-6"],
    floatingDelays: ["0.3s", "0.8s", "0.6s"],
    bgColor: "bg-gradient-to-br from-accent/30 to-accent/50",
  },
  {
    linkHref: "/services/field-service",
    floatingIcons: [Car, CheckCircle, CheckCircle],
    floatingPositions: ["top-8 left-6", "top-20 right-8", "bottom-16 right-10"],
    floatingDelays: ["0.2s", "0.7s", "1.1s"],
    bgColor: "bg-gradient-to-br from-muted to-muted/80",
  },
];

export function HowItWorksSection() {
  const { t, tObject } = useTranslation();
  const pillars = tObject("home.ecosystem.pillars") as Array<{
    title: string; description: string; points: string[]; linkText: string; floatingLabels: string[];
  }>;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t("home.ecosystem.eyebrow")}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{t("home.ecosystem.title")}</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => {
              const meta = pillarMeta[index];
              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="group">
                    <div className={`relative h-72 lg:h-80 rounded-2xl ${meta.bgColor} overflow-hidden mb-6`}>
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                          <defs><pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" /></pattern></defs>
                          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                        </svg>
                      </div>
                      {pillar.floatingLabels.map((label, ei) => {
                        const Icon = meta.floatingIcons[ei];
                        return (
                          <div key={ei} className={`absolute ${meta.floatingPositions[ei]} animate-float`} style={{ animationDelay: meta.floatingDelays[ei], animationDuration: '3s' }}>
                            <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2 border border-border/50 transform transition-transform duration-300 group-hover:scale-105">
                              <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center"><Icon className="w-3.5 h-3.5 text-primary" /></div>
                              <span className="text-xs font-medium text-foreground whitespace-nowrap">{label}</span>
                            </div>
                          </div>
                        );
                      })}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <span className="text-4xl font-bold text-primary/30">0{index + 1}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>
                    <ul className="space-y-2 mb-4">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 h-auto text-primary gap-1" asChild>
                      <LocalizedLink to={meta.linkHref}>{pillar.linkText}<ArrowRight className="w-3.5 h-3.5" /></LocalizedLink>
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } } .animate-float { animation: float 3s ease-in-out infinite; }`}</style>
    </section>
  );
}
