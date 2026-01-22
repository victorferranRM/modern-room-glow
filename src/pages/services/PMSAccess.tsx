import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Settings, Key, ArrowRight, Check, 
  Shield, Link2, Database, Lock, Workflow
} from "lucide-react";
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
      
      {/* Hero Section - Keynest Style */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Settings className="w-4 h-4" />
                PMS & Tool Access
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
                We work in
                <br />
                <span className="text-primary">your ecosystem</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                No separate dashboards, no duplicate data. We operate directly from your Property 
                Management System, working as a true extension of your team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/integrations">View Integrations</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={serviceImage}
                  alt="PMS Integration"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm text-muted-foreground">We integrate with your favorite PMS</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {supportedPlatforms.map((platform, i) => (
              <AnimatedSection key={platform.name} delay={i * 50}>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm">
                    {platform.logo}
                  </div>
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Secure, seamless access
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

      {/* How We Work */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Setup Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              How it works
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {howWeWork.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Do */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
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
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative p-6 sm:p-8 rounded-3xl bg-card border">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Key className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Secure Credentials</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Limited access, encrypted storage</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">Audit Trail</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Every action logged and traceable</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">GDPR Compliant</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Full data protection compliance</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Ready to integrate?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Connect your PMS and let us work as an extension of your team. 
              Setup takes just a few minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/integrations">View All Integrations</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
