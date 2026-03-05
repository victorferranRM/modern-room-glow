import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import redkoolImage from "@/assets/redkool-app-map.jpg";

export function CoverRedkool() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-primary/20" />
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border/50">
                <OptimizedImage
                  src={redkoolImage}
                  alt="Redkool app mostrando seguimiento en tiempo real de agentes en mapa"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                  containerClassName="w-full aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-left" delay={150}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Sistema en tiempo real
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-balance">
              Control total de todas las intervenciones
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro sistema de coordinación proporciona trazabilidad completa de cada intervención. Visualiza tiempos estimados de llegada, estado en tiempo real y reportes detallados de cada incidencia.
            </p>
            <Button asChild size="lg" className="group">
              <a
                href="https://youtu.be/S1PdMYFIYsU?si=oUPtRXuYNyeoQE_d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer más
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
