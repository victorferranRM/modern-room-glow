import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Headphones, Clock, Globe, Shield, ArrowRight, Check, 
  Phone, MessageSquare, Users, Zap, FileText, Heart
} from "lucide-react";
import serviceImage from "@/assets/service-guest-assist.jpg";
import managerDevices from "@/assets/manager-devices.png";

const commitments = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Our lines are open around the clock, 365 days a year. No holidays, no breaks."
  },
  {
    icon: Zap,
    title: "Ultra-Fast Response",
    description: "Average response time under 30 seconds. Your guests never wait."
  },
  {
    icon: FileText,
    title: "We Follow Your Protocol",
    description: "Our team is trained to act according to your specific rules, functioning as an extension of your team."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "We speak English, Spanish, French, Portuguese, and more."
  },
  {
    icon: Shield,
    title: "Total Transparency",
    description: "All interactions are logged in real-time. Full visibility into every guest touchpoint."
  },
  {
    icon: Heart,
    title: "We Go Beyond",
    description: "We care about your guests and make extra efforts to resolve any issue quickly."
  },
];

const whatWeAreNot = [
  {
    title: "Not Virtual Assistants",
    description: "We are vacation rental specialists with over 10 years in the industry. Each team member works exclusively for us with 1,000+ hours of guest experience."
  },
  {
    title: "No AI Chatbots",
    description: "We don't use messaging software with artificial intelligence. We speak personally with your guests and contact any responsible party, ensuring every action aligns with your protocol."
  },
];

const useCases = [
  { title: "WiFi not working", icon: "📶" },
  { title: "Guest locked out at 2 AM", icon: "🔐" },
  { title: "Property not cleaned upon arrival", icon: "🧹" },
  { title: "Guest wants refund cancellation", icon: "💳" },
  { title: "Guest wants to extend stay", icon: "🏠" },
  { title: "Noise complaint from neighbors", icon: "🔊" },
];

const howItWorks = [
  {
    step: "01",
    title: "Schedule a video call",
    description: "We'll review your protocol and replace your Airbnb/Booking.com contact number with a dedicated Guest Assist number."
  },
  {
    step: "02",
    title: "Complete your protocol",
    description: "Define what we should follow every time guests call. You can edit it anytime."
  },
  {
    step: "03",
    title: "Guest Assist is live!",
    description: "Relax and disconnect with peace of mind. We'll contact you only when necessary and send daily summaries."
  },
];

export default function GuestAssist() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <Headphones className="w-4 h-4" />
                Guest Assist™
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                24/7 Phone support
                <br />
                <span className="text-primary">for your guests</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Our guest service for vacation rental managers offers the best phone support on the market. 
                Your team can finally rest every night and weekend.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Our commitment is <span className="gradient-text">total</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We're NOT */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              What we're <span className="text-destructive">NOT</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatWeAreNot.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-card border">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Examples
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Situations we handle every day
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <AnimatedSection key={useCase.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="font-semibold">{useCase.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Get started in 3 simple steps
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, i) => (
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

      {/* Protocol Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Your Rules, Our Execution
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Protocol
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To get started, we provide a sample protocol template with the most common issues and resolution steps. 
                Customize it to match your exact requirements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Define escalation rules and priorities",
                  "Set response templates for common issues",
                  "Specify emergency contacts and procedures",
                  "Configure notification preferences",
                ].map((item, i) => (
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
                  alt="Roomonitor Manager Dashboard"
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
              Ready to give your team a break?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us handle guest calls while you focus on growing your business. 
              Schedule a quick orientation call to learn more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule a Call
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
