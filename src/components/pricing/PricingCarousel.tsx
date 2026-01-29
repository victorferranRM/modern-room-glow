import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MessageSquare, 
  Bell,
  Smartphone,
  Mail,
  Zap,
  PhoneCall,
  Headphones,
  Clock,
  Check,
  Home,
  Users,
  Shield
} from "lucide-react";

interface PricingCarouselProps {
  properties: number;
  isEnterprise: boolean;
  basicDeviceTotal: number;
  basicMonthlyTotal: number;
  proMonthlyTotal: number;
}

export function PricingCarousel({ 
  properties, 
  isEnterprise, 
  basicDeviceTotal, 
  basicMonthlyTotal, 
  proMonthlyTotal 
}: PricingCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "center",
    containScroll: "trimSnaps",
    loop: false
  });
  const [selectedIndex, setSelectedIndex] = useState(1); // Start on Pro (middle)

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    // Start on Pro plan (index 1)
    emblaApi.scrollTo(1, false);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const plans = [
    {
      key: "basic",
      name: "Basic",
      subtitle: "Device + monitoring subscription",
      features: [
        { icon: Bell, text: "Roomonitor monitoring device" },
        { icon: Zap, text: "Real-time alerts" },
        { icon: Smartphone, text: "Dashboard & mobile app" },
        { icon: Mail, text: "Email & push notifications" },
      ],
      popular: false,
    },
    {
      key: "pro",
      name: "Pro",
      subtitle: "Everything in Basic + Alarm Assistant",
      features: [
        { icon: Check, text: "Everything in Basic" },
        { icon: PhoneCall, text: "Alarm Assistant" },
        { icon: Headphones, text: "Human agents monitoring alarms" },
        { icon: Clock, text: "24/7 alarm handling" },
      ],
      popular: true,
    },
    {
      key: "enterprise",
      name: "Enterprise",
      subtitle: "Full operational management",
      features: [
        { icon: Check, text: "Everything in Pro" },
        { icon: Home, text: "Guest & Property Services" },
        { icon: Users, text: "Full operational management" },
        { icon: Shield, text: "Custom SLA agreements" },
        { icon: Zap, text: "Dedicated account manager" },
      ],
      popular: false,
    },
  ];

  const renderPrice = (planKey: string) => {
    if (planKey === "basic") {
      if (isEnterprise) {
        return <div className="text-2xl font-bold text-foreground">Contact sales</div>;
      }
      return (
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted-foreground line-through">€90</span>
              <span className="text-3xl font-bold text-foreground">€45</span>
              <span className="text-sm text-muted-foreground">one-time</span>
            </div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">
              Web-exclusive price
            </div>
          </div>
          <div className="pt-2 border-t border-border">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">€13</span>
              <span className="text-muted-foreground text-sm">/ month per property</span>
            </div>
          </div>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {properties} properties: €{basicDeviceTotal} one-time + €{basicMonthlyTotal}/month
            </p>
          )}
        </div>
      );
    }
    
    if (planKey === "pro") {
      if (isEnterprise) {
        return <div className="text-2xl font-bold text-foreground">Contact sales</div>;
      }
      return (
        <div className="space-y-3">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">€29.90</span>
            <span className="text-muted-foreground text-sm">/ month per property</span>
          </div>
          <p className="text-sm text-muted-foreground">
            + €45 one-time per device (web-exclusive)
          </p>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {properties} properties: €{basicDeviceTotal} one-time + €{proMonthlyTotal.toFixed(2).replace('.00', '')}/month
            </p>
          )}
        </div>
      );
    }
    
    // Enterprise
    return (
      <div className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">From</span>
          <span className="text-3xl font-bold text-foreground">€79.90</span>
          <span className="text-muted-foreground text-sm">/ property</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Variable pricing by portfolio size
        </p>
      </div>
    );
  };

  const renderCTA = (planKey: string) => {
    if (planKey === "enterprise" || isEnterprise) {
      return (
        <Button className="w-full" size="lg" variant="outline" asChild>
          <Link to="/contact?inquiry=enterprise">
            <MessageSquare className="w-4 h-4 mr-2" />
            Talk to a specialist
          </Link>
        </Button>
      );
    }
    return (
      <Button className={`w-full ${planKey === "pro" ? "shadow-soft" : ""}`} size="lg" asChild>
        <Link to={`/checkout?plan=${planKey}&properties=${properties}`}>
          Buy now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    );
  };

  return (
    <div className="lg:hidden">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {plans.map((plan, index) => (
            <div 
              key={plan.key} 
              className="flex-[0_0_85%] min-w-0 pl-4 first:pl-4"
            >
              <div 
                className={`
                  relative bg-card border rounded-2xl p-6 shadow-soft h-full transition-all duration-300
                  ${plan.popular ? "border-2 border-primary" : ""}
                  ${plan.key === "enterprise" ? "bg-gradient-to-br from-secondary to-muted" : ""}
                  ${selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"}
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className={plan.popular ? "pt-2" : ""}>
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                  </div>

                  {renderPrice(plan.key)}

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-3">
                        <feature.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {renderCTA(plan.key)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {plans.map((plan, index) => (
          <button
            key={plan.key}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-300
              ${selectedIndex === index 
                ? "bg-primary w-6" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }
            `}
            aria-label={`Go to ${plan.name} plan`}
          />
        ))}
      </div>

      {/* Swipe hint */}
      <p className="text-center text-xs text-muted-foreground mt-3">
        Swipe to compare plans
      </p>
    </div>
  );
}
