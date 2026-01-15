import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Headphones, Shield, AlertTriangle, Wrench } from "lucide-react";

const solutions = [
  {
    tagLabel: "OUTSIDE OFFICE HOURS",
    tagProduct: "24/7 COVERAGE",
    title: "Rest while we work",
    description: "When your team is offline, Roomonitor acts as a direct extension of your operations. We handle guests, incidents and emergencies with full access to your tools, workflows and protocols.",
    ctaText: "Discover Guest Assist™",
    ctaLink: "/services/guest-assist",
    bgColor: "bg-gradient-to-br from-slate-800 to-slate-900",
    textColor: "text-white",
  },
  {
    tagLabel: "KEY DIFFERENTIATOR",
    tagProduct: "HUMAN-FIRST APPROACH",
    title: "Technology + people",
    description: "We combine smart monitoring devices with a 24/7 Control Center staffed by trained agents. Real humans verify, decide and act — technology alone can't replace judgment.",
    ctaText: "Explore Control Center",
    ctaLink: "/services/control-center",
    bgColor: "bg-gradient-to-br from-primary/10 to-accent",
    textColor: "text-foreground",
  },
  {
    tagLabel: "WHAT WE MANAGE FOR YOU",
    tagProduct: "FULL RESPONSIBILITY",
    title: "Responsibilities, not tasks",
    description: "Guest management, incident resolution and operational continuity — we take full ownership. Your business keeps running without improvisation or dependency on internal teams.",
    ctaText: "See Our Services",
    ctaLink: "/services",
    bgColor: "bg-gradient-to-br from-muted to-secondary/50",
    textColor: "text-foreground",
  },
];

const floatingIcons = [
  [Clock, Users, Headphones],
  [Shield, AlertTriangle, Users],
  [Wrench, Clock, Shield],
];

export function TakeoverSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
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
          <div className="space-y-4">
            {solutions.map((solution, index) => {
              const icons = floatingIcons[index];
              return (
                <AnimatedSection key={solution.title} delay={index * 100}>
                  <div 
                    className={`relative rounded-3xl overflow-hidden ${solution.bgColor} min-h-[400px] lg:min-h-[450px]`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 800 400">
                        <defs>
                          <pattern id={`pattern-${index}`} width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1.5" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                      </svg>
                    </div>

                    <div className="relative h-full flex flex-col lg:flex-row">
                      {/* Left Content */}
                      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${solution.textColor}`}>
                          {solution.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className={`px-3 py-1.5 text-xs font-medium rounded-full ${
                            index === 0 
                              ? 'bg-white/20 text-white' 
                              : 'bg-primary/10 text-primary'
                          }`}>
                            {solution.tagLabel}
                          </span>
                          <span className={`px-3 py-1.5 text-xs font-medium rounded-full border ${
                            index === 0 
                              ? 'border-white/30 text-white' 
                              : 'border-primary/30 text-primary'
                          }`}>
                            {solution.tagProduct}
                          </span>
                        </div>
                      </div>

                      {/* Right Content */}
                      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center lg:items-start">
                        <p className={`text-base lg:text-lg leading-relaxed mb-8 ${
                          index === 0 ? 'text-white/90' : 'text-muted-foreground'
                        }`}>
                          {solution.description}
                        </p>
                        <Button 
                          asChild 
                          size="lg" 
                          variant={index === 0 ? "secondary" : "default"}
                          className="w-fit shadow-soft"
                        >
                          <Link to={solution.ctaLink}>{solution.ctaText}</Link>
                        </Button>
                      </div>

                      {/* Floating Icons */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
                        {icons.map((Icon, iconIndex) => {
                          const positions = [
                            { x: -120, y: -60 },
                            { x: 0, y: 40 },
                            { x: 100, y: -40 },
                          ];
                          return (
                            <div
                              key={iconIndex}
                              className="absolute animate-float"
                              style={{
                                left: `${positions[iconIndex].x}px`,
                                top: `${positions[iconIndex].y}px`,
                                animationDelay: `${iconIndex * 0.5}s`,
                                animationDuration: '4s',
                              }}
                            >
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                                index === 0 
                                  ? 'bg-white/20 backdrop-blur-sm' 
                                  : 'bg-background/80 backdrop-blur-sm border border-border/50'
                              }`}>
                                <Icon className={`w-5 h-5 ${index === 0 ? 'text-white' : 'text-primary'}`} />
                              </div>
                            </div>
                          );
                        })}
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
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
