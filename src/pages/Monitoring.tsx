import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Volume2, Users, Flame, Thermometer, Wifi, Battery, 
  Shield, ArrowRight, Check, X, Zap, Settings, Download, Clock
} from "lucide-react";
import roomonitorDevice from "@/assets/roomonitor-device-placeholder.jpg";

// Import monitoring background images
import monitoringNoise from "@/assets/monitoring-noise.jpg";
import monitoringOccupancy from "@/assets/monitoring-occupancy.jpg";
import monitoringAir from "@/assets/monitoring-air.jpg";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";

// Monitoring capabilities with links and background images
const monitoringCapabilities = [
  {
    icon: Volume2,
    title: "Noise Monitoring",
    description: "Real-time acoustic detection and instant alerts when noise levels exceed your thresholds.",
    href: "/monitoring/noise",
    image: monitoringNoise,
  },
  {
    icon: Users,
    title: "Occupancy Detection",
    description: "Track guest presence and identify potential overcrowding situations.",
    href: "/monitoring/occupancy",
    image: monitoringOccupancy,
  },
  {
    icon: Flame,
    title: "Smoke Detection",
    description: "Immediate smoke alerts to protect your assets and enforce non-smoking policies.",
    href: "/monitoring/smoke",
    image: monitoringAir,
  },
  {
    icon: Thermometer,
    title: "Environment Monitoring",
    description: "Track temperature, humidity and air quality for guest comfort and property protection.",
    href: "/monitoring/environment",
    image: monitoringEnvironment,
  },
];

// Device specifications
const deviceSpecs = [
  { label: "Dimensions", value: "85 × 85 × 28 mm" },
  { label: "Weight", value: "120g" },
  { label: "Power", value: "USB-C (5V/1A)" },
  { label: "Connectivity", value: "Wi-Fi 2.4GHz" },
  { label: "Battery Backup", value: "Up to 4 hours" },
  { label: "Operating Range", value: "-10°C to 45°C" },
];

// Comparison data
const comparisonFeatures = [
  { feature: "All-in-one device (noise, occupancy, smoke, environment)", roomonitor: true, competitor: false },
  { feature: "Real-time cloud monitoring", roomonitor: true, competitor: true },
  { feature: "24/7 human verification available", roomonitor: true, competitor: false },
  { feature: "Privacy-safe (no audio recording)", roomonitor: true, competitor: true },
  { feature: "Integrated incident response", roomonitor: true, competitor: false },
  { feature: "PMS integrations included", roomonitor: true, competitor: false },
  { feature: "On-site field service network", roomonitor: true, competitor: false },
  { feature: "Battery backup included", roomonitor: true, competitor: false },
  { feature: "Multi-sensor calibration", roomonitor: true, competitor: false },
];

// Installation steps
const installationSteps = [
  {
    step: 1,
    title: "Unbox & Power On",
    description: "Connect the device to power using the included USB-C cable. The LED will pulse blue indicating it's ready for setup.",
  },
  {
    step: 2,
    title: "Download the App",
    description: "Download the Roomonitor app from the App Store or Google Play, then create your account or log in.",
  },
  {
    step: 3,
    title: "Connect to Wi-Fi",
    description: "Follow the in-app instructions to connect your device to your property's Wi-Fi network.",
  },
  {
    step: 4,
    title: "Mount & Configure",
    description: "Use the included mounting kit to install the device, then set your alert thresholds and notification preferences.",
  },
];

export default function Monitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                The Roomonitor Device
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                One device.
                <br />
                <span className="text-primary">Complete protection.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                The Roomonitor sensor combines noise monitoring, occupancy detection, smoke detection, and environmental tracking in a single, privacy-safe device.
              </p>
              <div className="flex flex-wrap gap-4">
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

            {/* Right - Device Image */}
            <AnimatedSection delay={200} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <img
                  src={roomonitorDevice}
                  alt="Roomonitor Device"
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Features Strip */}
      <section className="py-8 bg-foreground/5 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Wi-Fi Connected</span>
            </div>
            <div className="flex items-center gap-2">
              <Battery className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Battery Backup</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Privacy-Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Real-Time Alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Monitoring Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Everything you need in one device
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track noise, occupancy, smoke, and environmental conditions — all without compromising guest privacy.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {monitoringCapabilities.map((capability, index) => (
              <AnimatedSection key={capability.title} delay={index * 100}>
                <Link
                  to={capability.href}
                  className="group block relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${capability.image})` }}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-colors duration-300" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-white/80 mb-4 text-sm">
                      {capability.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Technical Specifications
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Built for reliability
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Roomonitor device is engineered for 24/7 operation in hospitality environments, with robust connectivity and backup power.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {deviceSpecs.map((spec) => (
                  <div key={spec.label} className="p-4 rounded-xl bg-card border">
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={roomonitorDevice}
                  alt="Roomonitor Device Specifications"
                  className="relative w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Why Choose Roomonitor
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              The complete solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Roomonitor compares to standard monitoring devices in the market.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border bg-card">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b">
                <div className="font-semibold">Feature</div>
                <div className="text-center font-semibold text-primary">Roomonitor</div>
                <div className="text-center font-semibold text-muted-foreground">Others</div>
              </div>
              
              {/* Table Rows */}
              {comparisonFeatures.map((item, index) => (
                <div 
                  key={item.feature} 
                  className={`grid grid-cols-3 p-4 items-center ${index !== comparisonFeatures.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="text-sm">{item.feature}</div>
                  <div className="flex justify-center">
                    {item.roomonitor ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.competitor ? (
                      <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-success" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Simple Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Get started today
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-md mx-auto">
              <div className="relative p-8 rounded-3xl border-2 border-primary bg-card shadow-xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Roomonitor Device</h3>
                  <p className="text-muted-foreground">All-in-one monitoring solution</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">€149</span>
                    <span className="text-muted-foreground">/device</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    + €5.99/month subscription
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">All monitoring capabilities included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Real-time alerts & dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">Free shipping & 30-day returns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-sm">2-year warranty</span>
                  </li>
                </ul>

                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/checkout">Order Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Installation Guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Up and running in minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setting up your Roomonitor device is simple — no technical expertise required.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {installationSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 100}>
                <div className="relative p-6 rounded-2xl border bg-card h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400} className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Installation Manual
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Knowledge Base
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Helpful guides & resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to get the most out of your Roomonitor device with our step-by-step guides.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Device Installation Manual",
                description: "Complete guide to installing monitoring devices",
                type: "Installation",
                readTime: "12 min",
                href: "/resources/guides/guide/device-installation",
              },
              {
                title: "Optimal Sensor Placement",
                description: "Best practices for positioning sensors in your property",
                type: "Best Practice",
                readTime: "6 min",
                href: "/resources/guides/guide/sensor-placement",
              },
              {
                title: "Configuring Alert Thresholds",
                description: "Set custom noise and occupancy alert levels",
                type: "Setup",
                readTime: "7 min",
                href: "/resources/guides/guide/alert-thresholds",
              },
              {
                title: "Network Requirements",
                description: "WiFi and connectivity setup for devices",
                type: "Installation",
                readTime: "4 min",
                href: "/resources/guides/guide/network-requirements",
              },
              {
                title: "Device Shows Offline",
                description: "Steps to troubleshoot connectivity issues",
                type: "FAQ",
                readTime: "4 min",
                href: "/resources/guides/guide/device-offline",
              },
              {
                title: "Reducing False Alerts",
                description: "Fine-tune sensitivity to minimize false positives",
                type: "FAQ",
                readTime: "5 min",
                href: "/resources/guides/guide/false-alerts",
              },
            ].map((guide, index) => (
              <AnimatedSection key={guide.title} delay={index * 80}>
                <Link
                  to={guide.href}
                  className="group block bg-card border rounded-2xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/15 text-primary">
                      {guide.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read guide
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/resources/guides">
                Browse all guides
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Ready to protect your properties?
            </h2>
            <p className="text-lg text-background/70 mb-8">
              Join thousands of property managers who trust Roomonitor for 24/7 monitoring and incident prevention.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}