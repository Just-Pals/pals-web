import TeamNavbar from "@/component/Team/Navbar";
import TeamHero from "@/component/Team/Hero";
import Victors from "@/component/Team/Victors";
import WinnersSlider from "@/component/Team/WinnersSlider";
import Rules from "@/component/Team/Rules";
import Exclusive from "@/component/Team/Exclusive";
import Footer from "@/component/Pay/Footer";
import Navbar from "@/component/Navbar";

export default function TeamPage() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar/>
      <TeamHero />
      <Victors />
      <WinnersSlider />
      <Rules />
      <Exclusive />
            <Footer/>
    </main>
  );
}
