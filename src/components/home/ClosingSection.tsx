import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ClosingSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Image with lazy loading */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal tracking-tight text-white leading-tight text-balance">
            Everything you need to protect and scale your rental business
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="text-base px-8 py-6 bg-white text-black font-semibold hover:bg-gray-100 shadow-lg" 
              asChild
            >
              <Link to="/pricing">
                Get started
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 border-2 border-white bg-transparent text-white font-semibold hover:bg-white hover:text-black transition-colors" 
              asChild
            >
              <Link to="/contact">
                Book a demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
