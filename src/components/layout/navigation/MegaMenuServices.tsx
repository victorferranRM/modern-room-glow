import { Link } from "react-router-dom";
import { servicesData } from "./navigation-data";
import { Headphones, ShieldCheck, Settings } from "lucide-react";

const categoryIcons = {
  operations: Headphones,
  incidentRisk: ShieldCheck,
  enablement: Settings,
};

export function MegaMenuServices() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-12">
        {/* Operations Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.operations.title}
          </h3>
          <ul className="space-y-5">
            {servicesData.operations.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="group block"
                >
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Incident & Risk Management Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.incidentRisk.title}
          </h3>
          <ul className="space-y-5">
            {servicesData.incidentRisk.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="group block"
                >
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Operational Enablement Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.enablement.title}
          </h3>
          <ul className="space-y-5">
            {servicesData.enablement.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="group block"
                >
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
