import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FileText, Clock, Check, Shield, Settings, ListChecks, Workflow, Edit, Book, Monitor } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-protocols.jpg";
import managerDevices from "@/assets/manager-devices.png";

const featureIcons = [FileText, ListChecks, Clock, Edit, Workflow, Shield];

export default function Protocols() {
  const { t, tObject } = useTranslation();
  const featuresData = tObject<{ title: string; description: string }[]>('serviceProtocols.features');
  const protocolExamples = tObject<{ title: string; steps: string[] }[]>('serviceProtocols.examples');
  const setupProcess = tObject<{ step: string; title: string; description: string }[]>('serviceProtocols.setupProcess');
  const protocolBenefits = tObject<string[]>('serviceProtocols.benefits');

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={FileText} badge={t('serviceProtocols.badge')} title={t('serviceProtocols.title')} titleHighlight={t('serviceProtocols.titleHighlight')} description={t('serviceProtocols.description')} image={serviceImage} imageAlt={t('serviceProtocols.badge')} />

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

      {/* Protocol Examples */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceProtocols.examplesEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('serviceProtocols.examplesTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('serviceProtocols.examplesSubtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {protocolExamples.map((protocol, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20"><Book className="w-5 h-5 text-primary" /></div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">{protocol.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {protocol.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 group/step">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 group-hover/step:bg-primary/20 group-hover/step:text-primary">{j + 1}</span>
                        <span className="text-sm text-muted-foreground transition-colors group-hover/step:text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow={t('serviceProtocols.setupEyebrow')} title={t('serviceProtocols.setupTitle')} steps={setupProcess} />
      <ServiceImageSection eyebrow={t('serviceProtocols.benefitsEyebrow')} title={t('serviceProtocols.benefitsTitle')} description={t('serviceProtocols.benefitsDescription')} features={protocolBenefits} image={managerDevices} imageAlt={t('serviceProtocols.badge')} ctaText={t('serviceProtocols.benefitsCTA')} ctaLink="/contact" background="secondary" />
      <ServiceCTA title={t('serviceProtocols.ctaTitle')} description={t('serviceProtocols.ctaDescription')} />
      <Footer />
    </div>
  );
}
