import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  FileText, Clock, ArrowRight, Check, 
  Shield, Settings, ListChecks, Workflow, Edit, Book, Monitor
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
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
      
      <ServiceHero
        icon={FileText}
        badge="Operational Protocols"
        title="Your rules,"
        titleHighlight="executed 24/7"
        description="Define exactly how every situation should be handled. Our team executes your protocols consistently, around the clock, ensuring your standards are always met."
        image={serviceImage}
        imageAlt="Protocols Service"
      />

      {/* Manager Software Notice */}
      <section className="py-12 bg-primary/5 border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="flex items-center justify-center gap-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Monitor className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg">
              <strong>No Excel spreadsheets.</strong> We use our proprietary Manager software for standardized, 
              real-time protocol management and execution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Complete protocol management"
        features={features}
      />

      {/* Protocol Examples */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <div className="group p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">{protocol.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {protocol.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 group/step">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 group-hover/step:bg-primary/20 group-hover/step:text-primary">
                          {j + 1}
                        </span>
                        <span className="text-sm text-muted-foreground transition-colors group-hover/step:text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        eyebrow="Getting Started"
        title="Setup your protocols"
        steps={setupProcess}
      />

      <ServiceImageSection
        eyebrow="Benefits"
        title="Why protocols matter"
        description="Well-defined protocols ensure consistency, reduce errors, and give you peace of mind knowing exactly how every situation will be handled."
        features={protocolBenefits}
        image={managerDevices}
        imageAlt="Protocol Management"
        ctaText="See a Demo"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceCTA
        title="Ready to define your protocols?"
        description="Let's work together to create protocols that match your exact needs. Our team will help you get started."
      />

      <Footer />
    </div>
  );
}
