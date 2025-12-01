import TeamNavbar from "@/components/Team/Navbar";
import TeamHero from "@/components/Team/Hero";
import Victors from "@/components/Team/Victors";
import WinnersSlider from "@/components/Team/WinnersSlider";
import Rules from "@/components/Team/Rules";
import Exclusive from "@/components/Team/Exclusive";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";

export default function TeamPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar/>
      <TeamHero />
      <Victors />
      <WinnersSlider />
      <Rules />
      <Exclusive />
      <Footer variant="pay" showMarquee />
    </main>
  );
}
