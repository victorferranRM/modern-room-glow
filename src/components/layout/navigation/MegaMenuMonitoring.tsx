import { Link } from "react-router-dom";
import { monitoringData } from "./navigation-data";
import { Volume2, Users, Flame, Thermometer } from "lucide-react";

const icons = [Volume2, Users, Flame, Thermometer];

export function MegaMenuMonitoring() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
        ROOMONITOR HARDWARE
      </h3>
      <ul className="grid grid-cols-2 gap-3">
        {monitoringData.map((item, index) => {
          const Icon = icons[index];
          return (
            <li key={item.title}>
              <Link
                to={item.href}
                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ease-out hover:bg-muted/80"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                  <Icon className="w-5 h-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed transition-colors duration-200 group-hover:text-muted-foreground/80">
                    {item.description}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
