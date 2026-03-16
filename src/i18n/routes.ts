export const supportedLangs = ['es', 'en', 'fr', 'pt'] as const;
export type SupportedLang = (typeof supportedLangs)[number];

export function isSupportedLang(lang: string): lang is SupportedLang {
  return supportedLangs.includes(lang as SupportedLang);
}

// Route paths per language (relative to /:lang/)
// Key → { lang: relativePath }
export const routePaths: Record<string, Record<SupportedLang, string>> = {
  home: { es: '', en: '', fr: '', pt: '' },
  contact: { es: 'contacto', en: 'contact', fr: 'contact', pt: 'contato' },
  pricing: { es: 'precios', en: 'pricing', fr: 'tarifs', pt: 'precos' },
  howItWorks: { es: 'como-funciona', en: 'how-it-works', fr: 'comment-ca-marche', pt: 'como-funciona' },
  about: { es: 'sobre-nosotros', en: 'about', fr: 'a-propos', pt: 'sobre-nos' },
  cover: { es: 'cover', en: 'cover', fr: 'cover', pt: 'cover' },
  blog: { es: 'blog', en: 'blog', fr: 'blog', pt: 'blog' },
  blogPost: { es: 'blog/:slug', en: 'blog/:slug', fr: 'blog/:slug', pt: 'blog/:slug' },
  monitoring: { es: 'monitorizacion', en: 'monitoring', fr: 'surveillance', pt: 'monitorizacao' },
  monitoringNoise: { es: 'monitorizacion/ruido', en: 'monitoring/noise', fr: 'surveillance/bruit', pt: 'monitorizacao/ruido' },
  monitoringOccupancy: { es: 'monitorizacion/ocupacion', en: 'monitoring/occupancy', fr: 'surveillance/occupation', pt: 'monitorizacao/ocupacao' },
  monitoringSmoke: { es: 'monitorizacion/humo', en: 'monitoring/smoke', fr: 'surveillance/fumee', pt: 'monitorizacao/fumaca' },
  monitoringEnvironment: { es: 'monitorizacion/ambiente', en: 'monitoring/environment', fr: 'surveillance/environnement', pt: 'monitorizacao/ambiente' },
  controlCenter: { es: 'servicios/centro-de-control', en: 'services/control-center', fr: 'services/centre-de-controle', pt: 'servicos/centro-de-controle' },
  fieldService: { es: 'servicios/servicio-de-campo', en: 'services/field-service', fr: 'services/service-terrain', pt: 'servicos/servico-de-campo' },
  guestAssist: { es: 'servicios/atencion-telefonica', en: 'services/guest-assist', fr: 'services/assistance-telephonique', pt: 'servicos/atendimento-telefonico' },
  nightWatch: { es: 'servicios/vigilancia-nocturna', en: 'services/night-watch', fr: 'services/veille-nocturne', pt: 'servicos/vigilancia-noturna' },
  pmsAccess: { es: 'servicios/acceso-pms', en: 'services/pms-access', fr: 'services/acces-pms', pt: 'servicos/acesso-pms' },
  protocols: { es: 'servicios/protocolos', en: 'services/protocols', fr: 'services/protocoles', pt: 'servicos/protocolos' },
  incidentResponse: { es: 'servicios/respuesta-incidencias', en: 'services/incident-response', fr: 'services/reponse-incidents', pt: 'servicos/resposta-incidentes' },
  emergencyHandling: { es: 'servicios/gestion-emergencias', en: 'services/emergency-handling', fr: 'services/gestion-urgences', pt: 'servicos/gestao-emergencias' },
  vacationRentals: { es: 'soluciones/alquiler-vacacional', en: 'solutions/vacation-rentals', fr: 'solutions/locations-vacances', pt: 'solucoes/aluguel-temporada' },
  hotels: { es: 'soluciones/hoteles', en: 'solutions/hotels', fr: 'solutions/hotels', pt: 'solucoes/hoteis' },
  propertyOwners: { es: 'soluciones/propietarios', en: 'solutions/property-owners', fr: 'solutions/proprietaires', pt: 'solucoes/proprietarios' },
  caseStudies: { es: 'recursos/casos-exito', en: 'resources/case-studies', fr: 'ressources/etudes-de-cas', pt: 'recursos/casos-sucesso' },
  caseStudyDetail: { es: 'recursos/casos-exito/:slug', en: 'resources/case-studies/:slug', fr: 'ressources/etudes-de-cas/:slug', pt: 'recursos/casos-sucesso/:slug' },
  savingsCalculator: { es: 'recursos/calculadora-ahorro', en: 'resources/savings-calculator', fr: 'ressources/calculateur-economies', pt: 'recursos/calculadora-economia' },
  integrations: { es: 'integraciones', en: 'integrations', fr: 'integrations', pt: 'integracoes' },
  legal: { es: 'legal', en: 'legal', fr: 'legal', pt: 'legal' },
  auth: { es: 'auth', en: 'auth', fr: 'auth', pt: 'auth' },
  login: { es: 'login', en: 'login', fr: 'login', pt: 'login' },
  checkout: { es: 'checkout', en: 'checkout', fr: 'checkout', pt: 'checkout' },
  checkoutSuccess: { es: 'checkout/success', en: 'checkout/success', fr: 'checkout/success', pt: 'checkout/success' },
  portal: { es: 'portal', en: 'portal', fr: 'portal', pt: 'portal' },
};

// Map an English path (as used in current Link to="" props) to the localized path
export function localizeHref(englishPath: string, lang: SupportedLang): string {
  if (!englishPath || englishPath.startsWith('http') || englishPath.startsWith('#')) return englishPath;

  const [rawPath, hash] = englishPath.split('#');
  const cleanPath = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  const suffix = hash ? `#${hash}` : '';

  // Exact match
  for (const paths of Object.values(routePaths)) {
    if (paths.en === cleanPath) {
      return `/${lang}/${paths[lang]}${suffix}`.replace(/\/+$/, '') || `/${lang}`;
    }
  }

  // Pattern match for dynamic segments
  for (const paths of Object.values(routePaths)) {
    if (!paths.en.includes(':')) continue;
    const regex = new RegExp('^' + paths.en.replace(/:(\w+)/g, '([^/]+)') + '$');
    const match = cleanPath.match(regex);
    if (match) {
      let result = paths[lang];
      const paramNames = [...paths.en.matchAll(/:(\w+)/g)].map(m => m[1]);
      paramNames.forEach((param, i) => {
        result = result.replace(`:${param}`, match[i + 1]);
      });
      return `/${lang}/${result}${suffix}`;
    }
  }

  // Fallback: prepend lang
  return `/${lang}/${cleanPath}${suffix}`;
}

// Get equivalent path in another language from current full path
export function switchLanguagePath(currentFullPath: string, currentLang: SupportedLang, targetLang: SupportedLang): string {
  const withoutLang = currentFullPath.replace(new RegExp(`^/${currentLang}(/|$)`), '/').replace(/^\//, '');
  const [cleanPath, hash] = withoutLang.split('#');
  const suffix = hash ? `#${hash}` : '';

  // Exact match against current language paths
  for (const paths of Object.values(routePaths)) {
    if (paths[currentLang] === cleanPath) {
      const target = paths[targetLang];
      return `/${targetLang}/${target}${suffix}`.replace(/\/+$/, '') || `/${targetLang}`;
    }
  }

  // Pattern match
  for (const paths of Object.values(routePaths)) {
    if (!paths[currentLang].includes(':')) continue;
    const regex = new RegExp('^' + paths[currentLang].replace(/:(\w+)/g, '([^/]+)') + '$');
    const match = cleanPath.match(regex);
    if (match) {
      let result = paths[targetLang];
      const paramNames = [...paths[currentLang].matchAll(/:(\w+)/g)].map(m => m[1]);
      paramNames.forEach((param, i) => {
        result = result.replace(`:${param}`, match[i + 1]);
      });
      return `/${targetLang}/${result}${suffix}`;
    }
  }

  return `/${targetLang}/${cleanPath}${suffix}`;
}
