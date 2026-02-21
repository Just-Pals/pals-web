import Hero from "@/components/HomePage/Hero";
import Navbar from "@/components/Navbar";
import FaqSection from "@/components/HomePage/FaqSection";
import StorySection from "@/components/HomePage/StorySection";
import ProofSection from "@/components/HomePage/ProofSection";
import CardsSection from "@/components/HomePage/CardsSection";
import PolicySection from "@/components/HomePage/PolicySection";
import DownloadCard from "@/components/HomePage/DownloadCard";
import RewardsSection from "@/components/HomePage/RewardsSection";
import UpgradeSection from "@/components/HomePage/UpgradeSection";
import PhonesShowcase from "@/components/HomePage/PhonesShowcase";
import SecuritySection from "@/components/HomePage/SecuritySection";
import NotEveryoneSection from "@/components/HomePage/NotEveryoneSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative w-full h-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <StorySection />
      <PhonesShowcase />
      <CardsSection />
      <UpgradeSection />
      <RewardsSection />
      <SecuritySection />
      <ProofSection />
      <NotEveryoneSection />
      <FaqSection />
      <PolicySection />
      <DownloadCard />
      <Footer />
    </main>
  );
}