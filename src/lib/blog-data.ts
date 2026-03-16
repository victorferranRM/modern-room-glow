export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
}

export const categories = [
  "Todas las categorías",
  "Alquiler vacacional",
  "Eventos",
  "Noticias del sector",
  "Gestión de propiedades",
  "Hoteles",
  "Roomonitor",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "del-parque-flats-turismo-responsable",
    title: "Del Parque Flats destaca la importancia de Roomonitor en la promoción del turismo responsable",
    excerpt: "La empresa malagueña Del Parque Flats lidera el turismo responsable gracias a la tecnología de Roomonitor: monitores de ruido, detectores de humo y control operativo profesional.",
    content: `
## Liderando el turismo responsable en Málaga

Del Parque Flats, un destacado operador de alquiler vacacional con sede en Málaga, se ha convertido en pionero en la implementación de prácticas de turismo responsable a través de las soluciones integrales de monitorización de Roomonitor.

### El desafío

Gestionar múltiples propiedades de alquiler vacacional en un centro histórico presenta retos únicos:

- **Quejas por ruido** de los vecinos que afectan las relaciones comunitarias
- **Garantizar la seguridad de los huéspedes** en todas las propiedades
- **Mantener el control operativo** sin personal presencial 24/7
- **Generar confianza** con las autoridades locales y las comunidades

### La solución Roomonitor

Del Parque Flats desplegó dispositivos Roomonitor en toda su cartera, implementando:

1. **Monitorización de ruido** - Alertas en tiempo real cuando los niveles de decibelios superan los umbrales
2. **Detección de humo** - Notificaciones instantáneas ante posibles riesgos de incendio
3. **Seguimiento de ocupación** - Monitorización de huéspedes respetuosa con la privacidad
4. **Sensores ambientales** - Monitorización de temperatura y humedad

### Resultados obtenidos

Desde la implementación de Roomonitor:

- **Reducción del 92%** en quejas por ruido
- **Cero incidentes de tabaco** reportados
- **Mejora del 35%** en las puntuaciones de satisfacción de los huéspedes
- **Relaciones más sólidas** con la comunidad local

### Un modelo para el sector

Del Parque Flats demuestra que la gestión profesional de alquileres vacacionales y el turismo responsable no son excluyentes. Su éxito ha inspirado a otros operadores de Málaga a adoptar enfoques similares.

> "Roomonitor ha transformado la forma en que gestionamos nuestras propiedades. Ahora podemos garantizar tranquilidad a nuestros vecinos mientras ofrecemos experiencias excepcionales a los huéspedes." - Dirección de Del Parque Flats
    `,
    category: "Roomonitor",
    date: "2026-01-18",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    slug: "airbnb-politicas-cancelacion-octubre-2025",
    title: "Airbnb actualiza sus políticas de cancelación: nuevas condiciones desde octubre de 2025",
    excerpt: "Airbnb ha anunciado una importante actualización de sus políticas de cancelación para estancias cortas. Desde el 1 de octubre de 2025, todas las reservas de 27 noches o menos estarán sujetas a nuevas condiciones.",
    content: `
## Nuevo marco de cancelaciones

Airbnb ha implementado cambios significativos en sus políticas de cancelación, que afectan tanto a anfitriones como a huéspedes en todo el mundo.

### Cambios principales

Las políticas actualizadas incluyen:

- **Plazos más estrictos** para la cancelación gratuita
- **Mayor protección para los anfitriones** frente a cancelaciones de última hora
- **Estructuras de reembolso más claras** para los huéspedes
- **Opciones de flexibilidad mejoradas** para anuncios premium

### Impacto en los anfitriones

Los gestores de propiedades deben tener en cuenta:

1. **Nuevas políticas predeterminadas** aplicadas automáticamente a los anuncios
2. **Opciones para actualizar** a políticas más protectoras
3. **Cambios en los plazos de pago** para reservas canceladas
4. **Políticas de reseñas actualizadas** para disputas relacionadas con cancelaciones

### Lo que los huéspedes deben saber

Los viajeros que reserven después de octubre de 2025:

- Revisar cuidadosamente las condiciones de cancelación antes de reservar
- Comprender los nuevos niveles de reembolso
- Considerar un seguro de viaje para mayor protección
- Consultar las políticas individuales de cada anuncio

### Recomendaciones para gestores de propiedades

Para adaptarse a estos cambios:

- Revisa y actualiza la configuración de tu política de cancelación
- Comunica los cambios a los huéspedes recurrentes
- Forma a tu equipo en los nuevos procedimientos
- Monitoriza los patrones de cancelación para realizar ajustes
    `,
    category: "Noticias del sector",
    date: "2026-01-15",
    readTime: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    slug: "cantabria-sensores-ruido-regulacion",
    title: "Cantabria exige sensores de ruido en alquileres vacacionales: nueva regulación en vigor",
    excerpt: "El Gobierno de Cantabria ha aprobado oficialmente el Decreto 50/2025, una legislación clave destinada a regular los alquileres de corta estancia, mejorar la seguridad jurídica y las relaciones vecinales.",
    content: `
## Regulación pionera en Cantabria

Cantabria se ha convertido en una de las primeras regiones españolas en exigir dispositivos de monitorización de ruido en los alquileres vacacionales, estableciendo un precedente en la legislación de turismo responsable.

### Los nuevos requisitos

El Decreto 50/2025 establece:

- **Sensores de ruido obligatorios** en todos los alquileres vacacionales con licencia
- **Umbrales máximos de decibelios** durante las horas de descanso
- **Requisitos de informes** para los operadores de propiedades
- **Sanciones por incumplimiento** de hasta 30.000 €

### Calendario de implementación

Los operadores de propiedades deben cumplir en los siguientes plazos:

1. **Marzo 2026** - Todas las nuevas altas requieren sensores de ruido
2. **Septiembre 2026** - Las propiedades existentes deben instalar dispositivos
3. **Diciembre 2026** - Comienza la aplicación total

### Por qué es importante

Esta regulación aborda:

- Las crecientes preocupaciones de las comunidades residenciales
- La necesidad de estándares profesionales de gestión
- El equilibrio entre turismo y calidad de vida
- La creación de un precedente nacional para otras regiones

### Cómo ayuda Roomonitor

Los dispositivos Roomonitor cumplen totalmente con la nueva regulación, ofreciendo:

- Monitorización de ruido en tiempo real sin grabación de audio
- Alertas automatizadas y documentación
- Integración con sistemas de gestión de propiedades
- Evidencias para demostrar el cumplimiento normativo
    `,
    category: "Noticias del sector",
    date: "2026-01-12",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    slug: "hawaii-leyes-alquiler-corta-estancia-2026",
    title: "Leyes de alquiler de corta estancia en Hawái en 2026: normativas estatales, prohibiciones por condado, impuestos y aplicación",
    excerpt: "Este artículo explora cómo las leyes de alquiler de corta estancia de Hawái en 2026 concentran los alquileres vacacionales en zonas turísticas y de resort, otorgando a los condados poder explícito para eliminarlos de las zonas residenciales.",
    content: `
## El cambiante panorama del alquiler de corta estancia en Hawái

Hawái ha implementado algunas de las regulaciones de alquiler de corta estancia más estrictas de Estados Unidos. Comprender estas normas es crucial para propietarios y gestores de propiedades.

### Marco normativo estatal

La legislatura estatal de Hawái ha establecido un marco que:

- Otorga a los condados la autoridad para regular los alquileres de corta estancia
- Exige el registro en el Departamento de Impuestos de Hawái
- Requiere la recaudación de los impuestos GET y TAT

### Desglose por condado

#### Oahu (Condado de Honolulu)
- Se requieren permisos para todos los alquileres vacacionales
- Mínimo de 90 días en la mayoría de las zonas residenciales
- Aplicación estricta con multas significativas

#### Condado de Maui
- Registro y cumplimiento obligatorios
- Restricciones en zonas residenciales
- Participación comunitaria en nuevos permisos

#### Isla de Hawái (Big Island)
- Más permisiva que otros condados
- La zonificación determina la elegibilidad
- Registro igualmente obligatorio

#### Kauai
- Permisos limitados disponibles
- Preferencia por operadores establecidos
- Fuerte supervisión comunitaria

### Obligaciones fiscales

Los propietarios deben recaudar y remitir:

1. **Impuesto General sobre el Consumo (GET)** - 4,5%
2. **Impuesto sobre Alojamientos Temporales (TAT)** - 10,25%
3. **Recargos del condado** - Variable según la ubicación

### Estrategias de cumplimiento

Para cumplir la normativa en Hawái:

- Registrarse en todas las agencias requeridas
- Mostrar los números de permiso en los anuncios
- Recaudar y remitir todos los impuestos
- Cumplir las normas de ocupación y ruido
- Mantener la cobertura de seguro
    `,
    category: "Alquiler vacacional",
    date: "2026-01-10",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    slug: "niveles-decibelios-aceptables-guia-ruido",
    title: "Niveles de decibelios aceptables: guía de límites de ruido y horas de silencio para anfitriones de Airbnb y alquileres de corta estancia",
    excerpt: "Este artículo explica cómo los límites de ruido afectan a los alquileres de corta estancia, los niveles de decibelios aceptables según la franja horaria y cómo los anfitriones pueden prevenir quejas.",
    content: `
## Entender los niveles de decibelios en alquileres vacacionales

Gestionar el ruido en alquileres de corta estancia requiere comprender qué constituyen niveles de sonido aceptables y cómo monitorizarlos eficazmente.

### Conceptos básicos de la escala de decibelios

Comprender la escala de decibelios ayuda a establecer umbrales apropiados:

| Nivel de decibelios | Ejemplo de sonido |
|---------------------|-------------------|
| 30 dB | Biblioteca silenciosa |
| 50 dB | Conversación normal |
| 70 dB | Aspiradora |
| 85 dB | Tráfico urbano |
| 100 dB | Concierto |

### Umbrales recomendados

Para alquileres vacacionales, recomendamos:

- **Diurno (7:00-22:00)**: 70 dB máximo
- **Noche temprana (22:00-23:00)**: 60 dB máximo
- **Nocturno (23:00-7:00)**: 50 dB máximo

### Buenas prácticas para horas de silencio

Establece horas de silencio claras en las normas de la casa:

1. Define franjas horarias específicas
2. Explica las consecuencias de las infracciones
3. Proporciona información de contacto para incidencias
4. Ten en cuenta las ordenanzas locales

### Prevención de problemas de ruido

Las medidas proactivas incluyen:

- **Monitorización inteligente** - Alertas en tiempo real
- **Comunicación clara** - Mensajes previos a la llegada
- **Verificación de huéspedes** - Historial de reseñas
- **Diseño de la propiedad** - Insonorización cuando sea posible
    `,
    category: "Alquiler vacacional",
    date: "2026-01-08",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    slug: "monitorizacion-ocupacion-hoteles-tendencias",
    title: "Monitorización de la ocupación hotelera: tendencias y tecnologías 2026 para gestores de propiedades",
    excerpt: "Descubre las últimas tecnologías que están transformando la monitorización de la ocupación hotelera, desde sensores IoT hasta analíticas impulsadas por IA que optimizan las operaciones.",
    content: `
## La evolución de la monitorización de la ocupación

La monitorización de la ocupación hotelera ha evolucionado significativamente, aprovechando el IoT y la IA para proporcionar información en tiempo real a los gestores de propiedades.

### Panorama tecnológico actual

Las soluciones modernas incluyen:

- **Sensores IoT** - Detección de movimiento y presencia
- **Termostatos inteligentes** - Inferencia de ocupación
- **Sensores de puerta** - Seguimiento de entradas y salidas
- **Analítica de cámaras** - Conteo anonimizado

### Beneficios para los hoteles

Implementar la monitorización de la ocupación aporta:

1. **Ahorro energético** - Reducción del 20-30% en costes de climatización
2. **Optimización del personal** - Ajuste de horarios de limpieza
3. **Cumplimiento de seguridad** - Adhesión a normativas contra incendios
4. **Experiencia del huésped** - Servicios personalizados

### Consideraciones de privacidad

La implementación ética requiere:

- Comunicación clara a los huéspedes
- Sin identificación personal
- Solo datos agregados
- Almacenamiento seguro de datos

### Integración con PMS

Los sistemas modernos se conectan con la gestión de propiedades para:

- Automatizar las actualizaciones de estado de las habitaciones
- Activar solicitudes de limpieza
- Ajustar la configuración energética
- Generar informes de ocupación
    `,
    category: "Hoteles",
    date: "2026-01-05",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    slug: "automatizacion-gestion-propiedades-2026",
    title: "Automatización en la gestión de propiedades: optimizando operaciones con tecnología inteligente",
    excerpt: "Descubre cómo la automatización está revolucionando la gestión de propiedades, desde las comunicaciones con los huéspedes hasta la programación del mantenimiento y mucho más.",
    content: `
## Automatización de la gestión de propiedades

La automatización se ha convertido en algo esencial para escalar las operaciones de gestión de propiedades manteniendo experiencias de calidad para los huéspedes.

### Áreas clave de automatización

Los gestores de propiedades modernos automatizan:

- **Comunicaciones con huéspedes** - Instrucciones de check-in, normas de la casa
- **Control de acceso** - Cerraduras inteligentes, entrada sin llave
- **Monitorización** - Ruido, ocupación, medioambiente
- **Mantenimiento** - Programación, coordinación con proveedores
- **Limpieza** - Asignación de tareas, controles de calidad

### Estrategia de implementación

Una automatización exitosa requiere:

1. **Auditar los procesos actuales** - Identificar cuellos de botella
2. **Priorizar las áreas de alto impacto** - La experiencia del huésped primero
3. **Seleccionar herramientas compatibles** - La integración importa
4. **Formar al equipo** - La tecnología habilita, las personas ejecutan
5. **Medir e iterar** - Mejora continua

### ROI de la automatización

Los gestores de propiedades reportan:

- Reducción del 60% en tareas manuales
- Tiempos de respuesta un 40% más rápidos
- Mejora del 25% en la satisfacción del huésped
- Disminución del 35% en costes operativos
    `,
    category: "Gestión de propiedades",
    date: "2026-01-03",
    readTime: 5,
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    slug: "gestion-eventos-alquileres-vacacionales",
    title: "Gestión de eventos y reuniones en alquileres vacacionales: guía completa",
    excerpt: "Cómo gestionar solicitudes de fiestas, establecer políticas claras y usar tecnología para prevenir reuniones no autorizadas manteniendo relaciones positivas con los huéspedes.",
    content: `
## Gestión de eventos en alquileres vacacionales

Equilibrar la hospitalidad con la protección de la propiedad requiere políticas claras y monitorización inteligente cuando se trata de eventos y reuniones.

### Establecer políticas claras

Define tu postura sobre los eventos:

- **Política de cero eventos** - El enfoque más estricto
- **Solo reuniones aprobadas** - Caso por caso
- **Pequeñas reuniones permitidas** - Con límites claros
- **Propiedades aptas para eventos** - Diseñadas para reuniones

### Estrategias de prevención

Reduce los riesgos de eventos no autorizados:

1. **Descripciones claras en el anuncio** - Indica las políticas desde el principio
2. **Verificación de huéspedes** - Revisa los patrones de reserva
3. **Monitorización inteligente** - Alertas de ruido y ocupación
4. **Depósitos de seguridad** - Responsabilidad financiera

### Soluciones tecnológicas

Usa la tecnología para prevenir problemas:

- **Monitores de ruido** - Alerta antes de que los vecinos se quejen
- **Sensores de ocupación** - Detecta números inusuales
- **Acceso inteligente** - Controla los puntos de entrada
- **Cámaras exteriores** - Monitoriza zonas comunes

### Gestión de infracciones

Cuando se producen eventos sin permiso:

1. Recibir la alerta automatizada
2. Contactar con los huéspedes de inmediato
3. Documentar la situación
4. Aplicar las consecuencias establecidas
5. Revisar para prevención futura
    `,
    category: "Eventos",
    date: "2025-12-28",
    readTime: 4,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    slug: "guia-instalacion-dispositivo-roomonitor",
    title: "Cómo instalar y configurar tu dispositivo Roomonitor: guía paso a paso",
    excerpt: "Una guía completa para instalar dispositivos Roomonitor en tus propiedades, incluyendo la ubicación óptima, configuración WiFi y ajuste de umbrales.",
    content: `
## Primeros pasos con Roomonitor

Instalar tu dispositivo Roomonitor es sencillo. Sigue esta guía para garantizar un rendimiento óptimo y una monitorización fiable.

### Antes de empezar

Asegúrate de tener:

- Tu dispositivo Roomonitor
- Conexión WiFi estable (2,4 GHz)
- La app Roomonitor Manager instalada
- Los datos de la propiedad listos para la configuración

### Pasos de instalación

#### Paso 1: Elige la ubicación

Consideraciones para una ubicación óptima:

- **Zona común central** para mejor cobertura
- **Montado en pared** a 2-3 metros de altura
- **Alejado de** fuentes de sonido directas (TV, altavoces)
- **Visible para los huéspedes** por transparencia

#### Paso 2: Conecta a la corriente

- Utiliza el adaptador de corriente incluido
- Asegura una fuente de alimentación estable
- Considera alimentación de respaldo para monitorización crítica

#### Paso 3: Configuración WiFi

1. Abre la app Roomonitor Manager
2. Selecciona "Añadir nuevo dispositivo"
3. Sigue las indicaciones en pantalla
4. Introduce las credenciales de tu WiFi
5. Espera la confirmación de conexión

#### Paso 4: Ajusta los umbrales

Configura los niveles apropiados:

- **Umbral diurno** - Normalmente 70 dB
- **Umbral nocturno** - Normalmente 55 dB
- **Horas de silencio** - Define las horas de inicio y fin
- **Retardo de alerta** - Tiempo antes de la notificación

### Prueba tu configuración

Después de la instalación:

- Genera sonidos de prueba a varios niveles
- Verifica que las alertas se reciben correctamente
- Ajusta los umbrales si es necesario
- Forma a tu equipo en los procedimientos de respuesta
    `,
    category: "Roomonitor",
    date: "2025-12-20",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  },
];

export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find((post) => post.featured);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "Todas las categorías") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
  );
};
