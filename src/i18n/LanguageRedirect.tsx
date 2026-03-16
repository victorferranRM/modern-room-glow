import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSupportedLang, SupportedLang } from "./routes";

export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if current path has a non-lang prefix (old route like /contact)
    const currentPath = window.location.pathname;
    
    // If already on a lang-prefixed route, do nothing
    const langMatch = currentPath.match(/^\/(es|en|fr|pt)(\/|$)/);
    if (langMatch) return;

    // Determine target language
    let targetLang: SupportedLang = 'en';
    
    // Check localStorage first
    const saved = localStorage.getItem("preferred-language");
    if (saved && isSupportedLang(saved)) {
      targetLang = saved;
    } else {
      // Detect browser language
      const browserLangs = navigator.languages || [navigator.language];
      for (const bl of browserLangs) {
        const code = bl.split('-')[0].toLowerCase();
        if (isSupportedLang(code)) {
          targetLang = code;
          break;
        }
      }
    }

    // If we're at root "/", redirect to /{lang}
    if (currentPath === '/' || currentPath === '') {
      navigate(`/${targetLang}`, { replace: true });
    } else {
      // Old route without lang prefix: prepend the lang
      navigate(`/${targetLang}${currentPath}`, { replace: true });
    }
  }, [navigate]);

  return null;
}
