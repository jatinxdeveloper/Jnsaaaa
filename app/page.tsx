import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import MaterialCategories from "@/components/MaterialCategories";
import BrandStatement from "@/components/BrandStatement";
import OurApproach from "@/components/OurApproach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#121814] selection:bg-[#25a244] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Section 2 — Hero */}
      <Hero />

      {/* Section 3 — Introduction */}
      <Introduction />

      {/* Section 4 — Material Categories */}
      <MaterialCategories />

      {/* Section 5 — Brand Statement */}
      <BrandStatement />

      {/* Section 6 — Our Approach */}
      <OurApproach />

      {/* Section 7 — About JNSAAAA */}
      <About />

      {/* Section 8 — Enquiry & Corporate CTA */}
      <Contact />

      {/* Section 9 — Minimal Footer */}
      <Footer />
    </main>
  );
}
