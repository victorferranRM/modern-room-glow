import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Eye, Clock, Shield, AlertTriangle, Users, Zap, Brain
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-control-center.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "24/7", label: "Cobertura de monitorización" },
  { value: "<2min", label: "Respuesta media" },
  { value: "100%", label: "Verificación humana" },
  { value: "5.000+", label: "Propiedades monitorizadas" },
];

const features = [
  { icon: Eye, title: "Monitorización en Tiempo Real", description: "Vigilancia 24/7 de todos los datos de sensores en todo tu portfolio desde un único centro de control." },
  { icon: Brain, title: "Verificación Humana", description: "Cada alerta es revisada por profesionales formados antes de tomar cualquier acción. Sin falsas alarmas." },
  { icon: AlertTriangle, title: "Escalado Inteligente", description: "Toma de decisiones inteligente basada en tus protocolos. Sabemos cuándo actuar y cuándo escalar." },
  { icon: Zap, title: "Respuesta Inmediata", description: "Tiempo de respuesta medio inferior a 2 minutos desde la detección hasta la primera acción." },
  { icon: Users, title: "Equipo Dedicado", description: "Especialistas formados en hospitalidad que entienden las operaciones de alquiler vacacional a la perfección." },
  { icon: Shield, title: "Documentación Completa", description: "Cada incidencia es registrada, seguida y documentada para tus registros y seguros." },
];

const capabilities = [
  "Monitorizar niveles de ruido y detectar posibles fiestas",
  "Seguir la ocupación e identificar huéspedes no autorizados",
  "Recibir y verificar alertas de sensores en tiempo real",
  "Tomar decisiones informadas basadas en datos en vivo",
  "Contactar directamente con los huéspedes cuando se necesita intervención",
  "Escalar al servicio de campo cuando la resolución remota falla",
  "Coordinar con las autoridades locales si es necesario",
  "Documentar todas las incidencias con marcas de tiempo y acciones",
];

const howItWorks = [
  { step: "01", title: "Detección de Alerta", description: "Nuestros sensores detectan anomalías y envían alertas al Centro de Control al instante." },
  { step: "02", title: "Verificación Humana", description: "Operadores formados analizan los datos para confirmar si se necesita intervención." },
  { step: "03", title: "Decisión Inteligente", description: "Según tu protocolo, decidimos el mejor curso de acción." },
  { step: "04", title: "Resolución Rápida", description: "Actuamos, documentamos todo y te mantenemos informado." },
];

export default function ControlCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Eye}
        badge="Centro de Control 24/7"
        title="Verificación humana,"
        titleHighlight="decisiones reales"
        description="Nuestro Centro de Control combina tecnología avanzada de sensores con experiencia humana. Cada alerta es verificada, cada decisión es informada, cada acción es documentada."
        image={serviceImage}
        imageAlt="Servicio de Centro de Control"
      />

      <ServiceStats stats={stats} />

      <ServiceFeatures
        eyebrow="Capacidades"
        title="Tecnología y experiencia humana"
        features={features}
      />

      <ServiceImageSection
        eyebrow="Nuestro Rol"
        title="Qué hace nuestro Centro de Control"
        description="Somos el puente entre tus sensores y la acción real. Cuando algo sucede, verificamos, decidimos y actuamos — todo según tus reglas."
        features={capabilities}
        image={managerDevices}
        imageAlt="Panel del Centro de Control"
        ctaText="Más Información"
        ctaLink="/contact"
        background="secondary"
      />

      <ServiceProcess
        eyebrow="Proceso"
        title="De la detección a la resolución"
        steps={howItWorks}
      />

      <ServiceCTA
        title="¿Listo para monitorización profesional?"
        description="Nuestro Centro de Control está preparado para proteger tus propiedades 24/7. Habla con un experto para saber cómo podemos ayudarte."
      />

      <Footer />
    </div>
  );
}
