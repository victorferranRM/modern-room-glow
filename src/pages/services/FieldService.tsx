import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Truck, Clock, MapPin, Shield, Users, Wrench, Phone, Volume2, Key, Search, Camera, HandshakeIcon } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { CoverCities } from "@/components/cover/CoverCities";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-field-service.jpg";
import interventionNoise from "@/assets/intervention-noise.jpg";
import interventionAccess from "@/assets/intervention-access.jpg";
import interventionInspection from "@/assets/intervention-inspection.jpg";
import interventionRepair from "@/assets/intervention-repair.jpg";
import interventionWelcome from "@/assets/intervention-welcome.jpg";
import interventionDocumentation from "@/assets/intervention-documentation.jpg";

const featureIcons = [MapPin, Clock, Users, Wrench, Shield, Phone];
const interventionIcons = [Volume2, Key, Search, Wrench, HandshakeIcon, Camera];
const interventionImages = [interventionNoise, interventionAccess, interventionInspection, interventionRepair, interventionWelcome, interventionDocumentation];

export default function FieldService() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceFieldService.stats') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceFieldService.features') ?? [];
  const interventionTypes = tObject<{ title: string; description: string }[]>('serviceFieldService.interventions') ?? [];
  const processSteps = tObject<{ step: string; title: string; description: string }[]>('serviceFieldService.process') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Truck} badge={t('serviceFieldService.badge')} title={t('serviceFieldService.title')} titleHighlight={t('serviceFieldService.titleHighlight')} description={t('serviceFieldService.description')} image={serviceImage} imageAlt={t('serviceFieldService.badge')} primaryCTA={{ text: t('serviceFieldService.heroCTA'), link: "/contact" }} />
      <ServiceStats stats={stats} />
      <CoverCities />
      <ServiceFeatures eyebrow={t('serviceFieldService.featuresEyebrow')} title={t('serviceFieldService.featuresTitle')} features={features} background="secondary" />

      {/* Intervention Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceFieldService.interventionsEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">{t('serviceFieldService.interventionsTitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">{t('serviceFieldService.interventionsSubtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {interventionTypes.map((type, i) => {
              const Icon = interventionIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 80}>
                  <div className="group relative rounded-2xl overflow-hidden h-72 cursor-default">
                    <img src={interventionImages[i]} alt={type.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center"><Icon className="w-4 h-4 text-primary-foreground" /></div>
                        <h3 className="text-white font-bold text-base">{type.title}</h3>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow={t('serviceFieldService.processEyebrow')} title={t('serviceFieldService.processTitle')} steps={howItWorks} background="secondary" />
      <ServiceCTA title={t('serviceFieldService.ctaTitle')} description={t('serviceFieldService.ctaDescription')} primaryCTA={{ text: t('serviceFieldService.heroCTA'), link: "/contact" }} />
      <Footer />
    </div>
  );
}
