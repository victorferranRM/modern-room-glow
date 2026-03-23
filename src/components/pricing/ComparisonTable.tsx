import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Gauge, Bell, Smartphone, Headphones, Volume2, Users, Thermometer, Wind, Flame, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const categoryIcons = [Gauge, Bell, Smartphone, Headphones];
const featureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  1: Volume2, 2: Users, 3: Thermometer, 4: Wind, 5: Flame,
};

// Static boolean matrix for plan availability
const PLAN_MATRIX: boolean[][][] = [
  // Monitoring: all true
  [[true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true]],
  // Alerts: all true
  [[true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true]],
  // Platform: all true
  [[true, true, true], [true, true, true], [true, true, true], [true, true, true], [true, true, true]],
  // Operations
  [[false, true, true], [false, true, true], [false, false, true], [false, false, true], [false, false, true], [false, false, true], [false, false, true], [false, false, true], [false, false, true], [false, true, true]],
];

interface ComparisonTableProps {
  properties: number;
}

const FeatureValue = ({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "string") {
    return <span className={`text-sm ${highlight ? "font-semibold text-primary" : "text-muted-foreground"}`}>{value}</span>;
  }
  return value ? (
    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center"><Check className="w-4 h-4 text-green-500" /></div>
  ) : (
    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"><X className="w-3.5 h-3.5 text-muted-foreground/40" /></div>
  );
};

export function ComparisonTable({ properties }: ComparisonTableProps) {
  const { t, tObject } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  const plans = tObject<Record<string, { name: string }>>('pricing.plans');
  const categories = tObject<{ name: string; features: string[] }[]>('pricing.comparison.categories');

  const PLANS = [
    { key: "basic", name: plans?.basic?.name || "Noise Alarm", price: "€13/mes", popular: false },
    { key: "pro", name: plans?.pro?.name || "Alarm Assistant", price: "€29,90/mes", popular: true },
    { key: "enterprise", name: plans?.enterprise?.name || "Guest & Property Services", price: t('pricing.from') + " €79,90", popular: false },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('pricing.comparison.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('pricing.comparison.description')}</p>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          <div className="bg-card border rounded-2xl p-4 shadow-soft">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">{t('pricing.comparison.selectPlan')}</p>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2">
              {PLANS.map((plan) => (
                <button key={plan.key} onClick={() => setSelectedPlan(plan.key)}
                  className={`relative p-3 rounded-xl border-2 transition-all ${selectedPlan === plan.key ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground/30"}`}>
                  {plan.popular && <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap">Popular</span>}
                  <p className="font-semibold text-foreground text-sm">{plan.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{plan.price}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-card border rounded-2xl shadow-soft overflow-hidden">
            <Accordion type="multiple" defaultValue={[categories?.[0]?.name || ""]} className="w-full">
              {categories?.map((category, ci) => {
                const CatIcon = categoryIcons[ci];
                return (
                  <AccordionItem key={category.name} value={category.name} className="border-b last:border-b-0">
                    <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><CatIcon className="w-4 h-4 text-primary" /></div>
                        <span className="font-semibold text-foreground text-sm">{category.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-3">
                        {category.features.map((feature, fi) => {
                          const planIdx = selectedPlan === "basic" ? 0 : selectedPlan === "pro" ? 1 : 2;
                          const val = PLAN_MATRIX[ci]?.[fi]?.[planIdx] ?? false;
                          return (
                            <div key={fi} className="flex items-center justify-between py-2.5 px-3 bg-muted/30 rounded-lg">
                              <span className="text-sm text-foreground truncate flex-1 min-w-0">{feature}</span>
                              <FeatureValue value={val} highlight={selectedPlan === "pro"} />
                            </div>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="p-4 bg-muted/30 border-t">
              {selectedPlan === "enterprise" ? (
                <Button className="w-full" size="lg" variant="outline" asChild>
                  <LocalizedLink to="/contact?inquiry=enterprise">{t('pricing.contactSales')}<ChevronRight className="w-4 h-4 ml-1" /></LocalizedLink>
                </Button>
              ) : (
                <Button className="w-full" size="lg" asChild>
                  <LocalizedLink to={`/checkout?plan=${selectedPlan}&properties=${properties}`}>{t('pricing.comparison.choosePlan')}<ChevronRight className="w-4 h-4 ml-1" /></LocalizedLink>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block bg-card border rounded-2xl shadow-soft overflow-hidden">
          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/50 border-b sticky top-0 z-10">
            <div className="p-6"><span className="text-sm font-medium text-muted-foreground">{t('pricing.comparison.features')}</span></div>
            {PLANS.map((plan) => (
              <div key={plan.key} className={`p-6 text-center border-l border-border ${plan.popular ? "bg-primary/5" : ""}`}>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-bold text-foreground">{plan.name}</span>
                  {plan.popular && <span className="bg-primary text-primary-foreground text-[10px] font-medium px-2 py-0.5 rounded-full">Popular</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.price}</p>
              </div>
            ))}
          </div>
          {categories?.map((category, ci) => {
            const CatIcon = categoryIcons[ci];
            return (
              <div key={category.name} className="border-b border-border last:border-b-0">
                <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-gradient-to-r from-muted/50 to-muted/20">
                  <div className="col-span-4 p-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"><CatIcon className="w-4 h-4 text-primary" /></div>
                      <span className="font-semibold text-foreground">{category.name}</span>
                    </div>
                  </div>
                </div>
                {category.features.map((feature, fi) => (
                  <div key={fi} className="grid grid-cols-[1.5fr,1fr,1fr,1fr] border-t border-border/30 hover:bg-muted/10 transition-colors">
                    <div className="p-4 px-6 flex items-center gap-3"><span className="text-sm text-foreground">{feature}</span></div>
                    {[0, 1, 2].map(pi => (
                      <div key={pi} className={`p-4 flex items-center justify-center border-l border-border/30 ${pi === 1 ? "bg-primary/5" : ""}`}>
                        <FeatureValue value={PLAN_MATRIX[ci]?.[fi]?.[pi] ?? false} highlight={pi === 1} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
          <div className="grid grid-cols-[1.5fr,1fr,1fr,1fr] bg-muted/30 border-t border-border/30">
            <div className="p-6 flex items-center"><span className="text-sm text-muted-foreground">{t('pricing.comparison.readyToStart')}</span></div>
            <div className="p-6 flex items-center justify-center border-l border-border/30">
              <Button variant="outline" asChild><LocalizedLink to={`/checkout?plan=basic&properties=${properties}`}>{t('pricing.comparison.choosePlan')}</LocalizedLink></Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border/30 bg-primary/5">
              <Button asChild><LocalizedLink to={`/checkout?plan=pro&properties=${properties}`}>{t('pricing.comparison.choosePlan')}<ChevronRight className="w-4 h-4 ml-1" /></LocalizedLink></Button>
            </div>
            <div className="p-6 flex items-center justify-center border-l border-border/30">
              <Button variant="outline" asChild><LocalizedLink to="/contact?inquiry=enterprise">{t('pricing.contactSales')}</LocalizedLink></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
