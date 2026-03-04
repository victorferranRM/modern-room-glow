import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Shield } from "lucide-react";

export function CoverHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="animate-fade-in flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-shadow duration-300">
              <Shield className="w-4 h-4" />
              <span>Roomonitor Cover™</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground">
              Cuando tú o tu equipo no estáis,{" "}
              <span className="gradient-text">nosotros estamos.</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Centro de control 24/7 e intervención presencial en 8 ciudades. La operativa nocturna de tus propiedades, sin problemas de estructura.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="text-base px-8 py-6 shadow-soft-lg" asChild>
              <Link to="/contact">
                Hablar con un experto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <a href="#como-funciona">
                <ChevronDown className="w-4 h-4 mr-2" />
                Ver cómo funciona
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
