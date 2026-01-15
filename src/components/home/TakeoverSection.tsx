import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Headphones, Shield, AlertTriangle, Wrench, Cpu, Heart } from "lucide-react";

import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionControl from "@/assets/solution-control.jpg";
import solutionManage from "@/assets/solution-manage.jpg";

const solutions = [
  {
    tagLabel: "OUTSIDE OFFICE HOURS",
    tagProduct: "24/7 COVERAGE",
    title: "Rest while we work",
    description: "When your team is offline, Roomonitor acts as a direct extension of your operations. We handle guests, incidents and emergencies with full access to your tools, workflows and protocols.",
    ctaText: "Discover Guest Assist™",
    ctaLink: "/services/guest-assist",
    image: solutionRest,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
  {
    tagLabel: "KEY DIFFERENTIATOR",
    tagProduct: "HUMAN-FIRST APPROACH",
    title: "Technology + people",
    description: "We combine smart monitoring devices with a 24/7 Control Center staffed by trained agents. Real humans verify, decide and act — technology alone can't replace judgment.",
    ctaText: "Explore Control Center",
    ctaLink: "/services/control-center",
    image: solutionControl,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
  {
    tagLabel: "WHAT WE MANAGE FOR YOU",
    tagProduct: "FULL RESPONSIBILITY",
    title: "Responsibilities, not tasks",
    description: "Guest management, incident resolution and operational continuity — we take full ownership. Your business keeps running without improvisation or dependency on internal teams.",
    ctaText: "See Our Services",
    ctaLink: "/services",
    image: solutionManage,
    overlayColor: "from-slate-900/80 via-slate-900/60 to-transparent",
  },
];

const floatingIcons = [
  [Clock, Users, Headphones],
  [Shield, Cpu, Heart],
  [Wrench, AlertTriangle, Shield],
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
      
      // Calculate how far through the section we've scrolled
      const start = rect.top + windowHeight;
      const end = rect.bottom;
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
              From solo to scale
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Your operations have <em className="font-serif not-italic">no limits</em>.<br />
              Neither do we.
            </h2>
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
                      <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover"
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

                      {/* Floating Icons - positioned at bottom right corner */}
                      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex gap-3">
                        {icons.map((Icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="animate-float"
                            style={{
                              animationDelay: `${iconIndex * 0.3}s`,
                              animationDuration: '3s',
                            }}
                          >
                            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
                              <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
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
