import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, Bell, Shield, Droplets, ArrowRight, Check, Wind,
  Sun, Gauge, Smartphone
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";
import managerDevices from "@/assets/manager-devices.png";

// Features specific to environment monitoring
const environmentFeatures = [
  {
    icon: Thermometer,
    title: "Temperature Tracking",
    description: "Monitor indoor temperatures to ensure guest comfort and prevent pipe freezing."
  },
  {
    icon: Droplets,
    title: "Humidity Detection",
    description: "Track humidity levels to prevent mold, condensation, and moisture damage."
  },
  {
    icon: Wind,
    title: "Air Quality Index",
    description: "Monitor CO2 levels and overall air quality for healthy indoor environments."
  },
  {
    icon: Gauge,
    title: "Pressure Monitoring",
    description: "Track atmospheric pressure changes that could affect HVAC systems."
  },
];

// How it works steps
const howItWorks = [
  {
    step: "01",
    title: "Set Comfort Ranges",
    description: "Define ideal temperature and humidity ranges for your property type."
  },
  {
    step: "02",
    title: "Continuous Monitoring",
    description: "Sensors track environmental conditions 24/7 with minimal power consumption."
  },
  {
    step: "03",
    title: "Pattern Analysis",
    description: "Our system learns your property's patterns to detect anomalies early."
  },
  {
    step: "04",
    title: "Preventive Alerts",
    description: "Get notified before conditions become problematic, preventing damage."
  },
];

// Find a relevant case study
const relatedCaseStudy = caseStudies.find(cs => cs.slug === "mun-stays");

export default function EnvironmentMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${monitoringEnvironment})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Thermometer className="w-4 h-4" />
              Environment Monitoring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Perfect conditions,
              <br />
              <span className="text-primary">protected property</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Monitor temperature, humidity, and air quality to ensure guest comfort 
              and protect your property from environmental damage.
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
              { value: "±0.5°C", label: "Temperature accuracy" },
              { value: "±3%", label: "Humidity precision" },
              { value: "5min", label: "Update interval" },
              { value: "100%", label: "Cloud synced" },
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
              Complete environmental awareness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From temperature to air quality, monitor everything that affects 
              guest comfort and property health in one place.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentFeatures.map((feature, i) => (
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
              Proactive property protection
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
                Environmental insights at a glance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                View real-time environmental data across all properties, set custom 
                alerts, and track historical trends to optimize guest comfort.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live temperature and humidity readings",
                  "Custom alert thresholds by season",
                  "Historical trend analysis",
                  "HVAC optimization recommendations",
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
                Environmental monitoring in action
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
              Ready to protect your property?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Monitor environmental conditions 24/7 and prevent costly damage 
              from temperature extremes, humidity, and poor air quality.
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