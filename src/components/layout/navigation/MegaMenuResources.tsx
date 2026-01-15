import { Link } from "react-router-dom";
import { resourcesData } from "./navigation-data";
import { BookOpen, FileText, HelpCircle, Puzzle, Award, Building, Mail } from "lucide-react";

const learnIcons = [BookOpen, FileText, HelpCircle];
const ecosystemIcons = [Puzzle, Award];
const companyIcons = [Building, Mail];

const learnDescriptions = [
  "Insights and trends in hospitality operations",
  "In-depth resources for operational excellence",
  "Find answers to common questions",
];

const ecosystemDescriptions = [
  "PMS and operational ecosystem connections",
  "Success stories from our partners",
];

const companyDescriptions = [
  "Our mission and the team behind Roomonitor",
  "Get in touch with our team",
];

export function MegaMenuResources() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-3 gap-12">
        {/* Learn Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {resourcesData.learn.title}
          </h3>
          <ul className="space-y-4">
            {resourcesData.learn.items.map((item, index) => {
              const Icon = learnIcons[index];
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
                        {learnDescriptions[index]}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Ecosystem Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {resourcesData.ecosystem.title}
          </h3>
          <ul className="space-y-4">
            {resourcesData.ecosystem.items.map((item, index) => {
              const Icon = ecosystemIcons[index];
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
                        {ecosystemDescriptions[index]}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {resourcesData.company.title}
          </h3>
          <ul className="space-y-4">
            {resourcesData.company.items.map((item, index) => {
              const Icon = companyIcons[index];
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
                        {companyDescriptions[index]}
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
