import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Zap, Shield, Globe, Building2, Hotel, Calendar, BarChart3, Settings, Link2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Integration {
  name: string;
  category: string;
  description: string;
  logo?: string;
  features: string[];
  popular?: boolean;
}

const categories = [
  { id: "pms", name: "Property Management", icon: Building2, description: "Sync reservations and guest data automatically" },
  { id: "ota", name: "Online Travel Agencies", icon: Globe, description: "Connect with major booking platforms" },
  { id: "smart-home", name: "Smart Home", icon: Settings, description: "Integrate with smart locks and thermostats" },
  { id: "analytics", name: "Analytics & BI", icon: BarChart3, description: "Export data to your preferred tools" },
];

const integrations: Integration[] = [
  // PMS
  { name: "Guesty", category: "pms", description: "Full two-way sync with Guesty's property management platform", features: ["Auto guest messaging", "Reservation sync", "Property mapping"], popular: true },
  { name: "Hostaway", category: "pms", description: "Seamless integration with Hostaway's unified inbox", features: ["Real-time alerts", "Guest communication", "Multi-property support"] },
  { name: "Lodgify", category: "pms", description: "Connect Roomonitor with Lodgify websites and booking engine", features: ["Booking sync", "Guest details", "Automated workflows"] },
  { name: "Avantio", category: "pms", description: "Enterprise-grade integration for professional managers", features: ["API access", "Custom webhooks", "Bulk operations"], popular: true },
  { name: "Smoobu", category: "pms", description: "Sync properties and reservations effortlessly", features: ["Channel sync", "Guest data", "Reporting"] },
  { name: "Beds24", category: "pms", description: "Connect with Beds24's channel manager", features: ["Multi-channel", "Auto-updates", "Price sync"] },
  
  // OTA
  { name: "Airbnb", category: "ota", description: "Direct messaging integration with Airbnb guests", features: ["Message templates", "Instant alerts", "Review boost"], popular: true },
  { name: "Booking.com", category: "ota", description: "Connect alerts to Booking.com reservations", features: ["Reservation ID", "Guest contact", "Property linking"] },
  { name: "Vrbo", category: "ota", description: "Integrate with Vrbo bookings and messaging", features: ["Guest messaging", "Booking sync", "Alert routing"] },
  { name: "Expedia", category: "ota", description: "Sync Expedia reservations for complete coverage", features: ["Property matching", "Date sync", "Guest info"] },
  
  // Smart Home
  { name: "Nuki", category: "smart-home", description: "Smart lock integration for access control", features: ["Access logs", "Guest codes", "Lock status"], popular: true },
  { name: "Yale", category: "smart-home", description: "Connect Yale smart locks and access systems", features: ["Remote access", "Code generation", "Activity logs"] },
  { name: "Tado", category: "smart-home", description: "Smart thermostat integration for energy savings", features: ["Temperature control", "Energy reports", "Automation"] },
  { name: "Netatmo", category: "smart-home", description: "Environmental sensor data integration", features: ["Climate data", "Air quality", "Humidity"] },
  
  // Analytics
  { name: "Google Analytics", category: "analytics", description: "Export monitoring data to GA for analysis", features: ["Custom events", "Dashboard", "Reporting"] },
  { name: "Power BI", category: "analytics", description: "Enterprise analytics with Power BI connector", features: ["Real-time data", "Custom visuals", "Sharing"] },
  { name: "Zapier", category: "analytics", description: "Connect Roomonitor to 5000+ apps", features: ["Automation", "Multi-step", "Filters"], popular: true },
  { name: "Make", category: "analytics", description: "Advanced automation with Make (Integromat)", features: ["Visual builder", "Scenarios", "Data routing"] },
];

const apiFeatures = [
  { icon: Zap, title: "RESTful API", description: "Clean, well-documented REST endpoints for all operations" },
  { icon: Shield, title: "OAuth 2.0", description: "Secure authentication with industry-standard protocols" },
  { icon: Code, title: "Webhooks", description: "Real-time event notifications to your endpoints" },
  { icon: Link2, title: "SDKs", description: "Official libraries for Python, JavaScript, and PHP" },
];

export default function Integrations() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Integrations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect with Your{" "}
              <span className="text-primary">Favorite Tools</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Roomonitor seamlessly integrates with 50+ property management systems, OTAs, and smart home platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Request Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#api">
                  Explore API
                  <Code className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} animation="fade-up" delay={index * 100}>
                <div className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      {categories.map((category, catIndex) => (
        <section key={category.id} className={`py-16 ${catIndex % 2 === 1 ? "bg-muted/30" : ""}`}>
          <div className="container mx-auto px-4 sm:px-6">
            <AnimatedSection animation="fade-up" className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <category.icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category.name}</h2>
              </div>
              <p className="text-muted-foreground">{category.description}</p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations
                .filter((i) => i.category === category.id)
                .map((integration, index) => (
                  <AnimatedSection key={integration.name} animation="fade-up" delay={index * 75}>
                    <div className="relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full group">
                      {integration.popular && (
                        <span className="absolute -top-2 -right-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                          <span className="text-lg font-bold text-foreground">{integration.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{integration.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{integration.description}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {integration.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* API Section */}
      <section id="api" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Developer API
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6">
                Build Custom Integrations
              </h2>
              <p className="text-lg text-background/70 mb-8">
                Our powerful API lets you integrate Roomonitor data and functionality directly into your own applications and workflows.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-background">{feature.title}</h4>
                      <p className="text-sm text-background/60">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="secondary" className="text-foreground" asChild>
                <Link to="/contact">
                  Get API Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="ml-4 text-sm text-background/60 font-mono">api-example.js</span>
                </div>
                <pre className="text-sm text-background/80 font-mono overflow-x-auto">
{`// Get device alerts
const response = await fetch(
  'https://api.roomonitor.com/v1/alerts',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const alerts = await response.json();

// Process real-time alerts
alerts.data.forEach(alert => {
  console.log(\`\${alert.type}: \${alert.level}dB\`);
  notifyGuest(alert.property_id);
});`}
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Don't See Your Integration?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We're constantly adding new integrations. Let us know what you need and we'll prioritize it.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Request Integration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
