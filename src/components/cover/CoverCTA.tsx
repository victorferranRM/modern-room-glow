import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function CoverCTA() {
  return (
    <section className="relative bg-foreground text-background py-20 lg:py-28 overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px]" />


      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Gestionas más de 50 propiedades?
          </h2>
          <p className="text-lg text-background/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Cover™ está diseñado para gestores profesionales que necesitan estructura operativa real fuera de horario. Hablemos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 text-base px-8 py-6">
              <Link to="/contact" className="gap-2">
                Hablar con un experto
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-background/30 bg-transparent text-background hover:bg-background/10 text-base px-8 py-6">
              <Link to="/pricing">Ver precios</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
