import Hero from "@/components/PalScore/Hero";
import Score from "@/components/PalScore/Score";
import Footer from "@/components/layout/Footer";
import Privacy from "@/components/PalScore/Privacy";
import Foresight from "@/components/PalScore/Foresight";
import Factors from "@/components/PalScore/Factors";
import Navbar from "@/components/Navbar";

export default function PalScorePage() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-x-hidden">
       <Navbar />
      <Hero />
      <Factors/>
      <Foresight />
      <Privacy/>
      <Score/>
      <Footer />
    </main>
  );
}
