import { Link } from "react-router-dom";
import { Clock, ChevronRight, Bookmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Guide } from "@/lib/guides-data";

interface GuideCardProps {
  guide: Guide;
  isBookmarked?: boolean;
  onToggleBookmark?: (guideId: string) => void;
}

const typeStyles: Record<string, string> = {
  Setup: "bg-muted text-muted-foreground",
  Installation: "bg-muted text-muted-foreground",
  "How-to": "bg-muted text-muted-foreground",
  FAQ: "bg-muted text-muted-foreground",
  "Best Practice": "bg-muted text-muted-foreground",
};

const difficultyStyles: Record<string, string> = {
  Beginner: "text-muted-foreground",
  Intermediate: "text-muted-foreground",
  Advanced: "text-muted-foreground",
};

export function GuideCard({ guide, isBookmarked, onToggleBookmark }: GuideCardProps) {
  return (
    <Card className="group relative border-border/50 bg-card hover:border-border hover:shadow-sm transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge
            variant="secondary"
            className={cn("text-xs font-medium px-2 py-0.5", typeStyles[guide.type])}
          >
            {guide.type}
          </Badge>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {guide.readTime}
            </span>
            {onToggleBookmark && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 -mr-1"
                onClick={(e) => {
                  e.preventDefault();
                  onToggleBookmark(guide.id);
                }}
              >
                <Bookmark
                  className={cn(
                    "w-3.5 h-3.5 transition-colors",
                    isBookmarked ? "fill-primary text-primary" : "text-muted-foreground"
                  )}
                />
              </Button>
            )}
          </div>
        </div>

        <Link to={guide.href} className="block">
          <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {guide.title}
          </h3>

          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-2">
            {guide.description}
          </p>

          <div className="flex items-center justify-between">
            {guide.difficulty && (
              <span className={cn("text-xs", difficultyStyles[guide.difficulty])}>
                {guide.difficulty}
              </span>
            )}
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
