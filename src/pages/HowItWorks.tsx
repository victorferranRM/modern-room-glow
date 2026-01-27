import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  ArrowRight, 
  Package, 
  Wifi, 
  Shield, 
  Headphones,
  CheckCircle2,
  Clock,
  Users,
  BarChart3,
  Zap,
  Building2,
  MessageSquare
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose Your Solution",
    description: "Select the monitoring and services package that fits your property portfolio. From basic noise monitoring to full-service guest management.",
    icon: Package,
    details: [
      "Flexible plans for any portfolio size",
      "Mix and match services as needed",
      "Custom enterprise solutions available",
    ],
  },
  {
    number: "02",
    title: "Quick & Easy Setup",
    description: "Our plug-and-play devices arrive pre-configured. Simply place them in your properties and connect to Wi-Fi - no technical expertise required.",
    icon: Wifi,
    details: [
      "Devices ship within 48 hours",
      "5-minute installation per unit",
      "Works with any Wi-Fi network",
    ],
  },
  {
    number: "03",
    title: "24/7 Monitoring Begins",
    description: "Once connected, our system immediately starts monitoring noise levels, occupancy, and environmental factors around the clock.",
    icon: Shield,
    details: [
      "Real-time noise detection",
      "Instant alert notifications",
      "Privacy-first approach",
    ],
  },
  {
    number: "04",
    title: "We Handle Issues",
    description: "When alerts trigger, our trained response team takes action. From guest calls to neighbor coordination, we've got you covered.",
    icon: Headphones,
    details: [
      "Professional guest communication",
      "Multi-language support",
      "Escalation protocols",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save 15+ Hours Weekly",
    description: "Eliminate manual monitoring and complaint handling from your workflow.",
  },
  {
    icon: Users,
    title: "Better Guest Experience",
    description: "Proactive issue resolution means happier guests and better reviews.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Access detailed analytics to optimize your property operations.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get real-time alerts on your phone for any important events.",
  },
];

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Most operators are fully set up within a week. Devices ship in 48 hours and installation takes just 5 minutes per property.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer: "Not at all! Our devices come pre-configured. You just plug them in and connect to Wi-Fi through our simple mobile app.",
  },
  {
    question: "What happens when noise is detected?",
    answer: "Our system sends instant alerts to your dashboard. If you have our response service, our team will contact guests directly and handle the situation.",
  },
  {
    question: "Is guest privacy protected?",
    answer: "Absolutely. Our devices measure decibel levels only - no audio recording. We're fully GDPR compliant and privacy-by-design.",
  },
  {
    question: "Can I try before committing?",
    answer: "Yes! We offer a 30-day trial period. If you're not satisfied, return the devices for a full refund.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Simple & Effective</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance">
                  How Roomonitor{" "}
                  <span className="gradient-text">Works for You</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  From setup to peace of mind in four simple steps. Our streamlined process gets you protected fast.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <AnimatedSection 
                  key={step.number} 
                  animation="fade-up" 
                  delay={index * 100}
                  className="mb-16 last:mb-0"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3" />
                        <div className="relative bg-card border rounded-3xl p-8 lg:p-12">
                          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <step.icon className="w-10 h-10 text-primary" />
                          </div>
                          <div className="text-center">
                            <p className="text-4xl font-bold text-foreground mb-2">Step {step.number}</p>
                            <p className="text-muted-foreground">{step.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                The Results You'll See
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of property managers who've transformed their operations with Roomonitor.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <AnimatedSection 
                  key={benefit.title} 
                  animation="fade-up" 
                  delay={index * 100}
                >
                  <div className="bg-card border rounded-2xl p-6 h-full hover:shadow-soft transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
                Common Questions
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about getting started.
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <AnimatedSection 
                    key={faq.question} 
                    animation="fade-up" 
                    delay={index * 50}
                  >
                    <div className="bg-card border rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-2 flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground pl-8">{faq.answer}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-up">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg text-background/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join over 500 property managers who trust Roomonitor to protect their properties and guests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <Link to="/contact?inquiry=demo">
                      Book a Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-background/20 text-background hover:bg-background/10"
                    asChild
                  >
                    <Link to="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
