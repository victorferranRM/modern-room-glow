import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, X, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";

const beforeItems = [
  "Night calls handled internally",
  "High neighbor complaints",
  "No on-site coverage",
  "Reactive incident management",
];

const afterItems = [
  "96% of incidents resolved remotely",
  "0 unmanaged night emergencies",
  "24/7 operational coverage",
  "On-site intervention when escalation is required",
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
            Real impact for{" "}
            <span className="italic text-primary">scaling operators</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Stats (1/2 width) */}
          <div className="flex flex-col justify-center gap-6">
            {/* Before */}
            <div className="rounded-xl border border-border/60 bg-muted/30 p-6">
              <h3 className="text-xs font-semibold text-destructive/70 uppercase tracking-widest mb-5">Before Roomonitor</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-destructive/10 shrink-0">
                      <X className="h-3.5 w-3.5 text-destructive/60" />
                    </span>
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-sm">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">After Roomonitor</h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </span>
                    <span className="text-base md:text-lg font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Case Studies Carousel (1/2 width) */}
          <div className="relative flex flex-col">
            {/* Background Image */}
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
