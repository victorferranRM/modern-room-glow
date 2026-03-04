import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CoverHero } from "@/components/cover/CoverHero";
import { CoverStats } from "@/components/cover/CoverStats";
import { CoverTimeline } from "@/components/cover/CoverTimeline";
import { CoverTabs } from "@/components/cover/CoverTabs";
import { CoverCities } from "@/components/cover/CoverCities";
import { CoverAudience } from "@/components/cover/CoverAudience";
import { CoverTestimonials } from "@/components/cover/CoverTestimonials";
import { CoverCTA } from "@/components/cover/CoverCTA";

export default function Cover() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CoverHero />
      <CoverStats />
      <CoverTimeline />
      <CoverTabs />
      <CoverCities />
      <CoverAudience />
      <CoverTestimonials />
      <CoverCTA />
      <Footer />
    </div>
  );
}
