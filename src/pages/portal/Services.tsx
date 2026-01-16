import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Users,
  Check,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Shield,
  Clock,
  Building2,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const addons = [
  {
    id: "alarm-assistant",
    name: "Alarm Assistant",
    description: "24/7 professional alarm monitoring and response service. Our team handles noise alerts and contacts guests on your behalf.",
    price: "€29.90",
    period: "/month",
    icon: Bell,
    features: [
      "24/7 professional monitoring",
      "Automatic guest notifications",
      "Escalation protocols",
      "Incident reports",
      "Multi-language support",
    ],
    available: true,
    popular: true,
  },
  {
    id: "guest-services",
    name: "Guest & Property Services",
    description: "Full-service property management including check-in/out, cleaning coordination, and guest communication.",
    price: "From €79.90",
    period: "/property",
    icon: Users,
    features: [
      "Guest communication management",
      "Check-in/out coordination",
      "Cleaning scheduling",
      "Maintenance requests",
      "Review management",
    ],
    available: true,
    enterprise: true,
  },
];

const currentServices = [
  { name: "Pro Monitoring", status: "active", since: "June 2025" },
];

export default function Services() {
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [selectedAddon, setSelectedAddon] = useState<typeof addons[0] | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleRequestSubmit = () => {
    // In a real app, this would send the request to the backend
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestDialogOpen(false);
      setRequestSubmitted(false);
      setRequestMessage("");
      setSelectedAddon(null);
    }, 2000);
  };

  const openRequestDialog = (addon: typeof addons[0]) => {
    setSelectedAddon(addon);
    setRequestDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Add-ons & Services</h1>
        <p className="text-muted-foreground">
          Enhance your Roomonitor experience with premium services.
        </p>
      </div>

      {/* Current Services */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Active Services</CardTitle>
          <CardDescription>Services currently included in your subscription</CardDescription>
        </CardHeader>
        <CardContent>
          {currentServices.length > 0 ? (
            <div className="space-y-3">
              {currentServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-muted-foreground">Active since {service.since}</p>
                    </div>
                  </div>
                  <Badge className="bg-success/10 text-success">Active</Badge>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No additional services active.</p>
          )}
        </CardContent>
      </Card>

      {/* Available Add-ons */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Available Add-ons</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {addons.map((addon) => {
            const Icon = addon.icon;

            return (
              <Card
                key={addon.id}
                className={`relative overflow-hidden ${addon.popular ? "border-primary" : ""}`}
              >
                {addon.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">{addon.price}</span>
                    <span className="text-muted-foreground">{addon.period}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {addon.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    {addon.enterprise ? (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => openRequestDialog(addon)}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request a Quote
                      </Button>
                    ) : (
                      <Button className="w-full" onClick={() => openRequestDialog(addon)}>
                        Activate Service
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Info Card */}
      <Card className="bg-muted/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Enterprise & Large Portfolios</h3>
              <p className="text-sm text-muted-foreground mt-1">
                For portfolios with more than 10 properties, we offer customized operational services
                tailored to your specific needs. Our specialists will work with you to create the
                perfect solution for your property management requirements.
              </p>
              <Button variant="link" className="px-0 mt-2">
                <Phone className="h-4 w-4 mr-2" />
                Schedule a consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Request Dialog */}
      <Dialog open={requestDialogOpen} onOpenChange={setRequestDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedAddon?.enterprise ? "Request a Quote" : "Activate Service"}
            </DialogTitle>
            <DialogDescription>
              {selectedAddon?.enterprise
                ? `Tell us about your needs for ${selectedAddon?.name}`
                : `You're about to activate ${selectedAddon?.name}`}
            </DialogDescription>
          </DialogHeader>

          {requestSubmitted ? (
            <div className="flex flex-col items-center py-8">
              <div className="h-16 w-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold">Request Submitted!</h3>
              <p className="text-muted-foreground text-center mt-1">
                Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedAddon && (
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{selectedAddon.name}</span>
                    <span className="font-semibold">
                      {selectedAddon.price}
                      {selectedAddon.period}
                    </span>
                  </div>
                </div>
              )}

              {selectedAddon?.enterprise && (
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your portfolio</Label>
                  <Textarea
                    id="message"
                    placeholder="Number of properties, specific needs, preferred contact time..."
                    value={requestMessage}
                    onChange={(e) => setRequestMessage(e.target.value)}
                    rows={4}
                  />
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setRequestDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1" onClick={handleRequestSubmit}>
                  {selectedAddon?.enterprise ? "Submit Request" : "Confirm Activation"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
