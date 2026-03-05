import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Roomonitor has completely transformed how we manage our properties. The noise monitoring alone has saved us from countless neighbor complaints.",
    author: "Maria García",
    role: "Property Manager",
    company: "Barcelona Stays",
    rating: 5,
  },
  {
    quote: "The 24/7 support team is incredible. They handled an emergency at 3 AM and I didn't even have to wake up. That's peace of mind you can't put a price on.",
    author: "James Wilson",
    role: "Owner",
    company: "London Luxury Rentals",
    rating: 5,
  },
  {
    quote: "We've reduced noise complaints by 90% since installing Roomonitor devices. Our neighbors actually thank us now.",
    author: "Sophie Dubois",
    role: "Operations Director",
    company: "Paris Apartments Co.",
    rating: 5,
  },
  {
    quote: "The check-in automation saved us 20+ hours per week. Our guests love the seamless experience and we love the efficiency.",
    author: "Marco Rossi",
    role: "CEO",
    company: "Roma Holiday Homes",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by property managers{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who trust Roomonitor to protect their properties.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
           <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-soft-lg border relative">
            {/* Quote mark */}
            <div className="absolute top-8 left-8 text-6xl text-primary/20 leading-none">
              "
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 relative z-10">
              {testimonial.quote}
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
