import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AlertTriangle, Bell, Users, FileText, Radio, Workflow, Volume2, Flame, UserCheck, WifiOff, Thermometer } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-incident-response.jpg";
import managerDevices from "@/assets/manager-devices.png";

const featureIcons = [Bell, AlertTriangle, Users, Workflow, Radio, FileText];
const incidentIcons = [Volume2, Users, Flame, UserCheck, WifiOff, Thermometer];
const incidentColors = [
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-muted text-muted-foreground border-muted",
  "bg-muted text-muted-foreground border-muted",
];

export default function IncidentResponse() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceIncidentResponse.stats') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceIncidentResponse.features') ?? [];
  const incidentTypes = tObject<{ title: string; description: string; severity: string }[]>('serviceIncidentResponse.types') ?? [];
  const responseProcess = tObject<{ step: string; title: string; description: string }[]>('serviceIncidentResponse.process') ?? [];
  const managerFeatures = tObject<string[]>('serviceIncidentResponse.managerFeatures') ?? [];

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={AlertTriangle} badge={t('serviceIncidentResponse.badge')} title={t('serviceIncidentResponse.title')} titleHighlight={t('serviceIncidentResponse.titleHighlight')} description={t('serviceIncidentResponse.description')} image={serviceImage} imageAlt={t('serviceIncidentResponse.badge')} />
      <ServiceStats stats={stats} />
      <ServiceFeatures eyebrow={t('serviceIncidentResponse.featuresEyebrow')} title={t('serviceIncidentResponse.featuresTitle')} features={features} />

      {/* Incident Types */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceIncidentResponse.typesEyebrow')}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">{t('serviceIncidentResponse.typesTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incidentTypes.map((type, i) => {
              const Icon = incidentIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${incidentColors[i]}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{type.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{type.description}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${incidentColors[i]}`}>{type.severity}</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow={t('serviceIncidentResponse.processEyebrow')} title={t('serviceIncidentResponse.processTitle')} steps={responseProcess} />
      <ServiceImageSection eyebrow={t('serviceIncidentResponse.managerEyebrow')} title={t('serviceIncidentResponse.managerTitle')} description={t('serviceIncidentResponse.managerDescription')} features={managerFeatures} image={managerDevices} imageAlt={t('serviceIncidentResponse.badge')} ctaText={t('serviceIncidentResponse.managerCTA')} ctaLink="/how-it-works" background="secondary" reversed />
      <ServiceCTA title={t('serviceIncidentResponse.ctaTitle')} description={t('serviceIncidentResponse.ctaDescription')} />
      <Footer />
    </div>
  );
}
