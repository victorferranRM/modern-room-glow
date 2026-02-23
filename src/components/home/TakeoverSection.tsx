import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldAlert, TrendingDown, TrendingUp, Shield, Wrench, Heart } from "lucide-react";

import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionControl from "@/assets/solution-control.jpg";
import solutionManage from "@/assets/solution-manage.jpg";

const solutions = [
  {
    tagLabel: "COMPLIANCE",
    tagProduct: "PREVENTION",
    title: "Prevent conflicts",
    description: "Say goodbye to neighbor complaints, uncontrolled parties and municipal fines.",
    ctaText: "Learn about monitoring",
    ctaLink: "/monitoring",
    image: solutionRest,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
  {
    tagLabel: "EFFICIENCY",
    tagProduct: "COST REDUCTION",
    title: "Reduce operational costs",
    description: "No need to hire night-shift staff. We become your out-of-hours team.",
    ctaText: "Explore our services",
    ctaLink: "/services/control-center",
    image: solutionControl,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
  {
    tagLabel: "GROWTH",
    tagProduct: "SCALABILITY",
    title: "Scale without limits",
    description: "Add more properties to your portfolio without multiplying workload or stress.",
    ctaText: "See how it works",
    ctaLink: "/how-it-works",
    image: solutionManage,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
];

const floatingIcons = [
  [ShieldAlert, Shield, Heart],
  [TrendingDown, Shield, Heart],
  [TrendingUp, Wrench, Shield],
];

export function TakeoverSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      const total = sectionHeight + windowHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / total));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Problem vs Solution
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Technology alone is <em className="font-serif not-italic">not enough</em>.
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl leading-relaxed">
              A noise sensor is a passive tool. When there's a real party, you need an active response. At Roomonitor, we close the loop:
            </p>
          </AnimatedSection>

          {/* Stacked Solution Cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => {
              const icons = floatingIcons[index];
              const cardProgress = Math.max(0, Math.min(1, (scrollProgress - index * 0.2) * 2));
              
              return (
                <AnimatedSection key={solution.title} delay={index * 100}>
                  <div 
                    className="group relative rounded-3xl overflow-hidden min-h-[450px] lg:min-h-[500px]"
                    style={{
                      transform: `translateY(${(1 - cardProgress) * 30}px)`,
                      opacity: 0.7 + cardProgress * 0.3,
                    }}
                  >
                    {/* Background Image with Parallax */}
                    <div 
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        transform: `scale(1.1) translateY(${scrollProgress * 20 - 10}px)`,
                      }}
                    >
                      <OptimizedImage 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        priority={index === 0}
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${solution.overlayColor}`} />

                    <div className="relative h-full flex flex-col lg:flex-row min-h-[450px] lg:min-h-[500px]">
                      {/* Left Content */}
                      <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center max-w-xl">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                          {solution.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm">
                            {solution.tagLabel}
                          </span>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/30 text-white">
                            {solution.tagProduct}
                          </span>
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center lg:items-start">
                        <p className="text-base lg:text-lg leading-relaxed mb-8 text-white/90 max-w-md">
                          {solution.description}
                        </p>
                        <Button 
                          asChild 
                          size="lg" 
                          variant="secondary"
                          className="w-fit shadow-soft"
                        >
                          <Link to={solution.ctaLink}>{solution.ctaText}</Link>
                        </Button>
                      </div>

                      {/* Floating Icons */}
                      <div className="hidden lg:flex absolute top-12 right-12 gap-3">
                        {icons.map((Icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="animate-float"
                            style={{
                              animationDelay: `${iconIndex * 0.3}s`,
                              animationDuration: '3s',
                            }}
                          >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
