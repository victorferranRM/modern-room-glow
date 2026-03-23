import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Volume2, Users, Wind, Thermometer, Home, Phone, Shield, Smartphone, Wifi, BatteryCharging } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import solutionManage from "@/assets/solution-manage.webp";
import roomonitorDevice from "@/assets/roomonitor-device.webp";

const monitoringIcons = [Volume2, Users, Wind, Thermometer];
const deviceSpecIcons = [Wifi, BatteryCharging, Smartphone];

export default function PropertyOwners() {
  const { t, tObject } = useTranslation();
  const deviceSpecs = tObject<{ label: string; value: string }[]>('solutionPropertyOwners.deviceSpecs');
  const monitoringFeatures = tObject<{ title: string; description: string }[]>('solutionPropertyOwners.monitoringFeatures');
  const guestAssistFeatures = tObject<string[]>('solutionPropertyOwners.guestAssistFeatures');
  const plans = tObject<{ name: string; price: string; period: string; devicePrice: string; description: string; features: string[]; cta: string }[]>('solutionPropertyOwners.plans');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Home className="w-4 h-4" />{t('solutionPropertyOwners.badge')}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                <span className="block sm:inline">{t('solutionPropertyOwners.heroTitle1')}</span>{" "}
                <span className="text-primary block">{t('solutionPropertyOwners.heroTitle2')}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">{t('solutionPropertyOwners.heroDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/checkout?plan=basic&properties=1">{t('solutionPropertyOwners.getDevice')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/monitoring">{t('solutionPropertyOwners.learnMore')}</LocalizedLink></Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl" />
                <img src={solutionManage} alt={t('solutionPropertyOwners.badge')} className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Device */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
                <img src={roomonitorDevice} alt={t('solutionPropertyOwners.deviceEyebrow')} className="relative w-full rounded-2xl shadow-xl max-w-md mx-auto" loading="lazy" decoding="async" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionPropertyOwners.deviceEyebrow')}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionPropertyOwners.deviceTitle')}</h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionPropertyOwners.deviceDescription')}</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {deviceSpecs.map((spec, i) => {
                  const Icon = deviceSpecIcons[i];
                  return (
                    <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-sm font-medium">{spec.value}</p>
                    </div>
                  );
                })}
              </div>
              <Button size="lg" asChild><LocalizedLink to="/monitoring">{t('solutionPropertyOwners.exploreDevice')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Monitoring */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionPropertyOwners.monitoringEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionPropertyOwners.monitoringTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringFeatures.map((feature, i) => {
              const Icon = monitoringIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guest Assist */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionPropertyOwners.guestAssistEyebrow')}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionPropertyOwners.guestAssistTitle')}</h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionPropertyOwners.guestAssistDescription')}</p>
              <ul className="space-y-3 mb-8">
                {guestAssistFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3"><Check className="w-5 h-5 text-primary shrink-0" /><span>{feature}</span></li>
                ))}
              </ul>
              <Button size="lg" asChild><LocalizedLink to="/services/guest-assist">{t('solutionPropertyOwners.learnGuestAssist')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"><Phone className="w-6 h-6 text-primary" /></div>
                  <div><h3 className="font-semibold">{t('solutionPropertyOwners.guestAssistLine')}</h3><p className="text-sm text-muted-foreground">{t('solutionPropertyOwners.guestAssistLineSubtitle')}</p></div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/50 text-sm"><p className="text-muted-foreground mb-1">{t('solutionPropertyOwners.guestInquiry')}</p><p>{t('solutionPropertyOwners.guestInquiryExample')}</p></div>
                  <div className="p-3 rounded-lg bg-primary/10 text-sm"><p className="text-muted-foreground mb-1">{t('solutionPropertyOwners.guestAssistResponse')}</p><p>{t('solutionPropertyOwners.guestAssistResponseExample')}</p></div>
                </div>
                <p className="text-xs text-muted-foreground text-center">{t('solutionPropertyOwners.handledProfessionally')}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionPropertyOwners.pricingEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionPropertyOwners.pricingTitle')}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, i) => {
              const popular = i === 1;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className={`relative p-6 rounded-2xl bg-card border h-full ${popular ? 'border-primary shadow-lg' : ''}`}>
                    {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">{t('solutionPropertyOwners.recommendedLabel')}</div>}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4"><span className="text-2xl sm:text-3xl font-bold">€{plan.price}</span><span className="text-muted-foreground text-sm">{plan.period}</span></div>
                    <p className="text-xs text-muted-foreground mb-6">{t('solutionVacationRentals.device')}: {plan.devicePrice === 'Incluido' || plan.devicePrice === 'Included' ? plan.devicePrice : `€${plan.devicePrice}`}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" />{feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={popular ? "default" : "outline"} asChild>
                      <LocalizedLink to={`/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>{plan.cta}</LocalizedLink>
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionPropertyOwners.ctaTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionPropertyOwners.ctaDescription')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/checkout?plan=basic&properties=1">{t('solutionPropertyOwners.getDevice')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/contact">{t('solutionPropertyOwners.askQuestion')}</LocalizedLink></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
