import { Link } from "react-router-dom";
import { servicesData } from "./navigation-data";
import { Eye, Truck, Phone, Moon, Settings, FileText } from "lucide-react";

const operationsIcons = [Eye, Truck];
const emergencyIcons = [Phone, Moon];
const integrationIcons = [Settings, FileText];

export function MegaMenuServices() {
  const columns = [
    { data: servicesData.operations, icons: operationsIcons },
    { data: servicesData.emergencies, icons: emergencyIcons },
    { data: servicesData.integration, icons: integrationIcons },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-12">
        {columns.map(({ data, icons }) => (
          <div key={data.title}>
            <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
              {data.title}
            </h3>
            <ul className="space-y-4">
              {data.items.map((item, index) => {
                const Icon = icons[index];
                return (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className="group flex items-start gap-3 p-3 -mx-3 rounded-xl transition-all duration-200 ease-out hover:bg-muted/80"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5 transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                        <Icon className="w-4 h-4 text-primary transition-transform duration-200 group-hover:scale-110" />
                      </div>
                      <div>
                        <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {item.title}
                        </span>
                        <span className="block text-sm text-muted-foreground mt-0.5 leading-relaxed transition-colors duration-200 group-hover:text-muted-foreground/80">
                          {item.description}
                        </span>
                        {"note" in item && (item as any).note && (
                          <span className="block text-[11px] font-light italic text-muted-foreground/70 mt-1">
                            {(item as any).note}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
