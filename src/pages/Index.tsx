import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";

import { ControlLevelSection } from "@/components/home/ControlLevelSection";

import { MonitoringSection } from "@/components/home/MonitoringSection";
import { ManagerSection } from "@/components/home/ManagerSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { WhyRoomonitorSection } from "@/components/home/WhyRoomonitorSection";
import { CoverSection } from "@/components/home/CoverSection";
import { AnimatedSection } from "@/components/ui/animated-section";
import { LazyVideo } from "@/components/ui/lazy-video";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnimatedSection animation="fade-up">
          <PartnersSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <ControlLevelSection />
        </AnimatedSection>
        {/* Video banner separator */}
        <LazyVideo
          src="/videos/monitoring-bg.mp4"
          containerClassName="relative w-full overflow-hidden aspect-[2/1] sm:aspect-[3/1]"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <AnimatedSection animation="fade-up">
          <MonitoringSection />
        </AnimatedSection>
        <CoverSection />
        <AnimatedSection animation="fade-up">
          <WhyRoomonitorSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <ManagerSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <ClosingSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
