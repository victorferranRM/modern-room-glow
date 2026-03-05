// Case Studies data structure

export interface CaseStudySection {
  id: string;
  title: string;
  content: string;
  image?: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  logo?: string;
  industry: string;
  location: string;
  headline: string;
  summary: string;
  heroImage: string;
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  videoUrl?: string;
}

export const caseStudyCategories = [
  "Todos",
  "Alquiler vacacional",
  "Hoteles",
  "Gestión de propiedades",
  "Coliving",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "stay-unique",
    company: "Stay Unique",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Alquiler vacacional",
    location: "Barcelona, España",
    headline: "Cómo Stay Unique redujo las incidencias de ruido un 85% con Roomonitor",
    summary: "Stay Unique gestiona más de 400 alquileres vacacionales premium en Barcelona. Con la solución integral de monitorización de Roomonitor, transformaron su enfoque de gestión de huéspedes y relaciones vecinales.",
    heroImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    stats: [
      { value: "400+", label: "Propiedades" },
      { value: "85%", label: "Reducción de incidencias" },
      { value: "2018", label: "Cliente desde" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre Stay Unique",
        content: "Stay Unique es una de las empresas líderes de gestión de alquiler vacacional en Barcelona, operando un portfolio de más de 400 propiedades premium en los barrios más deseados de la ciudad. Fundada en 2015, han construido una reputación de experiencias excepcionales para huéspedes y gestión profesional de propiedades.\n\nCon propiedades que van desde acogedores apartamentos en el Barrio Gótico hasta áticos de lujo con vistas al Mediterráneo, Stay Unique necesitaba una solución que pudiera escalar con su creciente portfolio manteniendo sus altos estándares de servicio.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "Gestionar más de 400 propiedades en Barcelona presentaba importantes retos operativos. Las quejas de ruido de los vecinos eran cada vez más frecuentes, amenazando las relaciones con las comunidades de vecinos y arriesgando revocaciones de licencias.\n\n\"Recibíamos quejas casi a diario\", explica Enrique Alcantara, CEO de Stay Unique. \"Cada incidencia requería atención inmediata, y nuestro equipo estaba desbordado intentando responder a problemas en toda la ciudad. Necesitábamos una solución proactiva, no solo apagar fuegos.\"",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "Stay Unique desplegó dispositivos Roomonitor en todo su portfolio, implementando monitorización de ruido en tiempo real con integración de mensajería automatizada a huéspedes. El sistema proporciona alertas instantáneas cuando los niveles de ruido superan los umbrales, permitiendo al equipo intervenir antes de que la situación escale.\n\n\"En el segmento de control de ruido, prevención de fiestas y monitorización en tiempo real de propiedades, sin duda, la solución integral de Roomonitor con sus dispositivos de última generación y el servicio de Alarm Assistant ha sido transformadora\", dice Alcantara.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "En seis meses desde la implementación, Stay Unique vio mejoras dramáticas en todas las métricas clave:\n\n• **85% de reducción** en quejas de ruido de vecinos\n• **Tiempo de respuesta reducido** a menos de 2 minutos de media\n• **Satisfacción del huésped mejorada** un 23% en reseñas post-estancia\n• **Cero revocaciones de licencia** desde la implementación\n\nEl servicio de Night Agents ha sido particularmente valioso, proporcionando monitorización 24/7 durante las horas de mayor riesgo sin necesidad de personal adicional interno.",
      },
    ],
    quote: {
      text: "En el segmento de control de ruido, prevención de fiestas y monitorización en tiempo real de propiedades, sin duda, la solución integral de Roomonitor con sus dispositivos de última generación y el servicio de Alarm Assistant ha sido transformadora para nuestro negocio.",
      author: "Enrique Alcantara",
      role: "CEO, Stay Unique",
    },
  },
  {
    slug: "del-parque-flats",
    company: "Del Parque Flats",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Gestión de propiedades",
    location: "Madrid, España",
    headline: "Del Parque Flats logra un turismo responsable con monitorización integral",
    summary: "Del Parque Flats reforzó sus medidas de control y aseguró buenas relaciones vecinales equipando cada apartamento con dispositivos Roomonitor.",
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    stats: [
      { value: "Madrid", label: "Ubicación" },
      { value: "100%", label: "Propiedades equipadas" },
      { value: "2023", label: "Cliente desde" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre Del Parque Flats",
        content: "Del Parque Flats es una empresa de gestión de propiedades con sede en Madrid, centrada en ofrecer experiencias excepcionales a los huéspedes mientras mantiene relaciones positivas con las comunidades locales. Su portfolio incluye apartamentos en ubicaciones premium de la capital española.",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "A medida que las regulaciones de alquiler vacacional en Madrid se endurecieron, Del Parque Flats necesitaba demostrar su compromiso con el turismo responsable. Querían reforzar las medidas de control y asegurar buenas relaciones con los vecinos — esencial para mantener sus licencias de operación y reputación comunitaria.",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "Del Parque Flats equipó cada apartamento que gestiona con dispositivos y aplicaciones de Roomonitor. Este enfoque integral les ayuda a prevenir incidencias y mejorar la experiencia del huésped simultáneamente.\n\n\"Queremos reforzar nuestras medidas de control y asegurar buenas relaciones con los vecinos. Cada apartamento que gestionamos está equipado con dispositivos y aplicaciones que nos ayudan a prevenir incidencias y mejorar la experiencia del huésped\", explica Fermín Criado, CEO de Del Parque Flats.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "Al implementar Roomonitor en todas las propiedades, Del Parque Flats ha:\n\n• Logrado **cumplimiento normativo total** con los requisitos de alquiler vacacional de Madrid\n• Construido **relaciones más sólidas** con comunidades de vecinos\n• **Prevenido incidencias** antes de que pudieran afectar a huéspedes o vecinos\n• Posicionado como **líder en turismo responsable**",
      },
    ],
    quote: {
      text: "Queremos reforzar nuestras medidas de control y asegurar buenas relaciones con los vecinos. Cada apartamento que gestionamos está equipado con dispositivos y aplicaciones que nos ayudan a prevenir incidencias y mejorar la experiencia del huésped.",
      author: "Fermín Criado",
      role: "CEO, Del Parque Flats",
    },
  },
  {
    slug: "checkmyguest",
    company: "Checkmyguest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Alquiler vacacional",
    location: "París, Francia",
    headline: "Cómo Checkmyguest asegura tranquilidad con cobertura de monitorización 24/7",
    summary: "Checkmyguest aprovecha el servicio Night Agents de Roomonitor para proporcionar monitorización continua, dando a su equipo el descanso que necesita mientras huéspedes y propiedades están siempre protegidos.",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    stats: [
      { value: "París", label: "Ubicación" },
      { value: "24/7", label: "Monitorización" },
      { value: "22h-7h", label: "Cobertura nocturna" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre Checkmyguest",
        content: "Checkmyguest es una empresa parisina de gestión de alquiler vacacional conocida por sus propiedades premium y estándares de servicio excepcionales. Operando en una de las ciudades más visitadas del mundo, entienden la importancia de mantener relaciones positivas con los vecinos en barrios históricos y densamente poblados.",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "Dirigir un negocio de alquiler vacacional 24/7 en París presentaba un reto importante: cómo mantener una vigilancia constante sin agotar al equipo. Los problemas con huéspedes no siguen horarios de oficina, y las incidencias nocturnas pueden escalar rápidamente si no se atienden de inmediato.",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "Checkmyguest implementó la solución integral de monitorización de Roomonitor con el servicio Night Agents. Este equipo dedicado se hace cargo de las responsabilidades de monitorización de 22h a 7h, proporcionando intervención profesional cuando es necesario.\n\n\"Este es un negocio 24/7, y en algún momento necesitas descansar — especialmente por la noche. Saber que de 22h a 7h alguien se hace cargo, puede acceder al apartamento con las llaves e intervenir in situ, no tiene precio\", explica Jordan Setti, COO de Checkmyguest.",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "Con el servicio Night Agents de Roomonitor, Checkmyguest ha logrado:\n\n• **Tranquilidad total** para el equipo de gestión fuera de horario\n• **Intervención profesional in situ** cuando la resolución remota no es suficiente\n• **Satisfacción del huésped mantenida** incluso cuando surgen problemas de noche\n• **Conciliación laboral sostenible** para el equipo de operaciones",
      },
    ],
    quote: {
      text: "Este es un negocio 24/7, y en algún momento necesitas descansar — especialmente por la noche. Saber que de 22h a 7h alguien se hace cargo, puede acceder al apartamento con las llaves e intervenir in situ, no tiene precio.",
      author: "Jordan Setti",
      role: "COO, Checkmyguest",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "you-stylish-apartments",
    company: "You Stylish Apartments",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Alquiler vacacional",
    location: "Barcelona, España",
    headline: "You Stylish Apartments minimiza incidencias a 2 de cada 1.300 reservas",
    summary: "Con el servicio Alarm Assistant y Night Agents de Roomonitor, You Stylish Apartments ha logrado tasas extraordinarias de prevención de incidencias manteniendo una excelente experiencia del huésped.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    stats: [
      { value: "2/1.300", label: "Tasa de incidencias" },
      { value: "Barcelona", label: "Ubicación" },
      { value: "99,8%", label: "Tasa de éxito" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre You Stylish Apartments",
        content: "You Stylish Apartments ofrece alquileres vacacionales premium en Barcelona, combinando diseño elegante con servicio excepcional. Su portfolio presenta propiedades cuidadosamente seleccionadas que reflejan la vibrante cultura y patrimonio arquitectónico de la ciudad.",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "Gestionar un alto volumen de reservas mientras se mantiene la calidad y se previenen incidencias es un equilibrio constante. You Stylish Apartments necesitaba un sistema fiable que pudiera manejar su escala manteniendo las tasas de incidencias lo más cerca posible de cero.",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "La empresa implementó la suite completa de herramientas de monitorización de Roomonitor, incluyendo monitorización de ruido en tiempo real y el servicio Alarm Assistant con Night Agents dedicados. Esta combinación proporciona cobertura integral las 24 horas.\n\n\"Gracias a Roomonitor, hemos minimizado las incidencias a 2 de cada 1.300 reservas. Ahora podemos afirmar que tenemos un elemento externo totalmente fiable con Alarm Assistant Night Agents\", comparte Ignacio García, CEO.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "You Stylish Apartments ha logrado métricas de rendimiento líderes en la industria:\n\n• **Incidencias reducidas a solo 2 por cada 1.300 reservas** (99,85% de éxito)\n• **Cobertura 24/7 fiable** a través del servicio Night Agents\n• **Solución escalable** que crece con su portfolio\n• **Reputación mejorada** entre huéspedes y vecinos por igual",
      },
    ],
    quote: {
      text: "Gracias a Roomonitor, hemos minimizado las incidencias a 2 de cada 1.300 reservas. Ahora podemos afirmar que tenemos un elemento externo totalmente fiable con Alarm Assistant Night Agents.",
      author: "Ignacio García",
      role: "CEO, You Stylish Apartments",
    },
  },
  {
    slug: "mun-stays",
    company: "Mun Stays",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Gestión de propiedades",
    location: "España",
    headline: "Cómo Mun Stays monitorizó propiedades vacías durante la pandemia",
    summary: "Durante la pandemia, Roomonitor se convirtió en indispensable para Mun Stays, permitiéndoles monitorizar actividad sospechosa en propiedades incluso cuando la actividad turística estaba cerrada.",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    stats: [
      { value: "España", label: "Ubicación" },
      { value: "Tiempo real", label: "Monitorización" },
      { value: "2020", label: "Preparados para la pandemia" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre Mun Stays",
        content: "Mun Stays es una empresa española de gestión de propiedades especializada en alquiler vacacional. Cuando la pandemia de COVID-19 golpeó, se enfrentaron a un reto sin precedentes: cómo proteger su portfolio de propiedades durante un periodo prolongado sin actividad turística.",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "La pandemia creó una situación única: las propiedades permanecieron vacías durante meses sin huéspedes, pero seguían necesitando protección contra intrusiones, ocupas y otros riesgos de seguridad. Las medidas de seguridad tradicionales no podían proporcionar la monitorización constante y rentable que se necesitaba.",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "Los dispositivos de monitorización de Roomonitor resultaron invaluables durante este periodo. El sistema permitió a Mun Stays detectar cualquier actividad sospechosa en sus propiedades vacías en tiempo real, alertando al equipo inmediatamente si había alguna preocupación.\n\n\"Cabe destacar que durante la pandemia con la actividad cerrada, Roomonitor nos permitió monitorizar cualquier actividad sospechosa en las propiedades en tiempo real. A partir de ahí, Roomonitor se ha convertido en indispensable para nosotros\", explica David Lombardía, CEO.",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "A lo largo de la pandemia y después, Mun Stays se ha beneficiado de:\n\n• **Monitorización de seguridad en tiempo real** para propiedades vacías\n• **Alertas inmediatas** ante cualquier actividad sospechosa\n• **Tranquilidad** en circunstancias sin precedentes\n• **Una solución ahora indispensable** para sus operaciones diarias",
      },
    ],
    quote: {
      text: "Cabe destacar que durante la pandemia con la actividad cerrada, Roomonitor nos permitió monitorizar cualquier actividad sospechosa en las propiedades en tiempo real. A partir de ahí, Roomonitor se ha convertido en indispensable para nosotros.",
      author: "David Lombardía",
      role: "CEO, Mun Stays",
    },
  },
  {
    slug: "numa-hotels",
    company: "Numa",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
    industry: "Hoteles",
    location: "Europa",
    headline: "Numa escala su hospitalidad digital-first en Europa con monitorización inteligente",
    summary: "Como empresa de hospitalidad tecnológica, Numa integra Roomonitor en su enfoque digital-first para gestionar propiedades en múltiples ciudades europeas de manera eficiente.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    stats: [
      { value: "Europa", label: "Cobertura" },
      { value: "Digital-First", label: "Enfoque" },
      { value: "Multi-ciudad", label: "Operaciones" },
    ],
    sections: [
      {
        id: "about",
        title: "Sobre Numa",
        content: "Numa es una empresa de hospitalidad tecnológica que opera en las principales ciudades europeas. Su enfoque digital-first reimagina la experiencia del huésped, combinando el confort de vivir en un apartamento con la fiabilidad de los servicios hoteleros — todo impulsado por tecnología inteligente.",
      },
      {
        id: "challenge",
        title: "El Reto",
        content: "Operar una empresa de hospitalidad digital-first en múltiples ciudades requiere tecnología que pueda escalar sin problemas. Numa necesitaba soluciones de monitorización que pudieran integrarse con su stack tecnológico proporcionando cobertura consistente en diversos tipos de propiedades y ubicaciones.",
      },
      {
        id: "solution",
        title: "La Solución",
        content: "El enfoque API-first de Roomonitor y sus opciones de despliegue flexibles lo convirtieron en la elección ideal para las operaciones tecnológicas de Numa. La integración permite respuestas automatizadas y flujo de datos sin interrupciones entre sistemas.\n\nLa infraestructura de monitorización escala automáticamente a medida que Numa se expande a nuevos mercados, manteniendo una calidad de servicio consistente en su creciente portfolio.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      },
      {
        id: "results",
        title: "Los Resultados",
        content: "Con Roomonitor como parte de su stack tecnológico, Numa ha logrado:\n\n• **Integración fluida** con su plataforma de operaciones digitales\n• **Monitorización consistente** en múltiples ciudades europeas\n• **Infraestructura escalable** que crece con el negocio\n• **Experiencia del huésped mejorada** a través de gestión proactiva",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  if (industry === "Todos") return caseStudies;
  return caseStudies.filter((study) => study.industry === industry);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 3): CaseStudy[] {
  return caseStudies
    .filter((study) => study.slug !== currentSlug)
    .slice(0, limit);
}
