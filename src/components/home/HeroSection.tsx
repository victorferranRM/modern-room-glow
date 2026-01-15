import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Shield, Clock, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Glowing orbs for depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main headline */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Emergencies don't follow office hours.
              <span className="block mt-3 bg-gradient-to-r from-primary via-primary to-orange-300 bg-clip-text text-transparent">
                Your operations shouldn't depend on them.
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Roomonitor becomes your operational team outside office hours, managing guests, incidents and assets with real decision-making and real action.
          </p>

          {/* Value proposition cards */}
          <div 
            className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">24/7 Operations</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Guest and incident management around the clock, when your team is offline.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Control Center + Field Service</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Remote coordination backed by on-site intervention when needed.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 lg:p-6 text-left hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-white font-semibold mb-2">Your Brand, Our Execution</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We operate in your name, following your protocols and standards.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" className="text-base px-8 py-6 shadow-soft-lg" asChild>
              <Link to="/how-it-works">
                How Roomonitor works
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 border-white/20 text-white hover:bg-white/10 hover:text-white" 
              asChild
            >
              <Link to="/contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                Talk to an expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
