import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Siren, Clock, Shield, ArrowRight, Check, 
  Phone, AlertTriangle, Users, Flame, Droplets,
  HeartPulse, Lock
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-emergency.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "<60s", label: "Response time" },
  { value: "24/7", label: "Emergency team" },
  { value: "100%", label: "Protocols executed" },
  { value: "Real", label: "Action taken" },
];

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
    icon: Lock,
    title: "Security Threats",
    description: "Coordination with local authorities for break-ins, threats, or suspicious activity.",
    response: "< 2 min"
  },
  {
    icon: HeartPulse,
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

const managerFeatures = [
  "Real-time emergency timeline",
  "Multi-party communication logs",
  "Exportable reports for insurance",
  "Post-incident analysis",
];

export default function EmergencyHandling() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Siren}
        badge="Emergency Handling"
        title="Critical situations"
        titleHighlight="managed with real action"
        description="When emergencies happen, every second counts. Our emergency handling team responds instantly with protocols and real action — not just notifications."
        image={serviceImage}
        imageAlt="Emergency Handling Service"
        variant="destructive"
      />

      <ServiceStats stats={stats} />

      {/* Emergency Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Emergency Types
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              What we handle
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-destructive/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-destructive/20">
                      <type.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-destructive">{type.title}</h3>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
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

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Professional emergency response"
        features={features}
        background="secondary"
      />

      <ServiceProcess
        eyebrow="Our Protocol"
        title="Emergency response process"
        steps={responseProtocol}
        columns={5}
      />

      <ServiceImageSection
        eyebrow="Roomonitor Manager"
        title="Complete emergency visibility"
        description="Track all emergency responses in real-time, view complete timelines, and access detailed reports — all from your dashboard."
        features={managerFeatures}
        image={managerDevices}
        imageAlt="Emergency Dashboard"
        ctaText="Explore Manager"
        ctaLink="/how-it-works"
        background="secondary"
        reversed
      />

      <ServiceCTA
        title="Be prepared for any emergency"
        description="Our emergency handling team is ready 24/7. Talk to us about protecting your properties."
      />

      <Footer />
    </div>
  );
}
