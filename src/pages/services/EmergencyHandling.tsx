import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Siren, Clock, Shield, ArrowRight, Check, 
  Phone, AlertTriangle, Users, Flame, Droplets
} from "lucide-react";
import serviceImage from "@/assets/service-emergency.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  {
    icon: Siren,
    title: "24/7 Emergency Line",
    description: "Dedicated emergency response team available around the clock for critical situations."
  },
  {
    icon: Clock,
    title: "Instant Escalation",
    description: "Critical alerts trigger immediate response protocols — no delays, no queues."
  },
  {
    icon: Phone,
    title: "Direct Coordination",
    description: "We coordinate with emergency services, property managers, and guests simultaneously."
  },
  {
    icon: Users,
    title: "Trained Specialists",
    description: "Emergency response specialists trained in crisis management and de-escalation."
  },
  {
    icon: Shield,
    title: "Protocol-Driven",
    description: "Every emergency type has predefined response procedures for consistent handling."
  },
  {
    icon: AlertTriangle,
    title: "Real Action",
    description: "Not just notifications — we take real action to resolve emergencies."
  },
];

const emergencyTypes = [
  {
    icon: Flame,
    title: "Fire & Smoke",
    description: "Immediate response to smoke detection, coordinating with fire services and guest evacuation.",
    response: "< 1 min"
  },
  {
    icon: Droplets,
    title: "Water Damage",
    description: "Rapid response to flooding or water leaks, minimizing property damage.",
    response: "< 2 min"
  },
  {
    icon: Siren,
    title: "Security Threats",
    description: "Coordination with local authorities for break-ins, threats, or suspicious activity.",
    response: "< 2 min"
  },
  {
    icon: AlertTriangle,
    title: "Medical Emergencies",
    description: "Assistance coordinating medical help and emergency services for guests.",
    response: "< 1 min"
  },
];

const responseProtocol = [
  {
    step: "01",
    title: "Alert Triggered",
    description: "Critical sensor alert or emergency call received."
  },
  {
    step: "02",
    title: "Immediate Assessment",
    description: "Emergency team assesses situation severity within seconds."
  },
  {
    step: "03",
    title: "Multi-Channel Response",
    description: "Simultaneous contact with guests, owners, and emergency services."
  },
  {
    step: "04",
    title: "On-Site Support",
    description: "Field agents dispatched if physical intervention needed."
  },
  {
    step: "05",
    title: "Resolution & Report",
    description: "Complete documentation and follow-up support."
  },
];

export default function EmergencyHandling() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Siren className="w-4 h-4" />
              Emergency Handling
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Critical situations
              <br />
              <span className="text-primary">managed with real action</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              When emergencies happen, every second counts. Our emergency handling team 
              responds instantly with protocols and real action — not just notifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-destructive/5 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "<60s", label: "Response time" },
              { value: "24/7", label: "Emergency team" },
              { value: "100%", label: "Protocols executed" },
              { value: "Real", label: "Action taken" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Emergency Types
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              What we handle
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:border-destructive/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <type.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{type.title}</h3>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-destructive/10 text-destructive">
                          {type.response}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Professional emergency response
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
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

      {/* Response Protocol */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Protocol
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Emergency response process
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {responseProtocol.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="text-center p-4 rounded-2xl bg-card border">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-muted-foreground text-xs">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Be prepared for any emergency
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our emergency handling team is ready 24/7. 
              Talk to us about protecting your properties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
