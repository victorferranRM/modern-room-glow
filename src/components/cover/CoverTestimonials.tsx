import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useTranslation } from "@/i18n/useTranslation";

export function CoverTestimonials() {
  const { t, tObject } = useTranslation();
  const testimonials = tObject<{ quote: string; author: string; role: string; company: string }[]>('cover.testimonials');
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % (testimonials?.length || 1));
  }, [testimonials?.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  if (!testimonials?.length) return null;
  const item = testimonials[current];

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft-lg border relative text-center">
            <div className="text-6xl text-primary/20 leading-none mb-6">"</div>
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg lg:text-xl font-medium leading-relaxed mb-8 italic text-foreground min-h-[80px]">
              {item.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-lg">
                {item.author.charAt(0)}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">{item.author}</div>
                <div className="text-sm text-muted-foreground">{item.role}, {item.company}</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-primary/20 w-2 hover:bg-primary/40"
                  }`}
                  aria-label={`${t('cover.testimonialLabel')} ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
