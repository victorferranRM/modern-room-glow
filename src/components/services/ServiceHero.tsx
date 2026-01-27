import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  variant?: "primary" | "destructive";
}

export function ServiceHero({
  icon: Icon,
  badge,
  title,
  titleHighlight,
  description,
  image,
  imageAlt,
  primaryCTA = { text: "Learn More", link: "/contact" },
  secondaryCTA = { text: "View Pricing", link: "/pricing" },
  variant = "primary",
}: ServiceHeroProps) {
  const badgeStyles = variant === "destructive" 
    ? "bg-destructive/10 text-destructive" 
    : "bg-primary/10 text-primary";
  
  const glowStyles = variant === "destructive"
    ? "from-destructive/20 to-transparent"
    : "from-primary/20 to-transparent";

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/50 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6",
              "transform hover:scale-105 transition-transform duration-300",
              badgeStyles
            )}>
              <Icon className="w-4 h-4" />
              {badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
              <span className="block sm:inline">{title}</span>{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text block pb-1">
                {titleHighlight}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
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

          <AnimatedSection delay={200} animation="fade-left">
            <div className="relative group">
              <div className={cn(
                "absolute -inset-4 bg-gradient-to-br rounded-3xl blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:opacity-80",
                glowStyles
              )} />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
