import { useState } from "react";
import { Volume2, Users, Wind, Thermometer, Calculator, X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

// Import images
import monitoringNoise from "@/assets/monitoring-noise.jpg";
import monitoringOccupancy from "@/assets/monitoring-occupancy.jpg";
import monitoringAir from "@/assets/monitoring-air.jpg";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";

interface MonitoringDimension {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  shortDesc: string;
  description: string;
  image: string;
  hasCalculator?: boolean;
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
    description: "Real-time sound level tracking helps identify potential party situations or disturbances.",
    image: monitoringNoise,
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
    description: "Identify when properties exceed expected guest counts, helping enforce house rules.",
    image: monitoringOccupancy,
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
    shortDesc: "Identify tobacco smoke and protect the asset",
    description: "Detect cigarette or tobacco smoke presence to enforce non-smoking policies.",
    image: monitoringAir,
    hasCalculator: true,
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
    description: "Track environmental factors that could lead to property damage before they become costly.",
    image: monitoringEnvironment,
    visual: {
      title: "Environment",
      value: "22°C / 45%",
      status: "good",
      statusLabel: "Optimal",
      details: ["Humidity: 45%", "Mold risk: None", "HVAC: Active"],
    },
  },
];

// Savings Calculator Component
function SavingsCalculator({ onClose }: { onClose: () => void }) {
  const [units, setUnits] = useState([50]);
  const [incidentRate, setIncidentRate] = useState([8]); // % of units with incidents per year
  const [avgDamageCost, setAvgDamageCost] = useState([350]); // € per incident

  const annualIncidents = Math.round((units[0] * incidentRate[0]) / 100);
  const annualDamageCost = annualIncidents * avgDamageCost[0];
  const preventionRate = 0.75; // 75% prevention with early detection
  const annualSavings = Math.round(annualDamageCost * preventionRate);

  return (
    <div className="bg-card rounded-xl border shadow-soft-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="p-4 border-b bg-primary/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Calculator className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-semibold text-sm">Smoke Detection Savings</div>
            <div className="text-[10px] text-muted-foreground">Estimate your annual savings</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Units slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground">Properties</label>
            <span className="text-sm font-semibold">{units[0]} units</span>
          </div>
          <Slider
            value={units}
            onValueChange={setUnits}
            min={10}
            max={500}
            step={10}
            className="w-full"
          />
        </div>

        {/* Incident rate slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground">Incident rate</label>
            <span className="text-sm font-semibold">{incidentRate[0]}%/year</span>
          </div>
          <Slider
            value={incidentRate}
            onValueChange={setIncidentRate}
            min={1}
            max={20}
            step={1}
            className="w-full"
          />
        </div>

        {/* Damage cost slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground">Avg. damage cost</label>
            <span className="text-sm font-semibold">€{avgDamageCost[0]}</span>
          </div>
          <Slider
            value={avgDamageCost}
            onValueChange={setAvgDamageCost}
            min={100}
            max={1000}
            step={50}
            className="w-full"
          />
        </div>

        {/* Results */}
        <div className="pt-3 border-t space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Est. incidents/year</span>
            <span className="font-medium">{annualIncidents}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Prevention rate</span>
            <span className="font-medium text-success">75%</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm font-medium">Annual savings</span>
            <span className="text-xl font-bold text-primary">€{annualSavings.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MonitoringSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const activeDimension = monitoringDimensions[activeIndex];

  const handleTabChange = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setShowCalculator(false);
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

          {/* Interactive Content - 1/3 + 2/3 Layout */}
          <AnimatedSection delay={200}>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left: Compact Tabs (1/3) - Same height as image */}
              <div className="flex flex-col">
                {/* Tabs container - matches image aspect ratio */}
                <div className="aspect-[4/3] flex flex-col gap-3">
                  {monitoringDimensions.map((dimension, index) => {
                    const Icon = dimension.icon;
                    const isActive = activeIndex === index;
                    
                    return (
                      <button
                        key={dimension.id}
                        onClick={() => handleTabChange(index)}
                        className={cn(
                          "w-full text-left p-4 lg:p-5 rounded-xl border transition-all duration-300 group flex-1 flex flex-col justify-center",
                          isActive 
                            ? "bg-card border-primary/30 shadow-soft" 
                            : "bg-card/50 border-border hover:bg-card hover:border-primary/20"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300",
                            isActive 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          )}>
                            <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={cn(
                              "font-semibold text-sm lg:text-base mb-0.5 transition-colors duration-300",
                              isActive ? "text-foreground" : "text-foreground/80"
                            )}>
                              {dimension.label}
                            </h3>
                            <p className={cn(
                              "text-xs lg:text-sm transition-colors duration-300 line-clamp-2",
                              isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                            )}>
                              {dimension.shortDesc}
                            </p>
                          </div>
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300",
                            isActive 
                              ? "bg-primary scale-100" 
                              : "bg-border scale-75 group-hover:bg-primary/40"
                          )} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Operations connection - below tabs */}
                <div className="mt-4 bg-foreground/5 rounded-xl p-4 border border-foreground/5">
                  <p className="text-xs lg:text-sm text-muted-foreground text-center leading-relaxed">
                    <span className="text-foreground font-medium">Integrated with operations:</span>{" "}
                    Monitoring data feeds our Control Center and Field Service teams, enabling faster and more informed decisions.
                  </p>
                </div>
              </div>

              {/* Right: Visual Area with Background Image (2/3) */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  {/* Background Image with fade transition */}
                  {monitoringDimensions.map((dimension, index) => (
                    <div
                      key={dimension.id}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <img
                        src={dimension.image}
                        alt={dimension.label}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
                    </div>
                  ))}

                  {/* Floating Card - Centered with entrance animation */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    <div 
                      className={cn(
                        "w-full max-w-sm bg-card/95 backdrop-blur-md rounded-xl border shadow-soft-lg overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 duration-700",
                        isTransitioning 
                          ? "opacity-0 translate-y-4 scale-95" 
                          : "opacity-100 translate-y-0 scale-100"
                      )}
                    >
                      {/* Card Header */}
                      <div className="p-4 border-b bg-secondary/30">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                              {(() => {
                                const Icon = activeDimension.icon;
                                return <Icon className="w-4 h-4 text-primary" />;
                              })()}
                            </div>
                            <div>
                              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                Live
                              </div>
                              <div className="font-semibold text-sm">{activeDimension.visual.title}</div>
                            </div>
                          </div>
                          <div className={cn(
                            "px-2.5 py-1 rounded-full text-[10px] font-medium border flex items-center gap-1.5",
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

                      {/* Main Value */}
                      <div className="p-4 text-center">
                        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                          {activeDimension.visual.value}
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {activeDimension.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="px-4 pb-4">
                        <div className="grid grid-cols-3 gap-2">
                          {activeDimension.visual.details.map((detail, idx) => (
                            <div 
                              key={idx}
                              className="bg-secondary/50 rounded-lg px-2 py-1.5 text-center"
                            >
                              <div className="text-[10px] text-muted-foreground">{detail}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Calculator Button - Only for smoking */}
                      {activeDimension.hasCalculator && (
                        <div className="px-4 pb-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowCalculator(!showCalculator)}
                            className="w-full text-sm h-9 gap-2"
                          >
                            <Calculator className="w-4 h-4" />
                            {showCalculator ? "Hide Calculator" : "Calculate Savings"}
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Calculator Overlay - Positioned to the right of the card */}
                    {showCalculator && activeDimension.hasCalculator && (
                      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-full max-w-xs">
                        <SavingsCalculator onClose={() => setShowCalculator(false)} />
                      </div>
                    )}
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
