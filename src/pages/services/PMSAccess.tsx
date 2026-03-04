import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check,
  Settings, Key, Shield, Link2, Database, Lock, Workflow
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import serviceImage from "@/assets/service-pms-access.jpg";

const features = [
  { icon: Key, title: "Acceso Seguro", description: "Operamos directamente desde tu PMS con credenciales de acceso seguro y limitado." },
  { icon: Database, title: "Datos en Tiempo Real", description: "Acceso a reservas, información de huéspedes y detalles de propiedades cuando los necesitamos." },
  { icon: Workflow, title: "Acciones Directas", description: "Enviar mensajes, actualizar notas y gestionar situaciones directamente en tu sistema." },
  { icon: Link2, title: "Integración de Sistemas", description: "Conexión fluida con tus herramientas operativas y flujos de trabajo existentes." },
  { icon: Lock, title: "Enfocado en Privacidad", description: "Acceso solo a lo necesario. Registro completo de auditoría de todas las acciones." },
  { icon: Shield, title: "Listo para Cumplimiento", description: "Manejo de datos conforme al RGPD y gestión segura de credenciales." },
];

const supportedPlatforms = [
  { name: "Hostaway", logo: "H" },
  { name: "Guesty", logo: "G" },
  { name: "Lodgify", logo: "L" },
  { name: "Hostify", logo: "H" },
  { name: "Smoobu", logo: "S" },
  { name: "Beds24", logo: "B" },
  { name: "Cloudbeds", logo: "C" },
  { name: "Escapia", logo: "E" },
];

const howWeWork = [
  { step: "01", title: "Configuración Segura", description: "Nos proporcionas credenciales de acceso limitado a tu PMS." },
  { step: "02", title: "Formación del Equipo", description: "Nuestros operadores aprenden tu sistema y flujos de trabajo." },
  { step: "03", title: "Operaciones Fluidas", description: "Trabajamos directamente en tus herramientas, como una extensión de tu equipo." },
];

const capabilities = [
  "Acceder a detalles de reservas en tiempo real",
  "Ver información de contacto de huéspedes de forma segura",
  "Enviar mensajes a través de tu PMS",
  "Añadir notas y registros de incidencias",
  "Consultar instrucciones específicas de cada propiedad",
  "Actualizar notas de reservas",
  "Coordinarse con tu equipo de forma fluida",
  "Seguir tus flujos de trabajo establecidos",
];

export default function PMSAccess() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <ServiceHero
        icon={Settings}
        badge="Acceso PMS y Herramientas"
        title="Trabajamos en"
        titleHighlight="tu ecosistema"
        description="Sin paneles separados, sin datos duplicados. Operamos directamente desde tu Sistema de Gestión de Propiedades, trabajando como una verdadera extensión de tu equipo."
        image={serviceImage}
        imageAlt="Integración PMS"
        secondaryCTA={{ text: "Ver Integraciones", link: "/integrations" }}
      />

      {/* Supported Platforms */}
      <section className="py-12 bg-card border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="text-center mb-8">
            <p className="text-sm text-muted-foreground">Nos integramos con tu PMS favorito</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {supportedPlatforms.map((platform, i) => (
              <AnimatedSection key={platform.name} delay={i * 50}>
                <div className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-secondary/50 border hover:border-primary/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    {platform.logo}
                  </div>
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ServiceFeatures eyebrow="Capacidades" title="Acceso seguro y fluido" features={features} />
      <ServiceProcess eyebrow="Proceso de Configuración" title="Cómo funciona" steps={howWeWork} background="secondary" columns={3} />

      {/* What We Can Do */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Nuestras Acciones</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Qué podemos hacer en tu PMS
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Con acceso seguro a tu sistema, podemos gestionar comunicaciones con huéspedes y gestión de incidencias sin que tengas que mover un dedo.
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {capabilities.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm transition-colors group-hover:text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="fade-left">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-card border hover:shadow-xl transition-all duration-500">
                <div className="space-y-4">
                  {[
                    { icon: Key, title: "Credenciales Seguras", desc: "Acceso limitado, almacenamiento encriptado" },
                    { icon: Shield, title: "Registro de Auditoría", desc: "Cada acción registrada y rastreable" },
                    { icon: Lock, title: "Conforme al RGPD", desc: "Cumplimiento total de protección de datos" },
                  ].map((item, i) => (
                    <div key={i} className="group p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium transition-colors group-hover:text-primary">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="¿Listo para integrarte?"
        description="Conecta tu PMS y déjanos trabajar como una extensión de tu equipo. La configuración solo toma unos minutos."
        primaryCTA={{ text: "Empezar", link: "/contact" }}
        secondaryCTA={{ text: "Ver Todas las Integraciones", link: "/integrations" }}
      />

      <Footer />
    </div>
  );
}
