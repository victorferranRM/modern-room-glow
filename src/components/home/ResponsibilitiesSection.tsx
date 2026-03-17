import { Users, AlertTriangle, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useTranslation } from "@/i18n/useTranslation";

const icons = [Users, AlertTriangle, Clock];

export function ResponsibilitiesSection() {
  const { t, tObject } = useTranslation();
  const items = tObject("home.responsibilities.items") as Array<{ title: string; description: string }>;

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t("home.responsibilities.eyebrow")}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{t("home.responsibilities.title")}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {items.map((item, index) => {
              const Icon = icons[index];
              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="text-center space-y-5">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center"><Icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
