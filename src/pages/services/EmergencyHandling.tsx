import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Siren, Clock, Shield, Phone, AlertTriangle, Users, Flame, Droplets,
  HeartPulse, Lock
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-emergency.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "<60s", label: "Tiempo de respuesta" },
  { value: "24/7", label: "Equipo de emergencias" },
  { value: "100%", label: "Protocolos ejecutados" },
  { value: "Real", label: "Acción tomada" },
];

const features = [
  { icon: Siren, title: "Línea de Emergencias 24/7", description: "Equipo dedicado de respuesta a emergencias disponible las 24 horas para situaciones críticas." },
  { icon: Clock, title: "Escalado Instantáneo", description: "Las alertas críticas activan protocolos de respuesta inmediata — sin retrasos, sin colas." },
  { icon: Phone, title: "Coordinación Directa", description: "Coordinamos con servicios de emergencia, gestores de propiedades y huéspedes simultáneamente." },
  { icon: Users, title: "Especialistas Formados", description: "Especialistas en respuesta a emergencias formados en gestión de crisis y desescalada." },
  { icon: Shield, title: "Basado en Protocolos", description: "Cada tipo de emergencia tiene procedimientos de respuesta predefinidos para un manejo consistente." },
  { icon: AlertTriangle, title: "Acción Real", description: "No solo notificaciones — tomamos acción real para resolver emergencias." },
];

const emergencyTypes = [
  { icon: Flame, title: "Fuego y Humo", description: "Respuesta inmediata a detección de humo, coordinando con bomberos y evacuación de huéspedes.", response: "< 1 min" },
  { icon: Droplets, title: "Daños por Agua", description: "Respuesta rápida a inundaciones o fugas de agua, minimizando daños en la propiedad.", response: "< 2 min" },
  { icon: Lock, title: "Amenazas de Seguridad", description: "Coordinación con autoridades locales para robos, amenazas o actividad sospechosa.", response: "< 2 min" },
  { icon: HeartPulse, title: "Emergencias Médicas", description: "Asistencia coordinando ayuda médica y servicios de emergencia para huéspedes.", response: "< 1 min" },
];

const responseProtocol = [
  { step: "01", title: "Alerta Activada", description: "Alerta crítica del sensor o llamada de emergencia recibida." },
  { step: "02", title: "Evaluación Inmediata", description: "El equipo de emergencias evalúa la gravedad de la situación en segundos." },
  { step: "03", title: "Respuesta Multicanal", description: "Contacto simultáneo con huéspedes, propietarios y servicios de emergencia." },
  { step: "04", title: "Soporte In Situ", description: "Agentes de campo desplegados si se necesita intervención física." },
  { step: "05", title: "Resolución e Informe", description: "Documentación completa y soporte de seguimiento." },
];

const managerFeatures = [
  "Línea temporal de emergencias en tiempo real",
  "Registros de comunicación multipartita",
  "Informes exportables para seguros",
  "Análisis post-incidencia",
];

export default function EmergencyHandling() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Siren}
        badge="Gestión de Emergencias"
        title="Situaciones críticas"
        titleHighlight="gestionadas con acción real"
        description="Cuando surgen emergencias, cada segundo cuenta. Nuestro equipo de gestión de emergencias responde al instante con protocolos y acción real — no solo notificaciones."
        image={serviceImage}
        imageAlt="Servicio de Gestión de Emergencias"
        variant="destructive"
      />

      <ServiceStats stats={stats} />

      {/* Emergency Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Tipos de Emergencia</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Qué gestionamos</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {emergencyTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-destructive/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-destructive/20">
                      <type.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold transition-colors group-hover:text-destructive">{type.title}</h3>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-destructive/10 text-destructive border border-destructive/20">{type.response}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{type.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow="Capacidades" title="Respuesta profesional a emergencias" features={features} background="secondary" />
      <ServiceProcess eyebrow="Nuestro Protocolo" title="Proceso de respuesta a emergencias" steps={responseProtocol} columns={5} />

      <ServiceImageSection
        eyebrow="Roomonitor Manager"
        title="Visibilidad completa de emergencias"
        description="Sigue todas las respuestas a emergencias en tiempo real, visualiza líneas temporales completas y accede a informes detallados — todo desde tu panel."
        features={managerFeatures}
        image={managerDevices}
        imageAlt="Panel de Emergencias"
        ctaText="Explorar Manager"
        ctaLink="/how-it-works"
        background="secondary"
        reversed
      />

      <ServiceCTA
        title="Prepárate para cualquier emergencia"
        description="Nuestro equipo de gestión de emergencias está preparado 24/7. Habla con nosotros sobre la protección de tus propiedades."
      />

      <Footer />
    </div>
  );
}
