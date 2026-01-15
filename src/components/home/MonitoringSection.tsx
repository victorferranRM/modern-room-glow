import { useState } from "react";
import { Volume2, Users, Wind, Thermometer } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

interface MonitoringDimension {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  shortDesc: string;
  description: string;
  visual: {
    title: string;
    value: string;
    status: "normal" | "alert" | "good";
    statusLabel: string;
    details: string[];
  };
}

const monitoringDimensions: MonitoringDimension[] = [
  {
    id: "noise",
    icon: Volume2,
    label: "Noise levels",
    shortDesc: "Prevent disturbances before they escalate",
    description: "Real-time sound level tracking helps identify potential party situations or disturbances, allowing intervention before complaints arise.",
    visual: {
      title: "Sound Level",
      value: "42 dB",
      status: "normal",
      statusLabel: "Normal activity",
      details: ["Threshold: 70 dB", "Last alert: 3 days ago", "Avg. night: 35 dB"],
    },
  },
  {
    id: "occupancy",
    icon: Users,
    label: "Occupancy",
    shortDesc: "Detect overcrowding and guest limit breaches",
    description: "Identify when properties exceed expected guest counts, helping enforce house rules and prevent unauthorized gatherings.",
    visual: {
      title: "Guest Activity",
      value: "4 guests",
      status: "good",
      statusLabel: "Within limits",
      details: ["Max allowed: 6", "Check-in: 2 days ago", "Expected: 4"],
    },
  },
  {
    id: "smoking",
    icon: Wind,
    label: "Smoking activity",
    shortDesc: "Identify tobacco smoke incidents and protect the asset",
    description: "Detect cigarette or tobacco smoke presence to enforce non-smoking policies and prevent damage to furnishings and air quality.",
    visual: {
      title: "Air Particles",
      value: "Clean",
      status: "good",
      statusLabel: "No detection",
      details: ["Last detection: Never", "Policy: Non-smoking", "Risk: Low"],
    },
  },
  {
    id: "environment",
    icon: Thermometer,
    label: "Indoor conditions",
    shortDesc: "Monitor temperature, humidity and air quality",
    description: "Track environmental factors that could lead to property damage like mold, frozen pipes, or HVAC issues before they become costly problems.",
    visual: {
      title: "Environment",
      value: "22°C / 45%",
      status: "good",
      statusLabel: "Optimal",
      details: ["Humidity: 45%", "Mold risk: None", "HVAC: Active"],
    },
  },
];

export function MonitoringSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDimension = monitoringDimensions[activeIndex];

  const getStatusColor = (status: "normal" | "alert" | "good") => {
    switch (status) {
      case "good":
        return "bg-success/10 text-success border-success/20";
      case "alert":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
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

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
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

          {/* Interactive Content */}
          <AnimatedSection delay={200}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Tabs/Selectors */}
              <div className="space-y-3">
                {monitoringDimensions.map((dimension, index) => {
                  const Icon = dimension.icon;
                  const isActive = activeIndex === index;
                  
                  return (
                    <button
                      key={dimension.id}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "w-full text-left p-5 rounded-xl border transition-all duration-300 group",
                        isActive 
                          ? "bg-card border-primary/30 shadow-soft" 
                          : "bg-card/50 border-border hover:bg-card hover:border-primary/20 hover:shadow-sm"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        )}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={cn(
                            "font-semibold text-lg mb-1 transition-colors duration-300",
                            isActive ? "text-foreground" : "text-foreground/80"
                          )}>
                            {dimension.label}
                          </h3>
                          <p className={cn(
                            "text-sm transition-colors duration-300",
                            isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                          )}>
                            {dimension.shortDesc}
                          </p>
                        </div>
                        <div className={cn(
                          "w-2 h-2 rounded-full shrink-0 mt-2 transition-all duration-300",
                          isActive 
                            ? "bg-primary scale-100" 
                            : "bg-border scale-75 group-hover:bg-primary/40"
                        )} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right: Dynamic Visual */}
              <div className="lg:sticky lg:top-24">
                <div className="relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl scale-95" />
                  
                  {/* Main Card */}
                  <div className="relative bg-card rounded-2xl border shadow-soft-lg overflow-hidden">
                    {/* Card Header */}
                    <div className="p-6 border-b bg-secondary/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            {(() => {
                              const Icon = activeDimension.icon;
                              return <Icon className="w-5 h-5 text-primary" />;
                            })()}
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">
                              Live Monitoring
                            </div>
                            <div className="font-semibold">{activeDimension.visual.title}</div>
                          </div>
                        </div>
                        <div className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-2",
                          getStatusColor(activeDimension.visual.status)
                        )}>
                          <span className={cn(
                            "w-1.5 h-1.5 rounded-full animate-pulse",
                            getStatusDotColor(activeDimension.visual.status)
                          )} />
                          {activeDimension.visual.statusLabel}
                        </div>
                      </div>
                    </div>

                    {/* Main Value Display */}
                    <div className="p-8 text-center">
                      <div className="text-5xl sm:text-6xl font-bold text-foreground mb-2 transition-all duration-500">
                        {activeDimension.visual.value}
                      </div>
                      <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                        {activeDimension.description}
                      </p>
                    </div>

                    {/* Details Grid */}
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-3 gap-3">
                        {activeDimension.visual.details.map((detail, idx) => (
                          <div 
                            key={idx}
                            className="bg-secondary/50 rounded-lg px-3 py-2.5 text-center"
                          >
                            <div className="text-xs text-muted-foreground">{detail}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer connection */}
                    <div className="px-6 pb-6">
                      <div className="bg-foreground/5 rounded-xl p-4 border border-foreground/5">
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          <span className="text-foreground font-medium">Integrated with operations:</span>{" "}
                          Monitoring data feeds our Control Center and Field Service teams, enabling faster and more informed decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
