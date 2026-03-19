import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

import cityBarcelona from "@/assets/city-barcelona.webp";
import cityMadrid from "@/assets/city-madrid.webp";
import cityMalaga from "@/assets/city-malaga.webp";
import cityValencia from "@/assets/city-valencia.webp";
import citySevilla from "@/assets/city-sevilla.webp";
import cityGranada from "@/assets/city-granada.webp";
import cityLisboa from "@/assets/city-lisboa.webp";
import cityParis from "@/assets/city-paris.webp";

const cityData = [
  { nameKey: "Barcelona", hours: "24/7", flag: "🇪🇸", img: cityBarcelona },
  { nameKey: "Madrid", hours: "24/7", flag: "🇪🇸", img: cityMadrid },
  { nameKey: "Málaga", hours: "22:00–08:00", flag: "🇪🇸", img: cityMalaga },
  { nameKey: "Valencia", hours: "22:00–08:00", flag: "🇪🇸", img: cityValencia },
  { nameKey: "Sevilla", hours: "22:00–08:00", flag: "🇪🇸", img: citySevilla },
  { nameKey: "Granada", hours: "22:00–08:00", flag: "🇪🇸", img: cityGranada },
  { nameKey: "Lisboa", hours: "22:00–08:00", flag: "🇵🇹", img: cityLisboa },
  { nameKey: "paris", hours: "22:00–08:00", flag: "🇫🇷", img: cityParis },
];

export function CoverCities() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('cover.cities.badge')}</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t('cover.cities.title')} <span className="gradient-text">{t('cover.cities.titleHighlight')}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cityData.map((city, i) => {
            const displayName = city.nameKey === "paris" ? t('cover.cities.paris') : city.nameKey;
            return (
              <AnimatedSection key={city.nameKey} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden h-56 cursor-default">
                  <img src={city.img} alt={displayName} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{city.flag}</span>
                      <h3 className="text-white font-bold text-lg">{displayName}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={city.hours === "24/7" ? "bg-primary/90 text-white border-0 text-xs" : "bg-white/20 text-white border-0 text-xs backdrop-blur-sm"}>
                        {city.hours}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={700} className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {t('cover.cities.expandNote')}{" "}
            <LocalizedLink to="/contact" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              {t('cover.cities.requestLink')} <ArrowRight className="w-3 h-3" />
            </LocalizedLink>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
