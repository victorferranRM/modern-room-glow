import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, ArrowRight, Shield, TrendingUp, Flame, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";

// Animated smoke particle component
function SmokeParticle({ delay, size, left, duration }: { delay: number; size: number; left: number; duration: number }) {
  return (
    <div
      className="absolute bottom-0 rounded-full bg-gradient-to-t from-muted-foreground/20 to-transparent blur-xl animate-float-up"
      style={{
        width: `${size}px`,
        height: `${size * 1.5}px`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

// Smoke animation container
function SmokeEffect() {
  const particles = [
    { delay: 0, size: 80, left: 10, duration: 8 },
    { delay: 2, size: 120, left: 25, duration: 10 },
    { delay: 1, size: 60, left: 40, duration: 7 },
    { delay: 3, size: 100, left: 55, duration: 9 },
    { delay: 0.5, size: 90, left: 70, duration: 8 },
    { delay: 2.5, size: 70, left: 85, duration: 11 },
    { delay: 1.5, size: 110, left: 15, duration: 9 },
    { delay: 4, size: 80, left: 60, duration: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      {particles.map((p, i) => (
        <SmokeParticle key={i} {...p} />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 800;
    const steps = 30;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function SavingsCalculator() {
  const [units, setUnits] = useState([50]);
  const [incidentRate, setIncidentRate] = useState([8]);
  const [avgDamageCost, setAvgDamageCost] = useState([350]);

  const annualIncidents = Math.round((units[0] * incidentRate[0]) / 100);
  const annualDamageCost = annualIncidents * avgDamageCost[0];
  const preventionRate = 0.75;
  const annualSavings = Math.round(annualDamageCost * preventionRate);
  const monthlySavings = Math.round(annualSavings / 12);
  const threeYearSavings = annualSavings * 3;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Smoke Effect */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          {/* Smoke Effect */}
          <SmokeEffect />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-8 animate-fade-in">
                <AlertTriangle className="w-4 h-4" />
                <span>Smoking incidents cost the hospitality industry millions annually</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Calculate Your <span className="text-primary">Smoke Detection</span> Savings
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                See how Roomonitor's early smoke detection can protect your assets, 
                prevent costly damages, and deliver measurable ROI for your portfolio.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">75%</div>
                  <div className="text-sm text-slate-400">Incident Prevention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5,000+</div>
                  <div className="text-sm text-slate-400">Properties Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">&lt;30s</div>
                  <div className="text-sm text-slate-400">Detection Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Calculator Card - Takes 3 columns */}
                <Card className="lg:col-span-3 shadow-soft-lg border-2">
                  <CardHeader className="border-b bg-muted/30 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Configure Your Portfolio</CardTitle>
                        <CardDescription className="text-base">Adjust the parameters to match your properties</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-10">
                    {/* Units slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Number of Properties</label>
                            <p className="text-xs text-muted-foreground">Total units in your portfolio</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{units[0]}</span>
                          <span className="text-sm text-muted-foreground ml-1">units</span>
                        </div>
                      </div>
                      <Slider
                        value={units}
                        onValueChange={setUnits}
                        min={10}
                        max={500}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>10 units</span>
                        <span>500 units</span>
                      </div>
                    </div>

                    {/* Incident rate slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                            <Flame className="w-5 h-5 text-destructive" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Annual Incident Rate</label>
                            <p className="text-xs text-muted-foreground">Percentage of properties affected yearly</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-destructive">{incidentRate[0]}%</span>
                          <span className="text-sm text-muted-foreground ml-1">/year</span>
                        </div>
                      </div>
                      <Slider
                        value={incidentRate}
                        onValueChange={setIncidentRate}
                        min={1}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    {/* Damage cost slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Average Damage Cost</label>
                            <p className="text-xs text-muted-foreground">Per smoking incident</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-warning">€{avgDamageCost[0]}</span>
                        </div>
                      </div>
                      <Slider
                        value={avgDamageCost}
                        onValueChange={setAvgDamageCost}
                        min={100}
                        max={1000}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>€100</span>
                        <span>€1,000</span>
                      </div>
                    </div>

                    {/* Info box */}
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Industry average:</strong> Hotels and vacation rentals typically experience 5-15% smoking incidents annually, 
                        with damages ranging from €200-€800 per incident including cleaning, repairs, and lost revenue.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Card - Takes 2 columns */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Main Savings Card */}
                  <Card className="shadow-soft-lg overflow-hidden">
                    <div className="gradient-primary p-6 text-white">
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-2">
                        <TrendingUp className="w-4 h-4" />
                        Your Estimated Annual Savings
                      </div>
                      <div className="text-5xl lg:text-6xl font-bold mb-1">
                        <AnimatedCounter value={annualSavings} prefix="€" />
                      </div>
                      <div className="text-white/70">
                        €{monthlySavings.toLocaleString()}/month
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Estimated incidents/year</span>
                        <span className="font-semibold text-lg">{annualIncidents}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Total potential damage</span>
                        <span className="font-semibold text-lg text-destructive">€{annualDamageCost.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Prevention rate</span>
                        <span className="font-semibold text-lg text-primary">75%</span>
                      </div>
                      <div className="flex items-center justify-between py-3 bg-primary/5 -mx-6 px-6 rounded-lg">
                        <span className="font-medium">3-Year Savings</span>
                        <span className="font-bold text-xl text-primary">€{threeYearSavings.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Card */}
                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">Ready to protect your properties?</h3>
                      <p className="text-muted-foreground text-sm mb-5">
                        Get a personalized quote and see how Roomonitor can work for your portfolio.
                      </p>
                      <div className="space-y-3">
                        <Button size="lg" className="w-full shadow-lg" asChild>
                          <Link to="/contact">
                            Book a Demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full" asChild>
                          <Link to="/pricing">View Pricing</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  How Smoke Detection Protects Your Investment
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our advanced sensors detect cigarette smoke within seconds, enabling immediate intervention 
                  before damage occurs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Instant Detection</h3>
                    <p className="text-muted-foreground text-sm">
                      Advanced sensors identify cigarette smoke particles in under 30 seconds, 
                      far faster than traditional smoke detectors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Immediate Alert</h3>
                    <p className="text-muted-foreground text-sm">
                      Our Control Center receives the alert instantly and initiates 
                      the intervention protocol based on your preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Swift Resolution</h3>
                    <p className="text-muted-foreground text-sm">
                      Guest is contacted, situation resolved, and damage prevented — 
                      all before smoke permeates fabrics and surfaces.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Why Property Managers Choose Roomonitor
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "Asset Protection",
                        description: "Prevent costly deep cleaning, furniture replacement, and repainting caused by smoke damage.",
                      },
                      {
                        icon: Flame,
                        title: "Policy Enforcement",
                        description: "Effectively enforce non-smoking policies with evidence-backed incident documentation.",
                      },
                      {
                        icon: TrendingUp,
                        title: "Proven ROI",
                        description: "Most properties see full ROI within 3-6 months through prevented damages alone.",
                      },
                      {
                        icon: CheckCircle2,
                        title: "24/7 Monitoring",
                        description: "Round-the-clock protection ensures incidents are caught regardless of when they occur.",
                      },
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Card */}
                <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                  <div className="space-y-8">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">75%</div>
                      <div className="text-slate-300">of smoking incidents prevented with early detection</div>
                    </div>
                    <div className="h-px bg-slate-700" />
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">€350</div>
                      <div className="text-slate-300">average cost per undetected smoking incident</div>
                    </div>
                    <div className="h-px bg-slate-700" />
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">3-6mo</div>
                      <div className="text-slate-300">typical payback period for Roomonitor</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
