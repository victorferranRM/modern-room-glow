import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Radio, Headphones, Car, CheckCircle, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Sensor V5: Privacidad total. Precisión absoluta.",
    description: "Protege tus propiedades sin invadir la privacidad del huésped. Nuestro dispositivo V5 no graba conversaciones. Analiza patrones de sonido y ambientales para anticipar problemas antes de que escalen.",
    points: [
      "Monitorización de ruido 24/7 y detección de fiestas",
      "Detección de humo de tabaco (protege tu activo de daños por olor)",
      "Monitorización climática (optimiza el consumo energético)",
    ],
    linkText: "Ver especificaciones técnicas",
    linkHref: "/monitoring",
    floatingElements: [
      { icon: Radio, label: "Alerta Ruido", position: "top-8 left-8", delay: "0s" },
      { icon: CheckCircle, label: "Sin Humo", position: "top-24 right-6", delay: "0.5s" },
      { icon: CheckCircle, label: "Clima OK", position: "bottom-16 left-12", delay: "1s" },
    ],
    bgColor: "bg-gradient-to-br from-primary/5 to-primary/10",
  },
  {
    title: "Alarm Assistant. Te representamos.",
    description: "¿Una alerta a las 3AM? Sigue durmiendo. Nuestro Centro de Control 24/7 recibe la alerta, contacta inmediatamente al huésped (llamada/SMS) y media usando protocolos probados para detener el problema antes de que escale.",
    points: [
      "Intervención humana inmediata sin molestarte",
      "96% de incidencias resueltas de forma remota",
      "Informe detallado en tu panel a la mañana siguiente",
    ],
    linkText: "Descubre el Centro de Control",
    linkHref: "/services/control-center",
    floatingElements: [
      { icon: Headphones, label: "Agente Activo", position: "top-10 right-8", delay: "0.3s" },
      { icon: CheckCircle, label: "Resuelto", position: "bottom-20 left-8", delay: "0.8s" },
      { icon: CheckCircle, label: "Informe Enviado", position: "top-28 left-6", delay: "0.6s" },
    ],
    bgColor: "bg-gradient-to-br from-accent/30 to-accent/50",
  },
  {
    title: "Respuesta In Situ. Presencia real cuando importa.",
    description: "Cuando la tecnología y la mediación remota no son suficientes, nuestro equipo de Field Service acude físicamente a la propiedad. Desde la recuperación de llaves hasta la gestión de desalojos, estamos ahí para proteger tu activo.",
    points: [
      "Servicio disponible en ciudades seleccionadas",
    ],
    linkText: "Consultar cobertura",
    linkHref: "/services/field-service",
    floatingElements: [
      { icon: Car, label: "Equipo Enviado", position: "top-8 left-6", delay: "0.2s" },
      { icon: CheckCircle, label: "In Situ", position: "top-20 right-8", delay: "0.7s" },
      { icon: CheckCircle, label: "Resuelto", position: "bottom-16 right-10", delay: "1.1s" },
    ],
    bgColor: "bg-gradient-to-br from-muted to-muted/80",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="mb-16">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Nuestro ecosistema
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Hardware + Remoto + <span>In Situ</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 150}>
                <div className="group">
                  {/* Image Card with Floating Elements */}
                  <div 
                    className={`relative h-72 lg:h-80 rounded-2xl ${pillar.bgColor} overflow-hidden mb-6`}
                  >
                    <div className="absolute inset-0 opacity-30">
                      <svg className="w-full h-full" viewBox="0 0 400 400">
                        <defs>
                          <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/10" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                      </svg>
                    </div>

                    {pillar.floatingElements.map((element, elemIndex) => {
                      const Icon = element.icon;
                      return (
                        <div
                          key={elemIndex}
                          className={`absolute ${element.position} animate-float`}
                          style={{ 
                            animationDelay: element.delay,
                            animationDuration: '3s'
                          }}
                        >
                          <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2 border border-border/50 transform transition-transform duration-300 group-hover:scale-105">
                            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                              <Icon className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-xs font-medium text-foreground whitespace-nowrap">
                              {element.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <span className="text-4xl font-bold text-primary/30">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="link" className="p-0 h-auto text-primary gap-1" asChild>
                    <Link to={pillar.linkHref}>
                      {pillar.linkText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
