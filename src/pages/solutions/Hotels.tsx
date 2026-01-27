import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Check, Wind, Calculator, Shield, 
  Euro, Clock, Building, AlertTriangle, TrendingDown
} from "lucide-react";
import solutionControl from "@/assets/solution-control.jpg";

const smokeIssues = [
  {
    icon: Euro,
    title: "€1,500 - €3,000",
    description: "Average cost per smoking incident including deep cleaning, restoration, and lost bookings.",
  },
  {
    icon: AlertTriangle,
    title: "Guest Disputes",
    description: "Without proof, charging cleaning fees leads to chargebacks and negative reviews.",
  },
  {
    icon: Clock,
    title: "Room Downtime",
    description: "Smoke-damaged rooms can be out of service for days, impacting revenue.",
  },
  {
    icon: TrendingDown,
    title: "Brand Damage",
    description: "Smoke odor in 'non-smoking' rooms leads to complaints and reputation loss.",
  },
];

const benefits = [
  "Instant detection of cigarette smoke",
  "Timestamped proof for charge disputes",
  "Real-time alerts to staff",
  "Complete incident documentation",
  "Integration with PMS systems",
  "ROI in as little as 3 months",
];

const calculatorStats = [
  { label: "Average incidents per year", value: "12-15", perProperty: "per 100 rooms" },
  { label: "Cost per incident", value: "€1,500+", perProperty: "cleaning & repairs" },
  { label: "Annual savings potential", value: "€15,000+", perProperty: "per 100 rooms" },
];

export default function Hotels() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Hotels
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
                Stop smoking damage
                <br />
                <span className="text-primary">before it costs you</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Roomonitor's smoke detection technology protects your rooms, provides proof for 
                disputes, and pays for itself within months.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/resources/savings-calculator">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate Your Savings
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={solutionControl}
                  alt="Hotel Smoke Detection"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
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
                <div className="p-6 rounded-2xl bg-card border h-full">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <issue.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
                  <p className="text-muted-foreground text-sm">{issue.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
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
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/monitoring/smoke">
                  Learn About Smoke Detection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Roomonitor Device</h3>
                    <p className="text-sm text-muted-foreground">Smoke detection sensor</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm">Detection Status</span>
                    <span className="text-sm font-medium text-success flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      Clean Air
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm">Last Check</span>
                    <span className="text-sm font-medium">Just now</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <span className="text-sm">Incidents (30 days)</span>
                    <span className="text-sm font-medium">0</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Real-time monitoring with instant alert delivery
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {calculatorStats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                      <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm font-medium mb-1">{stat.label}</p>
                      <p className="text-xs text-muted-foreground">{stat.perProperty}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Calculate your exact savings based on your property portfolio
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/resources/savings-calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      Open Savings Calculator
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Protect your hotel investment
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Join leading hotels that have eliminated smoking damage costs with Roomonitor.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/resources/savings-calculator">Calculate Savings</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}