import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  Shield, 
  Clock, 
  Users,
  Headphones,
  Zap,
  BadgeCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

// Pricing configuration
const PRICING = {
  device: 99, // One-time device cost
  core: {
    basePrice: 29, // Per property/month for first property
    additionalPrice: 25, // Per additional property/month
  },
  coreServices: {
    basePrice: 79, // Per property/month for first property
    additionalPrice: 69, // Per additional property/month
  },
};

const calculatePrice = (plan: "core" | "coreServices", properties: number) => {
  const pricing = PRICING[plan];
  if (properties <= 1) return pricing.basePrice;
  return pricing.basePrice + (properties - 1) * pricing.additionalPrice;
};

const calculateDeviceCost = (properties: number) => {
  return PRICING.device * properties;
};

export default function Pricing() {
  const [properties, setProperties] = useState(3);
  const isEnterprise = properties > 10;

  const coreMonthly = calculatePrice("core", Math.min(properties, 10));
  const coreServicesMonthly = calculatePrice("coreServices", Math.min(properties, 10));
  const deviceCost = calculateDeviceCost(Math.min(properties, 10));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <BadgeCheck className="w-4 h-4" />
              <span>Transparent pricing, no hidden fees</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              One device. One subscription.
              <br />
              <span className="gradient-text">Full operational coverage.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your operation. Scale up anytime with volume discounts.
            </p>
          </div>
        </section>

        {/* Property Selector */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">How many properties do you manage?</h3>
                  <p className="text-sm text-muted-foreground">Adjust to see pricing for your portfolio</p>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-foreground">{properties}</span>
                  <span className="text-muted-foreground">{properties === 1 ? "property" : "properties"}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <Slider
                  value={[properties]}
                  onValueChange={(value) => setProperties(value[0])}
                  min={1}
                  max={15}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span className="text-primary font-medium">Self-service up to 10</span>
                  <span>15+</span>
                </div>
              </div>

              {isEnterprise && (
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">Enterprise pricing available.</span>{" "}
                    For 11+ properties, we offer custom volume pricing and dedicated support.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Core Plan */}
              <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Core</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Device + monitoring subscription
                    </p>
                  </div>

                  <div className="space-y-2">
                    {!isEnterprise ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-foreground">€{coreMonthly}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          + €{deviceCost} one-time for {properties} device{properties > 1 ? "s" : ""}
                        </p>
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-foreground">Custom pricing</div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Roomonitor monitoring device",
                      "Real-time noise detection",
                      "Occupancy tracking",
                      "Smoke & air quality alerts",
                      "Mobile app & dashboard",
                      "Email & push notifications",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {!isEnterprise ? (
                    <Button className="w-full" size="lg" asChild>
                      <Link to={`/checkout?plan=core&properties=${properties}`}>
                        Buy now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to="/contact?inquiry=enterprise">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Talk to a specialist
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Core + Services Plan */}
              <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-soft-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                    Most popular
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Core + Services</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Full operational coverage included
                    </p>
                  </div>

                  <div className="space-y-2">
                    {!isEnterprise ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-foreground">€{coreServicesMonthly}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          + €{deviceCost} one-time for {properties} device{properties > 1 ? "s" : ""}
                        </p>
                      </>
                    ) : (
                      <div className="text-2xl font-bold text-foreground">Custom pricing</div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Everything in Core",
                      "24/7 Control Center monitoring",
                      "Guest Assist™ incident handling",
                      "Human verification & escalation",
                      "Field Service Network access",
                      "Operational protocols execution",
                      "Priority support",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {!isEnterprise ? (
                    <Button className="w-full shadow-soft" size="lg" asChild>
                      <Link to={`/checkout?plan=core-services&properties=${properties}`}>
                        Buy now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  ) : (
                    <Button className="w-full" size="lg" variant="outline" asChild>
                      <Link to="/contact?inquiry=enterprise">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Talk to a specialist
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gradient-to-br from-secondary to-muted border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Custom pricing & dedicated operations
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-foreground">Let's talk</div>
                    <p className="text-sm text-muted-foreground">
                      Volume pricing for large portfolios
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Everything in Core + Services",
                      "Dedicated account manager",
                      "Custom SLA agreements",
                      "API access & integrations",
                      "White-label options",
                      "Multi-region support",
                      "On-site training",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" size="lg" variant="outline" asChild>
                    <Link to="/contact?inquiry=enterprise">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Talk to a specialist
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Explainer */}
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What's included in Services?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our operational services are activated after purchase and priced based on your number of properties. Here's what you get:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Headphones,
                    title: "24/7 Control Center",
                    description: "Human operators monitoring your properties around the clock",
                  },
                  {
                    icon: Shield,
                    title: "Guest Assist™",
                    description: "Professional guest and incident handling in your name",
                  },
                  {
                    icon: Users,
                    title: "Field Service",
                    description: "On-site intervention when remote resolution isn't enough",
                  },
                  {
                    icon: Zap,
                    title: "Instant Response",
                    description: "Real action within minutes, not hours",
                  },
                ].map((service) => (
                  <div 
                    key={service.title}
                    className="bg-card border rounded-xl p-5 text-center hover:shadow-soft transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Service pricing is customized based on your portfolio size and operational needs.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/services">
                    Learn more about our services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "What's included in the device cost?",
                  answer: "Each Roomonitor device includes the hardware, shipping, and installation guide. The device monitors noise levels, occupancy, smoke, temperature, humidity, and air quality in real-time.",
                },
                {
                  question: "Can I start with Core and upgrade later?",
                  answer: "Absolutely. You can upgrade from Core to Core + Services at any time. Your devices and data will seamlessly transition to the enhanced service level.",
                },
                {
                  question: "How does the Field Service Network work?",
                  answer: "When our Control Center determines that on-site intervention is needed, we dispatch a trained field agent to your property. This is included in the Core + Services plan.",
                },
                {
                  question: "What happens after 10 properties?",
                  answer: "For portfolios with 11+ properties, we offer custom enterprise pricing with volume discounts, dedicated account management, and tailored SLAs. Contact our sales team to discuss your needs.",
                },
                {
                  question: "Is there a contract or commitment?",
                  answer: "Our subscriptions are billed monthly with no long-term commitment required. Enterprise customers may opt for annual billing with additional discounts.",
                },
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-card border rounded-xl p-6 hover:shadow-soft transition-shadow"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Ready to take control of your operations?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Start with a demo to see how Roomonitor works for your properties.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-base px-8"
                  asChild
                >
                  <Link to="/demo">
                    Book a demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
