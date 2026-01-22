import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import solutionVacation from "@/assets/solution-rest-new.jpg";
import solutionHotel from "@/assets/solution-manage.jpg";
import solutionOwners from "@/assets/solution-control.jpg";

const solutionCards = [
  {
    title: "Vacation Rentals",
    description: "Full operational coverage outside office hours",
    image: solutionVacation,
    href: "/solutions/hospitality-operators",
  },
  {
    title: "Hotels",
    description: "Smoke detection and asset protection",
    image: solutionHotel,
    href: "/solutions/hotels",
  },
  {
    title: "Property Owners",
    description: "Noise monitoring and issue prevention",
    image: solutionOwners,
    href: "/solutions/independent-owners",
  },
];

export function MegaMenuSolutions() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Solution Cards Row */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-4">
          TAILORED TO YOUR PORTFOLIO
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {solutionCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  {card.title}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-white/80 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
