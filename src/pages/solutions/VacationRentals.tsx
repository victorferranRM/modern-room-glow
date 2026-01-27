import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Check, Volume2, Users, Wind, Thermometer, 
  Headphones, Shield, Clock, MapPin, Phone, FileText, Building2
} from "lucide-react";
import solutionRest from "@/assets/solution-rest-new.jpg";

const services = [
  {
    icon: Volume2,
    title: "Noise Monitoring",
    description: "Detect and respond to noise disturbances before they escalate into complaints.",
    href: "/monitoring/noise"
  },
  {
    icon: Users,
    title: "Occupancy Detection",
    description: "Identify unauthorized guests and enforce house rules effectively.",
    href: "/monitoring/occupancy"
  },
  {
    icon: Wind,
    title: "Smoke Detection",
    description: "Protect your properties from smoking damage with instant alerts.",
    href: "/monitoring/smoke"
  },
  {
    icon: Thermometer,
    title: "Environment Monitoring",
    description: "Track temperature and humidity to prevent property damage.",
    href: "/monitoring/environment"
  },
  {
    icon: Headphones,
    title: "24/7 Control Center",
    description: "Our team monitors alerts and takes action on your behalf, day and night.",
    href: "/services/control-center"
  },
  {
    icon: Phone,
    title: "Guest Assist",
    description: "Multilingual guest support for common inquiries and emergencies.",
    href: "/services/guest-assist"
  },
  {
    icon: MapPin,
    title: "Field Service Network",
    description: "On-site intervention when remote resolution isn't enough.",
    href: "/services/field-service"
  },
  {
    icon: FileText,
    title: "Operational Protocols",
    description: "Customized escalation workflows through our Manager software.",
    href: "/services/protocols"
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "13",
    period: "/property/month",
    devicePrice: "45",
    description: "Self-service monitoring for small portfolios",
    features: [
      "Roomonitor monitoring device",
      "Real-time noise & occupancy alerts",
      "Smoke detection",
      "Environment monitoring",
      "Manager dashboard access",
      "Mobile app access",
    ],
    cta: "Start with Basic",
    popular: false,
  },
  {
    name: "Pro",
    price: "29.90",
    period: "/property/month",
    devicePrice: "Included",
    description: "24/7 human-led monitoring and response",
    features: [
      "Everything in Basic",
      "24/7 Alarm Assistant",
      "Control Center escalation",
      "Guest communication",
      "Incident documentation",
      "Priority support",
    ],
    cta: "Start with Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "79.90",
    period: "/property/month",
    devicePrice: "Included",
    description: "Full operational management",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom protocols",
      "Field service access",
      "PMS integrations",
      "Guest Assist line",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function VacationRentals() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Vacation Rentals
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                <span className="block sm:inline">Complete protection for your</span>{" "}
                <span className="text-primary block">vacation rental portfolio</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                From noise monitoring to guest support, Roomonitor provides the technology and 
                human expertise you need to protect your properties and your reputation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/checkout?plan=pro&properties=1">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
                <img
                  src={solutionRest}
                  alt="Vacation Rental Protection"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "11M+", label: "Guest stays protected" },
              { value: "99.9%", label: "Platform uptime" },
              { value: "<5 min", label: "Setup per room" },
              { value: "24/7", label: "Monitoring support" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Complete Solution
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Everything you need to manage your rentals
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated platform combines monitoring technology with human-led services 
              to keep your properties protected around the clock.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <Link 
                  to={service.href}
                  className="block p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Pricing
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Choose the plan that fits your needs
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 100}>
                <div className={`relative p-6 rounded-2xl bg-card border h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">€{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">
                    Device: {typeof plan.devicePrice === 'string' ? plan.devicePrice : `€${plan.devicePrice}`}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to={plan.name === "Enterprise" ? "/contact" : `/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>
                      {plan.cta}
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              Ready to protect your vacation rentals?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Join hundreds of property managers who trust Roomonitor to keep their 
              properties safe and their guests happy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/checkout?plan=pro&properties=1">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}