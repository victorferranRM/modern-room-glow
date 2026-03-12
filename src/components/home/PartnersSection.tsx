import { AnimatedSection } from "@/components/ui/animated-section";

import logoAcomodadora from "@/assets/partners/acomodadora.png";
import logoAlcam from "@/assets/partners/alcam.svg";
import logoAlguera from "@/assets/partners/alguera.png";
import logoAmazinn from "@/assets/partners/amazinn.png";
import logoSata from "@/assets/partners/sata.png";
import logoAspasios from "@/assets/partners/aspasios.svg";
import logoBatuecas from "@/assets/partners/batuecas.webp";
import logoBbarcelona from "@/assets/partners/bbarcelona.png";
import logoCaleta from "@/assets/partners/caleta.png";
import logoCaterina from "@/assets/partners/caterina.png";
import logoCheckmyguest from "@/assets/partners/checkmyguest.png";
import logoCubo from "@/assets/partners/cubo.jpg";
import logoDelparque from "@/assets/partners/delparqueflats.png";
import logoEle from "@/assets/partners/ele.png";
import logoEnjoy from "@/assets/partners/enjoy.png";
import logoFeelathome from "@/assets/partners/feelathome.svg";
import logoGrancentral from "@/assets/partners/grancentral.png";
import logoHommyhome from "@/assets/partners/hommyhome.png";
import logoHuespending from "@/assets/partners/huespending.svg";
import logoInnkeeper from "@/assets/partners/innkeeper.png";
import logoLarecepcion from "@/assets/partners/larecepcion.png";
import logoLivingmalaga from "@/assets/partners/livingmalaga.png";
import logoMalagacenterflat from "@/assets/partners/malagacenterflat.png";
import logoMintyhost from "@/assets/partners/mintyhost.png";
import logoNuma from "@/assets/partners/numa.svg";
import logoOlaliving from "@/assets/partners/olaliving.png";
import logoPeoplerentals from "@/assets/partners/peoplerentals.png";
import logoPushe from "@/assets/partners/pushe.png";
import logoR2r from "@/assets/partners/r2r.png";
import logoRoomtorent from "@/assets/partners/roomtorent.png";
import logoStayunique from "@/assets/partners/stayunique.svg";
import logoSweetinn from "@/assets/partners/sweetinn.png";
import logoCharming from "@/assets/partners/charming.jpg";
import logoUrbe10 from "@/assets/partners/urbe10.png";
import logoVlchost from "@/assets/partners/vlchost.webp";
import logoWaou from "@/assets/partners/waou.webp";
import logoWinahost from "@/assets/partners/winahost.png";
import logoYoustylish from "@/assets/partners/youstylish.png";

const partners = [
  { name: "Stay Unique", logo: logoStayunique },
  { name: "Acomodadora", logo: logoAcomodadora },
  { name: "Alcam", logo: logoAlcam },
  { name: "Alguera Apartments", logo: logoAlguera },
  { name: "Amazinn Places", logo: logoAmazinn },
  { name: "Sata Apartments", logo: logoSata },
  { name: "Aspasios", logo: logoAspasios },
  { name: "Batuecas", logo: logoBatuecas },
  { name: "BBarcelona", logo: logoBbarcelona },
  { name: "Caleta Homes", logo: logoCaleta },
  { name: "Caterina", logo: logoCaterina },
  { name: "Checkmyguest", logo: logoCheckmyguest },
  { name: "The Charming Concept", logo: logoCharming },
  { name: "Cubo's Holiday Homes", logo: logoCubo },
  { name: "Del Parque Flats", logo: logoDelparque },
  { name: "ELE Apartments", logo: logoEle },
  { name: "Enjoy Apartments", logo: logoEnjoy },
  { name: "Feel at Home", logo: logoFeelathome },
  { name: "Gran Central Suites", logo: logoGrancentral },
  { name: "Hommy Home", logo: logoHommyhome },
  { name: "Huespending", logo: logoHuespending },
  { name: "Innkeeper", logo: logoInnkeeper },
  { name: "La Recepción", logo: logoLarecepcion },
  { name: "Living4Malaga", logo: logoLivingmalaga },
  { name: "Málaga Center Flat", logo: logoMalagacenterflat },
  { name: "Minty Host", logo: logoMintyhost },
  { name: "Numa", logo: logoNuma },
  { name: "Ola Living", logo: logoOlaliving },
  { name: "People Rentals", logo: logoPeoplerentals },
  { name: "Pushe", logo: logoPushe },
  { name: "R2R Consulting", logo: logoR2r },
  { name: "Room to Rent", logo: logoRoomtorent },
  { name: "Sweetinn", logo: logoSweetinn },
  { name: "Urbe10", logo: logoUrbe10 },
  { name: "VLC Host", logo: logoVlchost },
  { name: "Waou Rentals", logo: logoWaou },
  { name: "Winahost", logo: logoWinahost },
  { name: "You Stylish", logo: logoYoustylish },
];

const stats = [
  { value: "30.500+", label: "Apartamentos monitorizados" },
  { value: "97%", label: "Tasa de satisfacción (CSAT)" },
  { value: "<4 min", label: "Tiempo medio de gestión" },
  { value: "8", label: "Ciudades con Field Service" },
];

export function PartnersSection() {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {/* Trust bar */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em]">
              Confían en nosotros
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={100}>
          <div
            className="relative overflow-hidden group/marquee"
          >
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="flex items-center group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: "marquee-left 40s linear infinite" }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 mx-3 w-[160px] h-[60px] p-3 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* Stats bar with visual depth */}
      <section className="relative py-16 lg:py-20 bg-foreground overflow-hidden">
        {/* Subtle glow accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-primary/6 rounded-full blur-[80px]" />

        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="relative inline-block">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 transition-transform duration-300 group-hover:scale-105">
                      {stat.value}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary/40 rounded-full" />
                  </div>
                  <div className="text-xs sm:text-sm text-background/50 mt-3">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
