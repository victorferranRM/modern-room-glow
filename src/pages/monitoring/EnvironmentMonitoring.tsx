import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MonitoringHero } from "@/components/monitoring/MonitoringHero";
import { Button } from "@/components/ui/button";
import { 
  Thermometer, Droplets, ArrowRight, Check, Wind, Gauge
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies-data";
import monitoringEnvironment from "@/assets/monitoring-environment.jpg";
import managerDevices from "@/assets/manager-devices.png";

const environmentFeatures = [
  { icon: Thermometer, title: "Control de temperatura", description: "Monitoriza la temperatura interior para garantizar el confort del huésped y prevenir la congelación de tuberías." },
  { icon: Droplets, title: "Detección de humedad", description: "Controla los niveles de humedad para prevenir moho, condensación y daños por humedad." },
  { icon: Wind, title: "Índice de calidad del aire", description: "Monitoriza niveles de CO2 y calidad del aire general para ambientes interiores saludables." },
  { icon: Gauge, title: "Monitorización de presión", description: "Sigue los cambios de presión atmosférica que podrían afectar a los sistemas de climatización." },
];

const howItWorks = [
  { step: "01", title: "Establece rangos de confort", description: "Define rangos ideales de temperatura y humedad según el tipo de propiedad." },
  { step: "02", title: "Monitorización continua", description: "Los sensores monitorizan las condiciones ambientales 24/7 con un consumo mínimo de energía." },
  { step: "03", title: "Análisis de patrones", description: "Nuestro sistema aprende los patrones de tu propiedad para detectar anomalías de forma temprana." },
  { step: "04", title: "Alertas preventivas", description: "Recibe notificaciones antes de que las condiciones se conviertan en problemáticas, previniendo daños." },
];

const relatedCaseStudy = caseStudies.find(cs => cs.slug === "mun-stays");

function ManagerCheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 group">
      <div className="w-5 h-5 mt-0.5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:border-primary">
        <Check className="w-3 h-3 text-primary transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={3} />
      </div>
      <span className="text-sm sm:text-base text-foreground/80 transition-colors group-hover:text-foreground">{text}</span>
    </li>
  );
}

export default function EnvironmentMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <MonitoringHero
        icon={Thermometer}
        badge="Monitorización Ambiental"
        title="Condiciones perfectas,"
        titleHighlight="propiedad protegida"
        description="Monitoriza temperatura, humedad y calidad del aire para garantizar el confort del huésped y proteger tu propiedad de daños ambientales."
        image={monitoringEnvironment}
        imageAlt="Monitorización ambiental"
        breadcrumbLabel="Monitorización Ambiental"
      />

      <section className="py-12 bg-secondary/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "±0,5°C", label: "Precisión de temperatura" },
              { value: "±3%", label: "Precisión de humedad" },
              { value: "5min", label: "Intervalo de actualización" },
              { value: "100%", label: "Sincronizado en la nube" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Características principales</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Control ambiental completo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desde la temperatura hasta la calidad del aire, monitoriza todo lo que afecta 
              al confort del huésped y la salud de la propiedad en un solo lugar.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentFeatures.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-card border h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Cómo funciona</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Protección proactiva de la propiedad</h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {howItWorks.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 100}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-card border">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">{step.step}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Roomonitor Manager</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Información ambiental de un vistazo</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visualiza datos ambientales en tiempo real en todas tus propiedades, configura alertas 
                personalizadas y analiza tendencias históricas para optimizar el confort del huésped.
              </p>
              <ul className="space-y-3 mb-8">
                <ManagerCheckItem text="Lecturas de temperatura y humedad en tiempo real" />
                <ManagerCheckItem text="Umbrales de alerta personalizados por temporada" />
                <ManagerCheckItem text="Análisis de tendencias históricas" />
                <ManagerCheckItem text="Recomendaciones de optimización de climatización" />
              </ul>
              <Button asChild>
                <Link to="/how-it-works">
                  Explorar Manager
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-muted/60 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-muted/80" />
                <img
                  src={managerDevices}
                  alt="Panel de Roomonitor Manager"
                  className="relative w-full rounded-2xl shadow-lg border border-border/50"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {relatedCaseStudy && (
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Caso de éxito</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Monitorización ambiental en acción</h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Link to={`/resources/case-studies/${relatedCaseStudy.slug}`} className="block max-w-4xl mx-auto group">
                <div className="grid md:grid-cols-2 gap-8 p-8 rounded-3xl bg-card border hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${relatedCaseStudy.heroImage})` }} />
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2">{relatedCaseStudy.industry} • {relatedCaseStudy.location}</p>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{relatedCaseStudy.headline}</h3>
                    {relatedCaseStudy.quote && <blockquote className="text-muted-foreground italic mb-4">"{relatedCaseStudy.quote.text.slice(0, 120)}..."</blockquote>}
                    <div className="flex items-center gap-4">
                      {relatedCaseStudy.stats.slice(0, 2).map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">¿Listo para proteger tu propiedad?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Monitoriza las condiciones ambientales 24/7 y prevén daños costosos 
              por temperaturas extremas, humedad y mala calidad del aire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild><Link to="/pricing">Ver precios<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild><Link to="/contact">Solicitar una demo</Link></Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
