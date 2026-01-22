import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, Clock, Shield, ArrowRight, Check, 
  Bell, Users, FileText, Radio, Workflow
} from "lucide-react";
import serviceImage from "@/assets/service-incident-response.jpg";
import managerDevices from "@/assets/manager-devices.png";

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
    color: "warning"
  },
  {
    title: "Party Detection",
    description: "Combined noise + occupancy indicates unauthorized gathering",
    severity: "High",
    color: "destructive"
  },
  {
    title: "Smoke Alert",
    description: "Smoke sensors triggered in the property",
    severity: "Critical",
    color: "destructive"
  },
  {
    title: "Unauthorized Occupancy",
    description: "More guests detected than reservation allows",
    severity: "Medium",
    color: "warning"
  },
  {
    title: "Device Offline",
    description: "Monitoring device has lost connectivity",
    severity: "Low",
    color: "muted"
  },
  {
    title: "Environment Alert",
    description: "Temperature or humidity outside normal range",
    severity: "Low",
    color: "muted"
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

export default function IncidentResponse() {
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
              <AlertTriangle className="w-4 h-4" />
              Incident Response
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              End-to-end incident
              <br />
              <span className="text-primary">detection & resolution</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              From the moment an anomaly is detected to complete resolution, 
              we handle every step of the incident lifecycle professionally.
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
              { value: "85%", label: "Issues resolved remotely" },
              { value: "<2min", label: "Detection to action" },
              { value: "24/7", label: "Coverage" },
              { value: "100%", label: "Documented incidents" },
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
              Complete incident management
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

      {/* Incident Types */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              What We Handle
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Types of incidents
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incidentTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{type.title}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${type.color}/10 text-${type.color}`}>
                      {type.severity}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              How we respond
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {responseProcess.map((step, i) => (
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

      {/* Manager Preview */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Roomonitor Manager
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Full visibility into every incident
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Track all incidents in real-time, view complete histories, and access 
                detailed reports — all from your dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time incident timeline",
                  "Complete action history",
                  "Exportable reports for insurance",
                  "Analytics and trend insights",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/how-it-works">
                  Explore Manager
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={managerDevices}
                  alt="Incident Dashboard"
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
              Ready for professional incident management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us handle incidents while you focus on your business. 
              Our team is ready to protect your properties.
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
