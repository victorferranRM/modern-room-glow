import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/services/SectionDivider";
import { 
  ArrowRight, Check, Wind, Calculator, Shield, 
  Euro, Clock, Building, AlertTriangle, TrendingDown,
  ChevronRight, Sparkles, FileCheck, Zap
} from "lucide-react";
import solutionControl from "@/assets/solution-control.jpg";

const smokeIssues = [
  {
    icon: Euro,
    title: "€1,500 - €3,000",
    description: "Average cost per smoking incident including deep cleaning, restoration, and lost bookings.",
    color: "destructive"
  },
  {
    icon: AlertTriangle,
    title: "Guest Disputes",
    description: "Without proof, charging cleaning fees leads to chargebacks and negative reviews.",
    color: "amber"
  },
  {
    icon: Clock,
    title: "Room Downtime",
    description: "Smoke-damaged rooms can be out of service for days, impacting revenue.",
    color: "orange"
  },
  {
    icon: TrendingDown,
    title: "Brand Damage",
    description: "Smoke odor in 'non-smoking' rooms leads to complaints and reputation loss.",
    color: "red"
  },
];

const benefits = [
  { icon: Zap, text: "Instant detection of cigarette smoke" },
  { icon: FileCheck, text: "Timestamped proof for charge disputes" },
  { icon: AlertTriangle, text: "Real-time alerts to staff" },
  { icon: FileCheck, text: "Complete incident documentation" },
  { icon: Zap, text: "Integration with PMS systems" },
  { icon: Euro, text: "ROI in as little as 3 months" },
];

const calculatorStats = [
  { label: "Average incidents per year", value: "12-15", perProperty: "per 100 rooms", icon: AlertTriangle },
  { label: "Cost per incident", value: "€1,500+", perProperty: "cleaning & repairs", icon: Euro },
  { label: "Annual savings potential", value: "€15,000+", perProperty: "per 100 rooms", icon: TrendingDown },
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-background to-secondary/20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-destructive/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Hotels
                <Sparkles className="w-3 h-3" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Stop smoking damage
                <br />
                <span className="text-primary">before it costs you</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Roomonitor's smoke detection technology protects your rooms, provides proof for 
                disputes, and pays for itself within months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                  <Link to="/resources/savings-calculator">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Your Savings
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link to="/contact">
                    Talk to Sales
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-destructive/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={solutionControl}
                    alt="Hotel Smoke Detection"
                    className="w-full shadow-2xl object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Floating alert */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Wind className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">Air Quality: Clean</p>
                        <p className="text-xs text-muted-foreground">Last checked: Just now</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* The Problem */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-destructive uppercase tracking-wider mb-4">
              The Problem
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Smoking in non-smoking rooms is expensive
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Hotels lose thousands annually to smoking incidents. Without detection, 
              you're paying the price while guests deny responsibility.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smokeIssues.map((issue, i) => (
              <AnimatedSection key={issue.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-destructive/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <issue.icon className="w-7 h-7 text-destructive" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-destructive transition-colors">{issue.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{issue.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* The Solution */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                The Solution
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Detect, document, and deter
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Roomonitor's smoke detection provides real-time alerts and timestamped proof, 
                enabling you to enforce policies and recover costs.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, i) => (
                  <AnimatedSection key={i} delay={i * 75}>
                    <li className="flex items-center gap-4 p-3 rounded-xl bg-card border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">{benefit.text}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/monitoring/smoke">
                  Learn About Smoke Detection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Wind className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Roomonitor Device</h3>
                      <p className="text-sm text-muted-foreground">Smoke detection sensor</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      <span className="text-sm font-medium">Detection Status</span>
                      <span className="text-sm font-semibold text-green-600 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        Clean Air
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      <span className="text-sm font-medium">Last Check</span>
                      <span className="text-sm font-semibold">Just now</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors">
                      <span className="text-sm font-medium">Incidents (30 days)</span>
                      <span className="text-sm font-semibold text-green-600">0</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center border-t pt-4">
                    Real-time monitoring with instant alert delivery
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* ROI Calculator Preview */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              ROI Calculator
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              See your potential savings
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="bg-card rounded-2xl border p-8 lg:p-10 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {calculatorStats.map((stat, i) => (
                      <AnimatedSection key={i} delay={i * 100}>
                        <div className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover:-translate-y-1 group/stat">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover/stat:scale-110 transition-transform duration-300">
                            <stat.icon className="w-6 h-6 text-primary" />
                          </div>
                          <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                          <p className="text-sm font-medium mb-1">{stat.label}</p>
                          <p className="text-xs text-muted-foreground">{stat.perProperty}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Calculate your exact savings based on your property portfolio
                    </p>
                    <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                      <Link to="/resources/savings-calculator">
                        <Calculator className="mr-2 h-4 w-4" />
                        Open Savings Calculator
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-background to-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Protect your hotel investment
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Join leading hotels that have eliminated smoking damage costs with Roomonitor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/resources/savings-calculator">
                  Calculate Savings
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
