import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingCarousel } from "@/components/pricing/PricingCarousel";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, ArrowRight, MessageSquare, Building2, Zap, BadgeCheck, Bell, Smartphone, Mail, PhoneCall, Headphones, Clock, Users, BarChart3, Moon, MapPin, FileText, AlertCircle, KeyRound } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import serviceControlCenter from "@/assets/service-control-center.webp";

const planIcons = {
  basic: [Bell, Zap, Smartphone, Mail],
  pro: [Check, PhoneCall, Headphones, Clock],
  enterprise: [Check, BarChart3, PhoneCall, Moon, MapPin, FileText, AlertCircle, KeyRound, Users],
};
const coverServiceIcons = [Headphones, PhoneCall, Users, FileText];

export default function Pricing() {
  const { t, tObject } = useTranslation();
  const navigate = useNavigate();
  const [properties, setProperties] = useState(3);
  const isEnterprise = properties > 10;

  const basicDeviceTotal = 45 * properties;
  const basicMonthlyTotal = 13 * properties;
  const proMonthlyTotal = 29.90 * properties;

  const plans = tObject<Record<string, { name: string; subtitle: string; features: string[] }>>('pricing.plans');
  const coverServices = tObject<{ title: string; description: string }[]>('pricing.coverServices');

  const goToCheckout = (plan: "basic" | "pro") => {
    navigate(`/checkout?plan=${plan}&properties=${properties}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 lg:pt-32">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BadgeCheck className="w-4 h-4" />
              <span>{t('pricing.heroBadge')}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
              {t('pricing.heroHeadline')}{" "}
              <span className="gradient-text block sm:inline">{t('pricing.heroHeadlineHighlight')}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('pricing.heroSubtitle')}</p>
          </AnimatedSection>
        </section>

        {/* Property Selector */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <AnimatedSection delay={100} className="max-w-2xl mx-auto">
            <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{t('pricing.howManyProperties')}</h3>
                  <p className="text-sm text-muted-foreground">{t('pricing.adjustPortfolio')}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground">{properties}</span>
                  <span className="text-muted-foreground">{properties === 1 ? t('pricing.property') : t('pricing.properties')}</span>
                </div>
              </div>
              <div className="space-y-4">
                <Slider value={[properties]} onValueChange={(value) => setProperties(value[0])} min={1} max={15} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span className="text-primary font-medium">{t('pricing.selfServiceUpTo')}</span>
                  <span>15+</span>
                </div>
              </div>
              {isEnterprise && (
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm text-foreground"><span className="font-semibold">{t('pricing.largerPortfolio')}</span>{" "}{t('pricing.largerPortfolioDesc')}</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <PricingCarousel properties={properties} isEnterprise={isEnterprise} basicDeviceTotal={basicDeviceTotal} basicMonthlyTotal={basicMonthlyTotal} proMonthlyTotal={proMonthlyTotal} />

          <div className="hidden lg:block max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Basic */}
              <AnimatedSection delay={150} animation="fade-up">
                <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plans?.basic?.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{plans?.basic?.subtitle}</p>
                    </div>
                    <div className="space-y-3">
                      {!isEnterprise ? (
                        <>
                          <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg text-muted-foreground line-through">€90</span>
                              <span className="text-3xl font-bold text-foreground">€45</span>
                              <span className="text-sm text-muted-foreground">{t('pricing.oneTimePayment')}</span>
                            </div>
                            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">{t('pricing.webExclusive')}</div>
                          </div>
                          <div className="pt-2 border-t border-border">
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold text-foreground">€13</span>
                              <span className="text-muted-foreground">{t('pricing.perMonth')}</span>
                            </div>
                          </div>
                          {properties > 1 && (
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                              {t('pricing.propertiesLabel', { n: String(properties), device: String(basicDeviceTotal), monthly: String(basicMonthlyTotal) })}
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">{t('pricing.contactSales')}</div>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {plans?.basic?.features.map((feature, fi) => {
                        const Icon = planIcons.basic[fi] || Check;
                        return <li key={fi} className="flex items-start gap-3"><Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{feature}</span></li>;
                      })}
                    </ul>
                    {!isEnterprise ? (
                      <Button className="w-full" size="lg" onClick={() => goToCheckout("basic")}>{t('pricing.buyNow')}<ArrowRight className="w-4 h-4 ml-2" /></Button>
                    ) : (
                      <Button className="w-full" size="lg" variant="outline" asChild><LocalizedLink to="/contact?inquiry=enterprise"><MessageSquare className="w-4 h-4 mr-2" />{t('pricing.talkToSpecialist')}</LocalizedLink></Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Pro */}
              <AnimatedSection delay={250} animation="fade-up">
                <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-soft-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2"><span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">{t('pricing.mostPopular')}</span></div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plans?.pro?.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{plans?.pro?.subtitle}</p>
                    </div>
                    <div className="space-y-3">
                      {!isEnterprise ? (
                        <>
                          <div className="flex items-baseline gap-1"><span className="text-3xl font-bold text-foreground">€29,90</span><span className="text-muted-foreground">{t('pricing.perMonth')}</span></div>
                          <p className="text-sm text-muted-foreground">{t('pricing.carousel.plusDevice')}</p>
                          {properties > 1 && (
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                              {t('pricing.propertiesLabel', { n: String(properties), device: String(basicDeviceTotal), monthly: proMonthlyTotal.toFixed(2).replace('.00', '') })}
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">{t('pricing.contactSales')}</div>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {plans?.pro?.features.map((feature, fi) => {
                        const Icon = planIcons.pro[fi] || Check;
                        return <li key={fi} className="flex items-start gap-3"><Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{feature}</span></li>;
                      })}
                    </ul>
                    {!isEnterprise ? (
                      <Button className="w-full shadow-soft" size="lg" onClick={() => goToCheckout("pro")}>{t('pricing.buyNow')}<ArrowRight className="w-4 h-4 ml-2" /></Button>
                    ) : (
                      <Button className="w-full" size="lg" variant="outline" asChild><LocalizedLink to="/contact?inquiry=enterprise"><MessageSquare className="w-4 h-4 mr-2" />{t('pricing.talkToSpecialist')}</LocalizedLink></Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Enterprise */}
              <AnimatedSection delay={350} animation="fade-up">
                <div className="bg-gradient-to-br from-secondary to-muted border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plans?.enterprise?.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{plans?.enterprise?.subtitle}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1"><span className="text-sm text-muted-foreground">{t('pricing.from')}</span><span className="text-3xl font-bold text-foreground">€79,90</span><span className="text-muted-foreground">{t('pricing.perProperty')}</span></div>
                      <p className="text-sm text-muted-foreground">{t('pricing.variablePrice')}</p>
                    </div>
                    <ul className="space-y-3">
                      {plans?.enterprise?.features.map((feature, fi) => {
                        const Icon = planIcons.enterprise[fi] || Check;
                        return <li key={fi} className="flex items-start gap-3"><Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm text-foreground">{feature}</span></li>;
                      })}
                    </ul>
                    <Button className="w-full" size="lg" variant="outline" asChild><LocalizedLink to="/contact?inquiry=enterprise"><MessageSquare className="w-4 h-4 mr-2" />{t('pricing.talkToSpecialist')}</LocalizedLink></Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <AnimatedSection delay={200}><ComparisonTable properties={properties} /></AnimatedSection>

        {/* Cover Services */}
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">{t('pricing.coverTitle')}</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{t('pricing.coverDescription')}</p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {coverServices?.map((service, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="bg-card border rounded-xl p-5 text-center hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        {(() => { const Icon = coverServiceIcons[i]; return <Icon className="w-6 h-6 text-primary" />; })()}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={200}>
                <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 relative">
                      <img src={serviceControlCenter} alt="Control Center" className="w-full h-56 lg:h-full object-cover" loading="lazy" decoding="async" />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/30 to-transparent" />
                    </div>
                    <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Zap className="w-4 h-4 text-primary" /></div>
                        <span className="text-xs font-medium uppercase tracking-wider text-primary">{t('pricing.approachEyebrow')}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{t('pricing.approachTitle')} <span className="gradient-text">{t('pricing.approachHighlight')}</span></h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t('pricing.approachDescription')}</p>
                      <div>
                        <Button size="lg" asChild><LocalizedLink to="/contact?inquiry=services">{t('pricing.approachCta')}<ArrowRight className="w-4 h-4 ml-2" /></LocalizedLink></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
