import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import {
  Volume2, Users, Flame, Thermometer, Wifi, Battery,
  Shield, ArrowRight, Check, X, Zap, Settings, Download, Clock, Headphones
} from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import roomonitorDevice from "@/assets/roomonitor-device.webp";
import homeMonitoringNoise from "@/assets/home-monitoring-noise.webp";
import homeMonitoringOccupancy from "@/assets/home-monitoring-occupancy.webp";
import homeMonitoringSmoke from "@/assets/home-monitoring-smoke.webp";
import homeMonitoringEnvironment from "@/assets/home-monitoring-environment.webp";

const capabilityIcons = [Volume2, Users, Flame, Thermometer];
const capabilityImages = [homeMonitoringNoise, homeMonitoringOccupancy, homeMonitoringSmoke, homeMonitoringEnvironment];
const capabilityHrefs = ["/monitoring/noise", "/monitoring/occupancy", "/monitoring/smoke", "/monitoring/environment"];
const comparisonRoomonitor = [true, true, true, true, true, true, true, true, true];
const comparisonCompetitor = [false, true, false, true, false, false, false, false, false];

export default function Monitoring() {
  const { t, tObject } = useTranslation();
  const capabilities = tObject<{ title: string; description: string }[]>('monitoring.capabilities.items');
  const plans = {
    noiseAlarm: tObject<{ title: string; subtitle: string; features: string[] }>('monitoring.plans.noiseAlarm'),
    alarmAssistant: tObject<{ title: string; subtitle: string; features: string[] }>('monitoring.plans.alarmAssistant'),
  };
  const comparisonFeatureTexts = tObject<string[]>('monitoring.comparison.features');
  const installSteps = tObject<{ title: string; description: string }[]>('monitoring.installation.steps');
  const specs = tObject<{ label: string; value: string }[]>('monitoring.specs.items');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.hero.eyebrow')}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t('monitoring.hero.title')} <span className="gradient-text">{t('monitoring.hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{t('monitoring.hero.description')}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <LocalizedLink to="/pricing">{t('monitoring.hero.viewPlans')}<ArrowRight className="ml-2 h-4 w-4" /></LocalizedLink>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <LocalizedLink to="/how-it-works">{t('monitoring.hero.howItWorks')}</LocalizedLink>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <img src={roomonitorDevice} alt={t('monitoring.hero.eyebrow')} className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features Strip */}
      <section className="py-8 bg-foreground/5 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2"><Wifi className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('monitoring.features.wifi')}</span></div>
            <div className="flex items-center gap-2"><Battery className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('monitoring.features.battery')}</span></div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('monitoring.features.privacy')}</span></div>
            <div className="flex items-center gap-2"><Zap className="w-5 h-5 text-primary" /><span className="text-sm font-medium">{t('monitoring.features.realtime')}</span></div>
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.capabilities.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{t('monitoring.capabilities.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoring.capabilities.description')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap, index) => {
              const Icon = capabilityIcons[index];
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <LocalizedLink to={capabilityHrefs[index]} className="group block relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${capabilityImages[index]})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-colors duration-300" />
                    <div className="relative h-full flex flex-col justify-end p-6 text-white">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                      <p className="text-white/80 mb-4 text-sm">{cap.description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-white">
                        {t('shared.learnMore')}<ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </LocalizedLink>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.plans.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              {t('monitoring.plans.title')} <span className="gradient-text italic">{t('monitoring.plans.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoring.plans.description')}</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Noise Alarm Plan */}
              <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Volume2 className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plans.noiseAlarm.title}</h3>
                      <p className="text-sm text-muted-foreground">{plans.noiseAlarm.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plans.noiseAlarm.features.map((text, i) => (
                      <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{text}</span></li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" asChild>
                    <LocalizedLink to="/pricing">{t('shared.viewPricing')}<ArrowRight className="w-4 h-4 ml-2" /></LocalizedLink>
                  </Button>
                </div>
              </div>

              {/* Alarm Assistant Plan */}
              <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">{t('shared.recommended')}</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Headphones className="w-5 h-5 text-primary" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{plans.alarmAssistant.title}</h3>
                      <p className="text-sm text-muted-foreground">{plans.alarmAssistant.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plans.alarmAssistant.features.map((text, i) => (
                      <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-sm">{text}</span></li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <LocalizedLink to="/pricing">{t('shared.viewPricing')}<ArrowRight className="w-4 h-4 ml-2" /></LocalizedLink>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-[hsl(0,0%,100%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.comparison.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoring.comparison.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoring.comparison.description')}</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border bg-card">
              <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b">
                <div className="font-semibold">{t('monitoring.comparison.feature')}</div>
                <div className="text-center font-semibold text-primary">{t('monitoring.comparison.roomonitor')}</div>
                <div className="text-center font-semibold text-muted-foreground">{t('monitoring.comparison.others')}</div>
              </div>
              {comparisonFeatureTexts.map((feature, index) => (
                <div key={index} className={`grid grid-cols-3 p-4 items-center ${index !== comparisonFeatureTexts.length - 1 ? 'border-b' : ''}`}>
                  <div className="text-sm">{feature}</div>
                  <div className="flex justify-center">
                    {comparisonRoomonitor[index] ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center"><Check className="w-4 h-4 text-success" /></div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center"><X className="w-4 h-4 text-destructive" /></div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {comparisonCompetitor[index] ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center"><Check className="w-4 h-4 text-success" /></div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center"><X className="w-4 h-4 text-destructive" /></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.installation.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoring.installation.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('monitoring.installation.description')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {installSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="relative p-6 rounded-2xl border bg-card h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">{index + 1}</div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400} className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <LocalizedLink to="/installation-guide">
                <Download className="w-4 h-4" />{t('shared.installationManual')}
              </LocalizedLink>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="py-20 lg:py-28 bg-[hsl(0,0%,100%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('monitoring.specs.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('monitoring.specs.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t('monitoring.specs.description')}</p>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-foreground/5 to-muted/40 rounded-3xl blur-2xl" />
                <video src="/videos/roomonitor-floating.mp4" autoPlay loop muted playsInline className="relative w-full max-w-sm mx-auto rounded-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
