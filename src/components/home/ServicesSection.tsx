import { Link } from "react-router-dom";
import { ArrowRight, Volume2, Phone, Clock, Key, ShieldAlert } from "lucide-react";

const services = [
  {
    icon: Volume2,
    title: "Noise Monitoring",
    description: "Real-time decibel tracking with instant alerts. Prevent noise complaints before they happen with our advanced acoustic sensors.",
    href: "/services/noise-monitoring",
    color: "primary",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Support",
    description: "Round-the-clock professional response team ready to handle any situation at your property, day or night.",
    href: "/services/emergency-support",
    color: "success",
  },
  {
    icon: Phone,
    title: "Guest Phone Support",
    description: "Dedicated multilingual support for your guests. We handle inquiries so you can focus on growing your business.",
    href: "/services/guest-support",
    color: "accent",
  },
  {
    icon: Key,
    title: "Check-in & Access",
    description: "Smart access management with remote unlock capabilities. Seamless arrivals without the hassle of key exchanges.",
    href: "/services/check-in",
    color: "warning",
  },
  {
    icon: ShieldAlert,
    title: "Party Prevention",
    description: "Proactive occupancy and noise monitoring to detect and prevent unauthorized gatherings before they escalate.",
    href: "/services/party-prevention",
    color: "destructive",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">manage rentals</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From noise monitoring to guest support, our comprehensive suite of services 
            keeps your properties safe and your guests happy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative bg-card rounded-2xl p-8 border shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-${service.color}/10`}>
                <service.icon className={`w-7 h-7 text-${service.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
