import { Link } from "react-router-dom";
import { resourcesData } from "./navigation-data";
import { BookOpen, FileText, HelpCircle, Puzzle, Award, Building, Mail, Calculator } from "lucide-react";

const learnIcons = [BookOpen, FileText, HelpCircle];
const ecosystemIcons = [Puzzle, Award, Calculator];
const companyIcons = [Building, Mail];

const learnDescriptions = [
  "Insights y tendencias en operaciones de hospitalidad",
  "Recursos en profundidad para la excelencia operativa",
  "Encuentra respuestas a preguntas frecuentes",
];

const ecosystemDescriptions = [
  "Conexiones con PMS y ecosistema operativo",
  "Historias de éxito de nuestros partners",
  "Descubre cuánto podrías ahorrar con Roomonitor",
];

const companyDescriptions = [
  "Nuestra misión y el equipo detrás de Roomonitor",
  "Ponte en contacto con nuestro equipo",
];

export function MegaMenuResources() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
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

      {/* Featured CTA - Savings Calculator */}
      <div className="mt-8 pt-6 border-t">
        <Link
          to="/resources/savings-calculator"
          className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              ¿Cuánto podrías ahorrar con Roomonitor?
            </span>
            <span className="block text-sm text-muted-foreground mt-0.5">
              Calcula tu ahorro potencial con nuestras soluciones de detección de humo y monitorización
            </span>
          </div>
          <span className="text-primary text-sm font-medium">
            Probar Calculadora →
          </span>
        </Link>
      </div>
    </div>
  );
}
