import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

import cityBarcelona from "@/assets/city-barcelona.jpg";
import cityMadrid from "@/assets/city-madrid.jpg";
import cityMalaga from "@/assets/city-malaga.jpg";
import cityValencia from "@/assets/city-valencia.jpg";
import citySevilla from "@/assets/city-sevilla.jpg";
import cityGranada from "@/assets/city-granada.jpg";
import cityLisboa from "@/assets/city-lisboa.jpg";
import cityParis from "@/assets/city-paris.jpg";

const cities = [
  { name: "Barcelona", hours: "24/7", flag: "🇪🇸", img: cityBarcelona },
  { name: "Madrid", hours: "24/7", flag: "🇪🇸", img: cityMadrid },
  { name: "Málaga", hours: "22:00–08:00", flag: "🇪🇸", img: cityMalaga },
  { name: "Valencia", hours: "22:00–08:00", flag: "🇪🇸", img: cityValencia },
  { name: "Sevilla", hours: "22:00–08:00", flag: "🇪🇸", img: citySevilla },
  { name: "Granada", hours: "22:00–08:00", flag: "🇪🇸", img: cityGranada },
  { name: "Lisboa", hours: "22:00–08:00", flag: "🇵🇹", img: cityLisboa },
  { name: "París", hours: "22:00–08:00", flag: "🇫🇷", img: cityParis },
];

export function CoverCities() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Cobertura</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Field Service en <span className="gradient-text">8 ciudades</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city, i) => (
            <AnimatedSection key={city.name} delay={i * 80}>
              <div className="group relative rounded-2xl overflow-hidden h-56 cursor-default">
                {/* Background image */}
                <img
                  src={city.img}
                  alt={city.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{city.flag}</span>
                    <h3 className="text-white font-bold text-lg">{city.name}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={city.hours === "24/7"
                      ? "bg-primary/90 text-white border-0 text-xs"
                      : "bg-white/20 text-white border-0 text-xs backdrop-blur-sm"
                    }>
                      {city.hours}
                    </Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={700} className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Expandimos nuestra cobertura en función de la demanda. ¿Tu ciudad aún no está en la lista?{" "}
            <Link to="/contact" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Solicítalo <ArrowRight className="w-3 h-3" />
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
