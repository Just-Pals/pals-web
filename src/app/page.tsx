import Hero from "@/component/HomePage/Hero";
import Navbar from "@/component/Navbar";
import FaqSection from "@/component/HomePage/FaqSection";
import StorySection from "@/component/HomePage/StorySection";
import ProofSection from "@/component/HomePage/ProofSection";
import CardsSection from "@/component/HomePage/CardsSection";
import PolicySection from "@/component/HomePage/PolicySection";
import DownloadCard from "@/component/HomePage/DownloadCard";
import RewardsSection from "@/component/HomePage/RewardsSection";
import UpgradeSection from "@/component/HomePage/UpgradeSection";
import PhonesShowcase from "@/component/HomePage/PhonesShowcase";
import SecuritySection from "@/component/HomePage/SecuritySection";
import NotEveryoneSection from "@/component/HomePage/NotEveryoneSection";
import Footer from "@/component/Footer";

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