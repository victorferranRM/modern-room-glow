import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  X,
  Gauge,
  Bell,
  Smartphone,
  Headphones,
  Volume2,
  Users,
  Thermometer,
  Wind,
  Flame,
  ChevronRight,
} from "lucide-react";

interface FeatureRow {
  feature: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FeatureCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  features: FeatureRow[];
}

const COMPARISON_DATA: FeatureCategory[] = [
  {
    name: "Monitorización y hardware",
    icon: Gauge,
    features: [
      { feature: "Dispositivo de monitorización Roomonitor", basic: true, pro: true, enterprise: true },
      { feature: "Monitorización de nivel de ruido", basic: true, pro: true, enterprise: true, icon: Volume2 },
      { feature: "Detección de ocupación", basic: true, pro: true, enterprise: true, icon: Users },
      { feature: "Temperatura y humedad", basic: true, pro: true, enterprise: true, icon: Thermometer },
      { feature: "Calidad del aire (CO₂, VOC)", basic: true, pro: true, enterprise: true, icon: Wind },
      { feature: "Detección de humo", basic: true, pro: true, enterprise: true, icon: Flame },
    ],
  },
  {
    name: "Alertas y notificaciones",
    icon: Bell,
    features: [
      { feature: "Alertas en tiempo real", basic: true, pro: true, enterprise: true },
      { feature: "Notificaciones por email", basic: true, pro: true, enterprise: true },
      { feature: "Notificaciones push (móvil)", basic: true, pro: true, enterprise: true },
      { feature: "Alertas por SMS", basic: true, pro: true, enterprise: true },
      { feature: "Umbrales de alerta personalizados", basic: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Plataforma y acceso",
    icon: Smartphone,
    features: [
      { feature: "Dashboard web", basic: true, pro: true, enterprise: true },
      { feature: "App móvil (iOS y Android)", basic: true, pro: true, enterprise: true },
      { feature: "Datos históricos e informes", basic: true, pro: true, enterprise: true },
      { feature: "Acceso API", basic: true, pro: true, enterprise: true },
      { feature: "Cuentas multiusuario", basic: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Operativa y servicios",
    icon: Headphones,
    features: [
      { feature: "Gestionamos las alertas por ti", basic: false, pro: true, enterprise: true },
      { feature: "Alarm Assistant (monitorización 24/7)", basic: false, pro: true, enterprise: true },
      { feature: "Centro de Control 24/7", basic: false, pro: false, enterprise: true },
      { feature: "Atención telefónica a huéspedes", basic: false, pro: false, enterprise: true },
      { feature: "Mediación y resolución remota", basic: false, pro: false, enterprise: true },
      { feature: "Night Watch (prevención de fiestas)", basic: false, pro: false, enterprise: true },
      { feature: "Field Service (intervención presencial)", basic: false, pro: false, enterprise: true },
      { feature: "Protocolos operativos a medida", basic: false, pro: false, enterprise: true },
      { feature: "Acceso a PMS y herramientas del cliente", basic: false, pro: false, enterprise: true },
      { feature: "Informes de incidencia", basic: false, pro: true, enterprise: true },
    ],
  },
];

const PLANS = [
  { key: "basic", name: "Noise Alarm", price: "€13/mes", popular: false },
  { key: "pro", name: "Alarm Assistant", price: "€29,90/mes", popular: true },
  { key: "enterprise", name: "Guest & Property Services", price: "Desde €79,90", popular: false },
];

interface ComparisonTableProps {
  properties: number;
}

const FeatureValue = ({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "string") {
    return (
      <span className={`text-sm ${highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}>
        {value}
      </span>
    );
  }
  return value ? (
    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
      <Check className="w-4 h-4 text-green-500" />
    </div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
      <X className="w-3.5 h-3.5 text-muted-foreground/40" />
    </div>
  );
};

export function ComparisonTable({ properties }: ComparisonTableProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compara los planes en detalle
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consulta exactamente qué incluye cada plan para tomar la mejor decisión para la gestión de tus propiedades.
          </p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          <div className="bg-card border rounded-2xl p-4 shadow-soft">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Selecciona plan para comparar</p>
            <div className="grid grid-cols-3 gap-2">
              {PLANS.map((plan) => (
                <button
                  key={plan.key}
                  onClick={() => setSelectedPlan(plan.key)}
                  className={`relative p-3 rounded-xl border-2 transition-all ${
                    selectedPlan === plan.key
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      Popular
                    </span>
                  )}
                  <p className="font-semibold text-foreground text-sm">{plan.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{plan.price}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card border rounded-2xl shadow-soft overflow-hidden">
            <Accordion type="multiple" defaultValue={["Monitorización y hardware"]} className="w-full">
              {COMPARISON_DATA.map((category) => (
                <AccordionItem key={category.name} value={category.name} className="border-b last:border-b-0">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground text-sm">{category.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="space-y-3">
                      {category.features.map((row, idx) => {
                        const value = row[selectedPlan as keyof typeof row] as boolean | string;
                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-between py-2.5 px-3 bg-muted/30 rounded-lg"
                          >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              {row.icon && <row.icon className="w-4 h-4 text-muted-foreground shrink-0" />}
                              <span className="text-sm text-foreground truncate">{row.feature}</span>
                            </div>
                            <FeatureValue value={value} highlight={selectedPlan === "pro"} />
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="p-4 bg-muted/30 border-t">
              {selectedPlan === "enterprise" ? (
                <Button className="w-full" size="lg" variant="outline" asChild>
                  <Link to="/contact?inquiry=enterprise">
                    Contactar ventas
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" size="lg" asChild>
                  <Link to={`/checkout?plan=${selectedPlan}&properties=${properties}`}>
                    Elegir plan
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block bg-card border rounded-2xl shadow-soft overflow-hidden">
          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/50 border-b sticky top-0 z-10">
            <div className="p-6">
              <span className="text-sm font-medium text-muted-foreground">Características</span>
            </div>
            {PLANS.map((plan) => (
              <div
                key={plan.key}
                className={`p-6 text-center border-l border-border ${plan.popular ? "bg-primary/5" : ""}`}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-bold text-foreground">{plan.name}</span>
                  {plan.popular && (
                    <span className="bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.price}</p>
              </div>
            ))}
          </div>

          {COMPARISON_DATA.map((category) => (
            <div key={category.name} className="border-b border-border last:border-b-0">
              <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-gradient-to-r from-muted/50 to-muted/20">
                <div className="col-span-4 p-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{category.name}</span>
                  </div>
                </div>
              </div>

              {category.features.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-[1.5fr,1fr,1fr,1fr] border-t border-border/30 hover:bg-muted/10 transition-colors"
                >
                  <div className="p-4 px-6 flex items-center gap-3">
                    {row.icon && <row.icon className="w-4 h-4 text-muted-foreground shrink-0" />}
                    <span className="text-sm text-foreground">{row.feature}</span>
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-border/30">
                    <FeatureValue value={row.basic} />
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-border/30 bg-primary/5">
                    <FeatureValue value={row.pro} highlight />
                  </div>
                  <div className="p-4 flex items-center justify-center border-l border-border/30">
                    <FeatureValue value={row.enterprise} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/30 border-t">
            <div className="p-6 flex items-center">
              <span className="text-sm text-muted-foreground">¿Listo para empezar?</span>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border">
              <Button variant="outline" asChild>
                <Link to={`/checkout?plan=basic&properties=${properties}`}>
                  Elegir Noise Alarm
                </Link>
              </Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border bg-primary/5">
              <Button asChild>
                <Link to={`/checkout?plan=pro&properties=${properties}`}>
                  Elegir Pro
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border">
              <Button variant="outline" asChild>
                <Link to="/contact?inquiry=enterprise">Contactar ventas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
