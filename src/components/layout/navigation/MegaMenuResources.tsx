import { Link } from "react-router-dom";
import { resourcesData } from "./navigation-data";

export function MegaMenuResources() {
  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-12">
        {/* Learn Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-5">
            {resourcesData.learn.title}
          </h3>
          <ul className="space-y-3">
            {resourcesData.learn.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ecosystem Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-5">
            {resourcesData.ecosystem.title}
          </h3>
          <ul className="space-y-3">
            {resourcesData.ecosystem.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-5">
            {resourcesData.company.title}
          </h3>
          <ul className="space-y-3">
            {resourcesData.company.items.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
