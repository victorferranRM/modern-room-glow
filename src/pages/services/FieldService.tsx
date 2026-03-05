import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";
import { 
  Truck, Clock, MapPin, Shield, Users, Wrench, Phone, 
  Volume2, Key, Search, Camera, HandshakeIcon
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { CoverCities } from "@/components/cover/CoverCities";
import serviceImage from "@/assets/service-field-service.jpg";
import interventionNoise from "@/assets/intervention-noise.jpg";
import interventionAccess from "@/assets/intervention-access.jpg";
import interventionInspection from "@/assets/intervention-inspection.jpg";
import interventionRepair from "@/assets/intervention-repair.jpg";
import interventionWelcome from "@/assets/intervention-welcome.jpg";
import interventionDocumentation from "@/assets/intervention-documentation.jpg";

const stats = [
  { value: "9+", label: "Ciudades cubiertas" },
  { value: "<45min", label: "Llegada media" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "100%", label: "Visitas documentadas" },
];

const features = [
  { icon: MapPin, title: "Amplia Cobertura", description: "Nuestra red de agentes de campo cubre los principales destinos turísticos y ciudades de Europa." },
  { icon: Clock, title: "Despliegue Rápido", description: "Cuando la resolución remota no es suficiente, enviamos profesionales formados a tu propiedad." },
  { icon: Users, title: "Profesionales Verificados", description: "Cada agente de campo pasa controles de antecedentes, está formado y equipado para cualquier situación." },
  { icon: Wrench, title: "Equipos Multidisciplinares", description: "Desde intervenciones por ruido hasta reparaciones de emergencia, nuestros equipos manejan situaciones diversas." },
  { icon: Shield, title: "Acciones Documentadas", description: "Cada visita se registra con fotos, marcas de tiempo e informes detallados." },
  { icon: Phone, title: "Actualizaciones en Tiempo Real", description: "Sigue la ubicación del agente y recibe actualizaciones en directo durante la intervención." },
];

const interventionTypes = [
  { title: "Intervención por Ruido y Fiestas", description: "Desescalada profesional cuando los niveles de ruido superan los umbrales", icon: Volume2, image: interventionNoise },
  { title: "Huéspedes sin Acceso", description: "Asistencia de acceso de emergencia cuando los huéspedes se quedan fuera", icon: Key, image: interventionAccess },
  { title: "Inspecciones de Propiedad", description: "Comprobaciones visuales cuando los sensores detectan actividad inusual", icon: Search, image: interventionInspection },
  { title: "Reparaciones de Emergencia", description: "Coordinación con contratistas locales para arreglos urgentes", icon: Wrench, image: interventionRepair },
  { title: "Bienvenida de Huéspedes", description: "Asistencia presencial de check-in cuando es necesario", icon: HandshakeIcon, image: interventionWelcome },
  { title: "Documentación de Incidencias", description: "Evidencia fotográfica y de vídeo para reclamaciones de seguros", icon: Camera, image: interventionDocumentation },
];

const coverageCities = [
  { name: "Barcelona", country: "España" },
  { name: "Madrid", country: "España" },
  { name: "Valencia", country: "España" },
  { name: "Málaga", country: "España" },
  { name: "Sevilla", country: "España" },
  { name: "Granada", country: "España" },
  { name: "Lisboa", country: "Portugal" },
  { name: "París", country: "Francia" },
  { name: "Milán", country: "Italia" },
];

const howItWorks = [
  { step: "01", title: "Incidencia Detectada", description: "El Centro de Control identifica una situación que requiere intervención in situ." },
  { step: "02", title: "Agente Despachado", description: "El agente cualificado más cercano es asignado y en camino a tu propiedad." },
  { step: "03", title: "Resolución In Situ", description: "El agente gestiona la situación según tu protocolo específico." },
  { step: "04", title: "Informe Completo", description: "Se proporciona documentación detallada con fotos y acciones realizadas." },
];

export default function FieldService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Truck}
        badge="Red de Servicio de Campo"
        title="Intervención in situ"
        titleHighlight="cuando la necesitas"
        description="Cuando la resolución remota no es suficiente, nuestros agentes de campo formados llegan a tu propiedad para gestionar situaciones de forma profesional y según tus protocolos."
        image={serviceImage}
        imageAlt="Red de Servicio de Campo"
        primaryCTA={{ text: "Ver Cobertura", link: "/contact" }}
      />

      <ServiceStats stats={stats} />

      <CoverCities />

      <ServiceFeatures eyebrow="Nuestra Red" title="Agentes profesionales, en cualquier lugar" features={features} background="secondary" />

      {/* Intervention Types - Image cards grid */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Servicios</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Tipos de intervenciones</h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestros agentes están preparados para actuar en múltiples escenarios, siempre siguiendo tus protocolos.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {interventionTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden h-72 cursor-default">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center">
                        <type.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h3 className="text-white font-bold text-base">{type.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow="Cómo Funciona" title="Del despacho a la resolución" steps={howItWorks} background="secondary" />

      <ServiceCTA
        title="¿Necesitas cobertura de servicio de campo?"
        description="Comprueba si tus propiedades están en nuestra área de cobertura. Nuestra red está en constante expansión."
        primaryCTA={{ text: "Ver Cobertura", link: "/contact" }}
      />

      <Footer />
    </div>
  );
}
