import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";

import { ControlLevelSection } from "@/components/home/ControlLevelSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MonitoringSection } from "@/components/home/MonitoringSection";
import { ManagerSection } from "@/components/home/ManagerSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { WhyRoomonitorSection } from "@/components/home/WhyRoomonitorSection";
import { AnimatedSection } from "@/components/ui/animated-section";

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
          <TakeoverSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <ControlLevelSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <HowItWorksSection />
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
          <MonitoringSection />
        </AnimatedSection>
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
