import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Users, Bell, Shield, Eye, ArrowRight, Check, TrendingUp,
  UserCheck, AlertTriangle, Smartphone
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import monitoringOccupancy from "@/assets/monitoring-occupancy.jpg";
import managerDevices from "@/assets/manager-devices.png";

// Features specific to occupancy detection
const occupancyFeatures = [
  {
    icon: Eye,
    title: "Guest Count Detection",
    description: "Know how many people are in your property without cameras or intrusive monitoring."
  },
  {
    icon: AlertTriangle,
    title: "Overcrowding Alerts",
    description: "Get notified immediately when guest count exceeds your booking limits."
  },
  {
    icon: UserCheck,
    title: "Booking Verification",
    description: "Ensure the number of guests matches what was declared during booking."
  },
  {
    icon: TrendingUp,
    title: "Occupancy Analytics",
    description: "Track patterns and optimize your property management strategies."
  },
];

// How it works steps
const howItWorks = [
  {
    step: "01",
    title: "Set Guest Limits",
    description: "Define maximum occupancy based on your property's capacity and local regulations."
  },
  {
    step: "02",
    title: "Presence Detection",
    description: "Advanced sensors detect human presence without capturing images or audio."
  },
  {
    step: "03",
    title: "Smart Analysis",
    description: "Our system analyzes patterns to estimate the number of guests present."
  },
  {
    step: "04",
    title: "Proactive Alerts",
    description: "Receive notifications when occupancy exceeds thresholds, enabling quick action."
  },
];

// Find a relevant case study
const relatedCaseStudy = caseStudies.find(cs => cs.slug === "you-stylish-apartments");

export default function OccupancyDetection() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${monitoringOccupancy})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Occupancy Detection
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Know who's in your
              <br />
              <span className="text-primary">property at all times</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Detect unauthorized parties, verify guest counts, and prevent overcrowding — 
              all while respecting guest privacy completely.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99%", label: "Detection accuracy" },
              { value: "0", label: "Cameras required" },
              { value: "Real-time", label: "Guest count updates" },
              { value: "100%", label: "Privacy protected" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Key Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Guest verification without intrusion
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our occupancy detection uses advanced sensing technology to estimate 
              guest presence without cameras or audio recording.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occupancyFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Smart detection, simple management
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-card border">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manager Dashboard Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Roomonitor Manager
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Track occupancy across all properties
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor guest presence, set custom limits per property, and receive 
                instant alerts when something looks off.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time occupancy status per unit",
                  "Custom guest limits by property type",
                  "Historical occupancy patterns",
                  "Integration with booking platforms",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/how-it-works">
                  Explore Manager
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={managerDevices}
                  alt="Roomonitor Manager Dashboard"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Case Study */}
      {relatedCaseStudy && (
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Success Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                See occupancy detection in action
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link 
                to={`/resources/case-studies/${relatedCaseStudy.slug}`}
                className="block max-w-4xl mx-auto group"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 rounded-3xl bg-card border hover:shadow-xl transition-all duration-300">
                  <div 
                    className="aspect-video rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${relatedCaseStudy.heroImage})` }}
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2">{relatedCaseStudy.industry} • {relatedCaseStudy.location}</p>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                      {relatedCaseStudy.headline}
                    </h3>
                    {relatedCaseStudy.quote && (
                      <blockquote className="text-muted-foreground italic mb-4">
                        "{relatedCaseStudy.quote.text.slice(0, 120)}..."
                      </blockquote>
                    )}
                    <div className="flex items-center gap-4">
                      {relatedCaseStudy.stats.slice(0, 2).map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Ready to prevent unauthorized parties?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your property from overcrowding and verify guest counts 
              automatically with Roomonitor's smart occupancy detection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}