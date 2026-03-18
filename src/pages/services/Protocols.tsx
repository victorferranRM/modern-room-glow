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
import interventionNoise from "@/assets/intervention-noise.jpg";
import interventionAccess from "@/assets/intervention-access.jpg";
import interventionInspection from "@/assets/intervention-inspection.jpg";

const featureIcons = [FileText, ListChecks, Clock, Edit, Workflow, Shield];
const exampleImages = [interventionNoise, interventionAccess, interventionInspection];

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

      {/* Manager Software Notice - redesigned as inline subtle badge */}
      <section className="py-6 border-b relative">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-card border border-border/50 max-w-3xl mx-auto shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Monitor className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('serviceProtocols.managerNotice') }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServiceFeatures eyebrow={t('serviceProtocols.featuresEyebrow')} title={t('serviceProtocols.featuresTitle')} features={features} />

      <ProtocolExamples
        eyebrow={t('serviceProtocols.examplesEyebrow')}
        title={t('serviceProtocols.examplesTitle')}
        subtitle={t('serviceProtocols.examplesSubtitle')}
        protocols={protocolExamples}
        images={exampleImages}
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
