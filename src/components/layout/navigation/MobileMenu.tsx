import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { servicesData, monitoringData, resourcesData } from "./navigation-data";

interface MobileMenuProps {
  onClose: () => void;
}

function AnimatedCollapsible({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setHeight(isOpen ? contentRef.current?.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="overflow-hidden transition-all duration-300 ease-out" style={{ height: height ? `${height}px` : '0px' }}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="lg:hidden border-t bg-background max-h-[calc(100vh-4rem)] overflow-y-auto animate-fade-in">
      <div className="container mx-auto px-4 py-6 space-y-2">
        {/* Dispositivo */}
        <div className="border-b border-border/50 pb-2">
          <button onClick={() => toggleSection("dispositivo")} className="flex items-center justify-between w-full py-3 text-left font-medium">
            Dispositivo
            <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === "dispositivo" ? "rotate-180" : ""}`} />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "dispositivo"}>
            <div className="pt-4 pb-4">
              {monitoringData.map((item) => (
                <Link key={item.title} to={item.href} className="block px-2 py-2.5 text-sm text-foreground hover:text-primary" onClick={onClose}>
                  {item.title}
                </Link>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Cover™ */}
        <div className="border-b border-border/50 pb-2">
          <Link to="/cover" className="block py-3 font-medium text-foreground hover:text-primary" onClick={onClose}>
            Cover<sup className="text-[9px] ml-0.5">™</sup>
          </Link>
        </div>

        {/* Servicios */}
        <div className="border-b border-border/50 pb-2">
          <button onClick={() => toggleSection("services")} className="flex items-center justify-between w-full py-3 text-left font-medium">
            Servicios
            <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`} />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "services"}>
            <div className="pt-4 pb-4 space-y-6">
              {[servicesData.operations, servicesData.emergencies, servicesData.integration].map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">{section.title}</h4>
                  {section.items.map((item) => (
                    <Link key={item.title} to={item.href} className="block px-2 py-2.5 text-sm text-foreground hover:text-primary" onClick={onClose}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Cómo funciona */}
        <div className="border-b border-border/50 pb-2">
          <Link to="/how-it-works" className="block py-3 font-medium text-foreground hover:text-primary" onClick={onClose}>
            Cómo funciona
          </Link>
        </div>

        {/* Recursos */}
        <div className="border-b border-border/50 pb-2">
          <button onClick={() => toggleSection("resources")} className="flex items-center justify-between w-full py-3 text-left font-medium">
            Recursos
            <ChevronDown className={`h-4 w-4 transition-transform ${expandedSection === "resources" ? "rotate-180" : ""}`} />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "resources"}>
            <div className="pt-4 pb-4 space-y-5">
              {[resourcesData.learn, resourcesData.ecosystem, resourcesData.company].map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">{section.title}</h4>
                  {section.items.map((item) => (
                    <Link key={item.title} to={item.href} className="block px-2 py-2.5 text-sm text-foreground hover:text-primary" onClick={onClose}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* CTAs */}
        <div className="pt-4 flex flex-col gap-3">
          <Button variant="outline" asChild className="w-full">
            <Link to="/pricing" onClick={onClose} className="gap-2">
              <ShoppingCart className="h-4 w-4" />
              Comprar
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link to="/contact" onClick={onClose}>
              Contactar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
