import { Link } from "react-router-dom";
import { servicesData } from "./navigation-data";
import { Headphones, Eye, Truck, AlertTriangle, Siren, Moon, Settings, FileText } from "lucide-react";

const operationsIcons = [Headphones, Eye, Truck];
const incidentIcons = [AlertTriangle, Siren, Moon];
const enablementIcons = [Settings, FileText];

export function MegaMenuServices() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-12">
        {/* Operations Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.operations.title}
          </h3>
          <ul className="space-y-4">
            {servicesData.operations.items.map((item, index) => {
              const Icon = operationsIcons[index];
              return (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="group flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Incident & Risk Management Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.incidentRisk.title}
          </h3>
          <ul className="space-y-4">
            {servicesData.incidentRisk.items.map((item, index) => {
              const Icon = incidentIcons[index];
              return (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="group flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Operational Enablement Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {servicesData.enablement.title}
          </h3>
          <ul className="space-y-4">
            {servicesData.enablement.items.map((item, index) => {
              const Icon = enablementIcons[index];
              return (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="group flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
