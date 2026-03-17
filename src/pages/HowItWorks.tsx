import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, Package, Wifi, Shield, Headphones, CheckCircle2, Clock, Users, BarChart3, Zap, Building2, MessageSquare } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const stepIcons = [Package, Wifi, Shield, Headphones];
const benefitIcons = [Clock, Users, BarChart3, Zap];

export default function HowItWorks() {
  const { t, tObject } = useTranslation();
  const steps = tObject<{ title: string; description: string; details: string[] }[]>('howItWorks.steps');
  const benefits = tObject<{ title: string; description: string }[]>('howItWorks.benefits');
  const faqs = tObject<{ question: string; answer: string }[]>('howItWorks.faqs');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>{t('howItWorks.badge')}</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
                  {t('howItWorks.heroTitle')}{" "}<span className="gradient-text">{t('howItWorks.heroTitleHighlight')}</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">{t('howItWorks.heroDescription')}</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {steps?.map((step, index) => {
                const StepIcon = stepIcons[index];
                const num = String(index + 1).padStart(2, "0");
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100} className="mb-16 last:mb-0">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-6xl font-bold text-primary/20">{num}</span>
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"><StepIcon className="w-7 h-7 text-primary" /></div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{step.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, di) => (
                            <li key={di} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-muted-foreground">{detail}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
                          <div className="relative bg-card border rounded-3xl p-8 lg:p-12">
                            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><StepIcon className="w-10 h-10 text-primary" /></div>
                            <div className="text-center">
                              <p className="text-4xl font-bold text-foreground mb-2">Step {num}</p>
                              <p className="text-muted-foreground">{step.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">{t('howItWorks.resultsTitle')}</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t('howItWorks.resultsDescription')}</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits?.map((benefit, index) => {
                const BIcon = benefitIcons[index];
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-soft transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><BIcon className="w-6 h-6 text-primary" /></div>
                      <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">{t('howItWorks.faqTitle')}</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t('howItWorks.faqDescription')}</p>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs?.map((faq, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                  <div className="bg-card border rounded-2xl p-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-3"><MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />{faq.question}</h3>
                    <p className="text-muted-foreground pl-8">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6"><Building2 className="w-8 h-8 text-primary-foreground" /></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">{t('howItWorks.ctaTitle')}</h2>
                <p className="text-base sm:text-lg text-background/70 mb-6 sm:mb-8 max-w-2xl mx-auto">{t('howItWorks.ctaDescription')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <LocalizedLink to="/contact?inquiry=demo">{t('howItWorks.bookDemo')}<ArrowRight className="w-4 h-4 ml-2" /></LocalizedLink>
                  </Button>
                  <Button size="lg" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10" asChild>
                    <LocalizedLink to="/pricing">{t('about.viewPricing')}</LocalizedLink>
                  </Button>
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
