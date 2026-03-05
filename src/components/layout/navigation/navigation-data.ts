// Navigation data structure for Roomonitor's mega-menu

export const servicesData = {
  operations: {
    title: "OPERACIONES",
    items: [
      {
        title: "Centro de Control",
        description: "Verificación humana, toma de decisiones y escalado",
        href: "/services/control-center",
      },
      {
        title: "Agentes Field Service",
        description: "Intervención in situ cuando la resolución remota no es suficiente",
        href: "/services/field-service",
        note: "Consulta disponibilidad*",
      },
    ],
  },
  emergencies: {
    title: "GESTIÓN DE EMERGENCIAS",
    items: [
      {
        title: "Atención telefónica",
        description: "Atención telefónica para huéspedes fuera de horario",
        href: "/services/guest-assist",
      },
      {
        title: "Night Watch",
        description: "Agentes dedicados monitorizando tus propiedades para prevenir fiestas",
        href: "/services/night-watch",
      },
    ],
  },
  integration: {
    title: "INTEGRACIÓN OPERATIVA",
    items: [
      {
        title: "Acceso PMS y Herramientas",
        description: "Operamos directamente desde tu ecosistema operativo",
        href: "/services/pms-access",
      },
      {
        title: "Protocolos Operativos",
        description: "Actuamos según tus prioridades y patrones de actuación",
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
      { title: "Base de Conocimiento", href: "https://help.roomonitor.com/es/ayuda", external: true },
      { title: "Calculadora de Ahorro", href: "/resources/savings-calculator" },
    ],
  },
  company: {
    title: "EMPRESA",
    items: [
      { title: "Casos de Éxito", href: "/resources/case-studies" },
      { title: "Sobre Roomonitor", href: "/about" },
    ],
  },
};
