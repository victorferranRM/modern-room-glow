import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Eye, Clock, Shield, ArrowRight, Check, 
  AlertTriangle, Users, Zap, Monitor, Bell, Brain
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-control-center.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "24/7", label: "Monitoring coverage" },
  { value: "<2min", label: "Average response" },
  { value: "100%", label: "Human verified" },
  { value: "5,000+", label: "Properties monitored" },
];

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
      
      <ServiceHero
        icon={Eye}
        badge="Control Center 24/7"
        title="Human verification,"
        titleHighlight="real decisions"
        description="Our Control Center combines advanced sensor technology with human expertise. Every alert is verified, every decision is informed, every action is documented."
        image={serviceImage}
        imageAlt="Control Center Service"
      />

      <ServiceStats stats={stats} />

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Technology meets human expertise"
        features={features}
      />

      <ServiceImageSection
        eyebrow="Our Role"
        title="What our Control Center does"
        description="We're the bridge between your sensors and real-world action. When something happens, we verify, decide, and act — all according to your rules."
        features={capabilities}
        image={managerDevices}
        imageAlt="Control Center Dashboard"
        ctaText="Learn More"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceProcess
        eyebrow="Process"
        title="From detection to resolution"
        steps={howItWorks}
      />

      <ServiceCTA
        title="Ready for professional monitoring?"
        description="Our Control Center is ready to protect your properties 24/7. Talk to an expert to learn how we can help."
      />

      <Footer />
    </div>
  );
}
