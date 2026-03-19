import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Headphones, Clock, Globe, Shield, Phone, MessageSquare, Users, Zap, FileText, Heart, BotOff, UserCheck } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { useTranslation } from "@/i18n/useTranslation";
import serviceImage from "@/assets/service-guest-assist.jpg";
import protocolImage from "@/assets/cover-protocols.webp";
import notVirtualImage from "@/assets/not-virtual-assistants.jpg";
import notChatbotsImage from "@/assets/not-chatbots.jpg";

const commitmentIcons = [Clock, Zap, FileText, Globe, Shield, Heart];
const whatWeAreNotIcons = [BotOff, UserCheck];
const whatWeAreNotImages = [notVirtualImage, notChatbotsImage];
const useCaseIcons = [Phone, Shield, FileText, MessageSquare, Users, Headphones];

export default function GuestAssist() {
  const { t, tObject } = useTranslation();
  const stats = tObject<{ value: string; label: string }[]>('serviceGuestAssist.stats') ?? [];
  const commitmentsData = tObject<{ title: string; description: string }[]>('serviceGuestAssist.features') ?? [];
  const whatWeAreNot = tObject<{ title: string; description: string }[]>('serviceGuestAssist.whatWeAreNot') ?? [];
  const useCasesRaw = tObject<string[]>('serviceGuestAssist.useCases') ?? [];
  const processSteps = tObject<{ step: string; title: string; description: string }[]>('serviceGuestAssist.process') ?? [];
  const protocolFeatures = tObject<string[]>('serviceGuestAssist.protocolFeatures') ?? [];

  const commitments = commitmentsData.map((c, i) => ({ ...c, icon: commitmentIcons[i] }));
  const useCases = useCasesRaw.map(title => ({ title }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceHero icon={Headphones} badge={t('serviceGuestAssist.badge')} title={t('serviceGuestAssist.title')} titleHighlight={t('serviceGuestAssist.titleHighlight')} description={t('serviceGuestAssist.description')} image={serviceImage} imageAlt={t('serviceGuestAssist.badge')} primaryCTA={{ text: t('serviceGuestAssist.primaryCTA'), link: "/contact" }} />
      <ServiceStats stats={stats} />
      <ServiceFeatures eyebrow={t('serviceGuestAssist.featuresEyebrow')} title={t('serviceGuestAssist.featuresTitle')} features={commitments} />

      {/* What We're NOT */}
      <section className="py-20 lg:py-28 bg-[hsl(0,0%,100%)] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">{t('serviceGuestAssist.whatWeAreNotEyebrow')}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              {t('serviceGuestAssist.whatWeAreNotTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('serviceGuestAssist.whatWeAreNotSubtitle')}</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whatWeAreNot.map((item, i) => {
              const Icon = whatWeAreNotIcons[i];
              const image = whatWeAreNotImages[i];
              return (
                <AnimatedSection key={i} delay={i * 150} animation={i === 0 ? "fade-right" : "fade-left"}>
                  <div className="group relative rounded-2xl overflow-hidden h-full min-h-[420px] cursor-default">
                    {/* Background image */}
                    <img src={image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/10" />
                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/20 backdrop-blur-sm text-xs font-bold text-destructive uppercase tracking-widest mb-4 w-fit border border-destructive/30">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        {t('serviceGuestAssist.notLabel')}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-background mb-3">{item.title}</h3>
                      <p className="text-background/75 leading-relaxed text-sm lg:text-base">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t('serviceGuestAssist.useCasesEyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">{t('serviceGuestAssist.useCasesTitle')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => {
              const Icon = useCaseIcons[i];
              return (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold transition-colors group-hover:text-primary">{useCase.title}</h3>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow={t('serviceGuestAssist.processEyebrow')} title={t('serviceGuestAssist.processTitle')} steps={processSteps} background="white" columns={3} />
      <ServiceImageSection eyebrow={t('serviceGuestAssist.protocolEyebrow')} title={t('serviceGuestAssist.protocolTitle')} description={t('serviceGuestAssist.protocolDescription')} features={protocolFeatures} image={protocolImage} imageAlt="Operational protocols" ctaText={t('serviceGuestAssist.protocolCTA')} ctaLink="/services/protocols" reversed />
      <ServiceCTA title={t('serviceGuestAssist.ctaTitle')} description={t('serviceGuestAssist.ctaDescription')} primaryCTA={{ text: t('serviceGuestAssist.ctaPrimary'), link: "/contact" }} />
      <Footer />
    </div>
  );
}
