import Hero from "@/component/Pay/Hero";
import Statement from "@/component/Pay/Statement";
import QRSection from "@/component/Pay/QRSection";
import RewardsInstant from "@/component/Pay/RewardsInstant";
import PayInstantly from "@/component/Pay/PayInstantly";
import PartnersSection from "@/component/Pay/PartnersSection";
import SecuritySection from "@/component/Pay/SecuritySection";
import SafetyNetSection from "@/component/Pay/SafetyNetSection";
import Footer from "@/component/Pay/Footer";

export default function PayPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <Hero />
      <Statement />
      <QRSection />
      <PayInstantly/>
      <RewardsInstant/>
      <PartnersSection/>
      <SecuritySection/>
      <SafetyNetSection/>
      <Footer/>
    </main>
  );
}