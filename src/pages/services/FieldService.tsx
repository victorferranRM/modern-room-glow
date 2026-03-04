import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Truck, Clock, MapPin, Shield, Users, Wrench, Phone, 
  Volume2, Key, Search, Camera, HandshakeIcon
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
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

      {/* Coverage Map Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Área de Cobertura</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Nuestros agentes de campo están en ciudades europeas clave
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Actualmente operamos en ciudades con alta demanda de nuestros clientes. Nuestra red sigue creciendo para cubrir más destinos.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="relative bg-gradient-to-br from-secondary/50 to-muted/30 rounded-3xl p-6 lg:p-8 border">
                <div className="relative aspect-[16/9] w-full">
                  <svg viewBox="0 0 800 500" className="w-full h-full">
                    <defs>
                      <linearGradient id="europeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <path d="M85,280 L85,340 Q90,360 95,370 L100,380 L85,385 L75,375 L70,350 L70,290 L80,275 Z" fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    <path d="M95,250 L180,240 L200,250 L220,260 L230,290 L220,330 L200,360 L150,380 L100,380 L85,340 L85,280 L95,265 Z" fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    <path d="M200,200 L280,180 L340,190 L360,230 L350,280 L300,300 L260,290 L220,260 L200,250 Z" fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    <path d="M360,230 L400,220 L420,250 L410,300 L420,340 L400,380 L380,400 L370,390 L380,350 L370,300 L350,280 Z" fill="url(#europeGradient)" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" className="transition-all duration-300 hover:fill-primary/20" />
                    <g className="cursor-pointer group"><circle cx="195" cy="305" r="8" className="fill-primary animate-pulse" /><circle cx="195" cy="305" r="14" className="fill-primary/20" /><text x="208" y="310" className="fill-foreground text-[11px] font-medium">Barcelona</text></g>
                    <g className="cursor-pointer group"><circle cx="130" cy="300" r="8" className="fill-primary animate-pulse" /><circle cx="130" cy="300" r="14" className="fill-primary/20" /><text x="143" y="305" className="fill-foreground text-[11px] font-medium">Madrid</text></g>
                    <g className="cursor-pointer"><circle cx="175" cy="330" r="6" className="fill-primary animate-pulse" /><circle cx="175" cy="330" r="11" className="fill-primary/20" /><text x="185" y="335" className="fill-foreground text-[10px] font-medium">Valencia</text></g>
                    <g className="cursor-pointer"><circle cx="135" cy="375" r="6" className="fill-primary animate-pulse" /><circle cx="135" cy="375" r="11" className="fill-primary/20" /><text x="148" y="380" className="fill-foreground text-[10px] font-medium">Málaga</text></g>
                    <g className="cursor-pointer"><circle cx="105" cy="360" r="6" className="fill-primary animate-pulse" /><circle cx="105" cy="360" r="11" className="fill-primary/20" /><text x="60" y="365" className="fill-foreground text-[10px] font-medium">Sevilla</text></g>
                    <g className="cursor-pointer"><circle cx="145" cy="360" r="5" className="fill-primary animate-pulse" /><circle cx="145" cy="360" r="10" className="fill-primary/20" /><text x="155" y="355" className="fill-foreground text-[9px] font-medium">Granada</text></g>
                    <g className="cursor-pointer"><circle cx="75" cy="335" r="7" className="fill-primary animate-pulse" /><circle cx="75" cy="335" r="12" className="fill-primary/20" /><text x="45" y="325" className="fill-foreground text-[11px] font-medium">Lisboa</text></g>
                    <g className="cursor-pointer"><circle cx="270" cy="210" r="8" className="fill-primary animate-pulse" /><circle cx="270" cy="210" r="14" className="fill-primary/20" /><text x="283" y="215" className="fill-foreground text-[11px] font-medium">París</text></g>
                    <g className="cursor-pointer"><circle cx="370" cy="245" r="7" className="fill-primary animate-pulse" /><circle cx="370" cy="245" r="12" className="fill-primary/20" /><text x="383" y="250" className="fill-foreground text-[11px] font-medium">Milán</text></g>
                  </svg>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {coverageCities.map((city) => (
                    <div key={city.name} className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-card border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                      <MapPin className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <p className="font-medium text-sm text-foreground">{city.name}</p>
                        <p className="text-xs text-muted-foreground">{city.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow="Nuestra Red" title="Agentes profesionales, en cualquier lugar" features={features} background="secondary" />

      {/* Intervention Types */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Servicios</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">Tipos de intervenciones</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {interventionTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
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
