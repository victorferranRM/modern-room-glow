import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Settings, Zap, SmilePlus, Star, Gauge, ShieldCheck, BarChart3 } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import heroImage from "@/assets/hero-pms-access.webp";
import smartlockImage from "@/assets/smartlock-access.webp";
import pmsAvantio from "@/assets/pms/avantio.webp";
import pmsAvaibook from "@/assets/pms/avaibook.webp";
import pmsGuesty from "@/assets/pms/guesty.webp";
import pmsHostify from "@/assets/pms/hostify.webp";
import pmsKross from "@/assets/pms/kross.webp";

const benefitIcons = [Zap, SmilePlus, Star, Gauge, ShieldCheck, BarChart3];

const pmsLogos: { name: string; logo: string }[] = [
  { name: "Avantio", logo: pmsAvantio },
  { name: "AvaiBook", logo: pmsAvaibook },
  { name: "Guesty", logo: pmsGuesty },
  { name: "Hostify", logo: pmsHostify },
  { name: "Kross Booking", logo: pmsKross },
];

export default function PMSAccess() {
  const { t, tObject } = useTranslation();
  const benefits = tObject<{ title: string; description: string }[]>('servicePMSAccess.benefits') ?? [];
  const smartlocksFeatures = tObject<string[]>('servicePMSAccess.smartlocksFeatures') ?? [];
  const processSteps = tObject<{ step: string; title: string; description: string }[]>('servicePMSAccess.process') ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero
        icon={Settings}
        badge={t('servicePMSAccess.badge')}
        title={t('servicePMSAccess.title')}
        titleHighlight={t('servicePMSAccess.titleHighlight')}
        description={t('servicePMSAccess.description')}
        image={heroImage}
        imageAlt={t('servicePMSAccess.badge')}
        primaryCTA={{ text: t('servicePMSAccess.ctaPrimary'), link: "/contact" }}
      />

      {/* Section 1 — Why integration matters */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">{t('servicePMSAccess.benefitsEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">{t('servicePMSAccess.benefitsTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="group p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2 — Smartlocks */}
      <ServiceImageSection
        eyebrow={t('servicePMSAccess.smartlocksEyebrow')}
        title={t('servicePMSAccess.smartlocksTitle')}
        description={t('servicePMSAccess.smartlocksDescription')}
        features={smartlocksFeatures}
        image={smartlockImage}
        imageAlt="Smart lock access for vacation rentals"
        ctaText={t('servicePMSAccess.ctaPrimary')}
        ctaLink="/contact"
        background="white"
      />

      {/* Section 3 — How integration works */}
      <ServiceProcess
        eyebrow={t('servicePMSAccess.processEyebrow')}
        title={t('servicePMSAccess.processTitle')}
        steps={processSteps}
        columns={3}
      />

      {/* Section 4 — Compatible PMS */}
      <section className="py-20 lg:py-28 bg-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-background">
              {t('servicePMSAccess.pmsTitle')}
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-10">
            {pmsLogos.map((pms, i) => (
              <AnimatedSection key={pms.name} delay={i * 80}>
                <div className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-white/15 backdrop-blur-sm border border-background/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 min-w-[140px]">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1.5">
                    <img src={pms.logo} alt={pms.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium text-background/80">{pms.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <p className="text-sm text-background/50">{t('servicePMSAccess.pmsFooter')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-balance">
              {t('servicePMSAccess.ctaTitle')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-8">
              {t('servicePMSAccess.ctaDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                {t('servicePMSAccess.ctaPrimary')}
              </a>
              <a
                href="https://api.roomonitor.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 border border-input bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                {t('servicePMSAccess.ctaSecondary')}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
