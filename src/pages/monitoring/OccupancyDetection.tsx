import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { MonitoringBanner } from "@/components/monitoring/MonitoringBanner";
import { Button } from "@/components/ui/button";
import { Users, Eye, ArrowRight, Check, TrendingUp, UserCheck, AlertTriangle } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import monitoringOccupancy from "@/assets/monitoring-occupancy.webp";
import managerDevices from "@/assets/manager-devices.png";

const featureIcons = [Eye, AlertTriangle, UserCheck, TrendingUp];

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

export default function OccupancyDetection() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('monitoringOccupancy.stats');
  const features = tObject<{ title: string; description: string }[]>('monitoringOccupancy.features');
  const howItWorks = tObject<{ step: string; title: string; description: string }[]>('monitoringOccupancy.howItWorks');
  const managerFeatures = tObject<string[]>('monitoringOccupancy.managerFeatures');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MonitoringHero icon={Users} badge={t('monitoringOccupancy.badge')} title={t('monitoringOccupancy.title')} titleHighlight={t('monitoringOccupancy.titleHighlight')} description={t('monitoringOccupancy.description')} image={monitoringOccupancy} imageAlt={t('monitoringOccupancy.badge')} breadcrumbLabel={t('monitoringOccupancy.breadcrumb')} />

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
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoringOccupancy.featuresEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringOccupancy.featuresTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoringOccupancy.featuresSubtitle')}</p>
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
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoringOccupancy.howItWorksEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringOccupancy.howItWorksTitle')}</h2>
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

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoringOccupancy.managerEyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringOccupancy.managerTitle')}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t('monitoringOccupancy.managerDescription')}</p>
              <ul className="space-y-3 mb-8">{managerFeatures.map((text, i) => <ManagerCheckItem key={i} text={text} />)}</ul>
              <Button asChild><LocalizedLink to="/how-it-works">{t('shared.exploreManager')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-muted/80" />
                <img src={managerDevices} alt={t('monitoringOccupancy.managerEyebrow')} className="relative w-full rounded-2xl shadow-lg border border-border/50" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoringOccupancy.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('monitoringOccupancy.ctaDescription')}</p>
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
