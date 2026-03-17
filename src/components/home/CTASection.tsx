import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

export function CTASection() {
  const { t, tObject } = useTranslation();
  const benefits = tObject("home.cta.benefits") as string[];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-12 lg:p-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">{t("home.cta.title")}</h2>
            <p className="text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">{t("home.cta.description")}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle2 className="w-4 h-4" /><span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <LocalizedLink to="/contact">{t("home.cta.bookDemo")}<ArrowRight className="w-4 h-4 ml-2" /></LocalizedLink>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
                <LocalizedLink to="/pricing">{t("home.cta.viewPricing")}</LocalizedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
