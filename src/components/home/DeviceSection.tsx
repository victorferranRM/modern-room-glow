import { Activity } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function DeviceSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <AnimatedSection animation="fade-left">
              <div className="space-y-6">
                <p className="text-sm font-medium text-primary uppercase tracking-wider">
                  Additional capability
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  An additional layer of control when you need it
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Roomonitor devices allow early detection of incidents before guests even report them, reinforcing operations and reducing impact.
                </p>
              </div>
            </AnimatedSection>

            {/* Visual */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="aspect-square max-w-sm mx-auto">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl scale-90" />
                  
                  {/* Card */}
                  <div className="relative bg-card rounded-2xl border shadow-soft p-8 h-full flex flex-col items-center justify-center space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Status</div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        Monitoring active
                      </div>
                    </div>
                    <div className="w-full pt-4 border-t">
                      <div className="text-xs text-muted-foreground text-center">
                        Early incident detection • Noise monitoring • Environmental data
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
