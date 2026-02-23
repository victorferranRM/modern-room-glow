import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Radio, Headphones, Car, CheckCircle, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "V5 Sensor: Total privacy. Absolute precision.",
    description: "Keep your properties protected without invading guest privacy. Our V5 device does not record conversations. It analyzes sound and environmental patterns to anticipate problems before they escalate.",
    points: [
      "24/7 noise monitoring and party detection",
      "Tobacco smoke detection (protect your asset from odor damage)",
      "Climate monitoring (optimize energy consumption)",
    ],
    linkText: "View technical specifications",
    linkHref: "/monitoring",
    floatingElements: [
      { icon: Radio, label: "Noise Alert", position: "top-8 left-8", delay: "0s" },
      { icon: CheckCircle, label: "Smoke Free", position: "top-24 right-6", delay: "0.5s" },
      { icon: CheckCircle, label: "Climate OK", position: "bottom-16 left-12", delay: "1s" },
    ],
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
  {
    title: "Alarm Assistant. We represent you.",
    description: "An alert at 3AM? Keep sleeping. Our 24/7 Control Center receives the alert, immediately contacts the guest (call/SMS), and mediates using proven protocols to stop the issue before it escalates.",
    points: [
      "Immediate human intervention without disturbing you",
      "96% of incidents resolved remotely",
      "Detailed report in your dashboard the next morning",
    ],
    linkText: "Discover the Control Center",
    linkHref: "/services/control-center",
    floatingElements: [
      { icon: Headphones, label: "Agent Active", position: "top-10 right-8", delay: "0.3s" },
      { icon: CheckCircle, label: "Resolved", position: "bottom-20 left-8", delay: "0.8s" },
      { icon: CheckCircle, label: "Report Sent", position: "top-28 left-6", delay: "0.6s" },
    ],
    bgColor: "bg-gradient-to-br from-accent/30 to-accent/50",
  },
  {
    title: "On-Site Response. Real presence when it matters.",
    description: "When technology and remote mediation aren't enough, our Field Service team physically attends the property. From key recovery to eviction management, we are there to protect your asset.",
    points: [
      "Service available in selected cities",
    ],
    linkText: "Check coverage",
    linkHref: "/services/field-service",
    floatingElements: [
      { icon: Car, label: "Team Dispatched", position: "top-8 left-6", delay: "0.2s" },
      { icon: CheckCircle, label: "On-site", position: "top-20 right-8", delay: "0.7s" },
      { icon: CheckCircle, label: "Resolved", position: "bottom-16 right-10", delay: "1.1s" },
    ],
    bgColor: "bg-gradient-to-br from-muted to-muted/80",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our ecosystem
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Hardware + Remote + <em className="font-serif not-italic">On-site</em>
              </h2>
            </div>
          </AnimatedSection>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 150}>
                <div className="group">
                  {/* Image Card with Floating Elements */}
                  <div 
                    className={`relative h-72 lg:h-80 rounded-2xl ${pillar.bgColor} overflow-hidden mb-6`}
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
                    {pillar.floatingElements.map((element, elemIndex) => {
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
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* Key Points */}
                  <ul className="space-y-2 mb-4">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="link" className="p-0 h-auto text-primary gap-1" asChild>
                    <Link to={pillar.linkHref}>
                      {pillar.linkText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
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
