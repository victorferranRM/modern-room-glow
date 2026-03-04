import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  FileText, Clock, Check, Shield, Settings, ListChecks, Workflow, Edit, Book, Monitor
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-protocols.jpg";
import managerDevices from "@/assets/manager-devices.png";

const features = [
  { icon: FileText, title: "Protocolos Personalizados", description: "Define exactamente cómo debemos gestionar cada situación, desde alertas de ruido hasta quejas de huéspedes." },
  { icon: ListChecks, title: "Acciones Paso a Paso", description: "Procedimientos claros para tu equipo y el nuestro, para seguir de forma consistente." },
  { icon: Clock, title: "Ejecución 24/7", description: "Tus reglas se siguen las 24 horas, incluso cuando estás durmiendo." },
  { icon: Edit, title: "Actualizaciones Fáciles", description: "Modifica tus protocolos en cualquier momento a través de nuestra interfaz de gestión sencilla." },
  { icon: Workflow, title: "Reglas de Prioridad", description: "Establece jerarquías de escalado y niveles de prioridad para diferentes situaciones." },
  { icon: Shield, title: "Resultados Consistentes", description: "Cada incidencia se gestiona de la misma manera, siempre." },
];

const protocolExamples = [
  {
    title: "Protocolo de Alerta de Ruido",
    steps: [
      "Esperar 5 minutos a que el ruido se estabilice",
      "Si el ruido continúa, enviar recordatorio amable al huésped",
      "Si persiste después de 15 min, llamar directamente al huésped",
      "Si no se resuelve, escalar al gestor de la propiedad",
      "Documentar la incidencia con marcas de tiempo",
    ]
  },
  {
    title: "Protocolo de Huésped sin Acceso",
    steps: [
      "Verificar identidad del huésped con datos de la reserva",
      "Intentar solución de acceso remoto si está disponible",
      "Si falla, contactar con el portallaves de respaldo",
      "Enviar agente de campo si no hay portallaves disponible",
      "Notificar al gestor de la propiedad de la resolución",
    ]
  },
  {
    title: "Protocolo de Alerta de Humo",
    steps: [
      "Intentar contactar con el huésped inmediatamente",
      "Si no hay respuesta, alertar a contactos de emergencia locales",
      "Coordinar con servicios de bomberos si es necesario",
      "Enviar agente de campo para confirmación visual",
      "Informe completo de incidencia en menos de 1 hora",
    ]
  },
];

const setupProcess = [
  { step: "01", title: "Revisar Plantillas", description: "Empieza con nuestras plantillas de protocolo estándar del sector." },
  { step: "02", title: "Personalizar", description: "Adapta los protocolos a tus requisitos y preferencias específicas." },
  { step: "03", title: "Formación Conjunta", description: "Repasa los protocolos con nuestro equipo para asegurar claridad." },
  { step: "04", title: "En Marcha", description: "Tus protocolos están activos y se ejecutan 24/7." },
];

const protocolBenefits = [
  "Gestión consistente en todo tu portfolio",
  "Menos fatiga de decisión para tu equipo",
  "Rutas de escalado claras para cada situación",
  "Documentación y registros de auditoría",
  "Actualizaciones fáciles a medida que evolucionan tus necesidades",
  "Tranquilidad sabiendo que tus reglas se siguen",
];

export default function Protocols() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={FileText}
        badge="Protocolos Operativos"
        title="Tus reglas,"
        titleHighlight="ejecutadas 24/7"
        description="Define exactamente cómo debe gestionarse cada situación. Nuestro equipo ejecuta tus protocolos de forma consistente, las 24 horas, asegurando que tus estándares se cumplan siempre."
        image={serviceImage}
        imageAlt="Servicio de Protocolos"
      />

      {/* Manager Software Notice */}
      <section className="py-12 bg-primary/5 border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="flex items-center justify-center gap-4 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Monitor className="w-6 h-6 text-primary" />
            </div>
            <p className="text-lg">
              <strong>Sin hojas de Excel.</strong> Usamos nuestro software propietario Manager para la gestión y ejecución de protocolos estandarizada y en tiempo real.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServiceFeatures eyebrow="Capacidades" title="Gestión completa de protocolos" features={features} />

      {/* Protocol Examples */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Ejemplos</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Protocolos de ejemplo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aquí tienes ejemplos de cómo se pueden estructurar los protocolos. Cada protocolo se personaliza según tus necesidades específicas.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {protocolExamples.map((protocol, i) => (
              <AnimatedSection key={protocol.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border h-full hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">{protocol.title}</h3>
                  </div>
                  <ol className="space-y-3">
                    {protocol.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-3 group/step">
                        <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 group-hover/step:bg-primary/20 group-hover/step:text-primary">{j + 1}</span>
                        <span className="text-sm text-muted-foreground transition-colors group-hover/step:text-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow="Primeros Pasos" title="Configura tus protocolos" steps={setupProcess} />

      <ServiceImageSection
        eyebrow="Beneficios"
        title="Por qué importan los protocolos"
        description="Los protocolos bien definidos aseguran consistencia, reducen errores y te dan tranquilidad sabiendo exactamente cómo se gestionará cada situación."
        features={protocolBenefits}
        image={managerDevices}
        imageAlt="Gestión de Protocolos"
        ctaText="Ver una Demo"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceCTA
        title="¿Listo para definir tus protocolos?"
        description="Trabajemos juntos para crear protocolos que se ajusten exactamente a tus necesidades. Nuestro equipo te ayudará a empezar."
      />

      <Footer />
    </div>
  );
}
