import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MapPin, Building2, Play } from "lucide-react";
import { getCaseStudyBySlug, getRelatedCaseStudies, type CaseStudy } from "@/lib/case-studies-data";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");
  const [showVideo, setShowVideo] = useState(false);
  
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;
  const relatedStudies = slug ? getRelatedCaseStudies(slug, 3) : [];

  useEffect(() => {
    if (!caseStudy) return;
    const handleScroll = () => {
      const sections = caseStudy.sections.map((s) => ({
        id: s.id,
        element: document.getElementById(s.id),
      }));
      for (const section of sections.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Caso de éxito no encontrado</h1>
          <Button asChild>
            <Link to="/resources/case-studies">Volver a Casos de éxito</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-4">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/resources/case-studies" className="hover:text-primary transition-colors">
              Casos de éxito
            </Link>
            <span>/</span>
            <span className="text-foreground">{caseStudy.company}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl">
              <h2 className="text-lg font-medium text-primary mb-2">
                {caseStudy.company}
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                {caseStudy.headline}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{caseStudy.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{caseStudy.industry}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="relative rounded-2xl overflow-hidden">
              {showVideo && caseStudy.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={caseStudy.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={caseStudy.heroImage} 
                    alt={caseStudy.company}
                    className="w-full aspect-[21/9] object-cover"
                  />
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {caseStudy.company.charAt(0)}
                    </span>
                  </div>
                  {caseStudy.videoUrl && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary ml-1" />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Row */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
              {caseStudy.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-light">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content with Sticky Nav */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <nav className="space-y-1">
                  {caseStudy.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Quieres resultados similares?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Descubre cómo Roomonitor puede ayudar a tus propiedades.
                  </p>
                  <Button size="sm" className="w-full" asChild>
                    <Link to="/contact">Solicitar una Demo</Link>
                  </Button>
                </div>
              </div>
            </aside>

            <div className="max-w-3xl">
              {caseStudy.sections.map((section, index) => (
                <AnimatedSection
                  key={section.id}
                  animation="fade-up"
                  delay={index * 100}
                  id={section.id}
                  className="mb-16 scroll-mt-32"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    {section.content.split("\n\n").map((paragraph, pIndex) => {
                      if (paragraph.startsWith("•")) {
                        return (
                          <ul key={pIndex} className="space-y-2 mb-4">
                            {paragraph.split("\n").map((item, iIndex) => (
                              <li 
                                key={iIndex} 
                                className="text-muted-foreground font-light"
                                dangerouslySetInnerHTML={{
                                  __html: item.replace(/^•\s*/, "").replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                                }}
                              />
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p 
                          key={pIndex} 
                          className="text-muted-foreground font-light mb-4 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                          }}
                        />
                      );
                    })}
                  </div>
                  {section.image && (
                    <div className="mt-8 rounded-xl overflow-hidden">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  )}
                </AnimatedSection>
              ))}

              {caseStudy.quote && (
                <AnimatedSection animation="fade-up" className="mb-16">
                  <blockquote className="relative p-8 bg-muted/50 rounded-2xl border-l-4 border-primary">
                    <p className="text-xl sm:text-2xl font-light text-foreground italic mb-6 leading-relaxed">
                      "{caseStudy.quote.text}"
                    </p>
                    <footer>
                      <div className="font-semibold text-foreground">{caseStudy.quote.author}</div>
                      <div className="text-sm text-muted-foreground">{caseStudy.quote.role}</div>
                    </footer>
                  </blockquote>
                </AnimatedSection>
              )}

              <AnimatedSection animation="fade-up" className="flex justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Contactar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground text-center mb-12">
              Otros casos de éxito
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedStudies.map((study, index) => (
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
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={study.heroImage} 
                        alt={study.company}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {study.company.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {study.company}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light line-clamp-2">
                        {study.headline}
                      </p>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/resources/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver todos los casos de éxito
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
