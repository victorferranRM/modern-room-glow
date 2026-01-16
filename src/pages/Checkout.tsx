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
  Bell,
  Smartphone,
  Mail,
  PhoneCall,
  Headphones,
  Clock
} from "lucide-react";

// Plan configuration
const PLANS = {
  basic: {
    name: "Basic",
    description: "Device + monitoring subscription",
    devicePrice: 45,
    originalDevicePrice: 90,
    monthlyPrice: 13,
    features: [
      "Roomonitor monitoring device",
      "Real-time alerts",
      "Dashboard & mobile app",
      "Email & push notifications",
    ],
  },
  pro: {
    name: "Pro",
    description: "Everything in Basic + Alarm Assistant",
    devicePrice: 45,
    originalDevicePrice: 90,
    monthlyPrice: 29.90,
    features: [
      "Everything in Basic",
      "Alarm Assistant",
      "Human agents monitoring alarms",
      "24/7 alarm handling",
    ],
  },
};

type PlanType = keyof typeof PLANS;

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") as PlanType | null;
  const propertiesParam = searchParams.get("properties");
  
  const plan = planParam && PLANS[planParam] ? planParam : "basic";
  const properties = propertiesParam ? Math.min(Math.max(parseInt(propertiesParam) || 1, 1), 10) : 1;
  
  const selectedPlan = PLANS[plan];
  const deviceTotal = selectedPlan.devicePrice * properties;
  const originalDeviceTotal = selectedPlan.originalDevicePrice * properties;
  const monthlyTotal = selectedPlan.monthlyPrice * properties;
  const savings = originalDeviceTotal - deviceTotal;

  const handleCheckout = () => {
    // TODO: Integrate with Stripe or Shopify
    // This will redirect to the payment provider with the selected plan and properties
    console.log("Checkout:", { plan, properties, deviceTotal, monthlyTotal });
    alert("Payment integration coming soon! This will connect to Stripe or Shopify.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Link 
              to="/pricing" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to pricing
            </Link>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Order Summary */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Complete your order
                  </h1>
                  <p className="text-muted-foreground">
                    You're purchasing the {selectedPlan.name} plan for {properties} {properties === 1 ? "property" : "properties"}
                  </p>
                </div>

                {/* Plan Card */}
                <div className="bg-card border rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedPlan.name} Plan</h2>
                      <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                    </div>
                    {plan === "pro" && (
                      <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        Most popular
                      </span>
                    )}
                  </div>

                  {/* Properties */}
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl mb-6">
                    <Building2 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{properties} {properties === 1 ? "Property" : "Properties"}</p>
                      <p className="text-sm text-muted-foreground">{properties} monitoring {properties === 1 ? "device" : "devices"} included</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">What's included:</p>
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
                  <h3 className="font-semibold text-foreground mb-4">Pricing breakdown</h3>
                  
                  <div className="space-y-4">
                    {/* Device cost */}
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">Monitoring devices ({properties}x)</p>
                        <p className="text-sm text-muted-foreground">One-time purchase</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground line-through text-sm">€{originalDeviceTotal}</p>
                        <p className="font-semibold text-foreground">€{deviceTotal}</p>
                      </div>
                    </div>

                    {/* Monthly subscription */}
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <p className="font-medium text-foreground">{selectedPlan.name} subscription ({properties}x)</p>
                        <p className="text-sm text-muted-foreground">Billed monthly</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">€{monthlyTotal.toFixed(2).replace('.00', '')}/mo</p>
                      </div>
                    </div>

                    {/* Today's charge */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-semibold text-foreground">Due today</p>
                        <p className="text-2xl font-bold text-foreground">
                          €{(deviceTotal + monthlyTotal).toFixed(2).replace('.00', '')}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground text-right">
                        Then €{monthlyTotal.toFixed(2).replace('.00', '')}/month
                      </p>
                    </div>

                    {/* Savings badge */}
                    {savings > 0 && (
                      <div className="bg-green-500/10 text-green-600 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium">
                          You're saving €{savings} with web-exclusive pricing!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Checkout Sidebar */}
              <div className="lg:col-span-2">
                <div className="sticky top-32 space-y-6">
                  {/* Checkout CTA */}
                  <div className="bg-card border rounded-2xl p-6 shadow-soft">
                    <Button 
                      size="lg" 
                      className="w-full mb-4 text-base"
                      onClick={handleCheckout}
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Complete purchase
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                      <Shield className="w-4 h-4" />
                      <span>Secure checkout powered by Stripe</span>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Free shipping on all devices</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">Cancel subscription anytime</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
                      </div>
                    </div>
                  </div>

                  {/* Need help */}
                  <div className="bg-secondary/50 rounded-xl p-5 text-center">
                    <p className="text-sm text-foreground font-medium mb-2">Need help?</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our team is here to answer your questions
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact">Contact sales</Link>
                    </Button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span className="text-xs">SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs">GDPR Compliant</span>
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
