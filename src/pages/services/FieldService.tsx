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
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-field-service.jpg";

const stats = [
  { value: "9+", label: "Cities covered" },
  { value: "<45min", label: "Average arrival" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Documented visits" },
];

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
  { name: "Barcelona", country: "Spain" },
  { name: "Madrid", country: "Spain" },
  { name: "Valencia", country: "Spain" },
  { name: "Málaga", country: "Spain" },
  { name: "Seville", country: "Spain" },
  { name: "Granada", country: "Spain" },
  { name: "Lisbon", country: "Portugal" },
  { name: "Paris", country: "France" },
  { name: "Milan", country: "Italy" },
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
      
      <ServiceHero
        icon={Truck}
        badge="Field Service Network"
        title="On-site intervention"
        titleHighlight="when you need it"
        description="When remote resolution isn't enough, our trained field agents arrive at your property to handle situations professionally and according to your protocols."
        image={serviceImage}
        imageAlt="Field Service Network"
        primaryCTA={{ text: "Check Coverage", link: "/contact" }}
      />

      <ServiceStats stats={stats} />

      {/* Coverage Map Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <AnimatedSection delay={100}>
              <div className="relative bg-gradient-to-br from-secondary/50 to-muted/30 rounded-3xl p-6 lg:p-8 border">
                {/* Europe Map SVG */}
                <div className="relative aspect-[16/9] w-full">
                  <svg viewBox="0 0 800 500" className="w-full h-full">
                    <defs>
                      <linearGradient id="europeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    
                    {/* Portugal */}
                    <path d="M85,280 L85,340 Q90,360 95,370 L100,380 L85,385 L75,375 L70,350 L70,290 L80,275 Z" 
                          fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    
                    {/* Spain */}
                    <path d="M95,250 L180,240 L200,250 L220,260 L230,290 L220,330 L200,360 L150,380 L100,380 L85,340 L85,280 L95,265 Z" 
                          fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    
                    {/* France */}
                    <path d="M200,200 L280,180 L340,190 L360,230 L350,280 L300,300 L260,290 L220,260 L200,250 Z" 
                          fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    
                    {/* Italy */}
                    <path d="M360,230 L400,220 L420,250 L410,300 L420,340 L400,380 L380,400 L370,390 L380,350 L370,300 L350,280 Z" 
                          fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    
                    {/* City markers */}
                    {/* Barcelona */}
                    <g className="cursor-pointer group">
                      <circle cx="195" cy="305" r="8" className="fill-primary animate-pulse" />
                      <circle cx="195" cy="305" r="14" className="fill-primary/20 transition-all duration-300 group-hover:r-18" />
                      <text x="208" y="310" className="fill-foreground text-[11px] font-medium">Barcelona</text>
                    </g>
                    
                    {/* Madrid */}
                    <g className="cursor-pointer group">
                      <circle cx="130" cy="300" r="8" className="fill-primary animate-pulse" />
                      <circle cx="130" cy="300" r="14" className="fill-primary/20" />
                      <text x="143" y="305" className="fill-foreground text-[11px] font-medium">Madrid</text>
                    </g>
                    
                    {/* Other cities */}
                    <g className="cursor-pointer"><circle cx="175" cy="330" r="6" className="fill-primary animate-pulse" /><circle cx="175" cy="330" r="11" className="fill-primary/20" /><text x="185" y="335" className="fill-foreground text-[10px] font-medium">Valencia</text></g>
                    <g className="cursor-pointer"><circle cx="135" cy="375" r="6" className="fill-primary animate-pulse" /><circle cx="135" cy="375" r="11" className="fill-primary/20" /><text x="148" y="380" className="fill-foreground text-[10px] font-medium">Málaga</text></g>
                    <g className="cursor-pointer"><circle cx="105" cy="360" r="6" className="fill-primary animate-pulse" /><circle cx="105" cy="360" r="11" className="fill-primary/20" /><text x="60" y="365" className="fill-foreground text-[10px] font-medium">Seville</text></g>
                    <g className="cursor-pointer"><circle cx="145" cy="360" r="5" className="fill-primary animate-pulse" /><circle cx="145" cy="360" r="10" className="fill-primary/20" /><text x="155" y="355" className="fill-foreground text-[9px] font-medium">Granada</text></g>
                    <g className="cursor-pointer"><circle cx="75" cy="335" r="7" className="fill-primary animate-pulse" /><circle cx="75" cy="335" r="12" className="fill-primary/20" /><text x="45" y="325" className="fill-foreground text-[11px] font-medium">Lisbon</text></g>
                    <g className="cursor-pointer"><circle cx="270" cy="210" r="8" className="fill-primary animate-pulse" /><circle cx="270" cy="210" r="14" className="fill-primary/20" /><text x="283" y="215" className="fill-foreground text-[11px] font-medium">Paris</text></g>
                    <g className="cursor-pointer"><circle cx="370" cy="245" r="7" className="fill-primary animate-pulse" /><circle cx="370" cy="245" r="12" className="fill-primary/20" /><text x="383" y="250" className="fill-foreground text-[11px] font-medium">Milan</text></g>
                  </svg>
                </div>

                {/* City List */}
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {coverageCities.map((city, i) => (
                    <div 
                      key={city.name}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <MapPin className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
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

      <ServiceFeatures
        eyebrow="Our Network"
        title="Professional agents, anywhere"
        features={features}
        background="secondary"
      />

      {/* Intervention Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess
        eyebrow="How It Works"
        title="From dispatch to resolution"
        steps={howItWorks}
        background="secondary"
      />

      <ServiceCTA
        title="Need field service coverage?"
        description="Check if your properties are in our coverage area. Our network is constantly expanding."
        primaryCTA={{ text: "Check Coverage", link: "/contact" }}
      />

      <Footer />
    </div>
  );
}
