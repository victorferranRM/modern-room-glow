import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  ArrowRight,
  ArrowDown,
  Building2,
} from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { HowItWorksSteps } from "@/components/how-it-works/HowItWorksSteps";

import heroOpsImg from "@/assets/how-it-works/operativa-nocturna-roomonitor.webp";
import heroMonitorImg from "@/assets/how-it-works/sensor-roomonitor.webp";
import opsImg0 from "@/assets/how-it-works/patrones-de-accion.webp";
import opsImg1 from "@/assets/how-it-works/integraciones.webp";
import opsImg2 from "@/assets/how-it-works/operativa-nocturna.webp";
import opsImg3 from "@/assets/how-it-works/informes.webp";
import monImg0 from "@/assets/how-it-works/dispositivo-instalacion.webp";
import monImg1 from "@/assets/how-it-works/mediciones-manager.webp";
import monImg2 from "@/assets/how-it-works/umbrales-roomonitor.webp";

const opsImages = [opsImg0, opsImg1, opsImg2, opsImg3];
const monImages = [monImg0, monImg1, monImg2];

interface StepData {
  title: string;
  description: string;
  bullets: string[];
  stat?: string;
  statLabel?: string;
  imagePlaceholder: string;
}

export default function HowItWorks() {
  const { t, tObject } = useTranslation();
  const monitoringSteps = tObject<StepData[]>("howItWorks.monitoringSteps");
  const operationsSteps = tObject<StepData[]>("howItWorks.operationsSteps");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <AnimatedSection animation="fade-up">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                  {t("howItWorks.heroEyebrow")}
                </p>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
                  dangerouslySetInnerHTML={{ __html: t("howItWorks.heroTitle") }}
                />
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={120}>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("howItWorks.heroDescription")}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Selector */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Operativa delegada */}
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="group cursor-pointer" onClick={() => scrollTo("operativa")}>
                  <div className="rounded-2xl overflow-hidden aspect-video mb-6">
                    <img
                      src={heroOpsImg}
                      alt="Operativa nocturna Roomonitor"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t("howItWorks.selectorOpsTitle")}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm sm:text-base">
                    {t("howItWorks.selectorOpsSubtitle")}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background text-foreground hover:bg-foreground hover:text-background hover:border-foreground w-full sm:w-auto"
                    onClick={(e) => { e.stopPropagation(); scrollTo("operativa"); }}
                  >
                    {t("howItWorks.seeHow")}
                    <ArrowDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </AnimatedSection>

              {/* Monitorización */}
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="group cursor-pointer" onClick={() => scrollTo("monitorizacion")}>
                  <div className="rounded-2xl overflow-hidden aspect-video mb-6">
                    <img
                      src={heroMonitorImg}
                      alt="Sensor Roomonitor"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t("howItWorks.selectorMonitorTitle")}
                  </h3>
                  <p className="text-muted-foreground mb-5 text-sm sm:text-base">
                    {t("howItWorks.selectorMonitorSubtitle")}
                  </p>
                  <Button
                    variant="outline"
                    className="bg-background text-foreground hover:bg-foreground hover:text-background hover:border-foreground w-full sm:w-auto"
                    onClick={(e) => { e.stopPropagation(); scrollTo("monitorizacion"); }}
                  >
                    {t("howItWorks.seeHow")}
                    <ArrowDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTAs above sections */}
        <section className="pb-12 lg:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 h-12" asChild>
                  <LocalizedLink to="/contact?inquiry=demo">
                    {t("howItWorks.bookDemo")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </LocalizedLink>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
                  <LocalizedLink to="/pricing">{t("about.viewPricing")}</LocalizedLink>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Bloque 1 — Operativa delegada */}
        <section id="operativa" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16 lg:mb-20">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t("howItWorks.operationsEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {t("howItWorks.operationsTitle")}
              </h2>
            </AnimatedSection>
            <HowItWorksSteps steps={operationsSteps} images={opsImages} screenshotIndices={[0, 1]} />
          </div>
        </section>

        {/* Bloque 2 — Monitorización */}
        <section id="monitorizacion" className="py-20 lg:py-28 bg-[hsl(0,0%,100%)] scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16 lg:mb-20">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t("howItWorks.monitoringEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {t("howItWorks.monitoringTitle")}
              </h2>
            </AnimatedSection>
            <HowItWorksSteps steps={monitoringSteps} images={monImages} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
                  {t("howItWorks.ctaTitle")}
                </h2>
                <p className="text-base sm:text-lg text-background/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  {t("howItWorks.ctaDescription")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <LocalizedLink to="/contact?inquiry=demo">
                      {t("howItWorks.bookDemo")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </LocalizedLink>
                  </Button>
                  <Button size="lg" variant="outline" className="border-background/20 bg-transparent text-background hover:bg-background/10" asChild>
                    <LocalizedLink to="/pricing">{t("about.viewPricing")}</LocalizedLink>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
