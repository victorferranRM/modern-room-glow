import { useState } from "react";
import { Link } from "react-router-dom";
import { Volume2, Users, Wind, Thermometer, Calculator, ArrowRight, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// Import images
import monitoringNoise from "@/assets/monitoring-noise.jpg";
import monitoringOccupancy from "@/assets/monitoring-occupancy.jpg";
import monitoringAir from "@/assets/monitoring-air.jpg";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";
interface MonitoringDimension {
  id: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  label: string;
  shortDesc: string;
  description: string;
  image: string;
  href: string;
  hasCalculator?: boolean;
  visual: {
    title: string;
    value: string;
    status: "normal" | "alert" | "good";
    statusLabel: string;
    details: string[];
  };
}
const monitoringDimensions: MonitoringDimension[] = [{
  id: "noise",
  icon: Volume2,
  label: "Noise levels",
  shortDesc: "Prevent disturbances before they escalate",
  description: "Real-time sound level tracking helps identify potential party situations or disturbances.",
  image: monitoringNoise,
  href: "/monitoring/noise",
  visual: {
    title: "Sound Level",
    value: "42 dB",
    status: "normal",
    statusLabel: "Normal activity",
    details: ["Threshold: 70 dB", "Last alert: 3 days ago", "Avg. night: 35 dB"]
  }
}, {
  id: "occupancy",
  icon: Users,
  label: "Occupancy",
  shortDesc: "Detect overcrowding and guest limit breaches",
  description: "Identify when properties exceed expected guest counts, helping enforce house rules.",
  image: monitoringOccupancy,
  href: "/monitoring/occupancy",
  visual: {
    title: "Guest Activity",
    value: "4 guests",
    status: "good",
    statusLabel: "Within limits",
    details: ["Max allowed: 6", "Check-in: 2 days ago", "Expected: 4"]
  }
}, {
  id: "smoking",
  icon: Wind,
  label: "Smoking activity",
  shortDesc: "Identify tobacco smoke and protect the asset",
  description: "Detect cigarette or tobacco smoke presence to enforce non-smoking policies.",
  image: monitoringAir,
  href: "/monitoring/smoke",
  hasCalculator: true,
  visual: {
    title: "Air Particles",
    value: "Clean",
    status: "good",
    statusLabel: "No detection",
    details: ["Last detection: Never", "Policy: Non-smoking", "Risk: Low"]
  }
}, {
  id: "environment",
  icon: Thermometer,
  label: "Indoor conditions",
  shortDesc: "Monitor temperature, humidity and air quality",
  description: "Track environmental factors that could lead to property damage before they become costly.",
  image: monitoringEnvironment,
  href: "/monitoring/environment",
  visual: {
    title: "Environment",
    value: "22°C / 45%",
    status: "good",
    statusLabel: "Optimal",
    details: ["Humidity: 45%", "Mold risk: None", "HVAC: Active"]
  }
}];
export function MonitoringSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeDimension = monitoringDimensions[activeIndex];
  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };
  const getStatusColor = (status: "normal" | "alert" | "good") => {
    switch (status) {
      case "good":
        return "bg-success/20 text-success border-success/30";
      case "alert":
        return "bg-destructive/20 text-destructive border-destructive/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };
  const getStatusDotColor = (status: "normal" | "alert" | "good") => {
    switch (status) {
      case "good":
        return "bg-success";
      case "alert":
        return "bg-destructive";
      default:
        return "bg-primary";
    }
  };
  return <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Additional capability
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              An additional layer of control, when it matters most
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              By monitoring what happens inside the property, Roomonitor helps anticipate incidents before guests even report them — reinforcing operations and reducing impact.
            </p>
          </AnimatedSection>

          {/* Interactive Content - Tabs + Image side by side */}
          <AnimatedSection delay={200}>
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
              {/* Left: Compact Tabs (2/5 width) */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                {monitoringDimensions.map((dimension, index) => {
                const Icon = dimension.icon;
                const isActive = activeIndex === index;
                return <button key={dimension.id} onClick={() => handleTabChange(index)} className={cn("w-full text-left p-3 rounded-xl border transition-all duration-300 group pb-[14px] pt-[14px]", isActive ? "bg-card border-primary/30 shadow-soft" : "bg-card/50 border-border hover:bg-card hover:border-primary/20")}>
                      <div className="flex items-center gap-3">
                        <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300", isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary")}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={cn("font-semibold mb-0.5 transition-colors duration-300 text-base", isActive ? "text-foreground" : "text-foreground/80")}>
                            {dimension.label}
                          </h3>
                          <p className={cn("transition-colors duration-300 line-clamp-1 text-sm", isActive ? "text-muted-foreground" : "text-muted-foreground/70")}>
                            {dimension.shortDesc}
                          </p>
                        </div>
                        <div className={cn("w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300", isActive ? "bg-primary scale-100" : "bg-border scale-75 group-hover:bg-primary/40")} />
                      </div>
                    </button>;
              })}
                
                {/* Learn more button below tabs */}
                <div className="mt-4">
                  <Button asChild variant="outline" className="w-full gap-2">
                    <Link to={activeDimension.href}>
                      Learn more about {activeDimension.label}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: Visual Area with Background Image (3/5 width) */}
              <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[400px]">
                {/* Background Image with fade transition */}
                {monitoringDimensions.map((dimension, index) => <div key={dimension.id} className={cn("absolute inset-0 transition-opacity duration-500", activeIndex === index ? "opacity-100" : "opacity-0")}>
                    <OptimizedImage 
                      src={dimension.image} 
                      alt={dimension.label} 
                      className="w-full h-full object-cover" 
                      containerClassName="w-full h-full"
                      priority={index === 0}
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
                  </div>)}

                {/* Floating Card - Centered with entrance animation */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <div className={cn("w-full max-w-xs bg-card/95 backdrop-blur-md rounded-xl border shadow-soft-lg overflow-hidden transition-all duration-500", isTransitioning ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100")}>
                    {/* Card Header */}
                    <div className="p-3 border-b bg-secondary/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            {(() => {
                            const Icon = activeDimension.icon;
                            return <Icon className="w-4 h-4 text-primary" />;
                          })()}
                          </div>
                          <div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                              Live
                            </div>
                            <div className="font-semibold text-xs">{activeDimension.visual.title}</div>
                          </div>
                        </div>
                        <div className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium border flex items-center gap-1", getStatusColor(activeDimension.visual.status))}>
                          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", getStatusDotColor(activeDimension.visual.status))} />
                          {activeDimension.visual.statusLabel}
                        </div>
                      </div>
                    </div>

                    {/* Main Value */}
                    <div className="p-3 text-center">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {activeDimension.visual.value}
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {activeDimension.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="px-3 pb-3">
                      <div className="grid grid-cols-3 gap-1">
                        {activeDimension.visual.details.map((detail, idx) => <div key={idx} className="bg-secondary/50 rounded-lg px-1.5 py-1 text-center">
                            <div className="text-[9px] text-muted-foreground">{detail}</div>
                          </div>)}
                      </div>
                    </div>

                    {/* Calculator Button - Only for smoking */}
                    {activeDimension.hasCalculator && <div className="px-3 pb-3">
                        <Button variant="outline" size="sm" className="w-full text-xs h-8 gap-1" asChild>
                          <Link to="/resources/savings-calculator">
                            <Calculator className="w-3 h-3" />
                            Calculate Savings
                          </Link>
                        </Button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Operations connection + CTA - Full width below */}
          <AnimatedSection delay={400} className="mt-8">
            <div className="bg-foreground/5 rounded-2xl p-6 lg:p-8 border border-foreground/5">
              <p className="text-base lg:text-lg text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-6">
                <span className="text-foreground font-semibold">Integrated with operations:</span>{" "}
                Monitoring data feeds our Control Center and Field Service teams, enabling faster and more informed decisions.
              </p>
              <div className="flex justify-center">
                <Button asChild className="gap-2">
                  <Link to="/monitoring">
                    Discover the Roomonitor Device
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
}