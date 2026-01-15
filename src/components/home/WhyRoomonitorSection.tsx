import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { number: "11M+", description: "Stays protected across our platform" },
  { number: "99.9%", description: "Uptime backed by 24/7 support" },
  { number: "<5 min", description: "Setup time per room" },
  { number: "250+", description: "Hotels trust Roomonitor worldwide" },
];

const caseStudies = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    name: "María García",
    position: "Operations Director, Barcelona Hotels",
    quote: "Since implementing Roomonitor, we've reduced noise complaints by 80% and our guest satisfaction scores have never been higher. The real-time alerts allow our team to act before issues escalate.",
    rating: 5,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    name: "Urs Möller",
    position: "CEO, Berlin Apartments",
    quote: "Sometimes guests leave a day early, and before Roomonitor, we wouldn't know until check-out time. Now, we can detect the lack of activity and start cleaning early, which speeds up turnovers.",
    rating: 5,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    name: "James Wilson",
    position: "Property Manager, London Stays",
    quote: "The integration with our PMS was seamless. Roomonitor's team operates as if they were part of our staff—guests don't even know there's a third party involved.",
    rating: 5,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    name: "Sophie Martin",
    position: "GM, Paris Boutique Hotels",
    quote: "We've seen a 60% reduction in unauthorized gatherings since installing the sensors. The ROI was evident within the first quarter.",
    rating: 5,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    name: "Carlos Ruiz",
    position: "Director, Madrid Vacation Rentals",
    quote: "Roomonitor gives us peace of mind. We can manage 50+ properties remotely knowing that any issue will be flagged immediately to our team.",
    rating: 5,
  },
];

export const WhyRoomonitorSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const activeStudy = caseStudies[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Roomonitor?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Built for hospitality,{" "}
            <span className="italic text-primary">trusted</span> by industry leaders
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8">
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Side - Case Studies Carousel */}
          <div className="relative">
            {/* Background Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src={activeStudy.image}
                alt={activeStudy.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(activeStudy.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    ({activeStudy.rating}.0)
                  </span>
                </div>

                {/* Quote */}
                <p className="text-foreground text-sm md:text-base mb-4 line-clamp-4">
                  "{activeStudy.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{activeStudy.name}</p>
                    <p className="text-sm text-muted-foreground">{activeStudy.position}</p>
                  </div>
                  <Button variant="link" className="text-primary p-0">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
