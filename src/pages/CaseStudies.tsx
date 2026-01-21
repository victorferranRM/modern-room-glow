import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Shield, Users, Building2, Hotel, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  icon: React.ElementType;
  image: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "urban-stays",
    title: "Reducing Noise Complaints by 85%",
    company: "Urban Stays Barcelona",
    industry: "Short-term Rentals",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    location: "Barcelona, Spain",
    challenge: "Managing 200+ apartments across the city with frequent noise complaints from neighbors, leading to fines and potential license revocations.",
    solution: "Deployed Roomonitor devices across all properties with real-time alerts and automated guest messaging integration.",
    results: [
      { metric: "Noise Complaints", value: "-85%", description: "Reduction in neighbor complaints" },
      { metric: "Response Time", value: "< 2 min", description: "Average alert response time" },
      { metric: "Guest Satisfaction", value: "+23%", description: "Improvement in reviews" },
    ],
    quote: "Roomonitor transformed how we manage our properties. We went from constant neighbor issues to peaceful coexistence.",
    author: "Maria González",
    role: "Operations Director"
  },
  {
    id: "coastal-villas",
    title: "Protecting Premium Properties",
    company: "Coastal Villas Portugal",
    industry: "Luxury Vacation Rentals",
    icon: Home,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    location: "Algarve, Portugal",
    challenge: "High-end villas requiring discreet monitoring without compromising guest experience or privacy.",
    solution: "Implemented comprehensive monitoring with occupancy tracking and environmental sensors for pool and outdoor areas.",
    results: [
      { metric: "Property Damage", value: "-92%", description: "Reduction in damage incidents" },
      { metric: "Insurance Costs", value: "-40%", description: "Annual premium savings" },
      { metric: "Unauthorized Guests", value: "0", description: "Incidents after implementation" },
    ],
    quote: "The peace of mind is invaluable. We can offer luxury experiences while protecting our €2M+ properties.",
    author: "João Santos",
    role: "Owner & Founder"
  },
  {
    id: "metro-hotels",
    title: "Optimizing Hotel Operations",
    company: "Metro Hotels Group",
    industry: "Boutique Hotels",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    location: "London, United Kingdom",
    challenge: "12 boutique hotels struggling with energy costs and inconsistent room conditions affecting guest comfort.",
    solution: "Environmental monitoring with automated HVAC integration and predictive maintenance alerts.",
    results: [
      { metric: "Energy Costs", value: "-35%", description: "Monthly utility savings" },
      { metric: "HVAC Issues", value: "-67%", description: "Reduction in complaints" },
      { metric: "Staff Efficiency", value: "+40%", description: "Improvement in response" },
    ],
    quote: "The data insights have revolutionized our operations. We now predict issues before guests even notice them.",
    author: "James Thompson",
    role: "Chief Operations Officer"
  },
];

const stats = [
  { value: "500+", label: "Properties Protected" },
  { value: "15", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
  { value: "2M+", label: "Nights Monitored" },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Real Results from{" "}
              <span className="text-primary">Real Properties</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how property managers worldwide are transforming their operations with Roomonitor's intelligent monitoring solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm sm:text-base">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {caseStudies.map((study, index) => (
            <AnimatedSection 
              key={study.id} 
              animation="fade-up" 
              delay={index * 150}
              className="mb-20 last:mb-0"
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}>
                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                          <study.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-white/90 text-sm font-medium">{study.industry}</span>
                      </div>
                      <h3 className="text-white text-xl sm:text-2xl font-bold">{study.company}</h3>
                      <p className="text-white/80 text-sm">{study.location}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-primary/10" />
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    {study.title}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-muted/50 border border-border">
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{result.description}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative pl-6 border-l-4 border-primary">
                    <p className="text-foreground italic mb-3">"{study.quote}"</p>
                    <footer className="text-sm">
                      <strong className="text-foreground">{study.author}</strong>
                      <span className="text-muted-foreground"> — {study.role}</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section with Dynamic Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join hundreds of property managers who've transformed their operations with Roomonitor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary hover:text-primary"
                asChild
              >
                <Link to="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/resources/savings-calculator">
                  Calculate Your Savings
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
