import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  Heart, Target, Eye, Users, Globe, Sparkles, 
  ArrowRight, MapPin, ExternalLink, Building2,
  MessageCircle, Phone, Clock, AlertTriangle, Volume2, 
  ShieldAlert, Moon, Wrench, X, Check, Ban
} from "lucide-react";
import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionManage from "@/assets/solution-manage.jpg";
import solutionControl from "@/assets/solution-control.jpg";
import serviceEmergency from "@/assets/service-emergency.jpg";
import serviceNightWatch from "@/assets/service-night-watch.jpg";
import serviceFieldService from "@/assets/service-field-service.jpg";
import serviceGuestAssist from "@/assets/service-guest-assist.jpg";
import serviceIncidentResponse from "@/assets/service-incident-response.jpg";

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

const situations = [
  {
    id: "noise",
    title: "Noise Complaint at 2 AM",
    icon: Volume2,
    image: serviceNightWatch,
    color: "from-orange-500/20 to-red-500/20",
    messages: [
      { type: "system", text: "🔔 Noise alert detected at Apartment 3B - 78dB for 15 minutes" },
      { type: "agent", text: "Hi, this is Maria from Roomonitor. We've detected elevated noise levels at your property. I'm reaching out to your guests now." },
      { type: "guest", text: "Oh sorry! We didn't realize the music was so loud. We'll turn it down right away." },
      { type: "agent", text: "Thank you for understanding. The neighbors appreciate your cooperation. Enjoy your stay!" },
      { type: "system", text: "✅ Issue resolved in 4 minutes. No neighbor complaint filed." },
    ]
  },
  {
    id: "emergency",
    title: "Guest Medical Emergency",
    icon: AlertTriangle,
    image: serviceEmergency,
    color: "from-red-500/20 to-pink-500/20",
    messages: [
      { type: "guest", text: "Help! My father is having chest pains. We don't know what to do!" },
      { type: "agent", text: "Stay calm. I'm Carlos from Roomonitor. I'm calling emergency services to your address right now. Is he conscious?" },
      { type: "guest", text: "Yes, he's sitting down. He's sweating a lot." },
      { type: "agent", text: "Good. Keep him seated and comfortable. Ambulance is dispatched - ETA 6 minutes. I'm staying on the line with you." },
      { type: "system", text: "✅ Emergency services arrived. Guest transported safely. Property owner notified." },
    ]
  },
  {
    id: "lockout",
    title: "Guest Locked Out at Midnight",
    icon: Moon,
    image: serviceFieldService,
    color: "from-indigo-500/20 to-purple-500/20",
    messages: [
      { type: "guest", text: "Hi, I'm locked out of my apartment. The smart lock isn't working and it's midnight!" },
      { type: "agent", text: "Hello! I'm Ana from Roomonitor. I see you're at Calle Mayor 42. Let me check the lock status..." },
      { type: "agent", text: "I've reset the lock remotely. Can you try the code 847291 now?" },
      { type: "guest", text: "It worked! Thank you so much, you saved my night!" },
      { type: "system", text: "✅ Access restored in 3 minutes. No field service dispatch needed." },
    ]
  },
  {
    id: "maintenance",
    title: "Hot Water Not Working",
    icon: Wrench,
    image: serviceGuestAssist,
    color: "from-blue-500/20 to-cyan-500/20",
    messages: [
      { type: "guest", text: "There's no hot water in the apartment. We have a baby with us and need warm water for a bath." },
      { type: "agent", text: "I understand the urgency. This is Pedro from Roomonitor. I'm contacting the property's maintenance team immediately." },
      { type: "agent", text: "Good news - the boiler was accidentally turned off. Our field agent Juan will be there in 20 minutes to fix it." },
      { type: "guest", text: "That's amazing service! Thank you for being so quick." },
      { type: "system", text: "✅ Issue resolved by field agent. Guest left 5-star review mentioning quick response." },
    ]
  },
  {
    id: "checkin",
    title: "Early Check-in Request",
    icon: Clock,
    image: serviceIncidentResponse,
    color: "from-emerald-500/20 to-teal-500/20",
    messages: [
      { type: "guest", text: "Hi! Our flight arrived early. Is there any way we can check in at 11 AM instead of 3 PM?" },
      { type: "agent", text: "Welcome! I'm Sofia from Roomonitor. Let me check with the cleaning team and see if the apartment is ready." },
      { type: "agent", text: "Great news! The previous guests checked out early and cleaning is almost done. You can check in at 12 PM." },
      { type: "guest", text: "That's perfect! We'll grab lunch nearby. Thank you!" },
      { type: "system", text: "✅ Early check-in arranged. Cleaning team notified. Guest started trip on a positive note." },
    ]
  },
];

const whatWeAreNot = [
  {
    icon: Ban,
    title: "We're not just software",
    description: "We're real people working 24/7. When a guest calls at 3 AM, a trained agent answers—not a chatbot or voicemail.",
    image: serviceNightWatch,
  },
  {
    icon: X,
    title: "We're not surveillance",
    description: "Our sensors detect noise levels and occupancy—never conversations or images. Guest privacy is fundamental to our approach.",
    image: solutionRest,
  },
  {
    icon: ShieldAlert,
    title: "We don't replace you",
    description: "We're an extension of your team, not a replacement. You define the protocols, we execute them perfectly every time.",
    image: solutionManage,
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

// Chat conversation component with typing animation
function ConversationSimulator({ messages }: { messages: typeof situations[0]["messages"] }) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setVisibleMessages(0);
    setIsTyping(true);
    
    const showNextMessage = (index: number) => {
      if (index < messages.length) {
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(index + 1);
          if (index + 1 < messages.length) {
            setTimeout(() => setIsTyping(true), 300);
            showNextMessage(index + 1);
          }
        }, 1200 + Math.random() * 800);
      }
    };
    
    showNextMessage(0);
  }, [messages]);

  return (
    <div className="space-y-3 max-h-[320px] overflow-y-auto p-1">
      {messages.slice(0, visibleMessages).map((msg, idx) => (
        <div
          key={idx}
          className={`flex ${msg.type === "guest" ? "justify-end" : msg.type === "system" ? "justify-center" : "justify-start"} animate-fade-in`}
        >
          {msg.type === "system" ? (
            <div className="bg-muted/50 text-muted-foreground text-xs px-3 py-2 rounded-full text-center max-w-[90%]">
              {msg.text}
            </div>
          ) : (
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                msg.type === "guest"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card border shadow-sm rounded-bl-md"
              }`}
            >
              <p className="text-xs font-medium mb-1 opacity-70">
                {msg.type === "guest" ? "Guest" : "Roomonitor Agent"}
              </p>
              {msg.text}
            </div>
          )}
        </div>
      ))}
      {isTyping && visibleMessages < messages.length && (
        <div className="flex justify-start animate-fade-in">
          <div className="bg-card border shadow-sm px-4 py-3 rounded-2xl rounded-bl-md">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeSituation, setActiveSituation] = useState(0);

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
                      {["Protect assets 24/7", "Deliver exceptional guest experiences", "Provide real human support"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-foreground">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
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
                      {[
                        { value: "10K+", label: "Properties Protected" },
                        { value: "24/7", label: "Human Support" },
                        { value: "4+", label: "Countries" },
                        { value: "98%", label: "Resolution Rate" },
                      ].map((stat, idx) => (
                        <div key={idx} className="text-center p-3 rounded-xl bg-muted/50">
                          <div className="text-xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Situations We Handle - Dynamic Conversations */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Real scenarios, real solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Situations we handle every day
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our team responds to real guest situations—click any scenario to watch the conversation unfold
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Scenario Tabs */}
              <div className="space-y-3">
                {situations.map((situation, idx) => (
                  <button
                    key={situation.id}
                    onClick={() => setActiveSituation(idx)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                      activeSituation === idx
                        ? "bg-card border-2 border-primary shadow-lg"
                        : "bg-card/50 border border-transparent hover:bg-card hover:border-border"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${situation.color}`}>
                      <situation.icon className={`w-6 h-6 ${activeSituation === idx ? "text-primary" : "text-foreground/70"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold truncate ${activeSituation === idx ? "text-foreground" : "text-muted-foreground"}`}>
                        {situation.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">Click to see how we handle it</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${activeSituation === idx ? "text-primary translate-x-1" : "text-muted-foreground"}`} />
                  </button>
                ))}
              </div>

              {/* Conversation Simulator */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-card border rounded-2xl overflow-hidden shadow-lg">
                  {/* Header with image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={situations[activeSituation].image}
                      alt={situations[activeSituation].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${situations[activeSituation].color}`}>
                          {(() => {
                            const Icon = situations[activeSituation].icon;
                            return <Icon className="w-5 h-5 text-foreground" />;
                          })()}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{situations[activeSituation].title}</h4>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            Live conversation simulation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat area */}
                  <div className="p-4 bg-muted/30 min-h-[320px]">
                    <ConversationSimulator 
                      key={activeSituation} 
                      messages={situations[activeSituation].messages} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* What We Are Not Section - Enhanced */}
        <AnimatedSection className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Setting expectations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What we are <span className="line-through opacity-50">not</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understanding what we don't do is just as important as knowing what we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whatWeAreNot.map((item, idx) => (
                <div 
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-destructive" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Interactive Timeline Section */}
        <AnimatedSection className="py-16 md:py-24 bg-muted/30">
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
