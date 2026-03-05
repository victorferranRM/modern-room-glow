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
  { title: "Intervención por Ruido y Fiestas", description: "Desescalada profesional cuando los niveles de ruido superan los umbrales", icon: Volume2 },
  { title: "Huéspedes sin Acceso", description: "Asistencia de acceso de emergencia cuando los huéspedes se quedan fuera", icon: Key },
  { title: "Inspecciones de Propiedad", description: "Comprobaciones visuales cuando los sensores detectan actividad inusual", icon: Search },
  { title: "Reparaciones de Emergencia", description: "Coordinación con contratistas locales para arreglos urgentes", icon: Wrench },
  { title: "Bienvenida de Huéspedes", description: "Asistencia presencial de check-in cuando es necesario", icon: HandshakeIcon },
  { title: "Documentación de Incidencias", description: "Evidencia fotográfica y de vídeo para reclamaciones de seguros", icon: Camera },
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

       {/* Intervention Types - Alternating layout */}
       <section className="py-20 lg:py-28 relative overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
           <AnimatedSection className="text-center mb-16">
             <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Servicios</p>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Tipos de intervenciones</h2>
             <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
               Nuestros agentes están preparados para actuar en múltiples escenarios, siempre siguiendo tus protocolos.
             </p>
           </AnimatedSection>

           <div className="max-w-5xl mx-auto space-y-8">
             {interventionTypes.map((type, i) => (
               <AnimatedSection key={type.title} delay={i * 80}>
                 <div className={cn("group flex gap-8 items-start", i % 2 === 1 ? "flex-row-reverse" : "")}>
                   {/* Icon side */}
                   <div className="shrink-0 pt-1">
                     <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                       <type.icon className="w-8 h-8 text-primary" />
                     </div>
                   </div>
                   {/* Content side */}
                   <div className="flex-1 p-6 rounded-2xl border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                     <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{type.title}</h3>
                     <p className="text-base text-muted-foreground leading-relaxed">{type.description}</p>
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
