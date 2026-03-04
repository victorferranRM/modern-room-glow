import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, ArrowRight, Shield, TrendingUp, Flame, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";

// Animated smoke particle component
function SmokeParticle({ delay, size, left, duration }: { delay: number; size: number; left: number; duration: number }) {
  return (
    <div
      className="absolute bottom-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent blur-xl animate-float-up"
      style={{
        width: `${size}px`,
        height: `${size * 1.5}px`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

// Smoke animation container
function SmokeEffect() {
  const particles = [
    { delay: 0, size: 80, left: 10, duration: 8 },
    { delay: 2, size: 120, left: 25, duration: 10 },
    { delay: 1, size: 60, left: 40, duration: 7 },
    { delay: 3, size: 100, left: 55, duration: 9 },
    { delay: 0.5, size: 90, left: 70, duration: 8 },
    { delay: 2.5, size: 70, left: 85, duration: 11 },
    { delay: 1.5, size: 110, left: 15, duration: 9 },
    { delay: 4, size: 80, left: 60, duration: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
      {particles.map((p, i) => (
        <SmokeParticle key={i} {...p} />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 800;
    const steps = 30;
    const stepValue = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function SavingsCalculator() {
  const [units, setUnits] = useState([50]);
  const [incidentRate, setIncidentRate] = useState([8]);
  const [avgDamageCost, setAvgDamageCost] = useState([350]);

  const annualIncidents = Math.round((units[0] * incidentRate[0]) / 100);
  const annualDamageCost = annualIncidents * avgDamageCost[0];
  const preventionRate = 0.75;
  const annualSavings = Math.round(annualDamageCost * preventionRate);
  const monthlySavings = Math.round(annualSavings / 12);
  const threeYearSavings = annualSavings * 3;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Smoke Effect */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background">
          <SmokeEffect />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-8 animate-fade-in">
                <AlertTriangle className="w-4 h-4" />
                <span>Los incidentes de humo cuestan millones al sector hotelero cada año</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Calcula tu ahorro en <span className="text-primary">detección de humo</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Descubre cómo la detección temprana de humo de Roomonitor puede proteger tus activos, 
                prevenir daños costosos y ofrecer un ROI medible para tu portfolio.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">75%</div>
                  <div className="text-sm text-muted-foreground">Prevención de incidentes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">5.000+</div>
                  <div className="text-sm text-muted-foreground">Propiedades protegidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">&lt;30s</div>
                  <div className="text-sm text-muted-foreground">Tiempo de detección</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 lg:py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Calculator Card */}
                <Card className="lg:col-span-3 shadow-soft-lg border-2">
                  <CardHeader className="border-b bg-muted/30 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Configura tu portfolio</CardTitle>
                        <CardDescription className="text-base">Ajusta los parámetros según tus propiedades</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 space-y-10">
                    {/* Units slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Número de propiedades</label>
                            <p className="text-xs text-muted-foreground">Total de unidades en tu portfolio</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{units[0]}</span>
                          <span className="text-sm text-muted-foreground ml-1">uds.</span>
                        </div>
                      </div>
                      <Slider
                        value={units}
                        onValueChange={setUnits}
                        min={10}
                        max={500}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>10 uds.</span>
                        <span>500 uds.</span>
                      </div>
                    </div>

                    {/* Incident rate slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                            <Flame className="w-5 h-5 text-destructive" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Tasa anual de incidentes</label>
                            <p className="text-xs text-muted-foreground">Porcentaje de propiedades afectadas al año</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-destructive">{incidentRate[0]}%</span>
                          <span className="text-sm text-muted-foreground ml-1">/año</span>
                        </div>
                      </div>
                      <Slider
                        value={incidentRate}
                        onValueChange={setIncidentRate}
                        min={1}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    {/* Damage cost slider */}
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-warning" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-foreground">Coste medio por daño</label>
                            <p className="text-xs text-muted-foreground">Por incidente de humo</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-warning">€{avgDamageCost[0]}</span>
                        </div>
                      </div>
                      <Slider
                        value={avgDamageCost}
                        onValueChange={setAvgDamageCost}
                        min={100}
                        max={1000}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>€100</span>
                        <span>€1.000</span>
                      </div>
                    </div>

                    {/* Info box */}
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Media del sector:</strong> Hoteles y alquileres vacacionales suelen experimentar entre un 5-15% de incidentes de humo al año, 
                        con daños que van de €200 a €800 por incidente incluyendo limpieza, reparaciones e ingresos perdidos.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Results Card */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="shadow-soft-lg overflow-hidden">
                    <div className="gradient-primary p-6 text-white">
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-2">
                        <TrendingUp className="w-4 h-4" />
                        Tu ahorro anual estimado
                      </div>
                      <div className="text-5xl lg:text-6xl font-bold mb-1">
                        <AnimatedCounter value={annualSavings} prefix="€" />
                      </div>
                      <div className="text-white/70">
                        €{monthlySavings.toLocaleString()}/mes
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Incidentes estimados/año</span>
                        <span className="font-semibold text-lg">{annualIncidents}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Daño potencial total</span>
                        <span className="font-semibold text-lg text-destructive">€{annualDamageCost.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b">
                        <span className="text-muted-foreground">Tasa de prevención</span>
                        <span className="font-semibold text-lg text-primary">75%</span>
                      </div>
                      <div className="flex items-center justify-between py-3 bg-primary/5 -mx-6 px-6 rounded-lg">
                        <span className="font-medium">Ahorro a 3 años</span>
                        <span className="font-bold text-xl text-primary">€{threeYearSavings.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">¿Listo para proteger tus propiedades?</h3>
                      <p className="text-muted-foreground text-sm mb-5">
                        Obtén un presupuesto personalizado y descubre cómo Roomonitor puede funcionar para tu portfolio.
                      </p>
                      <div className="space-y-3">
                        <Button size="lg" className="w-full shadow-lg" asChild>
                          <Link to="/contact">
                            Solicitar una demo
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="w-full" asChild>
                          <Link to="/pricing">Ver precios</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Cómo la detección de humo protege tu inversión
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nuestros sensores avanzados detectan el humo de cigarrillo en segundos, permitiendo una intervención inmediata 
                  antes de que se produzcan daños.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Detección instantánea</h3>
                    <p className="text-muted-foreground text-sm">
                      Los sensores avanzados identifican partículas de humo de cigarrillo en menos de 30 segundos, 
                      mucho más rápido que los detectores de humo tradicionales.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Alerta inmediata</h3>
                    <p className="text-muted-foreground text-sm">
                      Nuestro Centro de Control recibe la alerta al instante e inicia 
                      el protocolo de intervención según tus preferencias.
                    </p>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden group hover:shadow-soft-lg transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Resolución rápida</h3>
                    <p className="text-muted-foreground text-sm">
                      Se contacta al huésped, se resuelve la situación y se previene el daño — 
                      todo antes de que el humo impregne tejidos y superficies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                    Por qué los gestores eligen Roomonitor
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        icon: Shield,
                        title: "Protección de activos",
                        description: "Prevén costosas limpiezas profundas, sustitución de mobiliario y repintado causados por daños de humo.",
                      },
                      {
                        icon: Flame,
                        title: "Aplicación de políticas",
                        description: "Aplica eficazmente políticas de no fumadores con documentación de incidentes basada en evidencias.",
                      },
                      {
                        icon: TrendingUp,
                        title: "ROI demostrado",
                        description: "La mayoría de propiedades recuperan la inversión en 3-6 meses solo con los daños prevenidos.",
                      },
                      {
                        icon: CheckCircle2,
                        title: "Monitorización 24/7",
                        description: "Protección continua que garantiza la detección de incidentes sin importar cuándo ocurran.",
                      },
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Card */}
                <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                  <div className="space-y-8">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">75%</div>
                      <div className="text-slate-300">de incidentes de humo prevenidos con detección temprana</div>
                    </div>
                    <div className="h-px bg-slate-700" />
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">€350</div>
                      <div className="text-slate-300">coste medio por incidente de humo no detectado</div>
                    </div>
                    <div className="h-px bg-slate-700" />
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">3-6 meses</div>
                      <div className="text-slate-300">periodo típico de retorno de inversión con Roomonitor</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
