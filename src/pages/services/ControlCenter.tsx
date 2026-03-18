import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eye, Clock, Shield, AlertTriangle, Users, Zap, Brain } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-control-center.jpg";
import managerDevices from "@/assets/manager-devices.png";

const featureIcons = [Eye, Brain, AlertTriangle, Zap, Users, Shield];

export default function ControlCenter() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceControlCenter.stats') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceControlCenter.features') ?? [];
  const capabilities = tObject<string[]>('serviceControlCenter.capabilities') ?? [];
  const processSteps = tObject<{ step: string; title: string; description: string }[]>('serviceControlCenter.process') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Eye} badge={t('serviceControlCenter.badge')} title={t('serviceControlCenter.title')} titleHighlight={t('serviceControlCenter.titleHighlight')} description={t('serviceControlCenter.description')} image={serviceImage} imageAlt={t('serviceControlCenter.badge')} />
      <ServiceStats stats={stats} />
      <ServiceFeatures eyebrow={t('serviceControlCenter.featuresEyebrow')} title={t('serviceControlCenter.featuresTitle')} features={features} />
      <ServiceImageSection eyebrow={t('serviceControlCenter.imageSectionEyebrow')} title={t('serviceControlCenter.imageSectionTitle')} description={t('serviceControlCenter.imageSectionDescription')} features={capabilities} image={managerDevices} imageAlt={t('serviceControlCenter.badge')} ctaText={t('shared.learnMore')} ctaLink="/contact" background="secondary" />
      <ServiceProcess eyebrow={t('serviceControlCenter.processEyebrow')} title={t('serviceControlCenter.processTitle')} steps={howItWorks} />
      <ServiceCTA title={t('serviceControlCenter.ctaTitle')} description={t('serviceControlCenter.ctaDescription')} />
      <Footer />
    </div>
  );
}
