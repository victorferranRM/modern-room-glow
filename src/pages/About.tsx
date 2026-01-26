import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/components/home/PartnersSection";
import {
  Heart,
  Target,
  Eye,
  Users,
  Sparkles,
  ArrowRight,
  MapPin,
  ExternalLink,
  Building2,
  Check,
  Play,
  Pause,
  Newspaper,
  Video,
  Mic,
  FileText,
} from "lucide-react";
import solutionRest from "@/assets/solution-rest-new.jpg";
import solutionManage from "@/assets/solution-manage.jpg";
import solutionControl from "@/assets/solution-control.jpg";

/* ---------- data ---------- */

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make starts with our customers. We're committed to solving real problems for property managers and creating lasting partnerships.",
    image: solutionRest,
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We continuously push the boundaries of what's possible in property monitoring. Our technology evolves with the industry's needs.",
    image: solutionManage,
  },
  {
    icon: Users,
    title: "Team Excellence",
    description:
      "Our diverse team brings together expertise from hospitality, technology, and customer service to deliver exceptional results.",
    image: solutionControl,
  },
];

const timelineEvents = [
  {
    year: "2014",
    title: "Founded in Barcelona",
    description: "Roomonitor was born from a simple idea: help property managers sleep better at night.",
    image: solutionRest,
  },
  {
    year: "2016",
    title: "First Monitoring Device",
    description: "We launched our proprietary monitoring sensor, designed specifically for vacation rentals.",
    image: solutionManage,
  },
  {
    year: "2018",
    title: "24/7 Control Center",
    description: "Opened our first Control Center with multilingual agents providing round-the-clock monitoring.",
    image: solutionControl,
  },
  {
    year: "2020",
    title: "European Expansion",
    description: "Expanded field service network across Southern Europe.",
    image: solutionRest,
  },
  {
    year: "2023",
    title: "Manager Platform Launch",
    description: "Released our comprehensive Manager platform.",
    image: solutionManage,
  },
  {
    year: "2025",
    title: "Global Vision",
    description: "Today, Roomonitor protects thousands of properties worldwide.",
    image: solutionControl,
  },
];

/* ---------- component ---------- */

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const advanceTimeline = useCallback(() => {
    setActiveTimeline((prev) => (prev + 1) % timelineEvents.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(advanceTimeline, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, advanceTimeline]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Building2 className="w-4 h-4" />
                <span>About Roomonitor</span>
              </div>

              {/* 👇 FIX AQUÍ */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.2] py-1">
                Born in Barcelona,
                <span className="gradient-text block">thinking globally</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                With over <span className="font-semibold text-foreground">10 years of experience</span> in the vacation
                rental industry, we're sector experts on a mission to transform how properties operate.
              </p>
            </div>
          </div>
        </section>

        <PartnersSection />

        {/* Timeline (resumen, sin cambios relevantes) */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                {timelineEvents.map((event, index) => (
                  <button
                    key={event.year}
                    onClick={() => {
                      setActiveTimeline(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`block w-full text-left p-4 rounded-xl ${
                      activeTimeline === index ? "bg-primary/10" : "hover:bg-muted/50"
                    }`}
                  >
                    <span className="text-sm text-muted-foreground">{event.year}</span>
                    <h4 className="font-semibold">{event.title}</h4>
                  </button>
                ))}
              </div>

              <div className="bg-card border rounded-2xl overflow-hidden">
                <img src={timelineEvents[activeTimeline].image} alt="" className="w-full aspect-video object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{timelineEvents[activeTimeline].title}</h3>
                  <p className="text-muted-foreground">{timelineEvents[activeTimeline].description}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
