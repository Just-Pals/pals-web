"use client";

import TeamHero from "@/components/Team/Hero";
import Victors from "@/components/Team/Victors";
import WinnersSlider from "@/components/Team/WinnersSlider";
import Rules from "@/components/Team/Rules";
import Exclusive from "@/components/Team/Exclusive";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function TeamPage() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        
      }
    }
  }, []);

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <TeamHero />
      <Victors />
      <div id="winners">
        <WinnersSlider />
      </div>
      <Rules />
      <Exclusive />
      <Footer variant="pay" showMarquee />
    </main>
  );
}