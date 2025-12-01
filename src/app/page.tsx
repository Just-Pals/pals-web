import Hero from "@/component/Pay/Hero";
import Statement from "@/component/Pay/Statement";
import QRSection from "@/component/Pay/QRSection";
import RewardsInstant from "@/component/Pay/RewardsInstant";
import PayInstantly from "@/component/Pay/PayInstantly";
import PartnersSection from "@/component/Pay/PartnersSection";
import SecuritySection from "@/component/Pay/SecuritySection";
import SafetyNetSection from "@/component/Pay/SafetyNetSection";
import FlairsSection from "@/component/Pay/FlairsSection";
import Footer from "@/component/Pay/Footer";
import Navbar from "@/component/Navbar";
import DownloadCard from "@/component/HomePage/DownloadCard";
import PerksSection from "@/component/Pay/PerksSection";
import PutMoney from "@/component/Pay/PutMoney";

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
      < PerksSection />
       <DownloadCard />
      <Footer/>
    </main>
  );
}