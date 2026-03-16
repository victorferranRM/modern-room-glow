import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, languages, getLanguageByCode } from "@/lib/languages";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    getLanguageByCode("en") || languages[0]
  );

  // Sync language from URL on navigation
  useEffect(() => {
    const syncFromUrl = () => {
      const match = window.location.pathname.match(/^\/(es|en|fr|pt)(\/|$)/);
      if (match) {
        const lang = getLanguageByCode(match[1]);
        if (lang && lang.code !== currentLanguage.code) {
          setCurrentLanguage(lang);
          document.documentElement.lang = lang.code;
          localStorage.setItem("preferred-language", lang.code);
        }
      }
    };
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [currentLanguage.code]);

  const setLanguage = (code: string) => {
    const lang = getLanguageByCode(code);
    if (lang) {
      setCurrentLanguage(lang);
      localStorage.setItem("preferred-language", code);
      document.documentElement.lang = code;
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
