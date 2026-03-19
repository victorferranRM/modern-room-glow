import { LocalizedLink as Link } from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import { ChevronRight } from "lucide-react";
import solutionVacation from "@/assets/solution-rest-new.webp";
import solutionHotel from "@/assets/solution-manage.webp";
import solutionOwners from "@/assets/solution-control.webp";

const solutionHrefs = ["/solutions/vacation-rentals", "/solutions/hotels", "/solutions/property-owners"];
const solutionImages = [solutionVacation, solutionHotel, solutionOwners];

export function MegaMenuSolutions() {
  const { tObject, t } = useTranslation();
  const solutions = tObject<{ title: string; description: string }[]>("megaMenu.solutions");

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-4">
          {t("megaMenu.solutions.0.title") ? "" : ""}{/* Section header could be added to dict if needed */}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {solutions.map((card, index) => (
            <Link
              key={solutionHrefs[index]}
              to={solutionHrefs[index]}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={solutionImages[index]} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
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
