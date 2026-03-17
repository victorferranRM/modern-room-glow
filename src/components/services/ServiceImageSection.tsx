import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LocalizedLink } from "@/i18n/LocalizedLink";

interface ServiceImageSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  reversed?: boolean;
  background?: "default" | "secondary";
}

export function ServiceImageSection({
  eyebrow, title, description, features, image, imageAlt,
  ctaText = "Learn More", ctaLink = "/contact",
  reversed = false, background = "default",
}: ServiceImageSectionProps) {
  return (
    <section className={cn(
      "py-20 lg:py-28 relative overflow-hidden",
      background === "secondary" && "bg-secondary/30"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "grid lg:grid-cols-2 gap-12 items-center",
          reversed && "lg:[&>*:first-child]:order-2"
        )}>
          <AnimatedSection animation={reversed ? "fade-left" : "fade-right"}>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3 sm:mb-4">{eyebrow}</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">{title}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 mt-0.5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
                    <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/80 transition-colors group-hover:text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="group transform hover:scale-105 transition-all duration-300">
              <LocalizedLink to={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </LocalizedLink>
            </Button>
          </AnimatedSection>
          <AnimatedSection delay={200} animation={reversed ? "fade-right" : "fade-left"}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-muted/80" />
              <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border/50">
                <OptimizedImage src={image} alt={imageAlt} className="w-full transition-transform duration-700 group-hover:scale-105" containerClassName="w-full aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
