import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, Clock, Shield, ArrowRight, Check, 
  Bell, Users, FileText, Radio, Workflow, Volume2,
  Flame, UserCheck, WifiOff, Thermometer
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-incident-response.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "85%", label: "Issues resolved remotely" },
  { value: "<2min", label: "Detection to action" },
  { value: "24/7", label: "Coverage" },
  { value: "100%", label: "Documented incidents" },
];

const features = [
  {
    icon: Bell,
    title: "Early Detection",
    description: "Sensors detect issues before they escalate into major problems."
  },
  {
    icon: AlertTriangle,
    title: "Instant Classification",
    description: "Automatic severity assessment based on predefined thresholds and patterns."
  },
  {
    icon: Users,
    title: "Human Validation",
    description: "Every alert is reviewed by trained operators to prevent false alarms."
  },
  {
    icon: Workflow,
    title: "Protocol Execution",
    description: "Step-by-step resolution following your customized response procedures."
  },
  {
    icon: Radio,
    title: "Multi-Channel Response",
    description: "Guest messaging, phone calls, and field dispatch — whatever it takes."
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description: "Every incident is logged with timeline, actions, and outcomes."
  },
];

const incidentTypes = [
  {
    title: "Noise Violations",
    description: "Excessive noise detected above threshold limits",
    severity: "Medium",
    icon: Volume2,
    color: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    title: "Party Detection",
    description: "Combined noise + occupancy indicates unauthorized gathering",
    severity: "High",
    icon: Users,
    color: "bg-red-100 text-red-700 border-red-200"
  },
  {
    title: "Smoke Alert",
    description: "Smoke sensors triggered in the property",
    severity: "Critical",
    icon: Flame,
    color: "bg-red-100 text-red-700 border-red-200"
  },
  {
    title: "Unauthorized Occupancy",
    description: "More guests detected than reservation allows",
    severity: "Medium",
    icon: UserCheck,
    color: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    title: "Device Offline",
    description: "Monitoring device has lost connectivity",
    severity: "Low",
    icon: WifiOff,
    color: "bg-muted text-muted-foreground border-muted"
  },
  {
    title: "Environment Alert",
    description: "Temperature or humidity outside normal range",
    severity: "Low",
    icon: Thermometer,
    color: "bg-muted text-muted-foreground border-muted"
  },
];

const responseProcess = [
  {
    step: "01",
    title: "Detection",
    description: "Sensors identify anomaly and send alert to Control Center."
  },
  {
    step: "02",
    title: "Verification",
    description: "Operators analyze data to confirm incident and assess severity."
  },
  {
    step: "03",
    title: "Response",
    description: "Appropriate action taken: guest contact, warning, or escalation."
  },
  {
    step: "04",
    title: "Resolution",
    description: "Issue resolved, documented, and owner notified with full report."
  },
];

const managerFeatures = [
  "Real-time incident timeline",
  "Complete action history",
  "Exportable reports for insurance",
  "Analytics and trend insights",
];

export default function IncidentResponse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={AlertTriangle}
        badge="Incident Response"
        title="End-to-end incident"
        titleHighlight="detection & resolution"
        description="From the moment an anomaly is detected to complete resolution, we handle every step of the incident lifecycle professionally."
        image={serviceImage}
        imageAlt="Incident Response Service"
      />

      <ServiceStats stats={stats} />

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Complete incident management"
        features={features}
      />

      {/* Incident Types */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              What We Handle
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Types of incidents
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incidentTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${type.color}`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{type.description}</p>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${type.color}`}>
                        {type.severity}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        eyebrow="Our Process"
        title="How we respond"
        steps={responseProcess}
      />

      <ServiceImageSection
        eyebrow="Roomonitor Manager"
        title="Full visibility into every incident"
        description="Track all incidents in real-time, view complete histories, and access detailed reports — all from your dashboard."
        features={managerFeatures}
        image={managerDevices}
        imageAlt="Incident Dashboard"
        ctaText="Explore Manager"
        ctaLink="/how-it-works"
        background="secondary"
        reversed
      />

      <ServiceCTA
        title="Ready for professional incident management?"
        description="Let us handle incidents while you focus on your business. Our team is ready to protect your properties."
      />

      <Footer />
    </div>
  );
}
