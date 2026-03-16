import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSupportedLang, SupportedLang } from "./routes";

export function LanguageRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem("preferred-language");
    if (saved && isSupportedLang(saved)) {
      navigate(`/${saved}`, { replace: true });
      return;
    }

    // Detect browser language
    const browserLangs = navigator.languages || [navigator.language];
    let detectedLang: SupportedLang = 'en'; // default

    for (const bl of browserLangs) {
      const code = bl.split('-')[0].toLowerCase();
      if (isSupportedLang(code)) {
        detectedLang = code;
        break;
      }
    }

    navigate(`/${detectedLang}`, { replace: true });
  }, [navigate]);

  return null;
}
