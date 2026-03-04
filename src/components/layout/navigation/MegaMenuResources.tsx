import { Link } from "react-router-dom";
import { resourcesData } from "./navigation-data";
import { BookOpen, HelpCircle, Calculator, Award, Building } from "lucide-react";

const learnIcons = [BookOpen, HelpCircle, Calculator];
const companyIcons = [Award, Building];

const learnDescriptions = [
  "Insights y tendencias en operaciones de hospitalidad",
  "Encuentra respuestas a preguntas frecuentes",
  "Descubre cuánto podrías ahorrar con Roomonitor",
];

const companyDescriptions = [
  "Historias de éxito de nuestros partners",
  "Nuestra misión y el equipo detrás de Roomonitor",
];

export function MegaMenuResources() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-2 gap-12">
        {/* Learn Column */}
        <div>
          <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-6">
            {resourcesData.learn.title}
          </h3>
          <ul className="space-y-4">
            {resourcesData.learn.items.map((item, index) => {
              const Icon = learnIcons[index];
              const isCalculator = item.href === "/resources/savings-calculator";
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
                        {learnDescriptions[index]}
                      </span>
                      {isCalculator && (
                        <span className="inline-flex items-center text-xs font-medium text-primary mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                          Probar calculadora →
                        </span>
                      )}
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
