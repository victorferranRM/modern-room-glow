import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

export function ServiceCTA({
  title,
  description,
  primaryCTA = { text: "Hablar con un Experto", link: "/contact" },
  secondaryCTA = { text: "Ver Precios", link: "/pricing" },
}: ServiceCTAProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            {title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              asChild
              className="group transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link to={primaryCTA.link}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="hover:bg-secondary/80 transition-all duration-300"
            >
              <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
