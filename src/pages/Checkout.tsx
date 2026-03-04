import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Check, 
  Shield, 
  Lock,
  Building2,
  Minus,
  Plus
} from "lucide-react";

const PLANS = {
  basic: {
    name: "Noise Alarm",
    description: "Dispositivo + suscripción de monitorización",
    devicePrice: 45,
    originalDevicePrice: 90,
    monthlyPrice: 13,
    features: [
      "Dispositivo de monitorización Roomonitor",
      "Alertas en tiempo real",
      "Dashboard y app móvil",
      "Notificaciones email y push",
    ],
  },
  pro: {
    name: "Alarm Assistant",
    description: "Todo lo de Noise Alarm + monitorización 24/7",
    devicePrice: 45,
    originalDevicePrice: 90,
    monthlyPrice: 29.90,
    features: [
      "Todo lo de Basic",
      "Alarm Assistant",
      "Agentes humanos monitorizando alarmas",
      "Gestión de alarmas 24/7",
    ],
  },
};

type PlanType = keyof typeof PLANS;

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") as PlanType | null;
  const propertiesParam = searchParams.get("properties");
  
  const initialPlan = planParam && PLANS[planParam] ? planParam : "basic";
  const initialProperties = propertiesParam ? Math.min(Math.max(parseInt(propertiesParam) || 1, 1), 10) : 1;
  
  const [currentPlan, setCurrentPlan] = useState<PlanType>(initialPlan);
  const [properties, setProperties] = useState(initialProperties);
  
  const selectedPlan = PLANS[currentPlan];
  const deviceTotal = selectedPlan.devicePrice * properties;
  const originalDeviceTotal = selectedPlan.originalDevicePrice * properties;
  const monthlyTotal = selectedPlan.monthlyPrice * properties;
  const savings = originalDeviceTotal - deviceTotal;

  const incrementProperties = () => {
    if (properties < 10) setProperties(properties + 1);
  };

  const decrementProperties = () => {
    if (properties > 1) setProperties(properties - 1);
  };

  const handleCheckout = () => {
    console.log("Checkout:", { plan: currentPlan, properties, deviceTotal, monthlyTotal });
    alert("Integración de pago próximamente. Se conectará con Stripe o Shopify.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/pricing" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a precios
            </Link>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Completa tu pedido
                  </h1>
                  <p className="text-muted-foreground">
                    Estás comprando el plan {selectedPlan.name} para {properties} {properties === 1 ? "propiedad" : "propiedades"}
                  </p>
                </div>

                {/* Plan Switcher */}
                <div className="bg-card border rounded-2xl p-6 shadow-soft">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">Selecciona tu plan</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(Object.keys(PLANS) as PlanType[]).map((planKey) => {
                        const planData = PLANS[planKey];
                        const isSelected = currentPlan === planKey;
                        return (
                          <button
                            key={planKey}
                            onClick={() => setCurrentPlan(planKey)}
                            className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                              isSelected 
                                ? "border-primary bg-primary/5" 
                                : "border-border hover:border-muted-foreground/50"
                            }`}
                          >
                            {planKey === "pro" && (
                              <span className="absolute -top-2.5 left-3 bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
                                Más popular
                              </span>
                            )}
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                isSelected ? "border-primary" : "border-muted-foreground/40"
                              }`}>
                                {isSelected && (
                                  <div className="w-2 h-2 rounded-full bg-primary" />
                                )}
                              </div>
                              <span className="font-semibold text-foreground">{planData.name}</span>
                            </div>
                            <p className="text-lg font-bold text-foreground">
                              €{planData.monthlyPrice.toFixed(2).replace('.00', '')}
                              <span className="text-sm font-normal text-muted-foreground">/mes</span>
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{planData.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Properties Selector */}
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl mb-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Propiedades</p>
                        <p className="text-sm text-muted-foreground">{properties} {properties === 1 ? "dispositivo" : "dispositivos"} de monitorización incluidos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={decrementProperties}
                        disabled={properties <= 1}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Reducir propiedades"
                      >
                        <Minus className="w-4 h-4 text-foreground" />
                      </button>
                      <span className="w-8 text-center font-semibold text-lg text-foreground">{properties}</span>
                      <button
                        onClick={incrementProperties}
                        disabled={properties >= 10}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Aumentar propiedades"
                      >
                        <Plus className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">Qué incluye:</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {selectedPlan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-card border rounded-2xl p-6 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-4">Desglose de precios</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Dispositivos de monitorización ({properties}x)</p>
                        <p className="text-sm text-muted-foreground">Compra única</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground line-through text-sm">€{originalDeviceTotal}</p>
                        <p className="font-semibold text-foreground">€{deviceTotal}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Suscripción {selectedPlan.name} ({properties}x)</p>
                        <p className="text-sm text-muted-foreground">Facturación mensual</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">€{monthlyTotal.toFixed(2).replace('.00', '')}/mes</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-foreground">Total hoy</p>
                        <p className="text-2xl font-bold text-foreground">
                          €{(deviceTotal + monthlyTotal).toFixed(2).replace('.00', '')}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground text-right">
                        Después €{monthlyTotal.toFixed(2).replace('.00', '')}/mes
                      </p>
                    </div>

                    {savings > 0 && (
                      <div className="bg-green-500/10 text-green-600 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium">
                          ¡Ahorras €{savings} con el precio exclusivo web!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Checkout Sidebar */}
              <div className="lg:col-span-2">
                <div className="sticky top-32 space-y-6">
                  <div className="bg-card border rounded-2xl p-6 shadow-soft">
                    <Button 
                      size="lg" 
                      className="w-full mb-4 text-base"
                      onClick={handleCheckout}
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Completar compra
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                      <Shield className="w-4 h-4" />
                      <span>Pago seguro con Stripe</span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Envío gratis en todos los dispositivos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Cancela tu suscripción en cualquier momento</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Garantía de devolución de 30 días</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-5 text-center">
                    <p className="text-sm text-foreground font-medium mb-2">¿Necesitas ayuda?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Nuestro equipo está aquí para responder tus preguntas
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Contactar con ventas</Link>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">SSL Seguro</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs">Cumple RGPD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
