import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Wind, Calculator, Shield, Euro, Clock, Building, AlertTriangle, TrendingDown } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import solutionControl from "@/assets/solution-control.webp";

const problemIcons = [Euro, AlertTriangle, Clock, TrendingDown];

export default function Hotels() {
  const { t, tObject } = useTranslation();
  const problems = tObject<{ title: string; description: string }[]>('solutionHotels.problems');
  const benefits = tObject<string[]>('solutionHotels.solutionBenefits');
  const roiStats = tObject<{ label: string; value: string; perProperty: string }[]>('solutionHotels.roiStats');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building className="w-4 h-4" />{t('solutionHotels.badge')}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                <span className="block sm:inline">{t('solutionHotels.heroTitle1')}</span>{" "}
                <span className="text-primary block">{t('solutionHotels.heroTitle2')}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">{t('solutionHotels.heroDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/resources/savings-calculator"><Calculator className="mr-2 h-4 w-4" />{t('solutionHotels.calculateSavings')}</LocalizedLink></Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/contact">{t('solutionHotels.talkToSales')}</LocalizedLink></Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl" />
                <OptimizedImage src={solutionControl} alt={t('solutionHotels.badge')} className="relative w-full rounded-2xl shadow-2xl object-cover" containerClassName="relative w-full rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionHotels.problemEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionHotels.problemTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">{t('solutionHotels.problemSubtitle')}</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((issue, i) => {
              const Icon = problemIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="p-6 rounded-2xl bg-card border h-full">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-destructive" /></div>
                    <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
                    <p className="text-muted-foreground text-sm">{issue.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionHotels.solutionEyebrow')}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionHotels.solutionTitle')}</h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionHotels.solutionDescription')}</p>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-primary shrink-0" /><span>{benefit}</span></li>
                ))}
              </ul>
              <Button size="lg" asChild><LocalizedLink to="/monitoring/smoke">{t('solutionHotels.learnSmokeDetection')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><Wind className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold">{t('solutionHotels.deviceTitle')}</h3><p className="text-sm text-muted-foreground">{t('solutionHotels.deviceSubtitle')}</p></div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"><span className="text-sm">{t('solutionHotels.detectionStatus')}</span><span className="text-sm font-medium text-success flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success animate-pulse" />{t('solutionHotels.cleanAir')}</span></div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"><span className="text-sm">{t('solutionHotels.lastCheck')}</span><span className="text-sm font-medium">{t('solutionHotels.justNow')}</span></div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"><span className="text-sm">{t('solutionHotels.incidents30')}</span><span className="text-sm font-medium">0</span></div>
                </div>
                <p className="text-xs text-muted-foreground text-center">{t('solutionHotels.realtimeMonitoring')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionHotels.roiEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionHotels.roiTitle')}</h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {roiStats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                      <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-xs text-muted-foreground">{stat.perProperty}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">{t('solutionHotels.roiCalculate')}</p>
                  <Button size="lg" asChild><LocalizedLink to="/resources/savings-calculator"><Calculator className="mr-2 h-4 w-4" />{t('solutionHotels.openCalculator')}</LocalizedLink></Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionHotels.ctaTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionHotels.ctaDescription')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/contact">{t('shared.requestDemo')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/resources/savings-calculator">{t('solutionHotels.ctaCalculate')}</LocalizedLink></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
