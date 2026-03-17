// Navigation data structure — hrefs only.
// All visible text comes from i18n dictionaries via useTranslation.

export const serviceHrefs = {
  operations: ["/services/control-center", "/services/field-service"],
  emergencies: ["/services/guest-assist", "/services/night-watch"],
  integration: ["/services/pms-access", "/services/protocols"],
};

export const monitoringHrefs = [
  "/monitoring/noise",
  "/monitoring/occupancy",
  "/monitoring/smoke",
  "/monitoring/environment",
];

export const resourceHrefs = {
  learn: [
    { href: "/blog", external: false },
    { href: "https://help.roomonitor.com/es/ayuda", external: true },
    { href: "/resources/savings-calculator", external: false },
  ],
  company: [
    { href: "/resources/case-studies", external: false },
    { href: "/about", external: false },
  ],
};

export const footerHrefs = {
  operativa: [
    "/cover",
    "/services/control-center",
    "/services/field-service",
    "/services/guest-assist",
    "/services/night-watch",
    "/services/pms-access",
    "/services/protocols",
  ],
  tecnologia: [
    "/monitoring",
    "/monitoring/noise",
    "/monitoring/occupancy",
    "/monitoring/smoke",
    "/monitoring/environment",
  ],
  company: [
    "/about",
    "/how-it-works",
    "/pricing",
    "/contact",
    "/services/pms-access",
    "/resources/case-studies",
  ],
  resources: [
    { href: "/blog", external: false },
    { href: "https://help.roomonitor.com/es/ayuda", external: true },
    { href: "/resources/savings-calculator", external: false },
    { href: "https://manager.roomonitor.com", external: true },
    { href: "/portal/dashboard", external: false },
  ],
  legal: [
    "/legal#terms-of-use",
    "/legal#legal-notice",
    "/legal#privacy-policy",
    "/legal#cookie-policy",
    "/legal#terms-of-service",
    "/legal#shipping-returns",
  ],
};
