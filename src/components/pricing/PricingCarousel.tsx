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
  Shield,
  BarChart3,
  Moon,
  MapPin,
  FileText,
  AlertCircle,
  KeyRound
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
  const [selectedIndex, setSelectedIndex] = useState(1);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.scrollTo(1, false);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const plans = [
    {
      key: "basic",
      name: "Noise Alarm",
      subtitle: "Dispositivo + suscripción de monitorización",
      features: [
        { icon: Bell, text: "Dispositivo de monitorización Roomonitor" },
        { icon: Zap, text: "Alertas en tiempo real" },
        { icon: Smartphone, text: "Dashboard y app móvil" },
        { icon: Mail, text: "Notificaciones email y push" },
      ],
      popular: false,
    },
    {
      key: "pro",
      name: "Alarm Assistant",
      subtitle: "Todo lo de Noise Alarm + monitorización 24/7",
      features: [
        { icon: Check, text: "Todo lo de Noise Alarm" },
        { icon: PhoneCall, text: "Alarm Assistant" },
        { icon: Headphones, text: "Agentes humanos monitorizando alarmas" },
        { icon: Clock, text: "Gestión de alarmas 24/7" },
      ],
      popular: true,
    },
    {
      key: "enterprise",
      name: "Guest & Property Services",
      subtitle: "Gestión operativa completa",
      features: [
        { icon: Check, text: "Todo lo de Alarm Assistant" },
        { icon: Home, text: "Servicios de huésped y propiedad" },
        { icon: Users, text: "Gestión operativa completa" },
        { icon: Shield, text: "Acuerdos SLA personalizados" },
        { icon: Zap, text: "Account manager dedicado" },
      ],
      popular: false,
    },
  ];

  const renderPrice = (planKey: string) => {
    if (planKey === "basic") {
      if (isEnterprise) {
        return <div className="text-2xl font-bold text-foreground">Contactar ventas</div>;
      }
      return (
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted-foreground line-through">€90</span>
              <span className="text-3xl font-bold text-foreground">€45</span>
              <span className="text-sm text-muted-foreground">pago único</span>
            </div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded">
              Precio exclusivo web
            </div>
          </div>
          <div className="pt-2 border-t border-border">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">€13</span>
              <span className="text-muted-foreground text-sm">/ mes por propiedad</span>
            </div>
          </div>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {properties} propiedades: €{basicDeviceTotal} pago único + €{basicMonthlyTotal}/mes
            </p>
          )}
        </div>
      );
    }
    
    if (planKey === "pro") {
      if (isEnterprise) {
        return <div className="text-2xl font-bold text-foreground">Contactar ventas</div>;
      }
      return (
        <div className="space-y-3">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">€29,90</span>
            <span className="text-muted-foreground text-sm">/ mes por propiedad</span>
          </div>
          <p className="text-sm text-muted-foreground">
            + €45 pago único por dispositivo (exclusivo web)
          </p>
          {properties > 1 && (
            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              {properties} propiedades: €{basicDeviceTotal} pago único + €{proMonthlyTotal.toFixed(2).replace('.00', '')}/mes
            </p>
          )}
        </div>
      );
    }
    
    return (
      <div className="space-y-2">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">Desde</span>
          <span className="text-3xl font-bold text-foreground">€79,90</span>
          <span className="text-muted-foreground text-sm">/ propiedad</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Precio variable según tamaño del portfolio
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
            Hablar con un especialista
          </Link>
        </Button>
      );
    }
    return (
      <Button className={`w-full ${planKey === "pro" ? "shadow-soft" : ""}`} size="lg" asChild>
        <Link to={`/checkout?plan=${planKey}&properties=${properties}`}>
          Comprar ahora
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
    );
  };

  return (
    <div className="lg:hidden">
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
                      Más popular
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
            aria-label={`Ir al plan ${plan.name}`}
          />
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3">
        Desliza para comparar planes
      </p>
    </div>
  );
}
