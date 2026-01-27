import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/services/SectionDivider";
import { 
  ArrowRight, Check, Volume2, Users, Wind, Thermometer, 
  Headphones, Shield, Clock, MapPin, Phone, FileText, Building2,
  Star, ChevronRight, Sparkles
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

const stats = [
  { value: "11M+", label: "Guest stays protected", icon: Users },
  { value: "99.9%", label: "Platform uptime", icon: Shield },
  { value: "<5 min", label: "Setup per room", icon: Clock },
  { value: "24/7", label: "Monitoring support", icon: Headphones },
];

export default function VacationRentals() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
                <Building2 className="w-4 h-4" />
                Vacation Rentals
                <Sparkles className="w-3 h-3" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Complete protection for your
                <br />
                <span className="text-primary">vacation rental portfolio</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                From noise monitoring to guest support, Roomonitor provides the technology and 
                human expertise you need to protect your properties and your reputation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                  <Link to="/checkout?plan=pro&properties=1">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link to="/contact">
                    Talk to Sales
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={solutionRest}
                    alt="Vacation Rental Protection"
                    className="w-full shadow-2xl object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Trusted by 500+ managers</p>
                        <p className="text-xs text-muted-foreground">Protecting vacation rentals across Europe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-card border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center group">
                <div className="relative p-6 rounded-2xl bg-background/50 border hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Complete Solution
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Everything you need to manage your rentals
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated platform combines monitoring technology with human-led services 
              to keep your properties protected around the clock.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 75}>
                <Link 
                  to={service.href}
                  className="block p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Pricing Section */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Choose the plan that fits your needs
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 100}>
                <div className={`relative p-6 lg:p-8 rounded-2xl bg-card border h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'hover:border-primary/30'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">€{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 pb-6 border-b">
                      Device: {typeof plan.devicePrice === 'string' ? plan.devicePrice : `€${plan.devicePrice}`}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full group ${plan.popular ? 'shadow-lg shadow-primary/20' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      asChild
                    >
                      <Link to={plan.name === "Enterprise" ? "/contact" : `/checkout?plan=${plan.name.toLowerCase()}&properties=1`}>
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Ready to protect your vacation rentals?
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mb-8">
              Join hundreds of property managers who trust Roomonitor to keep their 
              properties safe and their guests happy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
                <Link to="/checkout?plan=pro&properties=1">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
