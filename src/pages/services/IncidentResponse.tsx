import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  AlertTriangle, Bell, Users, FileText, Radio, Workflow, Volume2,
  Flame, UserCheck, WifiOff, Thermometer
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-incident-response.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "85%", label: "Incidencias resueltas remotamente" },
  { value: "<2min", label: "De detección a acción" },
  { value: "24/7", label: "Cobertura" },
  { value: "100%", label: "Incidencias documentadas" },
];

const features = [
  { icon: Bell, title: "Detección Temprana", description: "Los sensores detectan problemas antes de que escalen a incidencias mayores." },
  { icon: AlertTriangle, title: "Clasificación Instantánea", description: "Evaluación automática de severidad basada en umbrales y patrones predefinidos." },
  { icon: Users, title: "Validación Humana", description: "Cada alerta es revisada por operadores formados para prevenir falsas alarmas." },
  { icon: Workflow, title: "Ejecución de Protocolo", description: "Resolución paso a paso siguiendo tus procedimientos de respuesta personalizados." },
  { icon: Radio, title: "Respuesta Multicanal", description: "Mensajes al huésped, llamadas telefónicas y despacho de campo — lo que haga falta." },
  { icon: FileText, title: "Documentación Completa", description: "Cada incidencia se registra con línea temporal, acciones y resultados." },
];

const incidentTypes = [
  { title: "Violaciones de Ruido", description: "Ruido excesivo detectado por encima de los límites establecidos", severity: "Media", icon: Volume2, color: "bg-amber-100 text-amber-700 border-amber-200" },
  { title: "Detección de Fiestas", description: "Ruido + ocupación combinados indican reunión no autorizada", severity: "Alta", icon: Users, color: "bg-red-100 text-red-700 border-red-200" },
  { title: "Alerta de Humo", description: "Sensores de humo activados en la propiedad", severity: "Crítica", icon: Flame, color: "bg-red-100 text-red-700 border-red-200" },
  { title: "Ocupación No Autorizada", description: "Más huéspedes detectados de los que permite la reserva", severity: "Media", icon: UserCheck, color: "bg-amber-100 text-amber-700 border-amber-200" },
  { title: "Dispositivo Offline", description: "El dispositivo de monitorización ha perdido conectividad", severity: "Baja", icon: WifiOff, color: "bg-muted text-muted-foreground border-muted" },
  { title: "Alerta Ambiental", description: "Temperatura o humedad fuera del rango normal", severity: "Baja", icon: Thermometer, color: "bg-muted text-muted-foreground border-muted" },
];

const responseProcess = [
  { step: "01", title: "Detección", description: "Los sensores identifican la anomalía y envían alerta al Centro de Control." },
  { step: "02", title: "Verificación", description: "Los operadores analizan datos para confirmar la incidencia y evaluar la severidad." },
  { step: "03", title: "Respuesta", description: "Se toma la acción apropiada: contacto con huésped, aviso o escalado." },
  { step: "04", title: "Resolución", description: "Incidencia resuelta, documentada y propietario notificado con informe completo." },
];

const managerFeatures = [
  "Línea temporal de incidencias en tiempo real",
  "Historial completo de acciones",
  "Informes exportables para seguros",
  "Analíticas e insights de tendencias",
];

export default function IncidentResponse() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={AlertTriangle}
        badge="Respuesta a Incidencias"
        title="Detección y resolución"
        titleHighlight="de incidencias de extremo a extremo"
        description="Desde el momento en que se detecta una anomalía hasta la resolución completa, gestionamos cada paso del ciclo de vida de la incidencia de forma profesional."
        image={serviceImage}
        imageAlt="Servicio de Respuesta a Incidencias"
      />

      <ServiceStats stats={stats} />
      <ServiceFeatures eyebrow="Capacidades" title="Gestión completa de incidencias" features={features} />

      {/* Incident Types */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Qué Gestionamos</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Tipos de incidencias</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incidentTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${type.color}`}>
                      <type.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{type.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{type.description}</p>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${type.color}`}>{type.severity}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow="Nuestro Proceso" title="Cómo respondemos" steps={responseProcess} />

      <ServiceImageSection
        eyebrow="Roomonitor Manager"
        title="Visibilidad total de cada incidencia"
        description="Sigue todas las incidencias en tiempo real, visualiza historiales completos y accede a informes detallados — todo desde tu panel."
        features={managerFeatures}
        image={managerDevices}
        imageAlt="Panel de Incidencias"
        ctaText="Explorar Manager"
        ctaLink="/how-it-works"
        background="secondary"
        reversed
      />

      <ServiceCTA
        title="¿Listo para una gestión profesional de incidencias?"
        description="Déjanos gestionar las incidencias mientras tú te centras en tu negocio. Nuestro equipo está preparado para proteger tus propiedades."
      />

      <Footer />
    </div>
  );
}
