import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
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
  Plus,
  Loader2
} from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { LocalizedLink } from "@/i18n/LocalizedLink";

const PLAN_PRICES = {
  basic: { devicePrice: 45, originalDevicePrice: 90, monthlyPrice: 13 },
  pro: { devicePrice: 45, originalDevicePrice: 90, monthlyPrice: 29.90 },
};

type PlanType = keyof typeof PLAN_PRICES;

export default function Checkout() {
  const { t, tObject } = useTranslation();
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") as PlanType | null;
  const propertiesParam = searchParams.get("properties");
  
  const initialPlan = planParam && PLAN_PRICES[planParam] ? planParam : "basic";
  const initialProperties = propertiesParam ? Math.min(Math.max(parseInt(propertiesParam) || 1, 1), 10) : 1;
  
  const [currentPlan, setCurrentPlan] = useState<PlanType>(initialPlan);
  const [properties, setProperties] = useState(initialProperties);
  
  const prices = PLAN_PRICES[currentPlan];
  const planData = tObject<{ name: string; description: string; features: string[] }>(`checkout.plans.${currentPlan}`);
  const deviceTotal = prices.devicePrice * properties;
  const originalDeviceTotal = prices.originalDevicePrice * properties;
  const monthlyTotal = prices.monthlyPrice * properties;
  const savings = originalDeviceTotal - deviceTotal;

  const incrementProperties = () => {
    if (properties < 10) setProperties(properties + 1);
  };

  const decrementProperties = () => {
    if (properties > 1) setProperties(properties - 1);
  };

  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    const plan = currentPlan === "basic" ? "noise_alarm" : "alarm_assistant";
    const requestBody = {
      plan,
      properties,
      isReactivation: false,
      successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/checkout?plan=${currentPlan}&properties=${properties}`,
    };
    
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: requestBody,
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      console.error("handleCheckout: error", err);
      toast.error(t('checkout.paymentError'));
    } finally {
      setCheckoutLoading(false);
    }
  };

  const propertyLabel = properties === 1 ? t('checkout.propertyLabel') : t('checkout.propertiesLabel');
  const deviceLabel = properties === 1 ? t('checkout.deviceLabel') : t('checkout.devicesLabel');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <LocalizedLink 
              to="/pricing" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('checkout.backToPricing')}
            </LocalizedLink>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {t('checkout.completeOrder')}
                  </h1>
                  <p className="text-muted-foreground">
                    {t('checkout.orderDescription', { plan: planData.name, count: String(properties), label: propertyLabel })}
                  </p>
                </div>

                {/* Plan Switcher */}
                <div className="bg-card border rounded-2xl p-6 shadow-soft">
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-3">{t('checkout.selectPlan')}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {(Object.keys(PLAN_PRICES) as PlanType[]).map((planKey) => {
                        const pd = tObject<{ name: string; description: string }>(`checkout.plans.${planKey}`);
                        const pp = PLAN_PRICES[planKey];
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
                                {t('checkout.mostPopular')}
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
                              <span className="font-semibold text-foreground">{pd.name}</span>
                            </div>
                            <p className="text-lg font-bold text-foreground">
                              €{pp.monthlyPrice.toFixed(2).replace('.00', '')}
                              <span className="text-sm font-normal text-muted-foreground">{t('checkout.month')}</span>
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">{pd.description}</p>
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
                        <p className="font-medium text-foreground">{t('checkout.properties')}</p>
                        <p className="text-sm text-muted-foreground">{t('checkout.devicesIncluded', { count: String(properties), label: deviceLabel })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={decrementProperties}
                        disabled={properties <= 1}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Minus className="w-4 h-4 text-foreground" />
                      </button>
                      <span className="w-8 text-center font-semibold text-lg text-foreground">{properties}</span>
                      <button
                        onClick={incrementProperties}
                        disabled={properties >= 10}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <Plus className="w-4 h-4 text-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">{t('checkout.whatsIncluded')}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {planData.features.map((feature) => (
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
                  <h3 className="font-semibold text-foreground mb-4">{t('checkout.priceBreakdown')}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">{t('checkout.monitoringDevices', { count: String(properties) })}</p>
                        <p className="text-sm text-muted-foreground">{t('checkout.oneTimePurchase')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground line-through text-sm">€{originalDeviceTotal}</p>
                        <p className="font-semibold text-foreground">€{deviceTotal}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">{t('checkout.subscription', { plan: planData.name, count: String(properties) })}</p>
                        <p className="text-sm text-muted-foreground">{t('checkout.monthlyBilling')}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">€{monthlyTotal.toFixed(2).replace('.00', '')}{t('checkout.month')}</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-foreground">{t('checkout.totalToday')}</p>
                        <p className="text-2xl font-bold text-foreground">
                          €{(deviceTotal + monthlyTotal).toFixed(2).replace('.00', '')}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground text-right">
                        {t('checkout.after', { amount: monthlyTotal.toFixed(2).replace('.00', '') })}
                      </p>
                    </div>

                    {savings > 0 && (
                      <div className="bg-green-500/10 text-green-600 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium">
                          {t('checkout.savings', { amount: String(savings) })}
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
                      disabled={checkoutLoading}
                    >
                      {checkoutLoading ? (
                        <><Loader2 className="w-4 h-4 mr-2 animate-spin" />{t('checkout.processing')}</>
                      ) : (
                        <><Lock className="w-4 h-4 mr-2" />{t('checkout.completePurchase')}</>
                      )}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                      <Shield className="w-4 h-4" />
                      <span>{t('checkout.securePayment')}</span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{t('checkout.freeShipping')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{t('checkout.cancelAnytime')}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{t('checkout.guarantee')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-5 text-center">
                    <p className="text-sm text-foreground font-medium mb-2">{t('checkout.needHelp')}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('checkout.teamHelp')}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <LocalizedLink to="/contact">{t('checkout.contactSales')}</LocalizedLink>
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">{t('checkout.sslSecure')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs">{t('checkout.gdprCompliant')}</span>
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
