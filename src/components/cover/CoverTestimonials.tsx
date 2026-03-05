import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote: "Saber que de 22:00 a 07:00 alguien toma el relevo, puede acceder al apartamento e intervenir in situ, no tiene precio. Hoy puedo dormir tranquilo sin miedo a una llamada por una fiesta.",
    author: "Jordan Setti",
    role: "COO",
    company: "Checkmyguest",
  },
  {
    quote: "Hemos minimizado las incidencias a niveles increíbles. Ahora podemos afirmar que tenemos un equipo externo totalmente fiable con los agentes de Alarm Assistant.",
    author: "Ignacio García",
    role: "CEO",
    company: "You Stylish Apartments",
  },
  {
    quote: "Roomonitor se ha vuelto totalmente indispensable para nosotros. La capacidad de monitorizar en tiempo real y su respuesta rápida es fundamental para nuestra operativa.",
    author: "David Lombardía",
    role: "CEO",
    company: "Mun Stays",
  },
];

export function CoverTestimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft-lg border relative text-center">
             {/* Quote mark */}
            <div className="text-6xl text-primary/20 leading-none mb-6">"</div>

            {/* Stars */}
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg lg:text-xl font-medium leading-relaxed mb-8 italic text-foreground min-h-[80px]">
              {t.quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-lg">
                {t.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.role}, {t.company}</div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-primary/20 w-2 hover:bg-primary/40"
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
