import WalletDeliberatelySuperiorSection from "./components/WalletDeliberatelySuperiorSection";
import WalletFeaturesSection from "./components/WalletFeaturesSection";
import WalletRewardsSection from "./components/WalletRewardsSection";
import WalletSendMoneySection from "./components/WalletSendMoneySection";
import WalletStorySection from "./components/WalletStorySection";
import WalletReceiptsSection from "./components/WalletReceiptsSection"; // ✅ ADD THIS
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

export default function WalletPage() {
  return (
    <main>
      <Navbar />
      <WalletFeaturesSection />
      <WalletStorySection />
      <WalletDeliberatelySuperiorSection />
      <WalletSendMoneySection />
      <WalletRewardsSection />
      <WalletReceiptsSection />
      <Footer />
    </main>
  );
}