import { BookOpen, Bookmark, Rocket, Wrench, Settings, Target, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GuideCategory } from "@/lib/guides-data";

interface GuideTOCProps {
  categories: GuideCategory[];
  activeCategory?: string;
  bookmarkCount?: number;
  showBookmarksOnly?: boolean;
  onToggleBookmarks?: () => void;
}

const iconComponents: Record<string, React.ElementType> = {
  Rocket,
  Wrench,
  Settings,
  Target,
  HelpCircle,
};

export function GuideTOC({
  categories,
  activeCategory,
  bookmarkCount = 0,
  showBookmarksOnly = false,
  onToggleBookmarks,
}: GuideTOCProps) {
  return (
    <nav className="sticky top-24 space-y-1">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 px-2">
        Contents
      </p>

      {onToggleBookmarks && (
        <button
          onClick={onToggleBookmarks}
          className={cn(
            "w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors",
            showBookmarksOnly
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Saved Guides</span>
          {bookmarkCount > 0 && (
            <span className="ml-auto text-xs bg-muted rounded-full px-1.5 py-0.5">
              {bookmarkCount}
            </span>
          )}
        </button>
      )}

      <div className="border-t border-border/50 my-2" />

      {categories.map((category) => {
        const IconComponent = iconComponents[category.icon] || BookOpen;
        return (
          <a
            key={category.id}
            href={`#${category.id}`}
            className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors",
              activeCategory === category.id
                ? "bg-muted text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            <IconComponent className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{category.title}</span>
            <span className="ml-auto text-xs text-muted-foreground">
              {category.guides.length}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
