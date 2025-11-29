// /src/app/pal-score/index.tsx
import React from "react";
import Hero from "../../component/PalScore/Hero";
import Score from "@/component/PalScore/Score";
import Footer from "@/component/Footer";
import Privacy from "@/component/PalScore/Privacy";
import Foresight from "@/component/PalScore/Foresight";
import Factors from "@/component/PalScore/Factors";
import Navbar from "@/component/Navbar";

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
