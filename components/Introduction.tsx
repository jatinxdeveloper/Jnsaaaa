"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, Network, Layers, RefreshCw } from "lucide-react";

export default function Introduction() {
  return (
    <section className="py-12 md:py-16 bg-[#fbfdfb] text-[#121814] relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 industrial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src="/images/E-Waste Recycling Yard Assessment.png"
                  alt="JNSAAAA Good Material Shouldn't Go To Waste - E-Waste Recycling Yard Assessment"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Decorative background accent block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#25a244]/10 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#25a244]">
                <span className="w-6 h-[2px] bg-[#25a244]" />
                <span>Our Philosophy</span>
              </div>
              
              <h2 className="font-heading font-bold text-[35px] leading-[36px] tracking-tight text-[#032b17]">
                Resources Deserve a Better Next Step.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We work across recyclable industrial materials and machinery components, helping connect material availability with relevant business requirements.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm transition-all hover:border-[#25a244]/50">
                <div className="w-9 h-9 rounded-lg bg-[#e8f5e9] text-[#25a244] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900 text-sm md:text-base">
                    Bridging Vendors & Onward Buyers
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Connecting grassroots collection points and smaller suppliers directly with industrial consumers and processing entities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm transition-all hover:border-[#25a244]/50">
                <div className="w-9 h-9 rounded-lg bg-[#e8f5e9] text-[#25a244] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900 text-sm md:text-base">
                    Structured Material Categorisation
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Carefully sorting and identifying electronic parts, electric motors, copper wiring, and machine components for optimal reuse and recovery.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <a
                href="#materials"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#032b17] hover:text-[#25a244] transition-colors group"
              >
                <span>View material categories we handle</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#25a244]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
