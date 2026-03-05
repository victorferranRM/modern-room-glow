import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Radio, Headphones, ShoppingCart, MessageSquare, ArrowRight } from "lucide-react";

export function ControlLevelSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Elige tu nivel de control
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              ¿Qué necesita tu{" "}
              <span className="text-primary">operativa</span>?
            </h2>
          </AnimatedSection>

          {/* Two cards */}
          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: Monitoring */}
              <div className="bg-card rounded-2xl border-2 border-border p-8 lg:p-10 flex flex-col h-full hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">Monitorización</h3>
                <p className="text-muted-foreground mb-8">
                  Detecta y controla lo que pasa en tus alojamientos
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="font-semibold text-foreground">Noise Alarm</p>
                    <p className="text-sm text-muted-foreground">Dispositivo + monitorización. Tú gestionas.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4">
                    <p className="font-semibold text-foreground">Alarm Assistant</p>
                    <p className="text-sm text-muted-foreground">+ Nuestro equipo gestiona las alertas por ti</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    Compra online · Activación inmediata
                  </p>
                  <Button className="w-full gap-2" size="lg" asChild>
                    <Link to="/pricing">
                      <ShoppingCart className="w-4 h-4" />
                      Ver planes y comprar
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Card 2: Delegated Operations */}
              <div className="bg-foreground rounded-2xl p-8 lg:p-10 flex flex-col h-full text-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-background" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">Operativa delegada</h3>
                <p className="text-background/70 mb-8">
                  Nos hacemos cargo fuera de horario
                </p>

                <div className="space-y-4 mb-8 flex-1">
                  <div className="border-l-2 border-background/30 pl-4">
                    <p className="font-semibold">Roomonitor Cover</p>
                    <p className="text-sm text-background/60">Monitorización + Centro de Control + Field Service</p>
                  </div>
                  <div className="border-l-2 border-background/30 pl-4">
                    <p className="font-semibold">Only Services</p>
                    <p className="text-sm text-background/60">Centro de Control + Field Service</p>
                  </div>
                </div>

                <div className="border-t border-background/20 pt-6">
                  <p className="text-xs font-medium text-background/50 uppercase tracking-wider mb-4">
                    Venta consultiva · Portfolio +50 propiedades
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full gap-2 border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground" 
                    size="lg" 
                    asChild
                  >
                    <Link to="/contact">
                      <MessageSquare className="w-4 h-4" />
                      Hablar con un experto
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bottom note */}
          <AnimatedSection delay={400}>
            <p className="text-center text-muted-foreground text-sm mt-8 max-w-2xl mx-auto">
              ¿No estás seguro? Muchos de nuestros clientes empiezan con monitorización y escalan a operativa delegada cuando su portfolio crece.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
