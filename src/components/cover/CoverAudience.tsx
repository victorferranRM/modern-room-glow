import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

import imgApartments from "@/assets/audience-apartments.jpg";
import imgManagement from "@/assets/audience-management.jpg";
import imgHotel from "@/assets/audience-hotel.jpg";

const profileIcons = [Building2, Users, Globe];
const profileImages = [imgApartments, imgManagement, imgHotel];

export function CoverAudience() {
  const { t, tObject } = useTranslation();
  const profiles = tObject<{ title: string; desc: string; stat: string }[]>('cover.audience.profiles');

  return (
    <section className="relative bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-14 lg:mb-18">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('cover.audience.title')}{" "}
            <span className="text-primary">{t('cover.audience.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t('cover.audience.description')}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 mb-16 lg:mb-20">
          {profiles?.map((profile, i) => {
            const Icon = profileIcons[i];
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group rounded-2xl overflow-hidden border border-border/60 bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={profileImages[i]} alt={profile.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-foreground/25" />
                  </div>
                  <div className="relative flex justify-center -mt-8 z-10">
                    <div className="w-16 h-16 rounded-full bg-[#faf8f4] shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="px-7 lg:px-8 pb-7 lg:pb-8 pt-4 flex flex-col flex-1">
                    <Badge variant="secondary" className="w-fit text-[11px] mb-3">{profile.stat}</Badge>
                    <h3 className="font-bold text-lg lg:text-xl text-foreground leading-tight mb-2">{profile.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{profile.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={500} className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
              <LocalizedLink to="/contact" className="gap-2">
                {t('cover.audience.ctaPrimary')}
                <ArrowRight className="w-4 h-4" />
              </LocalizedLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
              <LocalizedLink to="/pricing">{t('cover.audience.ctaSecondary')}</LocalizedLink>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
