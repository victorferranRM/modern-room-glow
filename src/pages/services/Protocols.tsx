import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, Clock, Edit, Shield, ListChecks, Workflow, Monitor } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ProtocolExamples } from "@/components/services/ProtocolExamples";
import { useTranslation } from "@/i18n/useTranslation";
import heroImage from "@/assets/cover-protocols.webp";
import protocolsManagerImage from "@/assets/protocols-manager.webp";

const featureIcons = [FileText, ListChecks, Clock, Edit, Workflow, Shield];

export default function Protocols() {
  const { t, tObject } = useTranslation();
  const featuresData = tObject<{ title: string; description: string }[]>('serviceProtocols.features') ?? [];
  const protocolExamples = tObject<{ title: string; steps: string[] }[]>('serviceProtocols.examples') ?? [];
  const setupProcess = tObject<{ step: string; title: string; description: string }[]>('serviceProtocols.setup') ?? [];
  const protocolBenefits = tObject<string[]>('serviceProtocols.benefitsFeatures') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={FileText} badge={t('serviceProtocols.badge')} title={t('serviceProtocols.title')} titleHighlight={t('serviceProtocols.titleHighlight')} description={t('serviceProtocols.description')} image={heroImage} imageAlt={t('serviceProtocols.badge')} />

      {/* Manager Software Notice */}
      <section className="py-12 bg-primary/5 border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="flex items-center justify-center gap-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110"><Monitor className="w-6 h-6 text-primary" /></div>
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: t('serviceProtocols.managerNotice') }} />
          </AnimatedSection>
        </div>
      </section>

      <ServiceFeatures eyebrow={t('serviceProtocols.featuresEyebrow')} title={t('serviceProtocols.featuresTitle')} features={features} />

      <ProtocolExamples
        eyebrow={t('serviceProtocols.examplesEyebrow')}
        title={t('serviceProtocols.examplesTitle')}
        subtitle={t('serviceProtocols.examplesSubtitle')}
        protocols={protocolExamples}
      />

      {/* Benefits with image - white background */}
      <ServiceImageSection
        eyebrow={t('serviceProtocols.benefitsEyebrow')}
        title={t('serviceProtocols.benefitsTitle')}
        description={t('serviceProtocols.benefitsDescription')}
        features={protocolBenefits}
        image={protocolsManagerImage}
        imageAlt={t('serviceProtocols.benefitsImageAlt')}
        ctaText={t('serviceProtocols.benefitsCTA')}
        ctaLink="/contact"
        background="white"
        ctaPosition="below-image"
      />

      <ServiceProcess eyebrow={t('serviceProtocols.setupEyebrow')} title={t('serviceProtocols.setupTitle')} steps={setupProcess} background="secondary" />

      <ServiceCTA title={t('serviceProtocols.ctaTitle')} description={t('serviceProtocols.ctaDescription')} primaryCTA={{ text: t('serviceProtocols.ctaPrimary'), link: "/contact" }} />
      <Footer />
    </div>
  );
}
