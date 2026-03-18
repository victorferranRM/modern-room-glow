import { AnimatedSection } from "@/components/ui/animated-section";
import bannerDevice from "@/assets/banner-device.webp";

export function MonitoringBanner() {
  return (
    <AnimatedSection>
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${bannerDevice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/30" />
      </div>
    </AnimatedSection>
  );
}
