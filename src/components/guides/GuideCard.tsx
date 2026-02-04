import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Guide } from "@/lib/guides-data";

interface GuideCardProps {
  guide: Guide;
}

const typeStyles: Record<string, string> = {
  Setup: "bg-primary/15 text-primary",
  Installation: "bg-primary/15 text-primary",
  "How-to": "bg-primary/15 text-primary",
  FAQ: "bg-primary/15 text-primary",
  "Best Practice": "bg-primary/15 text-primary",
};

const difficultyStyles: Record<string, string> = {
  Beginner: "text-muted-foreground",
  Intermediate: "text-muted-foreground",
  Advanced: "text-muted-foreground",
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Card className="group relative border-border/50 bg-card hover:border-border hover:shadow-sm transition-all duration-200">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge
            variant="secondary"
            className={cn("text-xs font-medium px-2.5 py-1", typeStyles[guide.type])}
          >
            {guide.type}
          </Badge>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
        </div>

        <Link to={guide.href} className="block">
          <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {guide.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {guide.description}
          </p>

          <div className="flex items-center justify-between">
            {guide.difficulty && (
              <span className={cn("text-sm", difficultyStyles[guide.difficulty])}>
                {guide.difficulty}
              </span>
            )}
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all ml-auto" />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
