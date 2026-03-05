import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies, caseStudyCategories, getCaseStudiesByIndustry } from "@/lib/case-studies-data";

const stats = [
  { value: "50.000+", label: "Propiedades protegidas" },
  { value: "45", label: "Países" },
  { value: "98%", label: "Retención de clientes" },
  { value: "10", label: "Años operando" },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filteredStudies = getCaseStudiesByIndustry(activeCategory);
  const featuredStudy = caseStudies[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Casos de éxito
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Resultados reales de{" "}
              <span className="text-primary">propiedades reales</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Descubre cómo gestores de propiedades de todo el mundo están transformando sus operaciones con las soluciones de monitorización inteligente de Roomonitor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up">
            <Link 
              to={`/resources/case-studies/${featuredStudy.slug}`}
              className="block group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-muted">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                      Destacado
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredStudy.company}
                    </h2>
                    <p className="text-muted-foreground font-light mb-6 line-clamp-3">
                      {featuredStudy.summary}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {featuredStudy.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        {featuredStudy.industry}
                      </div>
                    </div>
                    <Button className="w-fit group/btn">
                      Leer caso de éxito
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                  
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredStudy.heroImage} 
                      alt={featuredStudy.company}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {featuredStudy.quote && (
                      <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <p className="text-sm text-muted-foreground italic line-clamp-2">
                          "{featuredStudy.quote.text.substring(0, 120)}..."
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {caseStudyCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <AnimatedSection 
                key={study.slug} 
                animation="fade-up" 
                delay={index * 100}
              >
                <Link 
                  to={`/resources/case-studies/${study.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={study.heroImage} 
                        alt={study.company}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">
                          {study.company.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <MapPin className="h-3 w-3" />
                        {study.location}
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {study.company}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-2">
                        {study.headline}
                      </p>
                      <div className="flex justify-between border-t border-border pt-4">
                        {study.stats.slice(0, 3).map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm sm:text-base font-light">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
              ¿Listo para escribir tu caso de éxito?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto mb-10">
              Únete a cientos de gestores de propiedades que han transformado sus operaciones con Roomonitor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary hover:text-primary"
                asChild
              >
                <Link to="/contact">
                  Solicitar una Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/resources/savings-calculator">
                  Calcular tu Ahorro
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
