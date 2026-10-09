"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";

export default function RecyclablesPicked() {

  return (
    <section className="py-10 sm:py-14 bg-[#f5fbf6] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#e2f7e7]/80 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="text-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#bbf7d0] shadow-sm text-[#15803d] text-xs font-semibold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>COMPREHENSIVE RECOVERY SERVICES</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="font-heading font-bold text-[35px] leading-[36px] text-[#0f2e1e] tracking-tight">
            Recyclables we <span className="text-[#059669]">pick</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#374151] font-normal leading-relaxed max-w-2xl mx-auto">
            We collect a wide range of recyclable materials and give them a second life through responsible processing and recycling.
          </p>
        </div>

        {/* Interactive Diagram / Central Visual Section */}
        <div className="relative max-w-3xl mx-auto my-4 sm:my-8">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent group">
            <div className="relative aspect-[16/9.2] sm:aspect-[16/9] md:aspect-[1.78/1] w-full">
              <Image
                src="/images/recyclables-picked-main.png"
                alt="Recyclables We Pick - Paper & Cardboard, Plastic, Mixed Recyclables, Metal"
                fill
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
