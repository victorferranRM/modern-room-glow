import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Truck, Clock, MapPin, ArrowRight, Check, 
  Shield, Users, Wrench, Phone, Navigation
} from "lucide-react";
import serviceImage from "@/assets/service-field-service.jpg";

const features = [
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Our network of field agents covers major tourist destinations and cities across the globe."
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "When remote resolution isn't enough, we dispatch trained professionals to your property."
  },
  {
    icon: Users,
    title: "Vetted Professionals",
    description: "Every field agent is background-checked, trained, and equipped to handle any situation."
  },
  {
    icon: Wrench,
    title: "Multi-Skill Teams",
    description: "From noise interventions to emergency repairs, our teams can handle diverse situations."
  },
  {
    icon: Shield,
    title: "Documented Actions",
    description: "Every visit is logged with photos, timestamps, and detailed reports."
  },
  {
    icon: Phone,
    title: "Real-Time Updates",
    description: "Track agent location and receive live updates throughout the intervention."
  },
];

const interventionTypes = [
  {
    title: "Noise & Party Intervention",
    description: "Professional de-escalation when noise levels exceed thresholds",
    icon: "🔊"
  },
  {
    title: "Guest Lockouts",
    description: "Emergency access assistance when guests are locked out",
    icon: "🔐"
  },
  {
    title: "Property Inspections",
    description: "Visual checks when sensors detect unusual activity",
    icon: "🔍"
  },
  {
    title: "Emergency Repairs",
    description: "Coordination with local contractors for urgent fixes",
    icon: "🔧"
  },
  {
    title: "Guest Welcome",
    description: "In-person check-in assistance when needed",
    icon: "👋"
  },
  {
    title: "Incident Documentation",
    description: "Photo and video evidence for insurance claims",
    icon: "📸"
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Issue Detected",
    description: "Control Center identifies a situation requiring on-site intervention."
  },
  {
    step: "02",
    title: "Agent Dispatched",
    description: "Nearest qualified agent is assigned and en route to your property."
  },
  {
    step: "03",
    title: "On-Site Resolution",
    description: "Agent handles the situation according to your specific protocol."
  },
  {
    step: "04",
    title: "Full Report",
    description: "Detailed documentation with photos and actions taken is provided."
  },
];

export default function FieldService() {
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
              <Truck className="w-4 h-4" />
              Field Service Network
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              On-site intervention
              <br />
              <span className="text-primary">when you need it</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              When remote resolution isn't enough, our trained field agents arrive at your property 
              to handle situations professionally and according to your protocols.
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
              { value: "50+", label: "Cities covered" },
              { value: "<45min", label: "Average arrival" },
              { value: "24/7", label: "Availability" },
              { value: "100%", label: "Documented visits" },
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
              Our Network
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Professional agents, anywhere
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

      {/* Intervention Types */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Types of interventions
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {interventionTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              From alert to resolution
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => (
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Need boots on the ground?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our field service network is ready to support your properties. 
              Learn about coverage in your area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Check Coverage
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
