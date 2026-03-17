import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Code } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

interface Partner { name: string; category: string; }

const partners: Partner[] = [
  { name: "Guesty", category: "PMS" }, { name: "Hostaway", category: "PMS" },
  { name: "Lodgify", category: "PMS" }, { name: "Hostify", category: "PMS" },
  { name: "Smoobu", category: "PMS" }, { name: "Avantio", category: "PMS" },
  { name: "Icnea", category: "PMS" }, { name: "Booking.com", category: "OTA" },
  { name: "Airbnb", category: "OTA" }, { name: "Vrbo", category: "OTA" },
  { name: "Expedia", category: "OTA" }, { name: "Rentlio", category: "PMS" },
  { name: "Beds24", category: "PMS" }, { name: "Octorate", category: "PMS" },
  { name: "Cloudbeds", category: "PMS" }, { name: "Escapia", category: "PMS" },
];

function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 w-28 h-16 sm:w-32 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm flex items-center justify-center mx-2 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
      <span className="text-sm font-semibold text-white/90">{name}</span>
    </div>
  );
}

function MarqueeRow({ partners, direction = "left", speed = 30 }: { partners: Partner[]; direction?: "left" | "right"; speed?: number }) {
  const duplicated = [...partners, ...partners, ...partners];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="flex" style={{ animation: `marquee-${direction} ${speed}s linear infinite` }}>
        {duplicated.map((p, i) => <LogoCard key={`${p.name}-${i}`} name={p.name} />)}
      </div>
    </div>
  );
}

export function IntegrationsSection() {
  const { t, tObject } = useTranslation();
  const pmsCard = tObject("home.integrations.pmsCard") as { eyebrow: string; title: string; description: string; cta: string };
  const apiCard = tObject("home.integrations.apiCard") as { eyebrow: string; title: string; description: string; cta: string };

  return (
    <section className="py-20 lg:py-28 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">{t("home.integrations.eyebrow")}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">{t("home.integrations.title")}</h2>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">{t("home.integrations.description")}</p>
          </AnimatedSection>

          <AnimatedSection delay={200} className="mb-12 lg:mb-16">
            <div className="space-y-4">
              <MarqueeRow partners={partners.slice(0, 8)} direction="left" speed={35} />
              <MarqueeRow partners={partners.slice(8, 16)} direction="right" speed={40} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0"><Plug className="w-6 h-6 text-primary" /></div>
                    <div>
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{pmsCard.eyebrow}</p>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">{pmsCard.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">{pmsCard.description}</p>
                  <Button className="w-full sm:w-auto gap-2 group/btn" asChild>
                    <LocalizedLink to="/resources/integrations">{pmsCard.cta}<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" /></LocalizedLink>
                  </Button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl scale-95 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 lg:p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0"><Code className="w-6 h-6 text-white" /></div>
                    <div>
                      <p className="text-xs font-medium text-white/60 uppercase tracking-wider mb-1">{apiCard.eyebrow}</p>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">{apiCard.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">{apiCard.description}</p>
                  <Button variant="outline" className="w-full sm:w-auto gap-2 group/btn border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-slate-900 transition-colors" asChild>
                    <LocalizedLink to="/resources/integrations#api">{apiCard.cta}<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" /></LocalizedLink>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`@keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } } @keyframes marquee-right { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }`}</style>
    </section>
  );
}
