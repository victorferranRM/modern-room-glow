import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TakeoverSection } from "@/components/home/TakeoverSection";
import { ResponsibilitiesSection } from "@/components/home/ResponsibilitiesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ActingAsYouSection } from "@/components/home/ActingAsYouSection";
import { DeviceSection } from "@/components/home/DeviceSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { PartnersSection } from "@/components/home/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TakeoverSection />
        <ResponsibilitiesSection />
        <HowItWorksSection />
        <ActingAsYouSection />
        <DeviceSection />
        <PartnersSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
