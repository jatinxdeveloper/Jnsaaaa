"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BrandStatement() {
  return (
    <section className="relative py-28 md:py-36 bg-[#01130a] text-white overflow-hidden">
      {/* Background Texture and Accent Overlays */}
      <div className="absolute inset-0 industrial-grid-dark opacity-40 pointer-events-none" />
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#25a244]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Statement Typography */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#38b000]">
              <span className="w-8 h-[2px] bg-[#38b000]" />
              <span>Core Mission</span>
            </div>

            <h2 className="font-heading text-[35px] leading-[36px] font-bold tracking-tight text-white">
              Better Recovery Begins with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38b000] via-[#25a244] to-emerald-300">
                Better Connections.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Connecting material suppliers, industrial components, and business requirements through a practical approach to material recovery.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#25a244] hover:bg-[#1e8236] text-white font-semibold text-sm transition-all shadow-lg shadow-[#25a244]/20 group"
              >
                <span>Partner with JNSAAAA</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-[#38b000]" />
                <span>Facilitating transparent B2B transactions</span>
              </div>
            </div>

          </div>

          {/* Supporting Industrial Material Photograph */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl group bg-black/40">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/material-recovery.jpg"
                  alt="JNSAAAA Industrial Recovery Yard Operations"
                  fill
                  className="object-cover object-center brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Photo Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-xs text-gray-300">
                <div className="font-semibold text-white">Value in What&apos;s Left Behind</div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Sorting and channeling industrial assets into productive supply chains.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
