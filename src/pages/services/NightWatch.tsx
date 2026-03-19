import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Moon, Eye, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-night-watch.jpg";

const howItWorksIcons = [Eye, MapPin, MessageCircle, ArrowUpRight];

export default function NightWatch() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceNightWatch.stats') ?? [];
  const coverageHours = tObject<{ day: string; hours: string }[]>('serviceNightWatch.coverageHours') ?? [];
  const howItWorks = tObject<{ title: string; description: string }[]>('serviceNightWatch.howItWorks') ?? [];
  const partyPrevention = tObject<string[]>('serviceNightWatch.preventionFeatures') ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Moon} badge={t('serviceNightWatch.badge')} title={t('serviceNightWatch.title')} titleHighlight={t('serviceNightWatch.titleHighlight')} description={t('serviceNightWatch.description')} image={serviceImage} imageAlt={t('serviceNightWatch.badge')} />
      <ServiceStats stats={stats} />

      {/* Coverage Hours — compact */}
      <section className="py-14 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-10">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">{t('serviceNightWatch.coverageEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">{t('serviceNightWatch.coverageTitle')}</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">{t('serviceNightWatch.coverageSubtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {coverageHours.map((item, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="group p-4 rounded-xl bg-card border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-400">
                  <Moon className="w-4 h-4 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{item.day}</h3>
                  <p className="text-primary font-medium text-base">{item.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How Night Watch works — unified section */}
      <section className="py-14 lg:py-20 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-10 lg:mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">{t('serviceNightWatch.howItWorksEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{t('serviceNightWatch.howItWorksTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((item, i) => {
              const Icon = howItWorksIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 120}>
                  <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 text-left h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold mb-2 transition-colors group-hover:text-primary">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceImageSection eyebrow={t('serviceNightWatch.preventionEyebrow')} title={t('serviceNightWatch.preventionTitle')} description={t('serviceNightWatch.preventionDescription')} features={partyPrevention} placeholderText={t('serviceNightWatch.imagePlaceholder')} ctaText={t('serviceNightWatch.preventionCTA')} ctaLink="/contact" background="secondary" />
      <ServiceCTA title={t('serviceNightWatch.ctaTitle')} description={t('serviceNightWatch.ctaDescription')} primaryCTA={{ text: t('serviceNightWatch.ctaPrimary'), link: "/contact" }} />
      <Footer />
    </div>
  );
}
