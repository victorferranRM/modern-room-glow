import { useLocation } from "react-router-dom";
import { SupportedLang, isSupportedLang } from "./routes";
import esTranslations from "./locales/es";
import enTranslations from "./locales/en";
import frTranslations from "./locales/fr";
import ptTranslations from "./locales/pt";

const translationMap: Record<SupportedLang, Record<string, any>> = {
  es: esTranslations,
  en: enTranslations,
  fr: frTranslations,
  pt: ptTranslations,
};

export function useCurrentLang(): SupportedLang {
  const { pathname } = useLocation();
  const match = pathname.match(/^\/(es|en|fr|pt)(\/|$)/);
  return match && isSupportedLang(match[1]) ? match[1] : 'en';
}

function getNestedValue(obj: any, path: string): string {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return path;
    current = current[key];
  }
  return typeof current === 'string' ? current : path;
}

export function useTranslation() {
  const lang = useCurrentLang();
  const translations = translationMap[lang];

  function t(key: string, replacements?: Record<string, string>): string {
    let value = getNestedValue(translations, key);
    if (replacements) {
      Object.entries(replacements).forEach(([k, v]) => {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      });
    }
    return value;
  }

  // Get a nested section as an object (for arrays of data)
  function tObject<T = any>(key: string): T {
    const keys = key.split('.');
    let current: any = translations;
    for (const k of keys) {
      if (current === undefined) return {} as T;
      current = current[k];
    }
    return current as T;
  }

  return { t, tObject, lang };
}
