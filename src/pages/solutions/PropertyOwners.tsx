import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Check, Volume2, Users, Wind, Thermometer, 
  Home, Phone, Shield, Smartphone, Wifi, BatteryCharging
} from "lucide-react";
import solutionManage from "@/assets/solution-manage.jpg";
import roomonitorDevice from "@/assets/roomonitor-device.jpg";

const monitoringFeatures = [
  {
    icon: Volume2,
    title: "Noise Monitoring",
    description: "Get alerts when sound levels exceed thresholds, preventing disturbances and complaints.",
  },
  {
    icon: Users,
    title: "Occupancy Detection",
    description: "Know when guest counts exceed limits to enforce your house rules.",
  },
  {
    icon: Wind,
    title: "Smoke Detection",
    description: "Instant alerts for smoking activity to protect your property from damage.",
  },
  {
    icon: Thermometer,
    title: "Environment Monitoring",
    description: "Track temperature and humidity to prevent mold and property damage.",
  },
];

const deviceSpecs = [
  { icon: Wifi, label: "Wi-Fi Connected", value: "Always online" },
  { icon: BatteryCharging, label: "Power", value: "USB-C powered" },
  { icon: Smartphone, label: "App Control", value: "iOS & Android" },
];

const guestAssistFeatures = [
  "24/7 multilingual guest support",
  "Common inquiry handling",
  "Check-in and check-out assistance",
  "Emergency escalation to you",
  "Professional representation",
  "Reduced message load for you",
];

const pricingPlans = [
  {
    name: "Basic",
    price: "13",
    period: "/month",
    devicePrice: "45",
    description: "Perfect for single property owners",
    features: [
      "Roomonitor monitoring device",
      "Noise & occupancy monitoring",
      "Smoke detection",
      "Environment tracking",
      "Mobile app access",
      "Email & push alerts",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "29.90",
    period: "/month",
    devicePrice: "Included",
    description: "Monitoring + human support",
    features: [
      "Everything in Basic",
      "24/7 Alarm Assistant",
      "Alert response on your behalf",
      "Incident documentation",
      "Guest communication",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
];

export default function PropertyOwners() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Property Owners
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                <span className="block sm:inline">Peace of mind for your</span>{" "}
                <span className="text-primary block">rental property</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Know what's happening in your property when you're not there. Our smart 
                monitoring device and guest support service keep you protected.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/checkout?plan=basic&properties=1">
                    Get Your Device
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/monitoring">Learn More</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={solutionManage}
                  alt="Property Owner Protection"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Roomonitor Device */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={roomonitorDevice}
                  alt="Roomonitor Device"
                  className="relative w-full rounded-2xl shadow-xl max-w-md mx-auto"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                The Roomonitor Device
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
                Your eyes and ears in the property
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                A compact, discreet sensor that monitors noise levels, occupancy, smoke, and 
                environmental conditions 24/7. Easy to install, impossible to ignore.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {deviceSpecs.map((spec, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-secondary/50">
                    <spec.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                    <p className="text-sm font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/monitoring">
                  Explore the Device
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Monitoring Features */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Monitoring Capabilities
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Complete property visibility
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringFeatures.map((feature, i) => (
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

      {/* Guest Assist */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Guest Assist Service
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
                Professional guest support, on your behalf
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Let our team handle common guest inquiries and provide 24/7 support. 
                You stay in control while we manage the communication.
              </p>
              <ul className="space-y-3 mb-8">
                {guestAssistFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/services/guest-assist">
                  Learn About Guest Assist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Guest Assist Line</h3>
                    <p className="text-sm text-muted-foreground">24/7 multilingual support</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/50 text-sm">
                    <p className="text-muted-foreground mb-1">Guest inquiry</p>
                    <p>"What's the Wi-Fi password?"</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 text-sm">
                    <p className="text-muted-foreground mb-1">Guest Assist response</p>
                    <p>"The Wi-Fi network is 'ApartmentGuest' and the password is..."</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Handled professionally, escalated when needed
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Simple Pricing
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Choose what works for you
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 100}>
                <div className={`relative p-6 rounded-2xl bg-card border h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">€{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">
                    Device: {typeof plan.devicePrice === 'string' ? plan.devicePrice : `€${plan.devicePrice}`}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to={`/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Protect what matters most
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Your property is an investment. Keep it safe with Roomonitor's monitoring 
              technology and professional guest support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/checkout?plan=basic&properties=1">
                  Get Your Device
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}