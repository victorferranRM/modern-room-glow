import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Wrench, Shield, FileText, Users, Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Animated counter hook
function useCounter(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref };
}

function formatNumber(n: number) {
  return n.toLocaleString("es-ES");
}

const steps = [
  { num: "01", role: "Sistema / Huésped", title: "Alerta recibida", desc: "El sistema detecta una incidencia o el huésped contacta fuera de horario.", icon: Shield },
  { num: "02", role: "Agente CC", title: "Agente evalúa", desc: "Un agente del Centro de Control evalúa la situación según tus protocolos.", icon: Users },
  { num: "03", role: "Agente CC", title: "Resolución remota", desc: "El agente contacta al huésped, media y resuelve. 96% se cierra aquí.", icon: Phone },
  { num: "04", role: "Lead / Shift Manager", title: "Escalación", desc: "Si no se resuelve, el Lead Agent o Shift Manager toman el control.", icon: Users },
  { num: "05", role: "Field Agent", title: "Field Service", desc: "Si se requiere presencia física, nuestro equipo se desplaza al alojamiento.", icon: Wrench },
  { num: "06", role: "Dashboard", title: "Informe", desc: "A la mañana siguiente tienes el informe completo en tu dashboard.", icon: FileText },
];

const differentiators = [
  { title: "Accedemos a tus herramientas", desc: "PMS, canal de comunicación, cerraduras inteligentes. Trabajamos dentro de tu ecosistema.", icon: Building2 },
  { title: "Protocolos a medida", desc: "Definimos juntos cómo actuar en cada escenario: ruido, emergencias, late check-in, mantenimiento.", icon: FileText },
  { title: "Equipo formado en hospitality", desc: "No somos un call center genérico. Nuestros agentes entienden la industria del alojamiento.", icon: Users },
  { title: "Jerarquía operativa real", desc: "Agente → Lead Agent → Shift Manager → Field Service. Cada nivel sabe qué hacer.", icon: Shield },
  { title: "Reportes de cada incidencia", desc: "Trazabilidad completa. Sabes qué pasó, quién actuó, y cómo se resolvió.", icon: FileText },
];

const cities = [
  { name: "Barcelona", hours: "24/7", flag: "🇪🇸" },
  { name: "Madrid", hours: "24/7", flag: "🇪🇸" },
  { name: "Málaga", hours: "22:00–08:00", flag: "🇪🇸" },
  { name: "Valencia", hours: "22:00–08:00", flag: "🇪🇸" },
  { name: "Sevilla", hours: "22:00–08:00", flag: "🇪🇸" },
  { name: "Granada", hours: "22:00–08:00", flag: "🇪🇸" },
  { name: "Lisboa", hours: "22:00–08:00", flag: "🇵🇹" },
  { name: "París", hours: "22:00–08:00", flag: "🇫🇷" },
];

export default function Cover() {
  const stat1 = useCounter(268414);
  const stat2 = useCounter(97);
  const stat3 = useCounter(4);
  const stat4 = useCounter(9580);
  const stat5 = useCounter(8);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
            Roomonitor Cover
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Cuando tú o tu equipo no estáis,{" "}
            <span className="text-primary">nosotros estamos.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Centro de control 24/7 e intervención presencial en 8 ciudades. La operativa nocturna de tus propiedades, sin problemas de estructura.
          </p>
          <Button size="lg" asChild className="shadow-lg">
            <Link to="/contact" className="gap-2">
              Hablar con un experto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div ref={stat1.ref}>
              <div className="text-3xl md:text-4xl font-bold">{formatNumber(stat1.count)}</div>
              <div className="text-sm text-background/70 mt-1">gestiones en 2024</div>
            </div>
            <div ref={stat2.ref}>
              <div className="text-3xl md:text-4xl font-bold">{stat2.count}%</div>
              <div className="text-sm text-background/70 mt-1">CSAT</div>
            </div>
            <div ref={stat3.ref}>
              <div className="text-3xl md:text-4xl font-bold">&lt;{stat3.count} min</div>
              <div className="text-sm text-background/70 mt-1">AHT</div>
            </div>
            <div ref={stat4.ref}>
              <div className="text-3xl md:text-4xl font-bold">{formatNumber(stat4.count)}</div>
              <div className="text-sm text-background/70 mt-1">intervenciones Field Service</div>
            </div>
            <div ref={stat5.ref} className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold">{stat5.count}</div>
              <div className="text-sm text-background/70 mt-1">ciudades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Proceso</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cómo funciona</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                >
                  {/* Big number */}
                  <span className="absolute top-4 right-4 text-6xl font-black text-muted-foreground/10 select-none leading-none">
                    {step.num}
                  </span>
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  <Badge variant="secondary" className="text-xs mb-4">{step.role}</Badge>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not a call center */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              No somos un call center.{" "}
              <span className="text-primary">Somos tu estructura operativa.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30",
                    i >= 3 && "lg:col-span-1"
                  )}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Field Service cities */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Cobertura</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Field Service en <span className="text-primary">8 ciudades</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-xl border bg-card p-5 text-center transition-all duration-200 hover:shadow-md hover:border-primary/30"
              >
                <span className="text-2xl mb-2 block">{city.flag}</span>
                <h3 className="font-semibold text-foreground">{city.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{city.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground text-background py-20 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Gestionas más de 50 propiedades?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Cover está diseñado para gestores profesionales que necesitan estructura operativa real fuera de horario.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-background text-foreground bg-background hover:bg-background/90"
          >
            <Link to="/contact" className="gap-2">
              Hablar con un experto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
