import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { Button } from "@/components/ui/button";
import { 
  Volume2, Bell, Shield, Clock, ArrowRight, Check, BarChart3
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import monitoringNoise from "@/assets/monitoring-noise.jpg";
import managerDevices from "@/assets/manager-devices.png";

// Features specific to noise monitoring
const noiseFeatures = [
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Receive real-time notifications when noise levels exceed your custom thresholds."
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous acoustic monitoring without recording conversations or voices."
  },
  {
    icon: Shield,
    title: "Privacy-Safe",
    description: "Measures decibel levels only — no audio recording, fully GDPR compliant."
  },
  {
    icon: BarChart3,
    title: "Historical Analytics",
    description: "Track patterns and trends to optimize your threshold settings."
  },
];

// How it works steps
const howItWorks = [
  {
    step: "01",
    title: "Set Custom Thresholds",
    description: "Define acceptable noise levels for different times of day and property types."
  },
  {
    step: "02",
    title: "Real-Time Detection",
    description: "The device continuously monitors sound levels without recording audio."
  },
  {
    step: "03",
    title: "Instant Notification",
    description: "When thresholds are exceeded, you receive immediate alerts via app or SMS."
  },
  {
    step: "04",
    title: "Automated Response",
    description: "Configure automated guest messaging or escalate to your team."
  },
];

// Find a relevant case study
const relatedCaseStudy = caseStudies.find(cs => cs.slug === "stay-unique");

export default function NoiseMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <MonitoringHero
        icon={Volume2}
        badge="Noise Monitoring"
        title="Prevent noise complaints"
        titleHighlight="before they happen"
        description="Real-time noise detection that protects your reputation with neighbors and ensures guests respect house rules — without recording any audio."
        image={monitoringNoise}
        imageAlt="Noise monitoring visualization"
      />

      {/* Key Stats */}
      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Reduction in complaints" },
              { value: "<2min", label: "Average response time" },
              { value: "24/7", label: "Continuous monitoring" },
              { value: "100%", label: "Privacy compliant" },
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
              Smart noise detection, zero privacy concerns
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our noise monitoring technology measures sound levels without recording audio, 
              keeping both property managers and guests happy.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {noiseFeatures.map((feature, i) => (
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
                Monitor noise levels from your dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                View real-time noise levels, set custom thresholds, and manage alerts — all from 
                a single, intuitive control center.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time dB level visualization",
                  "Custom threshold settings by property",
                  "Historical noise data and patterns",
                  "Automated guest messaging integration",
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
                Real results from real customers
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
              Ready to eliminate noise complaints?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of property managers who've reduced noise incidents by up to 85% 
              with Roomonitor's smart monitoring technology.
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