import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Settings, Key, ArrowRight, Check, 
  Shield, Link2, Database, Lock, Workflow
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-pms-access.jpg";

const features = [
  {
    icon: Key,
    title: "Secure Access",
    description: "We operate directly from your PMS with secure, limited access credentials."
  },
  {
    icon: Database,
    title: "Real-Time Data",
    description: "Access to reservations, guest info, and property details when we need them."
  },
  {
    icon: Workflow,
    title: "Direct Actions",
    description: "Send messages, update notes, and manage situations directly in your system."
  },
  {
    icon: Link2,
    title: "System Integration",
    description: "Seamless connection with your existing operational tools and workflows."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Access only what's needed. Full audit trails of all actions."
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "GDPR compliant data handling and secure credential management."
  },
];

const supportedPlatforms = [
  { name: "Hostaway", logo: "H" },
  { name: "Guesty", logo: "G" },
  { name: "Lodgify", logo: "L" },
  { name: "Hostify", logo: "H" },
  { name: "Smoobu", logo: "S" },
  { name: "Beds24", logo: "B" },
  { name: "Cloudbeds", logo: "C" },
  { name: "Escapia", logo: "E" },
];

const howWeWork = [
  {
    step: "01",
    title: "Secure Setup",
    description: "You provide limited access credentials to your PMS."
  },
  {
    step: "02",
    title: "Team Training",
    description: "Our operators learn your system and workflows."
  },
  {
    step: "03",
    title: "Seamless Operations",
    description: "We work directly in your tools, as an extension of your team."
  },
];

const capabilities = [
  "Access reservation details in real-time",
  "View guest contact information securely",
  "Send messages through your PMS",
  "Add notes and incident logs",
  "Check property-specific instructions",
  "Update reservation notes",
  "Coordinate with your team seamlessly",
  "Follow your established workflows",
];

export default function PMSAccess() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Settings}
        badge="PMS & Tool Access"
        title="We work in"
        titleHighlight="your ecosystem"
        description="No separate dashboards, no duplicate data. We operate directly from your Property Management System, working as a true extension of your team."
        image={serviceImage}
        imageAlt="PMS Integration"
        secondaryCTA={{ text: "View Integrations", link: "/integrations" }}
      />

      {/* Supported Platforms */}
      <section className="py-12 bg-card border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm text-muted-foreground">We integrate with your favorite PMS</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {supportedPlatforms.map((platform, i) => (
              <AnimatedSection key={platform.name} delay={i * 50}>
                <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    {platform.logo}
                  </div>
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Secure, seamless access"
        features={features}
      />

      <ServiceProcess
        eyebrow="Setup Process"
        title="How it works"
        steps={howWeWork}
        background="secondary"
        columns={3}
      />

      {/* What We Can Do */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Actions
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                What we can do in your PMS
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                With secure access to your system, we can handle guest communications 
                and incident management without you lifting a finger.
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {capabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm transition-colors group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="fade-left">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-card border hover:shadow-xl transition-all duration-500">
                <div className="space-y-4">
                  {[
                    { icon: Key, title: "Secure Credentials", desc: "Limited access, encrypted storage" },
                    { icon: Shield, title: "Audit Trail", desc: "Every action logged and traceable" },
                    { icon: Lock, title: "GDPR Compliant", desc: "Full data protection compliance" },
                  ].map((item, i) => (
                    <div key={i} className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium transition-colors group-hover:text-primary">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to integrate?"
        description="Connect your PMS and let us work as an extension of your team. Setup takes just a few minutes."
        primaryCTA={{ text: "Get Started", link: "/contact" }}
        secondaryCTA={{ text: "View All Integrations", link: "/integrations" }}
      />

      <Footer />
    </div>
  );
}
