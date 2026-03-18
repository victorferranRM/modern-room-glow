import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/components/home/PartnersSection";
import { Heart, Target, Eye, Users, Sparkles, ArrowRight, MapPin, ExternalLink, Building2, Check, Play, Pause, Newspaper, Video, Mic, FileText } from "lucide-react";
import aboutCustomerFirst from "@/assets/about-customer-first.webp";
import aboutInnovation from "@/assets/about-innovation.webp";
import aboutTeamExcellence from "@/assets/about-team-excellence.webp";
import aboutJoinTeam from "@/assets/about-join-team.webp";

import cityBarcelona from "@/assets/city-barcelona.jpg";
import cityMadrid from "@/assets/city-madrid.jpg";
import cityValencia from "@/assets/city-valencia.jpg";
import cityMalaga from "@/assets/city-malaga.jpg";
import citySevilla from "@/assets/city-sevilla.jpg";
import cityGranada from "@/assets/city-granada.jpg";
import cityLisboa from "@/assets/city-lisboa.jpg";
import cityParis from "@/assets/city-paris.jpg";

import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

import timelineBarcelona from "@/assets/timeline-barcelona.webp";
import timelineDevice from "@/assets/timeline-device.webp";
import heroControlCenter from "@/assets/hero-control-center.jpg";
import timelineParis from "@/assets/timeline-paris.webp";
import timelineManager from "@/assets/timeline-manager.webp";
import timelineIntegrations from "@/assets/timeline-integrations.webp";

const valueImages = [aboutCustomerFirst, aboutInnovation, aboutTeamExcellence];
const valueIcons = [Heart, Sparkles, Users];
const timelineImages = [timelineBarcelona, timelineDevice, heroControlCenter, timelineParis, timelineManager, timelineIntegrations];

const coverageCities = [
  { name: "Barcelona", country: "España", isHQ: true, image: cityBarcelona },
  { name: "Madrid", country: "España", image: cityMadrid },
  { name: "Valencia", country: "España", image: cityValencia },
  { name: "Málaga", country: "España", image: cityMalaga },
  { name: "Sevilla", country: "España", image: citySevilla },
  { name: "Granada", country: "España", image: cityGranada },
  { name: "Lisboa", country: "Portugal", image: cityLisboa },
  { name: "París", country: "Francia", image: cityParis },
];

const mediaImages = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=400&h=250&fit=crop",
];
const mediaTypes = ["article", "article", "podcast", "video", "article", "article"];
const mediaIcons = [Newspaper, FileText, Mic, Video, Newspaper, FileText];

function CityPhotoCarousel({ cities }: { cities: typeof coverageCities }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % cities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
      {cities.map((city, index) => (
        <div
          key={city.name}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: activeIndex === index ? 1 : 0 }}
        >
          <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{city.country}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {city.name}
              {city.isHQ && <span className="ml-2 text-sm font-normal text-white/70">(HQ)</span>}
            </h3>
          </div>
        </div>
      ))}
      <div className="absolute bottom-6 right-6 flex gap-1.5">
        {cities.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { t, tObject } = useTranslation();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const values = tObject<{ title: string; description: string }[]>('about.values');
  const missionPoints = tObject<string[]>('about.mission.points');
  const visionStats = tObject<{ value: string; label: string }[]>('about.vision.stats');
  const timeline = tObject<{ year: string; title: string; description: string }[]>('about.timeline');
  const pressItems = tObject<{ outlet: string; title: string; description: string }[]>('about.press.items');

  const advanceTimeline = useCallback(() => {
    setActiveTimeline(prev => (prev + 1) % timeline.length);
  }, [timeline.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(advanceTimeline, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, advanceTimeline]);

  return <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Building2 className="w-4 h-4" />
                <span>{t('about.badge')}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] pb-2">
                {t('about.heroTitle')}
                <span className="gradient-text block pb-[10px]">{t('about.heroTitleHighlight')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('about.heroDescription')}
              </p>
            </div>
          </div>
        </section>

        <PartnersSection />

        {/* Values Section */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.valuesTitle')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('about.valuesSubtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, idx) => {
                const Icon = valueIcons[idx];
                return (
                  <div key={idx} className="group relative overflow-hidden rounded-2xl bg-card border shadow-soft hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={valueImages[idx]} alt={value.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-sm border rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('about.mission.eyebrow')}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('about.mission.title')}</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">{t('about.mission.description')}</p>
                    <ul className="space-y-3">
                      {missionPoints.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-sm border rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Eye className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('about.vision.eyebrow')}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('about.vision.title')}</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">{t('about.vision.description')}</p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {visionStats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 rounded-xl bg-muted/50">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.journeyTitle')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">{t('about.journeySubtitle')}</p>
              <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm font-medium">
                {isAutoPlaying ? <>
                    <Pause className="w-4 h-4" />
                    {t('about.pause')}
                  </> : <>
                    <Play className="w-4 h-4" />
                    {t('about.resume')}
                  </>}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex gap-2">
                {timeline.map((_, index) => <button key={index} onClick={() => {
                setActiveTimeline(index);
                setIsAutoPlaying(false);
              }} className="flex-1 h-1.5 rounded-full overflow-hidden bg-muted cursor-pointer">
                    <div className={`h-full bg-primary transition-all duration-300 ${index < activeTimeline ? "w-full" : index === activeTimeline ? isAutoPlaying ? "animate-progress" : "w-full" : "w-0"}`} style={index === activeTimeline && isAutoPlaying ? {
                  animation: "progress 4s linear"
                } : {}} />
                  </button>)}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="relative">
                <div className="space-y-2">
                  {timeline.map((event, index) => <button key={event.year} onClick={() => {
                  setActiveTimeline(index);
                  setIsAutoPlaying(false);
                }} className={`relative flex items-center gap-6 w-full text-left p-4 rounded-xl transition-all duration-300 ${activeTimeline === index ? "bg-primary/10" : "hover:bg-muted/50"}`}>
                      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeTimeline === index ? "bg-primary text-primary-foreground scale-110" : index < activeTimeline ? "bg-primary/50" : "bg-muted border-2 border-border"}`}>
                        {activeTimeline === index && <span className="w-2 h-2 bg-primary-foreground rounded-full" />}
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${activeTimeline === index ? "text-primary" : "text-muted-foreground"}`}>
                          {event.year}
                        </span>
                        <h4 className={`font-semibold transition-colors ${activeTimeline === index ? "text-foreground" : "text-muted-foreground"}`}>
                          {event.title}
                        </h4>
                      </div>
                    </button>)}
                </div>
              </div>

              <div className="lg:sticky lg:top-32">
                <div className="bg-card border rounded-2xl overflow-hidden shadow-soft">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={timelineImages[activeTimeline]} alt={timeline[activeTimeline].title} className="w-full h-full object-cover transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {timeline[activeTimeline].year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{timeline[activeTimeline].title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{timeline[activeTimeline].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Media & Press */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('about.press.eyebrow')}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">{t('about.press.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('about.press.subtitle')}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressItems.map((item, idx) => {
                const Icon = mediaIcons[idx];
                const type = mediaTypes[idx];
                return <LocalizedLink key={idx} to="/blog" className="group relative bg-card border rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={mediaImages[idx]} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
                            <Icon className="w-3.5 h-3.5" />
                            {type === "article" ? t('about.press.article') : type === "podcast" ? t('about.press.podcast') : t('about.press.video')}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="text-sm font-bold text-white">{item.outlet}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                          <span>{type === "video" ? t('about.press.watchNow') : type === "podcast" ? t('about.press.listenNow') : t('about.press.readArticle')}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </LocalizedLink>;
              })}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <LocalizedLink to="/blog">
                  {t('about.press.viewAll')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LocalizedLink>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Global Presence */}
        <AnimatedSection className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('about.globalPresence.title')} <span className="text-primary">{t('about.globalPresence.titleHighlight')}</span>
                </h2>
                <p className="text-background/70 text-lg mb-6 leading-relaxed">{t('about.globalPresence.description')}</p>
                <p className="text-background/70 mb-8 leading-relaxed">{t('about.globalPresence.expandDescription')}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {coverageCities.map(city => <div key={city.name} className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 flex-shrink-0 ${city.isHQ ? "text-primary" : "text-background/50"}`} />
                      <span className={`text-sm ${city.isHQ ? "font-semibold text-primary" : "text-background/70"}`}>
                        {city.name}
                        {city.isHQ && " (HQ)"}
                      </span>
                    </div>)}
                </div>
              </div>

              <div>
                <CityPhotoCarousel cities={coverageCities} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Join Us */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={aboutJoinTeam} alt={t('about.joinTeam.title')} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/70" />
              <div className="relative z-10 py-20 px-8 md:py-28 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">{t('about.joinTeam.title')}</h2>
                <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">{t('about.joinTeam.description')}</p>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="https://www.linkedin.com/company/11209502/admin/posted-jobs/open/" target="_blank" rel="noopener noreferrer">
                    {t('about.joinTeam.cta')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.ctaTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t('about.ctaDescription')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <LocalizedLink to="/contact">
                  {t('about.requestDemo')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </LocalizedLink>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <LocalizedLink to="/pricing">{t('about.viewPricing')}</LocalizedLink>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </div>;
}
