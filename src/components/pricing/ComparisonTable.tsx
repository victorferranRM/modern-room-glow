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
    name: "Monitoring & Hardware",
    icon: Gauge,
    features: [
      { feature: "Roomonitor monitoring device", basic: true, pro: true, enterprise: true },
      { feature: "Noise level monitoring", basic: true, pro: true, enterprise: true, icon: Volume2 },
      { feature: "Occupancy detection", basic: true, pro: true, enterprise: true, icon: Users },
      { feature: "Temperature & humidity", basic: true, pro: true, enterprise: true, icon: Thermometer },
      { feature: "Air quality (CO₂, VOC)", basic: true, pro: true, enterprise: true, icon: Wind },
      { feature: "Smoke detection", basic: true, pro: true, enterprise: true, icon: Flame },
    ],
  },
  {
    name: "Alerts & Notifications",
    icon: Bell,
    features: [
      { feature: "Real-time alerts", basic: true, pro: true, enterprise: true },
      { feature: "Email notifications", basic: true, pro: true, enterprise: true },
      { feature: "Push notifications (mobile)", basic: true, pro: true, enterprise: true },
      { feature: "SMS alerts", basic: false, pro: true, enterprise: true },
      { feature: "Custom alert thresholds", basic: false, pro: true, enterprise: true },
    ],
  },
  {
    name: "Platform & Access",
    icon: Smartphone,
    features: [
      { feature: "Web dashboard", basic: true, pro: true, enterprise: true },
      { feature: "Mobile app (iOS & Android)", basic: true, pro: true, enterprise: true },
      { feature: "Historical data & reports", basic: "30 days", pro: "1 year", enterprise: "Unlimited" },
      { feature: "API access", basic: false, pro: false, enterprise: true },
      { feature: "Multi-user accounts", basic: false, pro: true, enterprise: true },
    ],
  },
  {
    name: "Support & Services",
    icon: Headphones,
    features: [
      { feature: "Email support", basic: true, pro: true, enterprise: true },
      { feature: "Priority support", basic: false, pro: true, enterprise: true },
      { feature: "Alarm Assistant (24/7)", basic: false, pro: true, enterprise: true },
      { feature: "Human alarm monitoring", basic: false, pro: true, enterprise: true },
      { feature: "Guest Assist™", basic: false, pro: false, enterprise: true },
      { feature: "Field Service (on-site)", basic: false, pro: false, enterprise: true },
      { feature: "Dedicated account manager", basic: false, pro: false, enterprise: true },
      { feature: "Custom SLA", basic: false, pro: false, enterprise: true },
    ],
  },
];

const PLANS = [
  { key: "basic", name: "Basic", price: "€13/mo", popular: false },
  { key: "pro", name: "Pro", price: "€29.90/mo", popular: true },
  { key: "enterprise", name: "Enterprise", price: "From €79.90", popular: false },
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
            Compare plans in detail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See exactly what's included in each plan to make the right choice for your property management needs.
          </p>
        </div>

        {/* Mobile View - Plan Selector + Accordion */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Plan Selector */}
          <div className="bg-card border rounded-2xl p-4 shadow-soft">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Select plan to compare</p>
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

          {/* Mobile Feature Accordion */}
          <div className="bg-card border rounded-2xl shadow-soft overflow-hidden">
            <Accordion type="multiple" defaultValue={["Monitoring & Hardware"]} className="w-full">
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

            {/* Mobile CTA */}
            <div className="p-4 bg-muted/30 border-t">
              {selectedPlan === "enterprise" ? (
                <Button className="w-full" size="lg" variant="outline" asChild>
                  <Link to="/contact?inquiry=enterprise">
                    Talk to sales
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" size="lg" asChild>
                  <Link to={`/checkout?plan=${selectedPlan}&properties=${properties}`}>
                    Get {PLANS.find((p) => p.key === selectedPlan)?.name}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop View - Full Table */}
        <div className="hidden lg:block bg-card border rounded-2xl shadow-soft overflow-hidden">
          {/* Sticky Header */}
          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/50 border-b sticky top-0 z-10">
            <div className="p-6">
              <span className="text-sm font-medium text-muted-foreground">Features</span>
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

          {/* Feature Categories */}
          {COMPARISON_DATA.map((category) => (
            <div key={category.name} className="border-b border-border last:border-b-0">
              {/* Category Header */}
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

              {/* Feature Rows */}
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

          {/* CTA Row */}
          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/30 border-t">
            <div className="p-6 flex items-center">
              <span className="text-sm text-muted-foreground">Ready to start?</span>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border">
              <Button variant="outline" asChild>
                <Link to={`/checkout?plan=basic&properties=${properties}`}>
                  Get Basic
                </Link>
              </Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border bg-primary/5">
              <Button asChild>
                <Link to={`/checkout?plan=pro&properties=${properties}`}>
                  Get Pro
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border">
              <Button variant="outline" asChild>
                <Link to="/contact?inquiry=enterprise">Contact sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
