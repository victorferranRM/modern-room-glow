import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight, LucideIcon } from "lucide-react";

interface MonitoringHeroProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbLabel: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

export function MonitoringHero({
  icon: Icon,
  badge,
  title,
  titleHighlight,
  description,
  image,
  imageAlt,
  breadcrumbLabel,
  primaryCTA = { text: "Get Started", link: "/pricing" },
  secondaryCTA = { text: "Request a Demo", link: "/contact" },
}: MonitoringHeroProps) {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-secondary/30 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb Navigation */}
        <AnimatedSection className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/monitoring" className="text-muted-foreground hover:text-foreground">
                    Monitoring
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumbLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon className="w-4 h-4" />
              {badge}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
              <span className="block sm:inline">{title}</span>{" "}
              <span className="text-primary block">{titleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to={primaryCTA.link}>
                  {primaryCTA.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={secondaryCTA.link}>{secondaryCTA.text}</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
              <OptimizedImage
                src={image}
                alt={imageAlt}
                className="relative w-full rounded-2xl shadow-2xl object-cover"
                containerClassName="relative w-full rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
