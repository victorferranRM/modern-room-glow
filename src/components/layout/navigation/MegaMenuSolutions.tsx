import { Link } from "react-router-dom";
import { solutionsData } from "./navigation-data";
import { Building2, Hotel, Home } from "lucide-react";

const icons = [Building2, Hotel, Home];

export function MegaMenuSolutions() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
        TAILORED TO YOUR PORTFOLIO
      </h3>
      <ul className="grid grid-cols-1 gap-3">
        {solutionsData.map((item, index) => {
          const Icon = icons[index];
          return (
            <li key={item.title}>
              <Link
                to={item.href}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5">
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
