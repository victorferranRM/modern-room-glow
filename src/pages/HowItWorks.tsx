import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Wifi,
  Headphones,
  Package,
  SlidersHorizontal,
  Activity,
  FileText,
  Link2,
  Moon,
  ClipboardCheck,
  ShieldCheck,
  FileCheck,
  Bell,
  Building2,
} from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const monitoringIcons = [Package, SlidersHorizontal, Activity];
const operationsIcons = [FileText, Link2, Moon, ClipboardCheck];
const commonIcons = [ShieldCheck, FileCheck, Bell];

export default function HowItWorks() {
  const { t, tObject } = useTranslation();
  const monitoringSteps = tObject<{ title: string; description: string }[]>("howItWorks.monitoringSteps");
  const operationsSteps = tObject<{ title: string; description: string }[]>("howItWorks.operationsSteps");
  const commonItems = tObject<{ title: string; description: string }[]>("howItWorks.commonItems");
  const faqs = tObject<{ question: string; answer: string }[]>("howItWorks.faqs");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <AnimatedSection animation="fade-up">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
                  {t("howItWorks.heroTitle")}
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {t("howItWorks.heroDescription")}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Selector Cards */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <AnimatedSection animation="fade-up" delay={200}>
                <button
                  onClick={() => scrollTo("monitorizacion")}
                  className="w-full text-left group rounded-3xl p-8 lg:p-10 bg-[hsl(36,33%,95%)] border border-[hsl(36,33%,88%)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Wifi className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t("howItWorks.selectorMonitorTitle")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("howItWorks.selectorMonitorSubtitle")}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
                    <span>{t("howItWorks.seeHow")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <button
                  onClick={() => scrollTo("operativa")}
                  className="w-full text-left group rounded-3xl p-8 lg:p-10 bg-foreground text-background border border-foreground hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                    <Headphones className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {t("howItWorks.selectorOpsTitle")}
                  </h3>
                  <p className="text-background/70">
                    {t("howItWorks.selectorOpsSubtitle")}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-medium text-sm">
                    <span>{t("howItWorks.seeHow")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bloque 1 — Monitorización */}
        <section id="monitorizacion" className="py-20 lg:py-28 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12 lg:mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t("howItWorks.monitoringEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {t("howItWorks.monitoringTitle")}
              </h2>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {monitoringSteps?.map((step, i) => {
                const Icon = monitoringIcons[i];
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                    <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 h-full text-left">
                      <div className="relative mb-4 inline-block">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bloque 2 — Operativa delegada */}
        <section id="operativa" className="py-20 lg:py-28 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12 lg:mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t("howItWorks.operationsEyebrow")}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
                {t("howItWorks.operationsTitle")}
              </h2>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {operationsSteps?.map((step, i) => {
                const Icon = operationsIcons[i];
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                    <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 h-full text-left">
                      <div className="relative mb-4 inline-block">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección común */}
        <section className="py-20 lg:py-28 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
                {t("howItWorks.commonTitle")}
              </h2>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {commonItems?.map((item, i) => {
                const Icon = commonIcons[i];
                return (
                  <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-background/70 text-sm">{item.description}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                {t("howItWorks.faqTitle")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("howItWorks.faqDescription")}
              </p>
            </AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs?.map((faq, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                    <AccordionItem value={`faq-${index}`} className="bg-card border rounded-2xl px-6 data-[state=open]:shadow-md transition-shadow">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </AnimatedSection>
                ))}
              </Accordion>
            </div>
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
