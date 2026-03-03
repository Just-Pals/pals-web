import FinalCTASection from "./components/FinalCTASection";
import FixedDepositHeroSection from "./components/FixedDepositHeroSection";
import GoldHeroSection from "./components/GoldHeroSection";
import MoneyHero from "./components/MoneyHero";
import PortfolioIntroSection from "./components/PortfolioIntroSection";
import SecurityTrustSection from "./components/SecurityTrustSection";
import WealthFocusSection from "./components/WealthFocusSection";

export default function MoneyPage() {
  return (
    <>
      <MoneyHero />
      <WealthFocusSection />
      <GoldHeroSection />
      <FixedDepositHeroSection />
      <PortfolioIntroSection />
      <SecurityTrustSection />
      <FinalCTASection />
    </>
  );
}