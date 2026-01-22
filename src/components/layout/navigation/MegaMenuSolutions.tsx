import { Link } from "react-router-dom";
import { solutionsData } from "./navigation-data";
import { Building2, Hotel, Home, ChevronRight } from "lucide-react";
import solutionVacation from "@/assets/solution-rest-new.jpg";
import solutionHotel from "@/assets/solution-manage.jpg";
import solutionOwners from "@/assets/solution-control.jpg";

const icons = [Building2, Hotel, Home];

const solutionCards = [
  {
    title: "Vacation Rentals",
    image: solutionVacation,
    href: "/solutions/hospitality-operators",
  },
  {
    title: "Hotels",
    image: solutionHotel,
    href: "/solutions/hotels",
  },
  {
    title: "Property Owners",
    image: solutionOwners,
    href: "/solutions/independent-owners",
  },
];

export function MegaMenuSolutions() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      {/* Solution Cards Row */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-4">
          EXPLORE BY SECTOR
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {solutionCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  {card.title}
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Detailed Solutions List */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-4">
          TAILORED TO YOUR PORTFOLIO
        </h3>
        <ul className="grid grid-cols-3 gap-3">
          {solutionsData.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-200 ease-out hover:bg-muted/80"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-primary transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </span>
                    <span className="block text-sm text-muted-foreground mt-0.5 transition-colors duration-200 group-hover:text-muted-foreground/80">
                      {item.description}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
