import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import roomonitorLogo from "@/assets/roomonitor-logo.png";
import roomonitorDevice from "@/assets/roomonitor-device.jpg";
import { MegaMenuServices } from "./navigation/MegaMenuServices";
import { MegaMenuMonitoring } from "./navigation/MegaMenuMonitoring";
import { MegaMenuResources } from "./navigation/MegaMenuResources";
import { MobileMenu } from "./navigation/MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { useAuth } from "@/hooks/useAuth";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type MenuType = "services" | "dispositivo" | "resources" | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  // Preload device image so mega menu appears instantly
  useEffect(() => {
    const img = new Image();
    img.src = roomonitorDevice;
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleMenuEnter = (menu: MenuType) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const megaMenuItems: { label: React.ReactNode; menu: MenuType }[] = [
    { label: "Servicios", menu: "services" },
    { label: "Dispositivo", menu: "dispositivo" },
    { label: "Recursos", menu: "resources" },
  ];

  return (
    <TooltipProvider>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b"
        onMouseLeave={handleMenuLeave}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 mr-4">
              <img 
                src={roomonitorLogo} 
                alt="Roomonitor" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation — Dispositivo ▾ · Cover™ · Servicios ▾ · Cómo funciona · Recursos ▾ */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Dispositivo (mega menu) */}
              <button
                onMouseEnter={() => handleMenuEnter("dispositivo")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  activeMenu === "dispositivo" ? "text-primary" : "text-foreground hover:text-primary"
                )}
              >
                Dispositivo
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeMenu === "dispositivo" && "rotate-180")} />
              </button>

              {/* Cover™ */}
              <Link
                to="/cover"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setActiveMenu(null)}
              >
                Cover<sup className="text-[9px] ml-0.5">™</sup>
              </Link>

              {/* Servicios (mega menu) */}
              <button
                onMouseEnter={() => handleMenuEnter("services")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  activeMenu === "services" ? "text-primary" : "text-foreground hover:text-primary"
                )}
              >
                Servicios
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeMenu === "services" && "rotate-180")} />
              </button>

              {/* Cómo funciona */}
              <Link
                to="/how-it-works"
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setActiveMenu(null)}
              >
                Cómo funciona
              </Link>

              {/* Recursos (mega menu) */}
              <button
                onMouseEnter={() => handleMenuEnter("resources")}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  activeMenu === "resources" ? "text-primary" : "text-foreground hover:text-primary"
                )}
              >
                Recursos
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeMenu === "resources" && "rotate-180")} />
              </button>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSelector />

              {!loading && user ? (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" asChild>
                        <Link to="/portal">
                          <User className="h-4 w-4" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Portal Cliente</TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleSignOut}>
                        <LogOut className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Cerrar sesión</TooltipContent>
                  </Tooltip>
                </>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to="/auth">
                        <User className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Portal Cliente</TooltipContent>
                </Tooltip>
              )}

              <Button variant="outline" size="sm" asChild>
                <Link to="/pricing" className="gap-1.5">
                  <ShoppingCart className="h-3.5 w-3.5" />
                  Comprar
                </Link>
              </Button>

              <Button size="sm" asChild>
                <Link to="/contact">Contactar</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
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
            "hidden lg:block absolute left-0 right-0 bg-white border-b shadow-lg transition-all duration-300 ease-out origin-top",
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
            {activeMenu === "dispositivo" && <MegaMenuMonitoring />}
            {activeMenu === "resources" && <MegaMenuResources />}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
      </header>
    </TooltipProvider>
  );
}
