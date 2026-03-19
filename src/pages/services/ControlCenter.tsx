import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Eye, KeyRound, MapPin, Megaphone, Siren, Clock, FileText, Radio, CheckCircle2, Bell } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-control-center.webp";

const featureIcons = [KeyRound, MapPin, Megaphone, Siren, Clock, FileText];

interface CardData {
  title: string;
  subtitle: string;
  items: { label: string; desc: string }[];
  footer: string;
  pills: string[];
}

function ControlCenterCard({ card }: { card: CardData }) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative bg-card rounded-2xl border border-border/60 shadow-soft p-6 sm:p-8 w-full max-w-sm">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          <Radio className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1.5">{card.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{card.subtitle}</p>
        <div className="space-y-4 mb-6 border-l-2 border-border pl-4">
          {card.items.map((item, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] tracking-widest text-muted-foreground/70 font-medium mb-0">{card.footer}</p>
      </div>
      <div className="absolute -top-2 -right-3 sm:right-0 bg-card rounded-full border border-border/60 shadow-soft px-3 py-1.5 flex items-center gap-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <Bell className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-medium text-foreground whitespace-nowrap">{card.pills[0]}</span>
      </div>
      <div className="absolute bottom-24 -right-4 sm:-right-6 bg-card rounded-full border border-border/60 shadow-soft px-3 py-1.5 flex items-center gap-2 animate-fade-in" style={{ animationDelay: "700ms" }}>
        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
        <span className="text-xs font-medium text-foreground whitespace-nowrap">{card.pills[1]}</span>
      </div>
      <div className="absolute -bottom-2 -left-3 sm:-left-4 bg-card rounded-full border border-border/60 shadow-soft px-3 py-1.5 flex items-center gap-2 animate-fade-in" style={{ animationDelay: "1000ms" }}>
        <CheckCircle2 className="w-3.5 h-3.5 text-success" />
        <span className="text-xs font-medium text-foreground whitespace-nowrap">{card.pills[2]}</span>
      </div>
    </div>
  );
}

export default function ControlCenter() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceControlCenter.stats') ?? [];
  const featuresData = tObject<{ title: string; description: string }[]>('serviceControlCenter.features') ?? [];
  const capabilities = tObject<string[]>('serviceControlCenter.capabilities') ?? [];
  const processSteps = tObject<{ step: string; title: string; description: string }[]>('serviceControlCenter.process') ?? [];
  const card = tObject<CardData>('serviceControlCenter.card');

  const features = featuresData.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Eye} badge={t('serviceControlCenter.badge')} title={t('serviceControlCenter.title')} titleHighlight={t('serviceControlCenter.titleHighlight')} description={t('serviceControlCenter.description')} image={serviceImage} imageAlt={t('serviceControlCenter.badge')} />
      <ServiceStats stats={stats} />

      {/* Capabilities — commitment style */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-14 lg:mb-20">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {t('serviceControlCenter.featuresEyebrow')}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
              {t('serviceControlCenter.featuresTitle')}
            </h2>
          </AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} delay={i * 80}>
                    <div className={`group flex gap-5 py-8 ${i < features.length - (features.length % 2 === 0 ? 2 : 1) ? 'border-b border-border' : ''}`}>
                      <div className="shrink-0 flex flex-col items-center gap-2">
                        <span className="text-3xl lg:text-4xl font-bold text-primary/40 tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="pt-1">
                        <h3 className="text-xl lg:text-2xl font-bold mb-1.5 transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ServiceImageSection
        eyebrow={t('serviceControlCenter.imageEyebrow')}
        title={t('serviceControlCenter.imageTitle')}
        description={t('serviceControlCenter.imageDescription')}
        features={capabilities}
        ctaText={t('shared.learnMore')}
        ctaLink="/contact"
        background="white"
        ctaPosition="below-image"
        customImageContent={card ? <ControlCenterCard card={card} /> : undefined}
      />
      <ServiceProcess eyebrow={t('serviceControlCenter.processEyebrow')} title={t('serviceControlCenter.processTitle')} steps={processSteps} />
      <ServiceCTA title={t('serviceControlCenter.ctaTitle')} description={t('serviceControlCenter.ctaDescription')} primaryCTA={{ text: t('serviceControlCenter.ctaPrimary'), link: "/contact" }} />
      <Footer />
    </div>
  );
}
