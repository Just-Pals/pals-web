import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import FaqSection from "@/component/FaqSection";
import StorySection from "@/component/StorySection";
import ProofSection from "@/component/ProofSection";
import CardsSection from "@/component/CardsSection";
import PolicySection from "@/component/PolicySection";
import DownloadCard from "@/component/DownloadButton";
import RewardsSection from "@/component/RewardsSection";
import UpgradeSection from "@/component/UpgradeSection";
import PhonesShowcase from "@/component/PhonesShowcase";
import SecuritySection from "@/component/SecuritySection";
import NotEveryoneSection from "@/component/NotEveryoneSection";
import Footer from "@/component/Footer";


export default function Home() {
  return (
    <main className="relative w-full h-full">
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