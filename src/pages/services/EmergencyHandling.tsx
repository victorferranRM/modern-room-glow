import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Siren, Clock, Shield, Phone, AlertTriangle, Users, Flame, Droplets, HeartPulse, Lock } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-emergency.webp";
import managerDevices from "@/assets/manager-devices.webp";

const featureIcons = [Siren, Clock, Phone, Users, Shield, AlertTriangle];
const emergencyIcons = [Flame, Droplets, Lock, HeartPulse];

export default function EmergencyHandling() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceEmergencyHandling.stats') ?? [];
  const emergencyTypes = tObject<{ title: string; description: string; response: string }[]>('serviceEmergencyHandling.types') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceEmergencyHandling.features') ?? [];
  const responseProtocol = tObject<{ step: string; title: string; description: string }[]>('serviceEmergencyHandling.process') ?? [];
  const managerFeatures = tObject<string[]>('serviceEmergencyHandling.managerFeatures') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Siren} badge={t('serviceEmergencyHandling.badge')} title={t('serviceEmergencyHandling.title')} titleHighlight={t('serviceEmergencyHandling.titleHighlight')} description={t('serviceEmergencyHandling.description')} image={serviceImage} imageAlt={t('serviceEmergencyHandling.badge')} variant="destructive" />
      <ServiceStats stats={stats} />

      {/* Emergency Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceEmergencyHandling.typesEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">{t('serviceEmergencyHandling.typesTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyTypes.map((type, i) => {
              const Icon = emergencyIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-destructive/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-destructive/20">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold transition-colors group-hover:text-destructive">{type.title}</h3>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20">{type.response}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{type.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow={t('serviceEmergencyHandling.featuresEyebrow')} title={t('serviceEmergencyHandling.featuresTitle')} features={features} background="secondary" />
      <ServiceProcess eyebrow={t('serviceEmergencyHandling.processEyebrow')} title={t('serviceEmergencyHandling.processTitle')} steps={responseProtocol} columns={5} />
      <ServiceImageSection eyebrow={t('serviceEmergencyHandling.managerEyebrow')} title={t('serviceEmergencyHandling.managerTitle')} description={t('serviceEmergencyHandling.managerDescription')} features={managerFeatures} image={managerDevices} imageAlt={t('serviceEmergencyHandling.badge')} ctaText={t('serviceEmergencyHandling.managerCTA')} ctaLink="/how-it-works" background="secondary" reversed />
      <ServiceCTA title={t('serviceEmergencyHandling.ctaTitle')} description={t('serviceEmergencyHandling.ctaDescription')} />
      <Footer />
    </div>
  );
}
