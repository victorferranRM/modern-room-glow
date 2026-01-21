import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, languages, getLanguageByCode } from "@/lib/languages";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem("preferred-language");
    if (savedLang) {
      const lang = getLanguageByCode(savedLang);
      if (lang) {
        setCurrentLanguage(lang);
      }
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0];
      const matchedLang = getLanguageByCode(browserLang);
      if (matchedLang) {
        setCurrentLanguage(matchedLang);
      }
    }
  }, []);

  const setLanguage = (code: string) => {
    const lang = getLanguageByCode(code);
    if (lang) {
      setCurrentLanguage(lang);
      localStorage.setItem("preferred-language", code);
      // Update document lang attribute for accessibility
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
