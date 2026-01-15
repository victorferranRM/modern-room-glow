import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Clock, Volume2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Trusted by 5,000+ property managers</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Protect your rentals with{" "}
              <span className="gradient-text">intelligent monitoring</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Real-time noise detection, 24/7 emergency support, and complete guest management — 
              all in one premium platform designed for professional property managers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-soft-lg" asChild>
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/how-it-works">
                  <Play className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Real-time</div>
                  <div className="text-xs text-muted-foreground">Monitoring</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">100%</div>
                  <div className="text-xs text-muted-foreground">Privacy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in lg:animate-slide-in-right">
            {/* Device mockup placeholder */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 gradient-primary rounded-3xl opacity-20 blur-2xl scale-90" />
              
              {/* Main card */}
              <div className="relative bg-card rounded-3xl shadow-soft-lg p-8 border animate-float">
                {/* Device icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center">
                  <Volume2 className="w-10 h-10 text-white" />
                </div>
                
                {/* Status */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">Roomonitor Device</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    All quiet
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold text-primary">32</div>
                    <div className="text-xs text-muted-foreground">dB now</div>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold text-primary">0</div>
                    <div className="text-xs text-muted-foreground">Alerts</div>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Floating notification cards */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-soft p-4 border animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Property Protected</div>
                    <div className="text-xs text-muted-foreground">Just now</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-soft p-4 border animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Guest check-in</div>
                    <div className="text-xs text-muted-foreground">Scheduled 3:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
