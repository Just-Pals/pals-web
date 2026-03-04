import FundHeroSection from "./components/FundHeroSection";
import FundStepsSection from "./components/FundStepsSection";
import DiscoverSection from "./components/DiscoverSection";
import FeaturedTopicsSection from "./components/FeaturedTopicsSection";
import AnimatedInfoSection from "./components/AnimatedInfoSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TrustedSection from "./components/TrustedSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";

export default function FundPage() {
  return (
    <main>
        <Navbar />
      <FundHeroSection />
      <FundStepsSection />
      <DiscoverSection />
      <FeaturedTopicsSection />
      <AnimatedInfoSection />
      <HowItWorksSection />
      <TrustedSection />
      <Footer />
      
    </main>
  );
}