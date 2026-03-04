import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Calendar,
  Download,
  ArrowUpRight,
  Check,
  Building2,
  MessageSquare,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data
const subscriptionData = {
  plan: "Pro",
  status: "active",
  billingFrequency: "Monthly",
  nextInvoiceDate: "February 15, 2026",
  lastPaymentDate: "January 15, 2026",
  monthlyAmount: "€239.20",
  paymentMethod: {
    type: "Visa",
    last4: "4242",
    expiry: "12/27",
  },
  properties: 8,
  maxProperties: 10,
};

const invoices = [
  { id: "INV-2026-001", date: "January 15, 2026", amount: "€239.20", status: "Paid" },
  { id: "INV-2025-012", date: "December 15, 2025", amount: "€239.20", status: "Paid" },
  { id: "INV-2025-011", date: "November 15, 2025", amount: "€239.20", status: "Paid" },
  { id: "INV-2025-010", date: "October 15, 2025", amount: "€239.20", status: "Paid" },
];

const plans = [
  {
    name: "Noise Alarm",
    price: "€14.90",
    period: "/device/month",
    features: ["Noise monitoring", "Basic alerts", "Email support", "Up to 5 properties"],
    current: false,
  },
  {
    name: "Alarm Assistant",
    price: "€19.90",
    period: "/device/month",
    features: ["All Noise Alarm features", "Advanced analytics", "Priority support", "Up to 10 properties", "API access"],
    current: true,
    popular: true,
  },
  {
    name: "Guest & Property Services",
    price: "Custom",
    period: "",
    features: ["All Alarm Assistant features", "Unlimited properties", "Dedicated account manager", "Custom integrations", "SLA guarantee"],
    current: false,
    enterprise: true,
  },
];

export default function Subscription() {
  const [upgradeDialogOpen, setUpgradeDialogOpen] = useState(false);
  const canSelfServeUpgrade = subscriptionData.properties <= 10;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">My Subscription</h1>
        <p className="text-muted-foreground">
          Manage your plan, billing, and payment methods.
        </p>
      </div>

      {/* Current Plan Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Your active subscription details</CardDescription>
            </div>
            <Badge variant="secondary" className="bg-success/10 text-success">
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Plan</p>
              <p className="text-lg font-semibold">{subscriptionData.plan}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Billing Frequency</p>
              <p className="text-lg font-semibold">{subscriptionData.billingFrequency}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Monthly Amount</p>
              <p className="text-lg font-semibold">{subscriptionData.monthlyAmount}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Properties</p>
              <p className="text-lg font-semibold">
                {subscriptionData.properties} / {subscriptionData.maxProperties}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
            <Dialog open={upgradeDialogOpen} onOpenChange={setUpgradeDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Upgrade Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Upgrade Your Plan</DialogTitle>
                  <DialogDescription>
                    Choose the plan that best fits your needs
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 md:grid-cols-3 mt-4">
                  {plans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`relative ${plan.current ? "border-primary" : ""} ${plan.popular ? "shadow-soft" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge className="bg-primary">Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold">{plan.price}</span>
                          <span className="text-sm text-muted-foreground">{plan.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-success" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        <div className="pt-4">
                          {plan.current ? (
                            <Button variant="outline" className="w-full" disabled>
                              Current Plan
                            </Button>
                          ) : plan.enterprise ? (
                            <Button variant="outline" className="w-full">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Talk to Sales
                            </Button>
                          ) : (
                            <Button className="w-full">
                              Select Plan
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {!canSelfServeUpgrade && (
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    For portfolios larger than 10 properties, please contact our sales team for custom pricing.
                  </p>
                )}
              </DialogContent>
            </Dialog>

            {subscriptionData.properties > 10 && (
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Talk to a Specialist
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Billing Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Payment Method */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Payment Method</CardTitle>
              <Button variant="ghost" size="sm">
                Update
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
              <div className="h-10 w-14 rounded bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium">
                  {subscriptionData.paymentMethod.type} •••• {subscriptionData.paymentMethod.last4}
                </p>
                <p className="text-sm text-muted-foreground">
                  Expires {subscriptionData.paymentMethod.expiry}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Invoice */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Next Invoice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{subscriptionData.nextInvoiceDate}</p>
                  <p className="text-sm text-muted-foreground">Upcoming payment</p>
                </div>
              </div>
              <p className="text-lg font-semibold">{subscriptionData.monthlyAmount}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>Download your past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-muted-foreground">{invoice.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    {invoice.status}
                  </Badge>
                  <span className="font-medium">{invoice.amount}</span>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
