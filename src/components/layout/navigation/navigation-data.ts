// Navigation data structure for Roomonitor's mega-menu

export const servicesData = {
  operations: {
    title: "OPERACIONES",
    items: [
      {
        title: "Guest Assist™",
        description: "Atención telefónica 24/7 para huéspedes fuera de horario",
        href: "/services/guest-assist",
      },
      {
        title: "Centro de Control 24/7",
        description: "Verificación humana, toma de decisiones y escalado",
        href: "/services/control-center",
      },
      {
        title: "Agentes Field Service",
        description: "Intervención in situ cuando la resolución remota no es suficiente",
        href: "/services/field-service",
      },
    ],
  },
  incidentRisk: {
    title: "GESTIÓN DE INCIDENCIAS Y RIESGOS",
    items: [
      {
        title: "Respuesta a Incidencias",
        description: "Detección y resolución de incidencias de extremo a extremo",
        href: "/services/incident-response",
      },
      {
        title: "Gestión de Emergencias",
        description: "Situaciones críticas gestionadas con protocolos y acción real",
        href: "/services/emergency-handling",
      },
      {
        title: "Night Watch",
        description: "Agentes dedicados monitorizando tus propiedades para prevenir fiestas",
        href: "/services/night-watch",
      },
    ],
  },
  enablement: {
    title: "HABILITACIÓN OPERATIVA",
    items: [
      {
        title: "Acceso PMS y Herramientas",
        description: "Operamos directamente desde el ecosistema operativo del cliente",
        href: "/services/pms-access",
      },
      {
        title: "Protocolos Operativos",
        description: "Reglas y prioridades del cliente ejecutadas 24/7",
        href: "/services/protocols",
      },
    ],
  },
};

export const solutionsData = [
  {
    title: "Alquileres Vacacionales",
    description: "Cobertura operativa completa fuera de horario",
    href: "/solutions/vacation-rentals",
  },
  {
    title: "Hoteles",
    description: "Detección de humo y protección de activos",
    href: "/solutions/hotels",
  },
  {
    title: "Propietarios",
    description: "Monitorización de ruido y prevención de incidencias",
    href: "/solutions/property-owners",
  },
];

export const monitoringData = [
  {
    title: "Monitorización de Ruido",
    description: "Detección acústica en tiempo real y alertas",
    href: "/monitoring/noise",
  },
  {
    title: "Detección de Ocupación",
    description: "Seguimiento preciso de presencia en tus propiedades",
    href: "/monitoring/occupancy",
  },
  {
    title: "Detección de Humo",
    description: "Alertas inmediatas de humo para proteger tus activos",
    href: "/monitoring/smoke",
  },
  {
    title: "Calidad del Aire, Temperatura y Humedad",
    description: "Monitorización ambiental para el confort del huésped",
    href: "/monitoring/environment",
  },
];

export const resourcesData = {
  learn: {
    title: "APRENDER",
    items: [
      { title: "Blog", href: "/blog" },
      { title: "Guías", href: "/resources/guides" },
      { title: "Base de Conocimiento", href: "/resources/knowledge-base" },
    ],
  },
  ecosystem: {
    title: "ECOSISTEMA",
    items: [
      { title: "Integraciones", href: "/integrations" },
      { title: "Casos de Éxito", href: "/resources/case-studies" },
      { title: "Calculadora de Ahorro", href: "/resources/savings-calculator" },
    ],
  },
  company: {
    title: "EMPRESA",
    items: [
      { title: "Sobre Roomonitor", href: "/about" },
      { title: "Contacto", href: "/contact" },
    ],
  },
};
