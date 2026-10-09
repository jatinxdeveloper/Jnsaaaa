"use client";

import Image from "next/image";
import { RefreshCw } from "lucide-react";

export default function RecyclingJourney() {

  return (
    <section className="py-10 sm:py-14 bg-[#f9fbf9] relative overflow-hidden border-t border-gray-100">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#25a244]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#bbf7d0] shadow-xs text-[#15803d] text-xs font-semibold uppercase tracking-wider mb-3">
            <RefreshCw className="w-3.5 h-3.5 text-[#16a34a]" />
            <span>End-to-End Circular Supply</span>
          </div>

          <h2 className="font-heading font-bold text-[35px] leading-[36px] text-[#0f2e1e] tracking-tight capitalize">
            From pickup to recycling:{" "}
            <span className="text-[#059669]">The Jnsaaaa recycling journey</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed">
            A transparent and seamless recovery lifecycle connecting scrap generators, collection hubs, and authorized recyclers.
          </p>
        </div>
      </div>

      {/* Edge-to-Edge 100vw Full Width Visual Showcase Banner */}
      <div className="relative w-full my-4 sm:my-6 overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[2.1/1] md:aspect-[2.29/1] w-full">
          <Image
            src="/images/jnsaaaa-recycling-journey.png"
            alt="From pickup to recycling: The Jnsaaaa recycling journey"
            fill
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-cover object-center w-full"
            priority
          />
        </div>

        {/* Subtle top and bottom blend transitions */}
        <div className="absolute inset-x-0 top-0 h-6 sm:h-12 bg-gradient-to-b from-[#f9fbf9] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 sm:h-16 bg-gradient-to-t from-[#f9fbf9] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
