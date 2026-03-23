import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  width,
  height,
  priority = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px", // Start loading 200px before entering viewport for smoother experience
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-muted/30",
        containerClassName
      )}
      style={{ width, height }}
    >
      {/* Skeleton placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-muted/30 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Actual image - only loads when in view */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "transition-opacity duration-500",
            objectFitClass,
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
