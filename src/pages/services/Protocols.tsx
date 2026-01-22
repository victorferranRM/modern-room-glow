import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  FileText, Clock, ArrowRight, Check, 
  Shield, Settings, ListChecks, Workflow, Edit, Book
} from "lucide-react";
import serviceImage from "@/assets/service-protocols.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  {
    icon: FileText,
    title: "Custom Protocols",
    description: "Define exactly how we should handle every situation, from noise alerts to guest complaints."
  },
  {
    icon: ListChecks,
    title: "Step-by-Step Actions",
    description: "Clear procedures for your team and ours to follow consistently."
  },
  {
    icon: Clock,
    title: "24/7 Execution",
    description: "Your rules are followed around the clock, even when you're asleep."
  },
  {
    icon: Edit,
    title: "Easy Updates",
    description: "Modify your protocols anytime through our simple management interface."
  },
  {
    icon: Workflow,
    title: "Priority Rules",
    description: "Set escalation hierarchies and priority levels for different situations."
  },
  {
    icon: Shield,
    title: "Consistent Results",
    description: "Every incident is handled the same way, every time."
  },
];

const protocolExamples = [
  {
    title: "Noise Alert Protocol",
    steps: [
      "Wait 5 minutes for noise to settle",
      "If noise continues, send friendly reminder to guest",
      "If noise persists after 15 min, call guest directly",
      "If unresolved, escalate to property manager",
      "Document incident with timestamps",
    ]
  },
  {
    title: "Guest Lockout Protocol",
    steps: [
      "Verify guest identity with reservation details",
      "Attempt remote access solution if available",
      "If failed, contact backup keyholder",
      "Dispatch field agent if no keyholder available",
      "Notify property manager of resolution",
    ]
  },
  {
    title: "Smoke Alert Protocol",
    steps: [
      "Immediately attempt to contact guest",
      "If no response, alert local emergency contacts",
      "Coordinate with fire services if needed",
      "Dispatch field agent for visual confirmation",
      "Full incident report within 1 hour",
    ]
  },
];

const setupProcess = [
  {
    step: "01",
    title: "Review Templates",
    description: "Start with our industry-standard protocol templates."
  },
  {
    step: "02",
    title: "Customize",
    description: "Adapt the protocols to your specific requirements and preferences."
  },
  {
    step: "03",
    title: "Train Together",
    description: "Walk through the protocols with our team to ensure clarity."
  },
  {
    step: "04",
    title: "Go Live",
    description: "Your protocols are active and executed 24/7."
  },
];

const protocolBenefits = [
  "Consistent handling across your entire portfolio",
  "Reduced decision fatigue for your team",
  "Clear escalation paths for every situation",
  "Documentation and audit trails",
  "Easy updates as your needs evolve",
  "Peace of mind knowing your rules are followed",
];

export default function Protocols() {
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
              <FileText className="w-4 h-4" />
              Operational Protocols
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Your rules,
              <br />
              <span className="text-primary">executed 24/7</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Define exactly how every situation should be handled. Our team executes your 
              protocols consistently, around the clock, ensuring your standards are always met.
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

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Complete protocol management
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

      {/* Protocol Examples */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Examples
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Sample protocols
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are examples of how protocols can be structured. 
              Every protocol is customized to your specific needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {protocolExamples.map((protocol, i) => (
              <AnimatedSection key={protocol.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{protocol.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {protocol.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0">
                          {j + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Getting Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Setup your protocols
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {setupProcess.map((step, i) => (
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

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Benefits
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Why protocols matter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Well-defined protocols ensure consistency, reduce errors, and give you 
                peace of mind knowing exactly how every situation will be handled.
              </p>
              <ul className="space-y-3 mb-8">
                {protocolBenefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">
                  Download Sample Protocol
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={managerDevices}
                  alt="Protocol Management"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Ready to define your protocols?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to create protocols that match your exact needs. 
              Our team will help you get started.
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
