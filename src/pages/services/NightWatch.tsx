import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Moon, Clock, Shield, ArrowRight, Check, 
  Eye, Bell, Users, Volume2, UserCheck
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-night-watch.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "90%", label: "Parties prevented" },
  { value: "Night+", label: "Weekend coverage" },
  { value: "Proactive", label: "Monitoring approach" },
  { value: "Early", label: "Intervention" },
];

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
      
      <ServiceHero
        icon={Moon}
        badge="Night Watch"
        title="Party prevention"
        titleHighlight="before it starts"
        description="Dedicated agents monitoring your properties during peak risk hours. We prevent parties before they escalate, protecting your reputation and neighbors."
        image={serviceImage}
        imageAlt="Night Watch Service"
      />

      <ServiceStats stats={stats} />

      {/* Coverage Hours */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Coverage
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              When we're watching
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Night Watch covers the highest-risk hours when parties are most likely to occur.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {coverageHours.map((item, i) => (
              <AnimatedSection key={item.day} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Moon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base transition-colors group-hover:text-primary">{item.day}</h3>
                  <p className="text-primary font-medium text-lg">{item.hours}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures
        eyebrow="Capabilities"
        title="Proactive party prevention"
        features={features}
        background="secondary"
      />

      <ServiceProcess
        eyebrow="Our Approach"
        title="Prevention-first process"
        steps={preventionProcess}
      />

      <ServiceImageSection
        eyebrow="Benefits"
        title="What Night Watch prevents"
        description="Our proactive monitoring approach catches issues before they become problems, protecting your property and relationships with neighbors."
        features={partyPrevention}
        image={managerDevices}
        imageAlt="Night Watch Dashboard"
        ctaText="Get Night Watch"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceCTA
        title="Sleep soundly while we watch"
        description="Our Night Watch team is ready to protect your properties during high-risk hours. Talk to us about coverage for your portfolio."
      />

      <Footer />
    </div>
  );
}
