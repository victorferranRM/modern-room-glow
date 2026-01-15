import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TakeoverSection } from "@/components/home/TakeoverSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { MonitoringSection } from "@/components/home/MonitoringSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { PartnersSection } from "@/components/home/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <TakeoverSection />
        <HowItWorksSection />
        <MonitoringSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
