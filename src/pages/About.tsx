import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/components/home/PartnersSection";
import { EuropeMap } from "@/components/about/EuropeMap";
import { Heart, Target, Eye, Users, Sparkles, ArrowRight, MapPin, ExternalLink, Building2, Check, Play, Pause, Newspaper, Video, Mic, FileText } from "lucide-react";
import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionManage from "@/assets/solution-manage.jpg";
import solutionControl from "@/assets/solution-control.jpg";
const values = [{
  icon: Heart,
  title: "Customer First",
  description: "Every decision we make starts with our customers. We're committed to solving real problems for property managers and creating lasting partnerships.",
  image: solutionRest
}, {
  icon: Sparkles,
  title: "Innovation",
  description: "We continuously push the boundaries of what's possible in property monitoring. Our technology evolves with the industry's needs.",
  image: solutionManage
}, {
  icon: Users,
  title: "Team Excellence",
  description: "Our diverse team brings together expertise from hospitality, technology, and customer service to deliver exceptional results.",
  image: solutionControl
}];
const timelineEvents = [{
  year: "2014",
  title: "Founded in Barcelona",
  description: "Roomonitor was born from a simple idea: help property managers sleep better at night. Our founders, experienced in the vacation rental industry, saw the need for real-time monitoring and professional guest management.",
  image: solutionRest
}, {
  year: "2016",
  title: "First Monitoring Device",
  description: "We launched our proprietary monitoring sensor, designed specifically for vacation rentals. Privacy-first noise detection became our signature feature.",
  image: solutionManage
}, {
  year: "2018",
  title: "24/7 Control Center",
  description: "Opened our first Control Center with multilingual agents providing round-the-clock monitoring and guest assistance services.",
  image: solutionControl
}, {
  year: "2020",
  title: "European Expansion",
  description: "Expanded field service network to cover major cities across Spain, Portugal, France, and Italy, enabling on-site interventions when needed.",
  image: solutionRest
}, {
  year: "2023",
  title: "Manager Platform Launch",
  description: "Released our comprehensive Manager platform, giving property managers full visibility and control over their operations.",
  image: solutionManage
}, {
  year: "2025",
  title: "Global Vision",
  description: "Today, Roomonitor protects thousands of properties worldwide and continues to innovate in smart hospitality solutions.",
  image: solutionControl
}];
const coverageCities = [{
  name: "Barcelona",
  country: "Spain",
  isHQ: true
}, {
  name: "Madrid",
  country: "Spain"
}, {
  name: "Valencia",
  country: "Spain"
}, {
  name: "Málaga",
  country: "Spain"
}, {
  name: "Seville",
  country: "Spain"
}, {
  name: "Granada",
  country: "Spain"
}, {
  name: "Lisbon",
  country: "Portugal"
}, {
  name: "Paris",
  country: "France"
}, {
  name: "Milan",
  country: "Italy"
}];

// City positions on the SVG Europe map (approximate coordinates)
const mapCities = [{
  name: "Barcelona",
  x: 52,
  y: 168,
  isHQ: true
}, {
  name: "Madrid",
  x: 35,
  y: 172
}, {
  name: "Valencia",
  x: 48,
  y: 178
}, {
  name: "Málaga",
  x: 38,
  y: 195
}, {
  name: "Seville",
  x: 28,
  y: 188
}, {
  name: "Granada",
  x: 38,
  y: 190
}, {
  name: "Lisbon",
  x: 18,
  y: 175
}, {
  name: "Paris",
  x: 62,
  y: 122
}, {
  name: "Milan",
  x: 95,
  y: 138
}];

// Media mentions data with images
const mediaItems = [{
  id: "phocuswire",
  type: "article",
  outlet: "PhocusWire",
  title: "How Roomonitor is changing vacation rental management",
  description: "An in-depth look at smart monitoring technology in the hospitality industry.",
  icon: Newspaper,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop"
}, {
  id: "hosteltur",
  type: "article",
  outlet: "Hosteltur",
  title: "The future of short-term rental compliance",
  description: "Interview with Roomonitor's CEO on regulatory challenges and solutions.",
  icon: FileText,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400&h=250&fit=crop"
}, {
  id: "podcast",
  type: "podcast",
  outlet: "Rental Scale-Up",
  title: "Episode 45: Building a 24/7 monitoring operation",
  description: "Behind the scenes of Roomonitor's control center operations.",
  icon: Mic,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop"
}, {
  id: "video",
  type: "video",
  outlet: "Property Tech Weekly",
  title: "Roomonitor Product Demo & Interview",
  description: "A comprehensive walkthrough of the monitoring platform.",
  icon: Video,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=250&fit=crop"
}, {
  id: "expansion",
  type: "article",
  outlet: "Expansión",
  title: "Spanish PropTech leading European market",
  description: "How Barcelona-based startups are shaping the property tech landscape.",
  icon: Newspaper,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"
}, {
  id: "lavanguardia",
  type: "article",
  outlet: "La Vanguardia",
  title: "Tecnología para el turismo responsable",
  description: "Roomonitor's role in sustainable tourism management.",
  icon: FileText,
  link: "/blog",
  image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=400&h=250&fit=crop"
}];
export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  // Auto-play timeline
  const advanceTimeline = useCallback(() => {
    setActiveTimeline(prev => (prev + 1) % timelineEvents.length);
  }, []);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(advanceTimeline, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, advanceTimeline]);
  return <div className="min-h-screen bg-background">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] pb-2">
                Born in Barcelona,
                <span className="gradient-text block pb-[10px]">thinking globally</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                With over <span className="font-semibold text-foreground">10 years of experience</span> in the vacation rental industry, we're sector experts on a mission to transform how properties operate. Our smart monitoring technology and dedicated team help property managers focus on what matters most—their guests.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Carousel - Same as homepage */}
        <PartnersSection />

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
              {values.map(value => <div key={value.title} className="group relative overflow-hidden rounded-2xl bg-card border shadow-soft hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={value.image} alt={value.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </AnimatedSection>

        {/* Mission & Vision Section - Enhanced */}
        <AnimatedSection className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-sm border rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">What drives us</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      To empower property managers with intelligent monitoring technology and professional services that ensure peace of mind.
                    </p>
                    <ul className="space-y-3">
                      {["Protect assets 24/7", "Deliver exceptional guest experiences", "Provide real human support"].map((item, idx) => <li key={idx} className="flex items-center gap-3 text-foreground">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-sm border rounded-3xl p-8 md:p-10 shadow-soft hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                      <Eye className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">Where we're going</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      To become the global standard in smart property monitoring, creating a world where every vacation rental operates with 5-star professionalism.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {[{
                      value: "10K+",
                      label: "Properties Protected"
                    }, {
                      value: "24/7",
                      label: "Human Support"
                    }, {
                      value: "4+",
                      label: "Countries"
                    }, {
                      value: "98%",
                      label: "Resolution Rate"
                    }].map((stat, idx) => <div key={idx} className="text-center p-3 rounded-xl bg-muted/50">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Media & Press Section */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">In the press</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Featured Media & Coverage
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read, watch and listen to our latest appearances in industry publications and podcasts
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map(item => {
              const Icon = item.icon;
              return <Link key={item.id} to={item.link} className="group relative bg-card border rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Image Header */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      
                      {/* Type Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">
                          <Icon className="w-3.5 h-3.5" />
                          {item.type}
                        </span>
                      </div>
                      
                      {/* Outlet Name on Image */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-sm font-bold text-white">{item.outlet}</span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      {/* Title */}
                      <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <span>{item.type === "video" ? "Watch now" : item.type === "podcast" ? "Listen now" : "Read article"}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>;
            })}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" asChild>
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Timeline Section with Auto-play */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                From a Barcelona startup to an international property monitoring leader
              </p>
              {/* Auto-play controls */}
              <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm font-medium">
                {isAutoPlaying ? <>
                    <Pause className="w-4 h-4" />
                    Pause auto-play
                  </> : <>
                    <Play className="w-4 h-4" />
                    Resume auto-play
                  </>}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex gap-2">
                {timelineEvents.map((_, index) => <button key={index} onClick={() => {
                setActiveTimeline(index);
                setIsAutoPlaying(false);
              }} className="flex-1 h-1.5 rounded-full overflow-hidden bg-muted cursor-pointer">
                    <div className={`h-full bg-primary transition-all duration-300 ${index < activeTimeline ? "w-full" : index === activeTimeline ? isAutoPlaying ? "animate-progress" : "w-full" : "w-0"}`} style={index === activeTimeline && isAutoPlaying ? {
                  animation: "progress 4s linear"
                } : {}} />
                  </button>)}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Timeline Navigation */}
              <div className="relative">
                {/* Timeline Line */}
                
                
                <div className="space-y-2">
                  {timelineEvents.map((event, index) => <button key={event.year} onClick={() => {
                  setActiveTimeline(index);
                  setIsAutoPlaying(false);
                }} className={`relative flex items-center gap-6 w-full text-left p-4 rounded-xl transition-all duration-300 ${activeTimeline === index ? "bg-primary/10" : "hover:bg-muted/50"}`}>
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeTimeline === index ? "bg-primary text-primary-foreground scale-110" : index < activeTimeline ? "bg-primary/50" : "bg-muted border-2 border-border"}`}>
                        {activeTimeline === index && <span className="w-2 h-2 bg-primary-foreground rounded-full" />}
                      </div>
                      
                      <div className="flex-1">
                        <span className={`text-sm font-medium ${activeTimeline === index ? "text-primary" : "text-muted-foreground"}`}>
                          {event.year}
                        </span>
                        <h4 className={`font-semibold transition-colors ${activeTimeline === index ? "text-foreground" : "text-muted-foreground"}`}>
                          {event.title}
                        </h4>
                      </div>
                    </button>)}
                </div>
              </div>

              {/* Timeline Content */}
              <div className="lg:sticky lg:top-32">
                <div className="bg-card border rounded-2xl overflow-hidden shadow-soft">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={timelineEvents[activeTimeline].image} alt={timelineEvents[activeTimeline].title} className="w-full h-full object-cover transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {timelineEvents[activeTimeline].year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
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
                  {coverageCities.map(city => <div key={city.name} className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 flex-shrink-0 ${city.isHQ ? "text-primary" : "text-background/50"}`} />
                      <span className={`text-sm ${city.isHQ ? "font-semibold text-primary" : "text-background/70"}`}>
                        {city.name}
                        {city.isHQ && " (HQ)"}
                      </span>
                    </div>)}
                </div>
              </div>

              {/* Europe Map - Proper SVG with country outlines */}
              <div className="relative">
                <EuropeMap cities={mapCities} selectedCity={selectedCity} onCitySelect={setSelectedCity} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Join Us Section */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={solutionManage} alt="Join our team" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-foreground/70" />
              <div className="relative z-10 py-20 px-8 md:py-28 md:px-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4">
                  Join the team
                </h2>
                <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                  We're building the future of property management, and we're doing it together. Check out our open positions and become part of our story.
                </p>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="https://www.linkedin.com/company/11209502/admin/posted-jobs/open/" target="_blank" rel="noopener noreferrer">
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

      {/* Progress bar animation */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 4s linear;
        }
      `}</style>
    </div>;
}