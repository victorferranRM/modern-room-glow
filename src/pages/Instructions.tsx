import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Download, ImageIcon, ExternalLink } from "lucide-react";
import { LocalizedLink } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import instructionsHero from "@/assets/instructions-hero.webp";

function ImagePlaceholder({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-muted border border-border/50 aspect-video flex flex-col items-center justify-center gap-4 p-8">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
        <ImageIcon className="w-8 h-8 text-primary/40" />
      </div>
      <p className="text-sm text-muted-foreground text-center font-medium max-w-xs">{text}</p>
    </div>
  );
}

const anchorIds = ["download-app", "install-device", "monitor-properties", "faq"];

export default function Instructions() {
  const { t, tObject } = useTranslation();
  const steps = tObject<{ title: string; description: string; imagePlaceholder: string }[]>("instructions.steps");
  const anchors = tObject<string[]>("instructions.anchors");
  const faqs = tObject<{ question: string; answer: string }[]>("instructions.faqs");
  const lightColors = tObject<{ color: string; meaning: string }[]>("instructions.lightColors");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                {t("instructions.hero.eyebrow")}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t("instructions.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t("instructions.hero.subtitle")}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl" />
                <OptimizedImage src={instructionsHero} alt={t("instructions.hero.title")} className="w-full rounded-2xl" containerClassName="w-full aspect-square" priority />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Anchor Index */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 py-4 justify-center">
            {anchors.map((label, i) => (
              <button
                key={anchorIds[i]}
                onClick={() => scrollTo(anchorIds[i])}
                className="px-5 py-2.5 text-sm font-semibold text-primary border border-primary/30 bg-primary/5 rounded-full transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20 lg:space-y-28">
            {steps.map((step, i) => {
              const reversed = i % 2 !== 0;
              const sectionId =
                i === 0 ? anchorIds[0] :
                i === 1 ? anchorIds[1] :
                i === 6 ? anchorIds[2] :
                undefined;

              return (
                <div key={i} id={sectionId} className={sectionId ? "scroll-mt-32" : undefined}>
                  <AnimatedSection>
                    <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                      <div>
                        <span className="text-4xl lg:text-5xl font-bold text-primary/30 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2 mb-4">
                          {step.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Step 1: App Store / Google Play buttons */}
                        {i === 0 && (
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://apps.apple.com/app/roomonitor/id1533529498"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                              App Store
                            </a>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.roomonitor"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.498 1.447c.58.337.58 1.155 0 1.492l-2.498 1.447-2.596-2.596 2.596-2.596zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" /></svg>
                              Google Play
                            </a>
                          </div>
                        )}

                        {/* Step 9: Dashboard button */}
                        {i === 8 && (
                          <Button asChild className="gap-2">
                            <a href="https://manager.roomonitor.com" target="_blank" rel="noopener noreferrer">
                              {t("instructions.dashboardButton")}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                      <ImagePlaceholder text={step.imagePlaceholder} />
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-32 py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {t("instructions.faqTitle")}
            </h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {i === 3 ? (
                      <ul className="space-y-2 mt-2">
                        {lightColors.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="font-medium text-foreground shrink-0">{item.color}</span>
                            <span>— {item.meaning}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t("instructions.ctaTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("instructions.ctaDescription")}
            </p>
            <Button size="lg" asChild>
              <LocalizedLink to="/contact">
                {t("instructions.ctaButton")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </LocalizedLink>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
