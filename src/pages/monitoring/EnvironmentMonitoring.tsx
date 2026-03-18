import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { MonitoringBanner } from "@/components/monitoring/MonitoringBanner";
import { ManagerSection } from "@/components/monitoring/ManagerSection";
import { Button } from "@/components/ui/button";
import { Thermometer, Droplets, ArrowRight, Wind, Gauge } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import monitoringEnvironment from "@/assets/monitoring-environment.webp";

const featureIcons = [Thermometer, Droplets, Wind, Gauge];

export default function EnvironmentMonitoring() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('monitoringEnvironment.stats');
  const features = tObject<{ title: string; description: string }[]>('monitoringEnvironment.features');
  const howItWorks = tObject<{ step: string; title: string; description: string }[]>('monitoringEnvironment.howItWorks');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MonitoringHero icon={Thermometer} badge={t('monitoringEnvironment.badge')} title={t('monitoringEnvironment.title')} titleHighlight={t('monitoringEnvironment.titleHighlight')} description={t('monitoringEnvironment.description')} image={monitoringEnvironment} imageAlt={t('monitoringEnvironment.badge')} breadcrumbLabel={t('monitoringEnvironment.breadcrumb')} />

      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoringEnvironment.featuresEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringEnvironment.featuresTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoringEnvironment.featuresSubtitle')}</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => { const Icon = featureIcons[i]; return (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ); })}
          </div>
        </div>
      </section>

      <MonitoringBanner />

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoringEnvironment.howItWorksEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringEnvironment.howItWorksTitle')}</h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto"><div className="grid md:grid-cols-2 gap-6">
            {howItWorks.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="flex gap-4 p-6 rounded-2xl bg-card border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{step.step}</div>
                  <div><h3 className="text-lg font-semibold mb-2">{step.title}</h3><p className="text-muted-foreground text-sm">{step.description}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div></div>
        </div>
      </section>

      <ManagerSection translationKey="monitoringEnvironment" />

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringEnvironment.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('monitoringEnvironment.ctaDescription')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild><LocalizedLink to="/pricing">{t('shared.viewPricing')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
              <Button size="lg" variant="outline" asChild><LocalizedLink to="/contact">{t('shared.requestDemo')}</LocalizedLink></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
