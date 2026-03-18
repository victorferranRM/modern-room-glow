import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import managerDevices from "@/assets/manager-devices.png";

function ManagerCheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="w-5 h-5 mt-0.5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
        <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={3} />
      </div>
      <span className="text-sm sm:text-base text-foreground/80 transition-colors group-hover:text-foreground">{text}</span>
    </li>
  );
}

interface ManagerSectionProps {
  translationKey: string;
}

export function ManagerSection({ translationKey }: ManagerSectionProps) {
  const { t, tObject } = useTranslation();
  const managerFeatures = tObject<string[]>(`${translationKey}.managerFeatures`);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          <AnimatedSection className="lg:col-span-2 flex flex-col">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {t(`${translationKey}.managerEyebrow`)}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              {t(`${translationKey}.managerTitle`)}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t(`${translationKey}.managerDescription`)}
            </p>
            <ul className="space-y-3">
              {managerFeatures.map((text, i) => (
                <ManagerCheckItem key={i} text={text} />
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={200} className="lg:col-span-3 flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={managerDevices}
                alt={t(`${translationKey}.managerEyebrow`)}
                className="w-full object-contain object-center"
              />
            </div>
            <div className="mt-6">
              <Button asChild>
                <LocalizedLink to="/how-it-works">
                  {t('shared.exploreManager')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LocalizedLink>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
