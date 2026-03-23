import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Volume2, Users, Wind, Thermometer, Headphones, Shield, Clock, MapPin, Phone, FileText, Building2 } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import solutionRest from "@/assets/solution-rest-new.webp";

const serviceIcons = [Volume2, Users, Wind, Thermometer, Headphones, Phone, MapPin, FileText];
const serviceHrefs = ["/monitoring/noise", "/monitoring/occupancy", "/monitoring/smoke", "/monitoring/environment", "/services/control-center", "/services/guest-assist", "/services/field-service", "/services/protocols"];

export default function VacationRentals() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('solutionVacationRentals.stats');
  const services = tObject<{ title: string; description: string }[]>('solutionVacationRentals.services');
  const plans = tObject<{ name: string; price: string; period: string; devicePrice: string; description: string; features: string[]; cta: string }[]>('solutionVacationRentals.plans');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />{t('solutionVacationRentals.badge')}</div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                <span className="block sm:inline">{t('solutionVacationRentals.heroTitle1')}</span>{" "}
                <span className="text-primary block">{t('solutionVacationRentals.heroTitle2')}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">{t('solutionVacationRentals.heroDescription')}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/checkout?plan=pro&properties=1">{t('solutionVacationRentals.getStarted')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/contact">{t('solutionVacationRentals.talkToSales')}</LocalizedLink></Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl" />
                <OptimizedImage src={solutionRest} alt={t('solutionVacationRentals.badge')} className="relative w-full rounded-2xl shadow-2xl object-cover" containerClassName="relative w-full rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionVacationRentals.servicesEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionVacationRentals.servicesTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">{t('solutionVacationRentals.servicesSubtitle')}</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <LocalizedLink to={serviceHrefs[i]} className="block p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"><Icon className="w-6 h-6 text-primary" /></div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </LocalizedLink>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('solutionVacationRentals.pricingEyebrow')}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionVacationRentals.pricingTitle')}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => {
              const popular = i === 1;
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className={`relative p-6 rounded-2xl bg-card border h-full ${popular ? 'border-primary shadow-lg' : ''}`}>
                    {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">{t('solutionVacationRentals.mostPopular')}</div>}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4"><span className="text-3xl font-bold">€{plan.price}</span><span className="text-muted-foreground text-sm">{plan.period}</span></div>
                    <p className="text-xs text-muted-foreground mb-6">{t('solutionVacationRentals.device')}: {plan.devicePrice === 'Incluido' || plan.devicePrice === 'Included' ? plan.devicePrice : `€${plan.devicePrice}`}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" />{feature}</li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={popular ? "default" : "outline"} asChild>
                      <LocalizedLink to={i === 2 ? "/contact" : `/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>{plan.cta}</LocalizedLink>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{t('solutionVacationRentals.ctaTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('solutionVacationRentals.ctaDescription')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild><LocalizedLink to="/checkout?plan=pro&properties=1">{t('solutionVacationRentals.getStarted')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink></Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><LocalizedLink to="/contact">{t('solutionVacationRentals.scheduleDemo')}</LocalizedLink></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
