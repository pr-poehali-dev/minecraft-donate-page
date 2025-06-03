import HeroSection from "@/components/HeroSection";
import DonatePackages from "@/components/DonatePackages";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DonatePackages />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;
