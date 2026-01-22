import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Truck, Clock, MapPin, ArrowRight, Check, 
  Shield, Users, Wrench, Phone, Navigation,
  Volume2, Key, Search, Camera, HandshakeIcon
} from "lucide-react";
import serviceImage from "@/assets/service-field-service.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Our network of field agents covers major tourist destinations and cities across Europe."
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
    icon: Volume2
  },
  {
    title: "Guest Lockouts",
    description: "Emergency access assistance when guests are locked out",
    icon: Key
  },
  {
    title: "Property Inspections",
    description: "Visual checks when sensors detect unusual activity",
    icon: Search
  },
  {
    title: "Emergency Repairs",
    description: "Coordination with local contractors for urgent fixes",
    icon: Wrench
  },
  {
    title: "Guest Welcome",
    description: "In-person check-in assistance when needed",
    icon: HandshakeIcon
  },
  {
    title: "Incident Documentation",
    description: "Photo and video evidence for insurance claims",
    icon: Camera
  },
];

const coverageCities = [
  { name: "Barcelona", country: "Spain", top: "58%", left: "12%" },
  { name: "Madrid", country: "Spain", top: "62%", left: "8%" },
  { name: "Valencia", country: "Spain", top: "65%", left: "11%" },
  { name: "Málaga", country: "Spain", top: "72%", left: "9%" },
  { name: "Seville", country: "Spain", top: "70%", left: "6%" },
  { name: "Granada", country: "Spain", top: "71%", left: "8%" },
  { name: "Lisbon", country: "Portugal", top: "66%", left: "2%" },
  { name: "Paris", country: "France", top: "42%", left: "15%" },
  { name: "Milan", country: "Italy", top: "48%", left: "27%" },
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
      
      {/* Hero Section - Keynest Style */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Truck className="w-4 h-4" />
                Field Service Network
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6">
                On-site intervention
                <br />
                <span className="text-primary">when you need it</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                When remote resolution isn't enough, our trained field agents arrive at your property 
                to handle situations professionally and according to your protocols.
              </p>
              <div className="flex flex-wrap gap-4">
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

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={serviceImage}
                  alt="Field Service Network"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "9+", label: "Cities covered" },
              { value: "<45min", label: "Average arrival" },
              { value: "24/7", label: "Availability" },
              { value: "100%", label: "Documented visits" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Coverage Area
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Our field agents are located in key European cities
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              We currently operate in cities with high demand from our clients. 
              Our network is growing to serve more destinations.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            {/* Interactive Map */}
            <AnimatedSection delay={100}>
              <div className="relative bg-gradient-to-br from-secondary/50 to-muted/30 rounded-3xl p-6 lg:p-8 border">
                {/* Simplified Europe Map SVG */}
                <div className="relative aspect-[16/10] w-full">
                  <svg viewBox="0 0 400 250" className="w-full h-full opacity-20">
                    <path
                      d="M50,120 Q60,80 100,70 L140,60 Q180,50 220,55 L260,60 Q300,70 340,90 L360,110 Q380,140 370,170 L350,190 Q320,210 280,200 L240,195 Q200,190 160,180 L120,170 Q80,160 60,140 Z"
                      fill="currentColor"
                      className="text-primary"
                    />
                  </svg>
                  
                  {/* City Markers */}
                  {coverageCities.map((city, i) => (
                    <div
                      key={city.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{ top: city.top, left: city.left }}
                    >
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
                        <div className="absolute -top-1 -left-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 animate-ping" />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          <div className="bg-card border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                            <p className="font-semibold text-foreground text-sm">{city.name}</p>
                            <p className="text-xs text-muted-foreground">{city.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* City List */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {coverageCities.map((city) => (
                    <div 
                      key={city.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border hover:border-primary/30 transition-colors"
                    >
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{city.name}</p>
                        <p className="text-xs text-muted-foreground">{city.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Network
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
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
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Services
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Types of interventions
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {interventionTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
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
              Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              From alert to resolution
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Manager Preview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Roomonitor Manager
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Track every intervention
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-6">
                Monitor field agent dispatches in real-time, view complete visit histories, 
                and access detailed reports — all from your dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time agent tracking",
                  "Complete visit documentation",
                  "Photo and video evidence",
                  "Exportable reports",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
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
                  alt="Field Service Dashboard"
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Need boots on the ground?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
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
