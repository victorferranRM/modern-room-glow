import { AnimatedSection } from "@/components/ui/animated-section";
import { useTranslation } from "@/i18n/useTranslation";

import logoAcomodadora from "@/assets/partners/acomodadora.webp";
import logoAlcam from "@/assets/partners/alcam.svg";
import logoAlguera from "@/assets/partners/alguera.webp";
import logoAmazinn from "@/assets/partners/amazinn.webp";
import logoSata from "@/assets/partners/sata.webp";
import logoAspasios from "@/assets/partners/aspasios.svg";
import logoBatuecas from "@/assets/partners/batuecas.webp";
import logoBbarcelona from "@/assets/partners/bbarcelona.webp";
import logoCaleta from "@/assets/partners/caleta.webp";
import logoCaterina from "@/assets/partners/caterina.webp";
import logoCheckmyguest from "@/assets/partners/checkmyguest.webp";
import logoCubo from "@/assets/partners/cubo.jpg";
import logoDelparque from "@/assets/partners/delparqueflats.webp";
import logoEle from "@/assets/partners/ele.webp";
import logoEnjoy from "@/assets/partners/enjoy.webp";
import logoFeelathome from "@/assets/partners/feelathome.svg";
import logoGrancentral from "@/assets/partners/grancentral.webp";
import logoHommyhome from "@/assets/partners/hommyhome.webp";
import logoHuespending from "@/assets/partners/huespending.svg";
import logoInnkeeper from "@/assets/partners/innkeeper.webp";
import logoLarecepcion from "@/assets/partners/larecepcion.webp";
import logoLivingmalaga from "@/assets/partners/livingmalaga.webp";
import logoMalagacenterflat from "@/assets/partners/malagacenterflat.webp";
import logoMintyhost from "@/assets/partners/mintyhost.webp";
import logoNuma from "@/assets/partners/numa.svg";
import logoOlaliving from "@/assets/partners/olaliving.webp";
import logoPeoplerentals from "@/assets/partners/peoplerentals.webp";
import logoPushe from "@/assets/partners/pushe.webp";
import logoR2r from "@/assets/partners/r2r.webp";
import logoRoomtorent from "@/assets/partners/roomtorent.webp";
import logoStayunique from "@/assets/partners/stayunique.svg";
import logoSweetinn from "@/assets/partners/sweetinn.webp";
import logoCharming from "@/assets/partners/charming.jpg";
import logoUrbe10 from "@/assets/partners/urbe10.webp";
import logoVlchost from "@/assets/partners/vlchost.webp";
import logoWaou from "@/assets/partners/waou.webp";
import logoWinahost from "@/assets/partners/winahost.webp";
import logoYoustylish from "@/assets/partners/youstylish.webp";

const partners = [
  { name: "Stay Unique", logo: logoStayunique }, { name: "Acomodadora", logo: logoAcomodadora },
  { name: "Alcam", logo: logoAlcam }, { name: "Alguera Apartments", logo: logoAlguera },
  { name: "Amazinn Places", logo: logoAmazinn }, { name: "Sata Apartments", logo: logoSata },
  { name: "Aspasios", logo: logoAspasios }, { name: "Batuecas", logo: logoBatuecas },
  { name: "BBarcelona", logo: logoBbarcelona }, { name: "Caleta Homes", logo: logoCaleta },
  { name: "Caterina", logo: logoCaterina }, { name: "Checkmyguest", logo: logoCheckmyguest },
  { name: "The Charming Concept", logo: logoCharming }, { name: "Cubo's Holiday Homes", logo: logoCubo },
  { name: "Del Parque Flats", logo: logoDelparque }, { name: "ELE Apartments", logo: logoEle },
  { name: "Enjoy Apartments", logo: logoEnjoy }, { name: "Feel at Home", logo: logoFeelathome },
  { name: "Gran Central Suites", logo: logoGrancentral }, { name: "Hommy Home", logo: logoHommyhome },
  { name: "Huespending", logo: logoHuespending }, { name: "Innkeeper", logo: logoInnkeeper },
  { name: "La Recepción", logo: logoLarecepcion }, { name: "Living4Malaga", logo: logoLivingmalaga },
  { name: "Málaga Center Flat", logo: logoMalagacenterflat }, { name: "Minty Host", logo: logoMintyhost },
  { name: "Numa", logo: logoNuma }, { name: "Ola Living", logo: logoOlaliving },
  { name: "People Rentals", logo: logoPeoplerentals }, { name: "Pushe", logo: logoPushe },
  { name: "R2R Consulting", logo: logoR2r }, { name: "Room to Rent", logo: logoRoomtorent },
  { name: "Sweetinn", logo: logoSweetinn }, { name: "Urbe10", logo: logoUrbe10 },
  { name: "VLC Host", logo: logoVlchost }, { name: "Waou Rentals", logo: logoWaou },
  { name: "Winahost", logo: logoWinahost }, { name: "You Stylish", logo: logoYoustylish },
];

export function PartnersSection() {
  const { t, tObject } = useTranslation();
  const stats = tObject("home.partners.stats") as Array<{ value: string; label: string }>;
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              {t("home.partners.trustUs")}
            </p>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={100}>
          <div className="relative overflow-hidden group/marquee">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex items-center group-hover/marquee:[animation-play-state:paused]" style={{ animation: "marquee-left 40s linear infinite" }}>
              {duplicatedPartners.map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-3 w-[160px] h-[60px] p-3 flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <style>{`@keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
      </section>

      <section className="relative py-16 lg:py-20 bg-foreground overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary/6 rounded-full blur-[80px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="relative inline-block">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-105">{stat.value}</div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/40 rounded-full" />
                  </div>
                  <div className="text-xs sm:text-sm text-background/50 mt-3">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
