import { Link } from "react-router-dom";
import { Bell, Eye, Phone, ArrowUpCircle, MapPin, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

const steps = [
  { icon: Bell, title: "Alerta recibida", desc: "El sistema detecta una incidencia o el huésped contacta fuera de horario.", role: "Sistema / Huésped" },
  { icon: Eye, title: "Agente evalúa", desc: "Un agente del Centro de Control evalúa la situación según tus protocolos.", role: "Agente CC", link: { text: "Ver Centro de Control →", href: "/services/control-center" } },
  { icon: Phone, title: "Resolución remota", desc: "El agente contacta al huésped, media y resuelve. 96% se cierra aquí.", role: "Agente CC", highlight: "96% resolución remota", link: { text: "Ver Guest Assist™ →", href: "/services/guest-assist" } },
  { icon: ArrowUpCircle, title: "Escalación", desc: "Si no se resuelve, el Lead Agent o Shift Manager toman el control.", role: "Lead / Shift Manager", link: { text: "Ver Protocolos →", href: "/services/protocols" } },
  { icon: MapPin, title: "Field Service", desc: "Si se requiere presencia física, nuestro equipo se desplaza al alojamiento.", role: "Field Agent", link: { text: "Ver Field Service →", href: "/services/field-service" } },
  { icon: FileText, title: "Informe", desc: "A la mañana siguiente tienes el informe completo en tu dashboard.", role: "Dashboard" },
];

export function CoverTimeline() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Proceso</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            De la alerta a la resolución.{" "}
            <span className="gradient-text">Sin tu intervención.</span>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <AnimatedSection
                  key={i}
                  animation={isLeft ? "fade-right" : "fade-left"}
                  delay={i * 100}
                  className="relative lg:py-8"
                >
                  {/* Mobile layout */}
                  <div className="lg:hidden flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <span className="text-5xl font-black text-muted-foreground/10 absolute right-0 top-0 leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Badge variant="secondary" className="text-xs mb-2">{step.role}</Badge>
                      <h3 className="font-bold text-lg text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
                      {step.highlight && (
                        <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{step.highlight}</Badge>
                      )}
                      {step.link && (
                        <Link to={step.link.href} className="text-sm text-primary font-medium hover:underline block">
                          {step.link.text}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-center">
                    {/* Left content or spacer */}
                    <div className={cn("text-right", !isLeft && "order-1")}>
                      {isLeft ? (
                        <div className="bg-card border rounded-2xl p-6 ml-auto max-w-md shadow-soft hover:shadow-soft-lg transition-shadow duration-300 relative overflow-hidden group">
                          <span className="absolute -top-2 -right-2 text-7xl font-black text-muted-foreground/5 leading-none select-none">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <Badge variant="secondary" className="text-xs mb-3">{step.role}</Badge>
                          <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2 text-left">{step.desc}</p>
                          {step.highlight && (
                            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{step.highlight}</Badge>
                          )}
                          {step.link && (
                            <Link to={step.link.href} className="text-sm text-primary font-medium hover:underline block text-left">
                              {step.link.text}
                            </Link>
                          )}
                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                        </div>
                      ) : <div />}
                    </div>

                    {/* Center node */}
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Right content or spacer */}
                    <div className={cn(!isLeft ? "order-3" : "")}>
                      {!isLeft ? (
                        <div className="bg-card border rounded-2xl p-6 mr-auto max-w-md shadow-soft hover:shadow-soft-lg transition-shadow duration-300 relative overflow-hidden group">
                          <span className="absolute -top-2 -left-2 text-7xl font-black text-muted-foreground/5 leading-none select-none">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <Badge variant="secondary" className="text-xs mb-3">{step.role}</Badge>
                          <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-2">{step.desc}</p>
                          {step.highlight && (
                            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{step.highlight}</Badge>
                          )}
                          {step.link && (
                            <Link to={step.link.href} className="text-sm text-primary font-medium hover:underline block">
                              {step.link.text}
                            </Link>
                          )}
                          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                        </div>
                      ) : <div />}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
