import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";

const stats = [
  { number: 11, suffix: "M+", description: "Stays protected across our platform" },
  { number: 99.9, suffix: "%", description: "Uptime backed by 24/7 support" },
  { number: 5, prefix: "<", suffix: " min", description: "Setup time per room" },
  { number: 250, suffix: "+", description: "Hotels trust Roomonitor worldwide" },
];

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

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const AnimatedStat = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, ref } = useCountUp(stat.number, 2000);
  
  const formatNumber = (num: number) => {
    if (stat.number === 99.9) {
      return num.toFixed(1);
    }
    return Math.round(num).toString();
  };

  return (
    <div ref={ref} className="space-y-2 group cursor-default">
      <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80 origin-left group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.4)]">
        {stat.prefix}{formatNumber(count)}{stat.suffix}
      </p>
      <p className="text-muted-foreground text-base md:text-lg transition-colors duration-300 group-hover:text-foreground">
        {stat.description}
      </p>
    </div>
  );
};

export const WhyRoomonitorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
        <div className="mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Roomonitor?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Built for hospitality,{" "}
            <span className="italic text-primary">trusted</span> by industry leaders
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Stats (3/5 width) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-12">
              {stats.map((stat, index) => (
                <AnimatedStat key={index} stat={stat} />
              ))}
            </div>
          </div>

          {/* Right Side - Case Studies Carousel (2/5 width) */}
          <div className="lg:col-span-2 relative flex flex-col">
            {/* Background Image */}
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[400px]">
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
              
              {/* Logo overlay */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                <span className="text-lg font-bold text-foreground">{activeStudy.company.charAt(0)}</span>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Quote Card */}
              <div
                className={`absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-5 shadow-lg transition-all duration-300 ease-in-out ${
                  isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(activeStudy.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({activeStudy.rating}.0)
                  </span>
                </div>

                {/* Quote */}
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  "{activeStudy.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{activeStudy.name}</p>
                    <p className="text-xs text-muted-foreground">{activeStudy.position}</p>
                  </div>
                  <Button size="sm" variant="default" asChild>
                    <Link to={`/resources/case-studies/${activeStudy.slug}`}>
                      Read case study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
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
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
