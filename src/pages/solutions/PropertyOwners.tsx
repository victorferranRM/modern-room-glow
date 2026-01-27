import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/services/SectionDivider";
import { 
  ArrowRight, Check, Volume2, Users, Wind, Thermometer, 
  Home, Phone, Shield, Smartphone, Wifi, BatteryCharging,
  ChevronRight, Sparkles, Star
} from "lucide-react";
import solutionManage from "@/assets/solution-manage.jpg";
import roomonitorDevice from "@/assets/roomonitor-device-placeholder.jpg";

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
  { text: "24/7 multilingual guest support", icon: Phone },
  { text: "Common inquiry handling", icon: Check },
  { text: "Check-in and check-out assistance", icon: Check },
  { text: "Emergency escalation to you", icon: Check },
  { text: "Professional representation", icon: Check },
  { text: "Reduced message load for you", icon: Check },
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
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
                <Home className="w-4 h-4" />
                Property Owners
                <Sparkles className="w-3 h-3" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Peace of mind for your
                <br />
                <span className="text-primary">rental property</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Know what's happening in your property when you're not there. Our smart 
                monitoring device and guest support service keep you protected.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                  <Link to="/checkout?plan=basic&properties=1">
                    Get Your Device
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link to="/monitoring">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={solutionManage}
                    alt="Property Owner Protection"
                    className="w-full shadow-2xl object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Simple & Effective</p>
                        <p className="text-xs text-muted-foreground">5-minute setup, 24/7 protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* The Roomonitor Device */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <img
                  src={roomonitorDevice}
                  alt="Roomonitor Device"
                  className="relative w-full rounded-2xl shadow-xl max-w-md mx-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                The Roomonitor Device
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Your eyes and ears in the property
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                A compact, discreet sensor that monitors noise levels, occupancy, smoke, and 
                environmental conditions 24/7. Easy to install, impossible to ignore.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {deviceSpecs.map((spec, i) => (
                  <AnimatedSection key={i} delay={i * 100}>
                    <div className="text-center p-4 rounded-xl bg-card border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <spec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p className="text-sm font-semibold">{spec.value}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/monitoring">
                  Explore the Device
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Monitoring Features */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Monitoring Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Complete property visibility
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* Guest Assist */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Guest Assist Service
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Professional guest support, on your behalf
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Let our team handle common guest inquiries and provide 24/7 support. 
                You stay in control while we manage the communication.
              </p>
              <ul className="space-y-3 mb-8">
                {guestAssistFeatures.map((feature, i) => (
                  <AnimatedSection key={i} delay={i * 75}>
                    <li className="flex items-center gap-3 p-3 rounded-xl bg-card border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-sm">{feature.text}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/services/guest-assist">
                  Learn About Guest Assist
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-card rounded-2xl border p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Guest Assist Line</h3>
                      <p className="text-sm text-muted-foreground">24/7 multilingual support</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-secondary/50 text-sm">
                      <p className="text-muted-foreground mb-1 text-xs">Guest inquiry</p>
                      <p className="font-medium">"What's the Wi-Fi password?"</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 text-sm">
                      <p className="text-muted-foreground mb-1 text-xs">Guest Assist response</p>
                      <p className="font-medium">"The Wi-Fi network is 'ApartmentGuest' and the password is..."</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center border-t pt-4">
                    Handled professionally, escalated when needed
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Simple Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Choose what works for you
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 100}>
                <div className={`relative p-6 lg:p-8 rounded-2xl bg-card border h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'hover:border-primary/30'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg">
                      Recommended
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 pb-6 border-b">
                      Device: {typeof plan.devicePrice === 'string' ? plan.devicePrice : `€${plan.devicePrice}`}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full group ${plan.popular ? 'shadow-lg shadow-primary/20' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link to={`/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Protect what matters most
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Your property is an investment. Keep it safe with Roomonitor's monitoring 
              technology and professional guest support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/checkout?plan=basic&properties=1">
                  Get Your Device
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/contact">
                  Ask a Question
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
