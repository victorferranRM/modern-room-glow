import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Heart, Target, Eye, Users, Globe, Sparkles, 
  ArrowRight, MapPin, ExternalLink, Building2
} from "lucide-react";
import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionManage from "@/assets/solution-manage.jpg";
import solutionControl from "@/assets/solution-control.jpg";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers. We're committed to solving real problems for property managers and creating lasting partnerships.",
    image: solutionRest,
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in property monitoring. Our technology evolves with the industry's needs.",
    image: solutionManage,
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "Our diverse team brings together expertise from hospitality, technology, and customer service to deliver exceptional results.",
    image: solutionControl,
  },
];

const timelineEvents = [
  {
    year: "2014",
    title: "Founded in Barcelona",
    description: "Roomonitor was born from a simple idea: help property managers sleep better at night. Our founders, experienced in the vacation rental industry, saw the need for real-time monitoring and professional guest management.",
    image: solutionRest,
  },
  {
    year: "2016",
    title: "First Monitoring Device",
    description: "We launched our proprietary monitoring sensor, designed specifically for vacation rentals. Privacy-first noise detection became our signature feature.",
    image: solutionManage,
  },
  {
    year: "2018",
    title: "24/7 Control Center",
    description: "Opened our first Control Center with multilingual agents providing round-the-clock monitoring and guest assistance services.",
    image: solutionControl,
  },
  {
    year: "2020",
    title: "European Expansion",
    description: "Expanded field service network to cover major cities across Spain, Portugal, France, and Italy, enabling on-site interventions when needed.",
    image: solutionRest,
  },
  {
    year: "2023",
    title: "Manager Platform Launch",
    description: "Released our comprehensive Manager platform, giving property managers full visibility and control over their operations.",
    image: solutionManage,
  },
  {
    year: "2025",
    title: "Global Vision",
    description: "Today, Roomonitor protects thousands of properties worldwide and continues to innovate in smart hospitality solutions.",
    image: solutionControl,
  },
];

const coverageCities = [
  { name: "Barcelona", country: "Spain", isHQ: true },
  { name: "Madrid", country: "Spain" },
  { name: "Valencia", country: "Spain" },
  { name: "Málaga", country: "Spain" },
  { name: "Seville", country: "Spain" },
  { name: "Granada", country: "Spain" },
  { name: "Lisbon", country: "Portugal" },
  { name: "Paris", country: "France" },
  { name: "Milan", country: "Italy" },
];

const mapCities = [
  { name: "Barcelona", top: "58%", left: "12%", isHQ: true },
  { name: "Madrid", top: "62%", left: "8%" },
  { name: "Valencia", top: "65%", left: "11%" },
  { name: "Málaga", top: "72%", left: "9%" },
  { name: "Seville", top: "70%", left: "6%" },
  { name: "Granada", top: "71%", left: "8%" },
  { name: "Lisbon", top: "66%", left: "2%" },
  { name: "Paris", top: "42%", left: "15%" },
  { name: "Milan", top: "48%", left: "27%" },
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Building2 className="w-4 h-4" />
                <span>About Roomonitor</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Born in Barcelona,
                <span className="gradient-text block">thinking globally</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                We're on a mission to transform how vacation rentals operate. With our smart monitoring technology and dedicated team, we help property managers focus on what matters most—their guests.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Roomonitor
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="group relative overflow-hidden rounded-2xl bg-card border shadow-soft hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision Section */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To empower property managers with intelligent monitoring technology and professional services that ensure peace of mind, protect their assets, and deliver exceptional guest experiences—24 hours a day, 7 days a week.
                </p>
              </div>
              <div className="bg-card border rounded-2xl p-8 md:p-10 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the global standard in smart property monitoring, creating a world where every vacation rental operates with the professionalism of a five-star hotel, while preserving the unique character that makes each property special.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Timeline Section */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a Barcelona startup to an international property monitoring leader
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Timeline Navigation */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                
                <div className="space-y-2">
                  {timelineEvents.map((event, index) => (
                    <button
                      key={event.year}
                      onClick={() => setActiveTimeline(index)}
                      className={`relative flex items-center gap-6 w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTimeline === index 
                          ? "bg-primary/10" 
                          : "hover:bg-muted/50"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeTimeline === index 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted border-2 border-border"
                      }`}>
                        <span className="text-xs font-bold">
                          {activeTimeline === index ? "●" : ""}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${
                          activeTimeline === index ? "text-primary" : "text-muted-foreground"
                        }`}>
                          {event.year}
                        </span>
                        <h4 className={`font-semibold transition-colors ${
                          activeTimeline === index ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {event.title}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Content */}
              <div className="lg:sticky lg:top-32">
                <div className="bg-card border rounded-2xl overflow-hidden shadow-soft">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={timelineEvents[activeTimeline].image}
                      alt={timelineEvents[activeTimeline].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-primary font-semibold text-lg">{timelineEvents[activeTimeline].year}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                      {timelineEvents[activeTimeline].title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {timelineEvents[activeTimeline].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Global Presence Section */}
        <AnimatedSection className="py-16 md:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Born in Barcelona, <span className="text-primary">trusted globally</span>
                </h2>
                <p className="text-background/70 text-lg mb-6 leading-relaxed">
                  Our headquarters are in Barcelona, but our vision is global. We've built a physical network of field service agents in key cities across Europe, ensuring we can respond on-site when needed.
                </p>
                <p className="text-background/70 mb-8 leading-relaxed">
                  When demand grows in a new city, we expand our network there. Our goal is to be wherever our clients need us.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {coverageCities.map((city) => (
                    <div key={city.name} className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 flex-shrink-0 ${city.isHQ ? "text-primary" : "text-background/50"}`} />
                      <span className={`text-sm ${city.isHQ ? "font-semibold text-primary" : "text-background/70"}`}>
                        {city.name}
                        {city.isHQ && " (HQ)"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Europe Map */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Dotted World Map Style Background */}
                  <defs>
                    <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="1.5" r="0.5" fill="currentColor" className="text-background/20" />
                    </pattern>
                  </defs>
                  
                  {/* Europe Outline - Simplified */}
                  <path
                    d="M 5 30 Q 10 25 20 28 L 25 22 Q 35 18 45 20 L 55 18 Q 65 16 75 20 L 85 25 Q 90 30 88 40 L 90 50 Q 88 60 82 65 L 75 72 Q 65 78 55 75 L 45 78 Q 35 80 25 75 L 15 70 Q 8 65 5 55 L 3 45 Q 2 35 5 30 Z"
                    fill="url(#dots)"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-background/30"
                  />
                  
                  {/* Iberian Peninsula */}
                  <path
                    d="M 5 55 Q 8 50 12 52 L 18 50 Q 22 52 20 58 L 18 65 Q 12 70 8 68 L 3 62 Q 2 58 5 55 Z"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-background/40"
                  />
                  
                  {/* France */}
                  <path
                    d="M 18 45 Q 22 40 28 42 L 32 45 Q 30 52 25 55 L 20 52 Q 16 50 18 45 Z"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-background/40"
                  />
                  
                  {/* Italy */}
                  <path
                    d="M 32 50 Q 36 48 38 52 L 40 58 Q 38 65 35 68 L 32 62 Q 30 55 32 50 Z"
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-background/40"
                  />
                  
                  {/* City Markers */}
                  {mapCities.map((city, index) => {
                    const x = parseFloat(city.left);
                    const y = parseFloat(city.top);
                    return (
                      <g key={city.name}>
                        {/* Pulse Animation */}
                        {city.isHQ && (
                          <circle
                            cx={x}
                            cy={y}
                            r="4"
                            className="text-primary fill-current animate-ping"
                            opacity="0.4"
                          />
                        )}
                        {/* Marker */}
                        <circle
                          cx={x}
                          cy={y}
                          r={city.isHQ ? "2.5" : "1.5"}
                          className={city.isHQ ? "fill-primary" : "fill-primary/70"}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Join Us Section */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={solutionManage}
                alt="Join our team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/70" />
              <div className="relative z-10 py-20 px-8 md:py-28 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
                  Join the team
                </h2>
                <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  We're building the future of property management, and we're doing it together. Check out our open positions and become part of our story.
                </p>
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/company/11209502/admin/posted-jobs/open/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Open Positions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of property managers who trust Roomonitor to protect their properties and delight their guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}