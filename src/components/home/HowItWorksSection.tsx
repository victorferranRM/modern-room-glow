import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Radio, Shield, Users, Bell, AlertTriangle, CheckCircle, Phone } from "lucide-react";

const steps = [
  {
    title: "Detect & Alert",
    description: "Real-time signals from Roomonitor devices, PMS systems, and guest communications trigger instant alerts to our Control Center.",
    floatingElements: [
      { icon: Radio, label: "Noise Alert", position: "top-8 left-8", delay: "0s" },
      { icon: Bell, label: "Smoke Detected", position: "top-24 right-6", delay: "0.5s" },
      { icon: AlertTriangle, label: "Occupancy Warning", position: "bottom-16 left-12", delay: "1s" },
    ],
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
  {
    title: "Verify & Decide",
    description: "Our 24/7 Control Center agents verify each case in real-time and apply your predefined operational protocols.",
    floatingElements: [
      { icon: Shield, label: "Protocol Active", position: "top-10 right-8", delay: "0.3s" },
      { icon: CheckCircle, label: "Verified", position: "bottom-20 left-8", delay: "0.8s" },
      { icon: Users, label: "Agent Assigned", position: "top-28 left-6", delay: "0.6s" },
    ],
    bgColor: "bg-gradient-to-br from-accent/30 to-accent/50",
  },
  {
    title: "Resolve & Report",
    description: "We resolve issues remotely or dispatch our Field Service team for on-site intervention, with full reporting and documentation.",
    floatingElements: [
      { icon: Phone, label: "Guest Contacted", position: "top-8 left-6", delay: "0.2s" },
      { icon: CheckCircle, label: "Issue Resolved", position: "top-20 right-8", delay: "0.7s" },
      { icon: Shield, label: "Report Sent", position: "bottom-16 right-10", delay: "1.1s" },
    ],
    bgColor: "bg-gradient-to-br from-muted to-muted/80",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                How it works
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                All your properties.<br />
                Every incident. <em className="font-serif not-italic">One</em> solution.
              </h2>
            </div>
            <Button asChild size="lg" className="w-fit shadow-soft">
              <Link to="/demo">Get started</Link>
            </Button>
          </AnimatedSection>

          {/* Steps Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 150}>
                <div className="group">
                  {/* Image Card with Floating Elements */}
                  <div 
                    className={`relative h-72 lg:h-80 rounded-2xl ${step.bgColor} overflow-hidden mb-6`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        <defs>
                          <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                      </svg>
                    </div>

                    {/* Floating UI Elements */}
                    {step.floatingElements.map((element, elemIndex) => {
                      const Icon = element.icon;
                      return (
                        <div
                          key={elemIndex}
                          className={`absolute ${element.position} animate-float`}
                          style={{ 
                            animationDelay: element.delay,
                            animationDuration: '3s'
                          }}
                        >
                          <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2 border border-border/50 transform transition-transform duration-300 group-hover:scale-105">
                            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground whitespace-nowrap">
                              {element.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <span className="text-4xl font-bold text-primary/30">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
