import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
  src: string;
  className?: string;
  containerClassName?: string;
  poster?: string;
}

export function LazyVideo({ src, className, containerClassName, poster }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", containerClassName)}>
      {isInView ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={className}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className={cn("bg-muted/30", className)} />
      )}
    </div>
  );
}
