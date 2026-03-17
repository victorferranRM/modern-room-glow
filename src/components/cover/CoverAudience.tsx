import { Link } from "react-router-dom";
import { Building2, Users, Globe, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import imgApartments from "@/assets/audience-apartments.jpg";
import imgManagement from "@/assets/audience-management.jpg";
import imgHotel from "@/assets/audience-hotel.jpg";

const profiles = [
  {
    icon: Building2,
    title: "Gestor de +50 propiedades",
    desc: "Tu equipo no puede cubrir las noches. Cover se convierte en tu equipo nocturno.",
    stat: "+50 propiedades",
    img: imgApartments,
  },
  {
    icon: Users,
    title: "Empresa de property management",
    desc: "Ofreces gestión integral. Cover es tu back-office nocturno, con tus protocolos.",
    stat: "24/7 cobertura",
    img: imgManagement,
  },
  {
    icon: Globe,
    title: "Cadena o grupo hotelero",
    desc: "Múltiples ubicaciones, mismo nivel de servicio. Consistencia operativa garantizada.",
    stat: "8 ciudades",
    img: imgHotel,
  },
];

export function CoverAudience() {
  return (
    <section className="relative bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-14 lg:mb-18">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Diseñado para gestores{" "}
            <span className="text-primary">que escalan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Cover™ está diseñado para gestores profesionales que necesitan estructura operativa real fuera de horario.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 mb-16 lg:mb-20">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group rounded-2xl overflow-hidden border border-border/60 bg-background shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400 h-full flex flex-col">
                  {/* Image top half with overlay + icon */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={profile.img}
                      alt={profile.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-foreground/25" />
                    {/* Icon centered on image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="w-14 h-14 lg:w-16 lg:h-16 text-primary drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>

                  {/* Content bottom half */}
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    <Badge variant="secondary" className="w-fit text-[11px] mb-3">{profile.stat}</Badge>
                    <h3 className="font-bold text-lg lg:text-xl text-foreground leading-tight mb-2">
                      {profile.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profile.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={500} className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6">
              <Link to="/contact" className="gap-2">
                Hablar con un experto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 py-6">
              <Link to="/pricing">Ver precios</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
