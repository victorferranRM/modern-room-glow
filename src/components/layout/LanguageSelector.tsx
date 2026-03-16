import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { switchLanguagePath } from "@/i18n/routes";
import { useCurrentLang } from "@/i18n/useTranslation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { SupportedLang } from "@/i18n/routes";

export function LanguageSelector() {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const currentLang = useCurrentLang();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    const newPath = switchLanguagePath(
      location.pathname,
      currentLang,
      code as SupportedLang
    );
    navigate(newPath + location.search + location.hash);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2">
          <span className="text-lg leading-none">{currentLanguage.flag}</span>
          <span className="hidden sm:inline text-sm">{currentLanguage.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-background border z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLanguage.code === lang.code ? "bg-primary/10" : ""
            }`}
          >
            <span className="text-lg leading-none">{lang.flag}</span>
            <span className="flex-1">{lang.nativeName}</span>
            {currentLanguage.code === lang.code && (
              <span className="text-primary text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
