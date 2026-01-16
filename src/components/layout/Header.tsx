import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import roomonitorLogo from "@/assets/roomonitor-logo.png";
import { MegaMenuServices } from "./navigation/MegaMenuServices";
import { MegaMenuSolutions } from "./navigation/MegaMenuSolutions";
import { MegaMenuMonitoring } from "./navigation/MegaMenuMonitoring";
import { MegaMenuResources } from "./navigation/MegaMenuResources";
import { MobileMenu } from "./navigation/MobileMenu";

type MenuType = "services" | "solutions" | "monitoring" | "resources" | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);

  const handleMenuEnter = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const navItems: { label: string; menu: MenuType }[] = [
    { label: "Services", menu: "services" },
    { label: "Solutions", menu: "solutions" },
    { label: "Monitoring", menu: "monitoring" },
    { label: "Resources", menu: "resources" },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b"
      onMouseLeave={handleMenuLeave}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={roomonitorLogo} 
              alt="Roomonitor" 
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.menu}
                onMouseEnter={() => handleMenuEnter(item.menu)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                  activeMenu === item.menu 
                    ? "text-primary" 
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.label}
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    activeMenu === item.menu && "rotate-180"
                  )} 
                />
              </button>
            ))}

            <Link
              to="/pricing"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <button
              className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-label="Select language"
            >
              <Globe className="h-4 w-4" />
              <ChevronDown className="h-3 w-3" />
            </button>
            
            <Button variant="ghost" asChild>
              <Link to="/auth">Customer Portal</Link>
            </Button>
            <Button asChild className="shadow-soft">
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={cn(
          "hidden lg:block absolute left-0 right-0 bg-background border-b shadow-lg transition-all duration-300 ease-out origin-top",
          activeMenu 
            ? "opacity-100 visible translate-y-0 scale-y-100" 
            : "opacity-0 invisible -translate-y-2 scale-y-95"
        )}
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
        onMouseLeave={handleMenuLeave}
      >
        <div className={cn(
          "transition-all duration-300 delay-75",
          activeMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        )}>
          {activeMenu === "services" && <MegaMenuServices />}
          {activeMenu === "solutions" && <MegaMenuSolutions />}
          {activeMenu === "monitoring" && <MegaMenuMonitoring />}
          {activeMenu === "resources" && <MegaMenuResources />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}
