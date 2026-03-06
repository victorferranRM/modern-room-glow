import { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const PRICE_IDS = {
  device: "price_1T7v3uHW6UdvG7qBZUphbeXB",
  noise_alarm: "price_1T7w4iHW6UdvG7qBAs5Fx7bf",
  alarm_assistant: "price_1T7wfMHW6UdvG7qBnSvlyY17",
  shipping_rate: "shr_1T7vldHW6UdvG7qBZCdzYXN3",
};

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
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);

  const handleCheckout = async (plan: "noise_alarm" | "alarm_assistant") => {
    setCheckoutLoading(plan);
    try {
      const subscriptionPriceId = plan === "noise_alarm" ? PRICE_IDS.noise_alarm : PRICE_IDS.alarm_assistant;
      const lineItems = [
        { price: PRICE_IDS.device, quantity: properties },
        { price: subscriptionPriceId, quantity: properties },
      ];

      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          lineItems,
          plan,
          properties,
          isReactivation: false,
          includeShipping: true,
          shippingRateId: PRICE_IDS.shipping_rate,
          devicePriceId: PRICE_IDS.device,
          successUrl: `${window.location.origin}/checkout?success=true`,
          cancelUrl: `${window.location.origin}/pricing`,
        },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      console.error("Checkout error:", err);
      toast.error("Error al iniciar el pago. Inténtalo de nuevo.");
    } finally {
      setCheckoutLoading(null);
    }
  };

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
        { icon: BarChart3, text: "Centro de Control 24/7 con agentes dedicados" },
        { icon: PhoneCall, text: "Atención telefónica a huéspedes en tu nombre" },
        { icon: Moon, text: "Night Watch: prevención activa de fiestas" },
        { icon: MapPin, text: "Field Service: intervención presencial en 8 ciudades" },
        { icon: FileText, text: "Protocolos operativos personalizados por propiedad" },
        { icon: AlertCircle, text: "Gestión de incidencias de extremo a extremo" },
        { icon: KeyRound, text: "Apoyo en accesos y check-ins" },
        { icon: Users, text: "Servicio de conserjería" },
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
    const checkoutPlan = planKey === "basic" ? "noise_alarm" : "alarm_assistant";
    const isLoading = checkoutLoading === checkoutPlan;
    return (
      <Button 
        className={`w-full ${planKey === "pro" ? "shadow-soft" : ""}`} 
        size="lg" 
        onClick={() => handleCheckout(checkoutPlan as "noise_alarm" | "alarm_assistant")}
        disabled={isLoading}
      >
        {isLoading ? "Procesando..." : "Comprar ahora"}
        {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
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
