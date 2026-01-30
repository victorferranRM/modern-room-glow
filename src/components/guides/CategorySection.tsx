import {
  Rocket,
  Wrench,
  Settings,
  Target,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GuideCard } from "./GuideCard";
import type { GuideCategory } from "@/lib/guides-data";

interface CategorySectionProps {
  category: GuideCategory;
  isBookmarked: (id: string) => boolean;
  onToggleBookmark: (id: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Wrench,
  Settings,
  Target,
  HelpCircle,
};

export function CategorySection({
  category,
  isBookmarked,
  onToggleBookmark,
}: CategorySectionProps) {
  const Icon = iconMap[category.icon] || BookOpen;

  return (
    <AnimatedSection className="mb-8 last:mb-0">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-base font-semibold text-foreground">{category.title}</h2>
        <span className="text-xs text-muted-foreground">
          {category.guides.length} guides
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {category.guides.map((guide) => (
          <GuideCard
            key={guide.id}
            guide={guide}
            isBookmarked={isBookmarked(guide.id)}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
