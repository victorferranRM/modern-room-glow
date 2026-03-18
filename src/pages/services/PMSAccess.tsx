import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, Settings, Key, Shield, Link2, Database, Lock, Workflow } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-pms-access.jpg";

const featureIcons = [Key, Database, Workflow, Link2, Lock, Shield];
const securityIcons = [Key, Shield, Lock];

export default function PMSAccess() {
  const { t, tObject } = useTranslation();
  const featuresData = tObject<{ title: string; description: string }[]>('servicePMSAccess.features') ?? [];
  const platforms = tObject<{ name: string; logo: string }[]>('servicePMSAccess.platforms') ?? [];
  const howWeWork = tObject<{ step: string; title: string; description: string }[]>('servicePMSAccess.process') ?? [];
  const capabilities = tObject<string[]>('servicePMSAccess.capabilities') ?? [];
  const securityCards = tObject<{ title: string; desc: string }[]>('servicePMSAccess.securityCards') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Settings} badge={t('servicePMSAccess.badge')} title={t('servicePMSAccess.title')} titleHighlight={t('servicePMSAccess.titleHighlight')} description={t('servicePMSAccess.description')} image={serviceImage} imageAlt={t('servicePMSAccess.badge')} secondaryCTA={{ text: t('servicePMSAccess.heroSecondary'), link: "/integrations" }} />

      {/* Supported Platforms */}
      <section className="py-12 bg-card border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm text-muted-foreground">{t('servicePMSAccess.platformsSubtitle')}</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {platforms.map((platform, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">{platform.logo}</div>
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow={t('servicePMSAccess.featuresEyebrow')} title={t('servicePMSAccess.featuresTitle')} features={features} />
      <ServiceProcess eyebrow={t('servicePMSAccess.processEyebrow')} title={t('servicePMSAccess.processTitle')} steps={howWeWork} background="secondary" columns={3} />

      {/* What We Can Do */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('servicePMSAccess.actionsEyebrow')}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">{t('servicePMSAccess.actionsTitle')}</h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">{t('servicePMSAccess.actionsDescription')}</p>
              <ul className="grid grid-cols-1 gap-3">
                {capabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110"><Check className="w-4 h-4 text-primary" /></div>
                    <span className="text-sm transition-colors group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={200} animation="fade-left">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-card border hover:shadow-xl transition-all duration-500">
                <div className="space-y-4">
                  {securityCards.map((item, i) => {
                    const Icon = securityIcons[i];
                    return (
                      <div key={i} className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20"><Icon className="w-4 h-4 text-primary" /></div>
                          <span className="font-medium transition-colors group-hover:text-primary">{item.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceCTA title={t('servicePMSAccess.ctaTitle')} description={t('servicePMSAccess.ctaDescription')} primaryCTA={{ text: t('servicePMSAccess.ctaPrimary'), link: "/contact" }} secondaryCTA={{ text: t('servicePMSAccess.ctaSecondary'), link: "/integrations" }} />
      <Footer />
    </div>
  );
}
