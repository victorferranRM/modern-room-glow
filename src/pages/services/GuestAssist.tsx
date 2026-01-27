import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Headphones, Clock, Globe, Shield, ArrowRight, Check, 
  Phone, MessageSquare, Users, Zap, FileText, Heart
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-guest-assist.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "<30s", label: "Average response" },
  { value: "24/7", label: "Availability" },
  { value: "5+", label: "Languages spoken" },
  { value: "100%", label: "Logged interactions" },
];

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
    description: "We are vacation rental specialists with over 10 years in the industry. Each team member works exclusively for us with 1,000+ hours of guest experience.",
    image: serviceImage,
    icon: Users,
  },
  {
    title: "No AI Chatbots",
    description: "We don't use messaging software with artificial intelligence. We speak personally with your guests and contact any responsible party, ensuring every action aligns with your protocol.",
    image: managerDevices,
    icon: MessageSquare,
  },
];

const useCases = [
  { title: "WiFi not working", icon: Phone },
  { title: "Guest locked out at 2 AM", icon: Shield },
  { title: "Property not cleaned upon arrival", icon: FileText },
  { title: "Guest wants refund cancellation", icon: MessageSquare },
  { title: "Guest wants to extend stay", icon: Users },
  { title: "Noise complaint from neighbors", icon: Headphones },
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

const protocolFeatures = [
  "Define escalation rules and priorities",
  "Set response templates for common issues",
  "Specify emergency contacts and procedures",
  "Configure notification preferences",
];

export default function GuestAssist() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Headphones}
        badge="Guest Assist™"
        title="24/7 Phone support"
        titleHighlight="for your guests"
        description="Our guest service for vacation rental managers offers the best phone support on the market. Your team can finally rest every night and weekend."
        image={serviceImage}
        imageAlt="Guest Assist Service"
        primaryCTA={{ text: "Contact Us", link: "/contact" }}
      />

      <ServiceStats stats={stats} />

      <ServiceFeatures
        eyebrow="Our Commitment"
        title="Our commitment is total"
        features={commitments}
      />

      {/* What We're NOT - Enhanced with Images */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Setting expectations</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              What we're <span className="text-destructive">NOT</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real people, real expertise—that's what sets us apart
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whatWeAreNot.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150} animation={i === 0 ? "fade-right" : "fade-left"}>
                <div className="group relative overflow-hidden rounded-2xl bg-card border hover:border-destructive/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <item.icon className="w-6 h-6 text-destructive" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium text-destructive border border-destructive/20">
                        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                        NOT
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-destructive">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">{useCase.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        eyebrow="How It Works"
        title="Get started in 3 simple steps"
        steps={howItWorks}
        background="secondary"
        columns={3}
      />

      <ServiceImageSection
        eyebrow="Your Rules, Our Execution"
        title="Protocol"
        description="To get started, we provide a sample protocol template with the most common issues and resolution steps. Customize it to match your exact requirements."
        features={protocolFeatures}
        image={managerDevices}
        imageAlt="Roomonitor Manager Dashboard"
        ctaText="See a Demo"
        ctaLink="/contact"
        reversed
      />

      <ServiceCTA
        title="Ready to give your team a break?"
        description="Let us handle guest calls while you focus on growing your business. Schedule a quick orientation call to learn more."
        primaryCTA={{ text: "Schedule a Call", link: "/contact" }}
      />

      <Footer />
    </div>
  );
}
