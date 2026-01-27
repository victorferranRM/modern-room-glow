import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { SectionDivider } from "@/components/services/SectionDivider";
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
  BadgeCheck,
  Bell,
  Smartphone,
  Mail,
  PhoneCall,
  Home,
  Sparkles,
  ChevronRight,
  HelpCircle
} from "lucide-react";

export default function Pricing() {
  const [properties, setProperties] = useState(3);
  const isEnterprise = properties > 10;

  // Calculate totals for display
  const basicDeviceTotal = 45 * properties;
  const basicMonthlyTotal = 13 * properties;
  const proMonthlyTotal = 29.90 * properties;

  const services = [
    {
      icon: Headphones,
      title: "24/7 Control Center",
      description: "Human operators monitoring your properties around the clock",
    },
    {
      icon: Shield,
      title: "Guest Assist™",
      description: "Professional guest communication and incident handling in your name",
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
  ];

  const faqs = [
    {
      question: "What's included in the device?",
      answer: "Each Roomonitor device monitors noise levels, occupancy, smoke, temperature, humidity, and air quality in real-time. The one-time price includes the hardware and shipping.",
    },
    {
      question: "Can I start with Basic and upgrade later?",
      answer: "Absolutely. You can upgrade from Basic to Pro at any time. Your devices and data will seamlessly transition to the enhanced service level with Alarm Assistant.",
    },
    {
      question: "What is the Alarm Assistant?",
      answer: "The Alarm Assistant is our team of human agents who monitor and handle alarms on your behalf 24/7. When an alert is triggered, our team takes action so you don't have to.",
    },
    {
      question: "What happens if I have more than 10 properties?",
      answer: "For portfolios with 11+ properties, we offer custom enterprise pricing with volume discounts and full operational services including Guest & Property management. Contact our sales team to discuss your needs.",
    },
    {
      question: "How are services priced?",
      answer: "Services (like Guest Assist™ and Field Service) are activated after purchase and priced based on your portfolio size and specific operational requirements. Talk to a specialist for a custom quote.",
    },
    {
      question: "Is there a contract or commitment?",
      answer: "Our subscriptions are billed monthly with no long-term commitment required. Enterprise customers may opt for annual billing with additional discounts.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="relative pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                <BadgeCheck className="w-4 h-4" />
                <span>Technology + People — Full operational coverage</span>
                <Sparkles className="w-3 h-3" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                One device. One subscription.
                <br />
                <span className="text-primary">Your operations, handled.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that fits your portfolio. Self-service for up to 10 properties, 
                or talk to a specialist for full operational coverage.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Property Selector */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <AnimatedSection delay={100}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">How many properties do you manage?</h3>
                      <p className="text-sm text-muted-foreground">Adjust to see pricing for your portfolio</p>
                    </div>
                    <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl">
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
                        <span className="font-semibold">Larger portfolio?</span>{" "}
                        For 11+ properties, talk to a specialist for custom pricing and full operational support.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Basic Plan */}
              <AnimatedSection delay={100}>
                <div className="bg-card border rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Basic</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Device + monitoring subscription
                      </p>
                    </div>

                    <div className="space-y-3">
                      {!isEnterprise ? (
                        <>
                          {/* Device pricing */}
                          <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-lg text-muted-foreground line-through">€90</span>
                              <span className="text-3xl font-bold text-foreground">€45</span>
                              <span className="text-sm text-muted-foreground">one-time</span>
                            </div>
                            <div className="inline-block bg-green-500/10 text-green-600 text-xs font-medium px-2 py-0.5 rounded">
                              Web-exclusive price
                            </div>
                          </div>
                          
                          {/* Monthly subscription */}
                          <div className="pt-2 border-t border-border">
                            <div className="flex items-baseline gap-1">
                              <span className="text-2xl font-bold text-foreground">€13</span>
                              <span className="text-muted-foreground">/ month per property</span>
                            </div>
                          </div>

                          {properties > 1 && (
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                              {properties} properties: €{basicDeviceTotal} one-time + €{basicMonthlyTotal}/month
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">Contact sales</div>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {[
                        { icon: Bell, text: "Roomonitor monitoring device" },
                        { icon: Zap, text: "Real-time alerts" },
                        { icon: Smartphone, text: "Dashboard & mobile app" },
                        { icon: Mail, text: "Email & push notifications" },
                      ].map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3 group/item">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {!isEnterprise ? (
                      <Button className="w-full group shadow-lg shadow-primary/10" size="lg" asChild>
                        <Link to={`/checkout?plan=basic&properties=${properties}`}>
                          Buy now
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full group" size="lg" variant="outline" asChild>
                        <Link to="/contact?inquiry=enterprise">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Talk to a specialist
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Pro Plan */}
              <AnimatedSection delay={200}>
                <div className="relative bg-card border-2 border-primary rounded-2xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-6 py-1.5 rounded-full shadow-lg">
                      Most popular
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                  <div className="relative space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Pro</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Everything in Basic + Alarm Assistant
                      </p>
                    </div>

                    <div className="space-y-3">
                      {!isEnterprise ? (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-foreground">€29.90</span>
                            <span className="text-muted-foreground">/ month per property</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            + €45 one-time per device (web-exclusive)
                          </p>

                          {properties > 1 && (
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
                              {properties} properties: €{basicDeviceTotal} one-time + €{(proMonthlyTotal).toFixed(2).replace('.00', '')}/month
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-2xl font-bold text-foreground">Contact sales</div>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {[
                        { icon: Check, text: "Everything in Basic" },
                        { icon: PhoneCall, text: "Alarm Assistant" },
                        { icon: Headphones, text: "Human agents monitoring alarms" },
                        { icon: Clock, text: "24/7 alarm handling" },
                      ].map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3 group/item">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    {!isEnterprise ? (
                      <Button className="w-full shadow-lg shadow-primary/20 group" size="lg" asChild>
                        <Link to={`/checkout?plan=pro&properties=${properties}`}>
                          Buy now
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full group" size="lg" variant="outline" asChild>
                        <Link to="/contact?inquiry=enterprise">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Talk to a specialist
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>

              {/* Enterprise Plan */}
              <AnimatedSection delay={300}>
                <div className="bg-gradient-to-br from-secondary to-muted border rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Full operational management
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-muted-foreground">From</span>
                        <span className="text-3xl font-bold text-foreground">€79.90</span>
                        <span className="text-muted-foreground">/ property</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Variable pricing by portfolio size
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {[
                        { icon: Check, text: "Everything in Pro" },
                        { icon: Home, text: "Guest & Property Services" },
                        { icon: Users, text: "Full operational management" },
                        { icon: Shield, text: "Custom SLA agreements" },
                        { icon: Zap, text: "Dedicated account manager" },
                      ].map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3 group/item">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <feature.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full group" size="lg" variant="outline" asChild>
                      <Link to="/contact?inquiry=enterprise">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Talk to a specialist
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable properties={properties} />

        <SectionDivider variant="gradient" />

        {/* Services Explainer */}
        <section className="bg-secondary/50 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/50 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Operational Services
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  What's included in Services?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This is the operational coverage you can activate when working with a Roomonitor specialist. 
                  Services are not automatically included — they are activated after purchase.
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => (
                  <AnimatedSection key={service.title} delay={i * 100}>
                    <div className="bg-card border rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={400} className="mt-12">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-xs font-medium uppercase tracking-wider text-primary">Our Approach</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                          Roomonitor = <span className="text-primary">Technology + People</span>
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          We combine smart monitoring devices with real human operators who take action on your behalf. 
                          It's not just alerts — it's resolution.
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 w-full lg:w-auto">
                        <div className="bg-card border rounded-xl p-6 text-center shadow-xl">
                          <p className="text-sm text-muted-foreground mb-4">
                            Service pricing based on portfolio size
                          </p>
                          <Button size="lg" className="w-full lg:w-auto group shadow-lg shadow-primary/20" asChild>
                            <Link to="/contact?inquiry=services">
                              Talk to a specialist
                              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <SectionDivider variant="dots" />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="max-w-3xl mx-auto relative">
            <AnimatedSection className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <HelpCircle className="w-4 h-4" />
                FAQ
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Frequently asked questions
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 75}>
                  <div className="bg-card border rounded-xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                Ready to take control of your operations?
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Start with a demo to see how Roomonitor combines technology and people to manage your properties.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-base px-8 shadow-lg group"
                  asChild
                >
                  <Link to="/demo">
                    Book a demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 group"
                  asChild
                >
                  <Link to="/contact">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact sales
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
