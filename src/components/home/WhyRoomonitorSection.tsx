import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, X, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { caseStudies } from "@/lib/case-studies-data";

const beforeItems = [
  "Llamadas nocturnas gestionadas internamente",
  "Altas quejas de vecinos",
  "Sin cobertura in situ",
  "Gestión reactiva de incidencias",
];

const afterMetrics = [
  { value: 96, suffix: "%", label: "de incidencias resueltas remotamente" },
  { value: 0, suffix: "", label: "emergencias nocturnas sin gestionar" },
];

const afterItems = [
  "Cobertura operativa nocturna",
  "Intervención in situ cuando se requiere escalado",
];

// Animated counter hook
function useCountUp(target: number, duration = 1800, shouldStart = false) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasStarted.current) return;
    hasStarted.current = true;

    if (target === 0) {
      setCount(0);
      return;
    }

    const steps = 40;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
}

// Map case studies to display format with testimonials
const caseStudyTestimonials = caseStudies.slice(0, 5).map((study, index) => ({
  id: index + 1,
  slug: study.slug,
  image: study.heroImage,
  name: study.quote?.author || study.company,
  position: study.quote?.role || `${study.industry}, ${study.location}`,
  quote: study.quote?.text || study.summary,
  company: study.company,
  rating: 5,
}));

const MetricCard = ({ value, suffix, label, delay, isVisible }: { value: number; suffix: string; label: string; delay: number; isVisible: boolean }) => {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <div
      className="transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <span className="text-5xl md:text-6xl font-bold text-primary tracking-tight leading-none">
        {count}{suffix}
      </span>
      <p className="text-muted-foreground text-sm md:text-base mt-2 leading-snug">{label}</p>
    </div>
  );
};

export const WhyRoomonitorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % caseStudyTestimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const activeStudy = caseStudyTestimonials[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            ¿Por qué Roomonitor?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Impacto real para{" "}
            <span className="text-primary">operadores en crecimiento</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Transformation Story */}
          <div ref={sectionRef} className="flex flex-col justify-center gap-10">
            {/* Before */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <p className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest mb-5">
                Antes de Roomonitor
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {beforeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-muted-foreground/70 transition-all duration-500"
                    style={{
                      transitionDelay: `${150 + i * 80}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-8px)",
                    }}
                  >
                    <X className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px bg-border/60 transition-all duration-700 ease-out origin-left"
              style={{
                transitionDelay: "400ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />

            {/* After */}
            <div>
              <p
                className="text-xs font-semibold text-primary uppercase tracking-widest mb-6 transition-all duration-700"
                style={{
                  transitionDelay: "500ms",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                Después de Roomonitor
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                {afterMetrics.map((metric, i) => (
                  <MetricCard
                    key={i}
                    value={metric.value}
                    suffix={metric.suffix}
                    label={metric.label}
                    delay={600 + i * 150}
                    isVisible={isVisible}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {afterItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 transition-all duration-600 ease-out"
                    style={{
                      transitionDelay: `${900 + i * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-base md:text-lg font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Case Studies Carousel */}
          <div className="relative flex flex-col">
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[450px]">
              <div
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
              >
                <img
                  src={activeStudy.image}
                  alt={activeStudy.company}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                <span className="text-lg font-bold text-foreground">{activeStudy.company.charAt(0)}</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div
                className={`absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-5 shadow-lg transition-all duration-300 ease-in-out ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(activeStudy.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({activeStudy.rating}.0)
                  </span>
                </div>

                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  "{activeStudy.quote}"
                </p>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{activeStudy.name}</p>
                    <p className="text-xs text-muted-foreground">{activeStudy.position}</p>
                  </div>
                  <Button size="sm" variant="default" asChild>
                    <Link to={`/resources/case-studies/${activeStudy.slug}`}>
                      Ver caso de éxito
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {caseStudyTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir al caso de éxito ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
