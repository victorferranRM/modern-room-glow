import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Eye, Clock, Shield, ArrowRight, Check, 
  AlertTriangle, Users, Zap, Monitor, Bell, Brain
} from "lucide-react";
import serviceImage from "@/assets/service-control-center.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "24/7 surveillance of all sensor data across your entire portfolio from a single control room."
  },
  {
    icon: Brain,
    title: "Human Verification",
    description: "Every alert is reviewed by trained professionals before any action is taken. No false alarms."
  },
  {
    icon: AlertTriangle,
    title: "Smart Escalation",
    description: "Intelligent decision-making based on your protocols. We know when to act and when to escalate."
  },
  {
    icon: Zap,
    title: "Immediate Response",
    description: "Average response time under 2 minutes from alert detection to first action."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Trained hospitality specialists who understand vacation rental operations inside out."
  },
  {
    icon: Shield,
    title: "Full Documentation",
    description: "Every incident is logged, tracked, and documented for your records and insurance."
  },
];

const capabilities = [
  "Monitor noise levels and detect potential parties",
  "Track occupancy and identify unauthorized guests",
  "Receive and verify sensor alerts in real-time",
  "Make informed decisions based on live data",
  "Contact guests directly when intervention is needed",
  "Escalate to field service when remote resolution fails",
  "Coordinate with local authorities if necessary",
  "Document all incidents with timestamps and actions",
];

const howItWorks = [
  {
    step: "01",
    title: "Alert Detection",
    description: "Our sensors detect anomalies and send alerts to the Control Center instantly."
  },
  {
    step: "02",
    title: "Human Verification",
    description: "Trained operators analyze the data to confirm if intervention is needed."
  },
  {
    step: "03",
    title: "Intelligent Decision",
    description: "Based on your protocol, we decide the best course of action."
  },
  {
    step: "04",
    title: "Swift Resolution",
    description: "We take action, document everything, and keep you informed."
  },
];

export default function ControlCenter() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Eye className="w-4 h-4" />
              Control Center 24/7
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Human verification,
              <br />
              <span className="text-primary">real decisions</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Our Control Center combines advanced sensor technology with human expertise. 
              Every alert is verified, every decision is informed, every action is documented.
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
      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "24/7", label: "Monitoring coverage" },
              { value: "<2min", label: "Average response" },
              { value: "100%", label: "Human verified" },
              { value: "5,000+", label: "Properties monitored" },
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
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Technology meets human expertise
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

      {/* What We Do */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Role
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                What our Control Center does
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're the bridge between your sensors and real-world action. When something happens, 
                we verify, decide, and act — all according to your rules.
              </p>
              <ul className="space-y-3">
                {capabilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={managerDevices}
                  alt="Control Center Dashboard"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From detection to resolution
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="text-center p-6 rounded-2xl bg-card border">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
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
              Ready for professional monitoring?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Control Center is ready to protect your properties 24/7. 
              Talk to an expert to learn how we can help.
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
