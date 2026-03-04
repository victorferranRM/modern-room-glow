import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Headphones, Clock, Globe, Shield, Phone, MessageSquare, Users, Zap, FileText, Heart
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceStats } from "@/components/services/ServiceStats";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceImageSection } from "@/components/services/ServiceImageSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-guest-assist.jpg";
import managerDevices from "@/assets/manager-devices.png";

const stats = [
  { value: "<30s", label: "Respuesta media" },
  { value: "24/7", label: "Disponibilidad" },
  { value: "5+", label: "Idiomas hablados" },
  { value: "100%", label: "Interacciones registradas" },
];

const commitments = [
  { icon: Clock, title: "Disponibilidad 24/7", description: "Nuestras líneas están abiertas las 24 horas, los 365 días del año. Sin festivos, sin pausas." },
  { icon: Zap, title: "Respuesta Ultra-Rápida", description: "Tiempo medio de respuesta inferior a 30 segundos. Tus huéspedes nunca esperan." },
  { icon: FileText, title: "Seguimos Tu Protocolo", description: "Nuestro equipo está formado para actuar según tus reglas específicas, como una extensión de tu equipo." },
  { icon: Globe, title: "Soporte Multilingüe", description: "Hablamos inglés, español, francés, portugués y más." },
  { icon: Shield, title: "Transparencia Total", description: "Todas las interacciones se registran en tiempo real. Visibilidad total de cada punto de contacto con el huésped." },
  { icon: Heart, title: "Vamos Más Allá", description: "Nos preocupamos por tus huéspedes y hacemos esfuerzos extra para resolver cualquier problema rápidamente." },
];

const whatWeAreNot = [
  {
    title: "No Somos Asistentes Virtuales",
    description: "Somos especialistas en alquiler vacacional con más de 10 años en el sector. Cada miembro del equipo trabaja exclusivamente para nosotros con más de 1.000 horas de experiencia con huéspedes.",
    image: serviceImage,
    icon: Users,
  },
  {
    title: "Sin Chatbots de IA",
    description: "No usamos software de mensajería con inteligencia artificial. Hablamos personalmente con tus huéspedes y contactamos con cualquier responsable, asegurándonos de que cada acción esté alineada con tu protocolo.",
    image: managerDevices,
    icon: MessageSquare,
  },
];

const useCases = [
  { title: "WiFi no funciona", icon: Phone },
  { title: "Huésped sin acceso a las 2 AM", icon: Shield },
  { title: "Propiedad sin limpiar a la llegada", icon: FileText },
  { title: "Huésped quiere cancelar con reembolso", icon: MessageSquare },
  { title: "Huésped quiere extender estancia", icon: Users },
  { title: "Queja de ruido de vecinos", icon: Headphones },
];

const howItWorks = [
  { step: "01", title: "Agenda una videollamada", description: "Revisaremos tu protocolo y reemplazaremos tu número de contacto de Airbnb/Booking.com con un número dedicado de Guest Assist." },
  { step: "02", title: "Completa tu protocolo", description: "Define lo que debemos seguir cada vez que los huéspedes llamen. Puedes editarlo en cualquier momento." },
  { step: "03", title: "¡Guest Assist está activo!", description: "Relájate y desconecta con tranquilidad. Te contactaremos solo cuando sea necesario y enviaremos resúmenes diarios." },
];

const protocolFeatures = [
  "Definir reglas de escalado y prioridades",
  "Establecer plantillas de respuesta para incidencias comunes",
  "Especificar contactos de emergencia y procedimientos",
  "Configurar preferencias de notificación",
];

export default function GuestAssist() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Headphones}
        badge="Guest Assist™"
        title="Soporte telefónico 24/7"
        titleHighlight="para tus huéspedes"
        description="Nuestro servicio de atención al huésped para gestores de alquiler vacacional ofrece el mejor soporte telefónico del mercado. Tu equipo por fin puede descansar cada noche y fin de semana."
        image={serviceImage}
        imageAlt="Servicio Guest Assist"
        primaryCTA={{ text: "Contactar", link: "/contact" }}
      />

      <ServiceStats stats={stats} />

      <ServiceFeatures eyebrow="Nuestro Compromiso" title="Nuestro compromiso es total" features={commitments} />

      {/* What We're NOT */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Estableciendo expectativas</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Lo que <span className="text-destructive">NO</span> somos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Personas reales, experiencia real — eso es lo que nos diferencia
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whatWeAreNot.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150} animation={i === 0 ? "fade-right" : "fade-left"}>
                <div className="group relative overflow-hidden rounded-2xl bg-card border hover:border-destructive/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/20 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <item.icon className="w-6 h-6 text-destructive" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium text-destructive border border-destructive/20">
                        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                        NO
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-destructive">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Ejemplos</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Situaciones que gestionamos cada día</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <AnimatedSection key={useCase.title} delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-card border hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold transition-colors group-hover:text-primary">{useCase.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceProcess eyebrow="Cómo Funciona" title="Empieza en 3 sencillos pasos" steps={howItWorks} background="secondary" columns={3} />

      <ServiceImageSection
        eyebrow="Tus Reglas, Nuestra Ejecución"
        title="Protocolo"
        description="Para empezar, proporcionamos una plantilla de protocolo de ejemplo con las incidencias más comunes y pasos de resolución. Personalízala según tus requisitos exactos."
        features={protocolFeatures}
        image={managerDevices}
        imageAlt="Panel Roomonitor Manager"
        ctaText="Ver una Demo"
        ctaLink="/contact"
        reversed
      />

      <ServiceCTA
        title="¿Listo para dar un descanso a tu equipo?"
        description="Déjanos gestionar las llamadas de huéspedes mientras tú te centras en hacer crecer tu negocio. Agenda una llamada de orientación rápida para saber más."
        primaryCTA={{ text: "Agendar Llamada", link: "/contact" }}
      />

      <Footer />
    </div>
  );
}
