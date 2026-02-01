import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { Button } from "@/components/ui/button";
import { 
  Flame, Shield, ArrowRight, Check, Ban,
  AlertTriangle, FileCheck
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import monitoringSmoke from "@/assets/monitoring-air.jpg";
import managerDevices from "@/assets/manager-devices.png";

// Features specific to smoke detection
const smokeFeatures = [
  {
    icon: AlertTriangle,
    title: "Instant Smoke Alerts",
    description: "Detect cigarette and vape smoke the moment it occurs in your property."
  },
  {
    icon: Ban,
    title: "Policy Enforcement",
    description: "Enforce non-smoking policies effectively with real-time detection."
  },
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Prevent smoke damage, lingering odors, and costly deep cleaning."
  },
  {
    icon: FileCheck,
    title: "Evidence Documentation",
    description: "Maintain logs of smoking incidents for policy violations and disputes."
  },
];

// How it works steps
const howItWorks = [
  {
    step: "01",
    title: "Deploy Sensor",
    description: "Install the Roomonitor device — it includes smoke detection alongside other sensors."
  },
  {
    step: "02",
    title: "Air Quality Analysis",
    description: "Advanced sensors continuously monitor air particulates and smoke signatures."
  },
  {
    step: "03",
    title: "Smart Detection",
    description: "Distinguish between cigarette smoke, vape, and harmless activities like cooking."
  },
  {
    step: "04",
    title: "Immediate Response",
    description: "Get instant alerts and automated guest messaging to address violations."
  },
];

// Find a relevant case study
const relatedCaseStudy = caseStudies.find(cs => cs.slug === "del-parque-flats");

export default function SmokeDetection() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <MonitoringHero
        icon={Flame}
        badge="Smoke Detection"
        title="Protect your property"
        titleHighlight="from smoke damage"
        description="Detect smoking violations instantly, enforce non-smoking policies, and protect your property from costly damage and deep cleaning."
        image={monitoringSmoke}
        imageAlt="Smoke detection visualization"
      />

      {/* Key Stats */}
      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "€500+", label: "Saved per incident" },
              { value: "<30s", label: "Detection time" },
              { value: "95%", label: "Policy compliance" },
              { value: "24/7", label: "Protection" },
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
              Advanced smoke detection technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our sensors distinguish between harmful smoke and normal activities, 
              ensuring accurate detection without false alarms.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smokeFeatures.map((feature, i) => (
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
              From detection to resolution
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
                Monitor air quality in real-time
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Track smoke detection events, view air quality metrics, and manage 
                incident responses from your centralized dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time smoke event alerts",
                  "Air quality history logs",
                  "Automated guest notifications",
                  "Incident documentation for disputes",
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
                How others enforce smoke-free policies
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
              Ready to enforce smoke-free policies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Protect your property from smoke damage and ensure guests respect 
              your non-smoking rules with Roomonitor's smart detection.
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