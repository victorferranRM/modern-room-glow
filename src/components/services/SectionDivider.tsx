import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "wave" | "gradient" | "dots";
  className?: string;
  flip?: boolean;
}

export function SectionDivider({ 
  variant = "wave", 
  className,
  flip = false 
}: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div 
        className={cn(
          "h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent",
          flip && "rotate-180",
          className
        )}
      />
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("py-8 flex justify-center gap-2", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/30 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("relative h-16 overflow-hidden", flip && "rotate-180", className)}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 600,0 900,50 C1050,75 1150,50 1200,0 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
}
