import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Moon, Eye, Bell, Shield, Users, Volume2, UserCheck } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-night-watch.jpg";
import managerDevices from "@/assets/manager-devices.png";

const featureIcons = [Moon, Eye, Volume2, UserCheck, Bell, Shield];

export default function NightWatch() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceNightWatch.stats') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceNightWatch.features') ?? [];
  const coverageHours = tObject<{ day: string; hours: string }[]>('serviceNightWatch.coverageHours') ?? [];
  const preventionProcess = tObject<{ step: string; title: string; description: string }[]>('serviceNightWatch.process') ?? [];
  const partyPrevention = tObject<string[]>('serviceNightWatch.preventionFeatures') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Moon} badge={t('serviceNightWatch.badge')} title={t('serviceNightWatch.title')} titleHighlight={t('serviceNightWatch.titleHighlight')} description={t('serviceNightWatch.description')} image={serviceImage} imageAlt={t('serviceNightWatch.badge')} />
      <ServiceStats stats={stats} />

      {/* Coverage Hours */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceNightWatch.coverageEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">{t('serviceNightWatch.coverageTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">{t('serviceNightWatch.coverageSubtitle')}</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {coverageHours.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Moon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base transition-colors group-hover:text-primary">{item.day}</h3>
                  <p className="text-primary font-medium text-lg">{item.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow={t('serviceNightWatch.featuresEyebrow')} title={t('serviceNightWatch.featuresTitle')} features={features} background="secondary" />
      <ServiceProcess eyebrow={t('serviceNightWatch.processEyebrow')} title={t('serviceNightWatch.processTitle')} steps={preventionProcess} />
      <ServiceImageSection eyebrow={t('serviceNightWatch.imageSectionEyebrow')} title={t('serviceNightWatch.imageSectionTitle')} description={t('serviceNightWatch.imageSectionDescription')} features={partyPrevention} image={managerDevices} imageAlt={t('serviceNightWatch.badge')} ctaText={t('serviceNightWatch.imageSectionCTA')} ctaLink="/contact" background="secondary" />
      <ServiceCTA title={t('serviceNightWatch.ctaTitle')} description={t('serviceNightWatch.ctaDescription')} />
      <Footer />
    </div>
  );
}
