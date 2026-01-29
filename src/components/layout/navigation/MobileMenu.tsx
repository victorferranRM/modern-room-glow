import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { servicesData, solutionsData, monitoringData, resourcesData } from "./navigation-data";

interface MobileMenuProps {
  onClose: () => void;
}

// Animated collapsible section component
function AnimatedCollapsible({ 
  isOpen, 
  children 
}: { 
  isOpen: boolean; 
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div 
      className="overflow-hidden transition-all duration-300 ease-out"
      style={{ height: height ? `${height}px` : '0px' }}
    >
      <div ref={contentRef}>
        {children}
      </div>
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
        {/* Services */}
        <div className="border-b border-border/50 pb-2">
          <button
            onClick={() => toggleSection("services")}
            className="flex items-center justify-between w-full py-3 text-left font-medium"
          >
            Services
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`} 
            />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "services"}>
            <div className="pt-4 pb-4 space-y-6">
              {/* Operations */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">
                  {servicesData.operations.title}
                </h4>
                {servicesData.operations.items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              {/* Incident & Risk */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">
                  {servicesData.incidentRisk.title}
                </h4>
                {servicesData.incidentRisk.items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              {/* Enablement */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">
                  {servicesData.enablement.title}
                </h4>
                {servicesData.enablement.items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Solutions */}
        <div className="border-b border-border/50 pb-2">
          <button
            onClick={() => toggleSection("solutions")}
            className="flex items-center justify-between w-full py-3 text-left font-medium"
          >
            Solutions
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${expandedSection === "solutions" ? "rotate-180" : ""}`} 
            />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "solutions"}>
            <div className="pt-4 pb-4">
              {solutionsData.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Monitoring */}
        <div className="border-b border-border/50 pb-2">
          <button
            onClick={() => toggleSection("monitoring")}
            className="flex items-center justify-between w-full py-3 text-left font-medium"
          >
            Monitoring
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${expandedSection === "monitoring" ? "rotate-180" : ""}`} 
            />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "monitoring"}>
            <div className="pt-4 pb-4">
              {monitoringData.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Resources */}
        <div className="border-b border-border/50 pb-2">
          <button
            onClick={() => toggleSection("resources")}
            className="flex items-center justify-between w-full py-3 text-left font-medium"
          >
            Resources
            <ChevronDown 
              className={`h-4 w-4 transition-transform ${expandedSection === "resources" ? "rotate-180" : ""}`} 
            />
          </button>
          <AnimatedCollapsible isOpen={expandedSection === "resources"}>
            <div className="pt-4 pb-4 space-y-5">
              {[resourcesData.learn, resourcesData.ecosystem, resourcesData.company].map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider mb-2 px-2">
                    {section.title}
                  </h4>
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block px-2 py-2.5 text-sm text-foreground hover:text-primary"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </AnimatedCollapsible>
        </div>

        {/* Pricing */}
        <div className="pb-2">
          <Link
            to="/pricing"
            className="block py-3 font-medium text-foreground hover:text-primary"
            onClick={onClose}
          >
            Pricing
          </Link>
        </div>

        {/* CTAs */}
        <div className="pt-4 flex flex-col gap-3">
          <Button variant="outline" asChild className="w-full">
            <Link to="/login" onClick={onClose}>
              Log in
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link to="/demo" onClick={onClose}>
              Book a Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
