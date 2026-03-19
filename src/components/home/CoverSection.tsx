import { LocalizedLink as Link } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { Eye, Truck, Phone, Moon, Settings, FileText, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

import imgControlCenter from "@/assets/cover-control-center.webp";
import imgFieldService from "@/assets/cover-field-service.webp";
import imgPhoneAssist from "@/assets/cover-phone-assist.webp";
import imgNightWatch from "@/assets/cover-night-watch.webp";
import imgPmsTools from "@/assets/cover-pms-tools.webp";
import imgProtocols from "@/assets/cover-protocols.webp";

const coverIcons = [Eye, Truck, Phone, Moon, Settings, FileText];
const coverHrefs = [
  "/services/control-center",
  "/services/field-service",
  "/services/guest-assist",
  "/services/night-watch",
  "/services/pms-access",
  "/services/protocols",
];
const coverImages = [imgControlCenter, imgFieldService, imgPhoneAssist, imgNightWatch, imgPmsTools, imgProtocols];

export function CoverSection() {
  const { t, tObject } = useTranslation();
  const cards = tObject<{ title: string; description: string }[]>("home.cover.cards");

  return (
    <section className="py-20 lg:py-28 bg-surface-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              {t("home.cover.eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-5">
              {t("home.cover.title")}<br />{t("home.cover.titleLine2")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              {t("home.cover.description")}
            </p>
            <Button size="lg" asChild>
              <Link to="/cover" className="gap-2">
                {t("home.cover.discoverCover")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => {
            const Icon = coverIcons[index];
            return (
              <AnimatedSection key={coverHrefs[index]} animation="fade-up" delay={index * 100}>
                <Link
                  to={coverHrefs[index]}
                  className="group relative rounded-2xl border border-border/60 overflow-hidden h-full flex flex-col bg-card transition-all duration-300 ease-out hover:shadow-soft-lg hover:-translate-y-1 hover:border-primary/30 shadow-soft"
                >
                  {/* Image section */}
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <img
                      src={coverImages[index]}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Warm subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
                    {/* Icon on image */}
                    <div className="absolute top-3 left-3">
                      <div className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Text content on light background */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                      {t("common.learnMore")}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
