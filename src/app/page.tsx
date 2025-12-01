import Hero from "@/components/Pay/Hero";
import Statement from "@/components/Pay/Statement";
import QRSection from "@/components/Pay/QRSection";
import RewardsInstant from "@/components/Pay/RewardsInstant";
import PayInstantly from "@/components/Pay/PayInstantly";
import PartnersSection from "@/components/Pay/PartnersSection";
import SecuritySection from "@/components/Pay/SecuritySection";
import SafetyNetSection from "@/components/Pay/SafetyNetSection";
import FlairsSection from "@/components/Pay/FlairsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import DownloadCard from "@/components/HomePage/DownloadCard";
import PerksSection from "@/components/Pay/PerksSection";
import PutMoney from "@/components/Pay/PutMoney";

export default function PayPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <Navbar/>
      <Hero />
      <Statement />
      <QRSection />
      <PayInstantly/>
      <RewardsInstant/>
      <PutMoney/>
      <PartnersSection/>
      <SecuritySection/>
      <SafetyNetSection/>
      <FlairsSection />
      <PerksSection />
       <DownloadCard />
      <Footer variant="pay" showMarquee />
    </main>
  );
}