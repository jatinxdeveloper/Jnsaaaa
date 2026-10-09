import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeighingAccuracy from "@/components/WeighingAccuracy";
import Introduction from "@/components/Introduction";
import RecyclingJourney from "@/components/RecyclingJourney";
import MaterialCategories from "@/components/MaterialCategories";
import RecyclablesPicked from "@/components/RecyclablesPicked";
import OurApproach from "@/components/OurApproach";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121814] selection:bg-[#25a244] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Section 2 — Hero */}
      <Hero />

      {/* Section 2.5 — Weighing Accuracy Banner */}
      <WeighingAccuracy />

      {/* Section 2.8 — Recyclables We Pick */}
      <RecyclablesPicked />

      {/* Section 2.9 — From Pickup to Recycling: The Jnsaaaa Recycling Journey */}
      <RecyclingJourney />

      {/* Section 3 — Introduction / Our Philosophy */}
      <Introduction />

      {/* Section 4 — Material Categories */}
      <MaterialCategories />

      {/* Section 6 — Our Approach */}
      <OurApproach />

      {/* Section 7 — About JNSAAAA */}
      <About />

      {/* Section 9 — Minimal Footer */}
      <Footer />
    </main>
  );
}
