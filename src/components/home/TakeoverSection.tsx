import { AnimatedSection } from "@/components/ui/animated-section";
import { Headphones, ShieldCheck, Clock } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const cardIcons = [Headphones, ShieldCheck, Clock];

export function TakeoverSection() {
  const { t, tObject } = useTranslation();
  const cards = tObject("home.takeover.cards") as Array<{ title: string; description: string; tagline: string }>;
  const banner = tObject("home.takeover.banner") as { title: string; description: string; tagline: string };

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t("home.takeover.eyebrow")}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {t("home.takeover.title")}{" "}<span className="text-primary">{t("home.takeover.titleHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{t("home.takeover.description")}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {cards.map((item, index) => {
              const Icon = cardIcons[index];
              return (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="bg-card rounded-2xl border p-6 lg:p-8 h-full flex flex-col shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"><Icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{item.description}</p>
                    <p className="text-primary font-medium text-sm italic">{item.tagline}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={500}>
            <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-background mb-4">{banner.title}</h3>
              <p className="text-background/70 max-w-2xl mx-auto leading-relaxed mb-4">{banner.description}</p>
              <p className="text-primary font-bold text-sm uppercase tracking-wider">{banner.tagline}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
