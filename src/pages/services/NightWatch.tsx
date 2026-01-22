import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Moon, Clock, Shield, ArrowRight, Check, 
  Eye, Bell, Users, Volume2, UserCheck
} from "lucide-react";
import serviceImage from "@/assets/service-night-watch.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  {
    icon: Moon,
    title: "Dedicated Night Team",
    description: "Specialized agents monitoring your properties during peak risk hours: evenings and weekends."
  },
  {
    icon: Eye,
    title: "Proactive Monitoring",
    description: "We don't wait for alerts — we actively watch for early warning signs of problems."
  },
  {
    icon: Volume2,
    title: "Noise Pattern Analysis",
    description: "Identify rising noise trends before they become complaints."
  },
  {
    icon: UserCheck,
    title: "Occupancy Tracking",
    description: "Monitor guest numbers to catch unauthorized parties early."
  },
  {
    icon: Bell,
    title: "Early Intervention",
    description: "Friendly guest reminders before situations escalate."
  },
  {
    icon: Shield,
    title: "Escalation Ready",
    description: "Full escalation protocols if early intervention isn't enough."
  },
];

const coverageHours = [
  { day: "Monday - Thursday", hours: "6 PM - 9 AM" },
  { day: "Friday", hours: "6 PM - 12 AM (Sat)" },
  { day: "Saturday", hours: "All day" },
  { day: "Sunday", hours: "All day until 9 AM (Mon)" },
];

const preventionProcess = [
  {
    step: "01",
    title: "Continuous Watch",
    description: "Agents monitor all properties during night hours."
  },
  {
    step: "02",
    title: "Pattern Detection",
    description: "AI-assisted analysis identifies concerning trends."
  },
  {
    step: "03",
    title: "Friendly Reminder",
    description: "Polite guest contact when activity increases."
  },
  {
    step: "04",
    title: "Escalation if Needed",
    description: "Full incident response if reminders don't work."
  },
];

const partyPrevention = [
  "Rising noise levels detected early",
  "Unusual occupancy patterns flagged",
  "Guest messaging before problems escalate",
  "Neighbor complaint prevention",
  "Property protection during high-risk hours",
  "Weekend and holiday coverage",
];

export default function NightWatch() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Moon className="w-4 h-4" />
              Night Watch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Party prevention
              <br />
              <span className="text-primary">before it starts</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Dedicated agents monitoring your properties during peak risk hours. 
              We prevent parties before they escalate, protecting your reputation and neighbors.
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
              { value: "90%", label: "Parties prevented" },
              { value: "Night+", label: "Weekend coverage" },
              { value: "Proactive", label: "Monitoring approach" },
              { value: "Early", label: "Intervention" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Hours */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              When we're watching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Night Watch covers the highest-risk hours when parties are most likely to occur.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {coverageHours.map((item, i) => (
              <AnimatedSection key={item.day} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold mb-2">{item.day}</h3>
                  <p className="text-primary font-medium">{item.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Proactive party prevention
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

      {/* Prevention Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Prevention-first process
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {preventionProcess.map((step, i) => (
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

      {/* What We Prevent */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Benefits
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                What Night Watch prevents
              </h2>
              <ul className="space-y-3 mb-8">
                {partyPrevention.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">
                  Get Night Watch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={managerDevices}
                  alt="Night Watch Dashboard"
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
              Sleep soundly while we watch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Night Watch team is ready to protect your properties during high-risk hours. 
              Talk to us about coverage for your portfolio.
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
