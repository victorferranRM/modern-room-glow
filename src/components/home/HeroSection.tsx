import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Clock, Users, BadgeCheck, Send } from "lucide-react";
export function HeroSection() {
  return <section className="relative min-h-[95vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Eyebrow badge */}
          <div className="animate-fade-in flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-float shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] transition-shadow duration-300">
              <BadgeCheck className="w-4 h-4" />
              <span>Trusted by 5,000+ hospitality operators</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-2 animate-fade-in" style={{
          animationDelay: "0.05s"
        }}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-foreground text-balance">
              Emergencies don't follow office hours.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground text-balance">
              Your operations shouldn't depend on them.
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Roomonitor becomes your operational team outside office hours, managing guests, incidents and assets with real decision-making and real action.
          </p>

          {/* Value proposition cards */}
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="bg-card border rounded-2xl p-5 lg:p-6 text-left hover:shadow-soft hover:border-primary/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">24/7 Operations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Guest and incident management around the clock, when your team is offline.
              </p>
            </div>
            
            <div className="bg-card border rounded-2xl p-5 lg:p-6 text-left hover:shadow-soft hover:border-primary/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Control Center + Field Service</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Remote coordination backed by on-site intervention when needed.
              </p>
            </div>
            
            <div className="bg-card border rounded-2xl p-5 lg:p-6 text-left hover:shadow-soft hover:border-primary/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">Your Brand, Our Execution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We operate in your name, following your protocols and standards.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <Button size="lg" className="text-base px-8 py-6 shadow-soft-lg" asChild>
              <Link to="/how-it-works">
                How Roomonitor works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6" asChild>
              <Link to="/contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to an expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}