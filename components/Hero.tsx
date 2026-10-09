"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#032b17] overflow-hidden pt-28 pb-16 sm:py-24 lg:py-0"
    >
      {/* Background Hero Image with refined gradient treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="JNSAAAA Industrial Recycling & Material Recovery Facility"
          fill
          className="object-cover object-center brightness-[0.42] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
          priority
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01130a]/95 via-[#032b17]/85 to-[#01130a]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01130a] via-transparent to-black/50" />
        <div className="absolute inset-0 industrial-grid-dark opacity-30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Headline Column */}
          <div className="lg:col-span-8 text-white space-y-6 sm:space-y-8">
            
            {/* Main Headline with fluid responsive typography */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
              Industrial Materials. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#25a244]">
                Smarter Connections.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              Connecting recyclable materials, machinery components, and businesses through practical material recovery and onward supply.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-[#25a244] hover:bg-[#1e8236] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#25a244]/25 hover:shadow-xl hover:shadow-[#25a244]/35 hover:-translate-y-0.5 group"
              >
                <span>Discuss a Requirement</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#materials"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Materials</span>
                <ArrowDown className="w-4 h-4 text-[#38b000]" />
              </a>
            </div>

            {/* Quick Trust Attributes (Factual without fake stats) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25a244] flex-shrink-0" />
                <span className="font-medium text-gray-200">Registered Indian Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25a244] flex-shrink-0" />
                <span className="font-medium text-gray-200">B2B Material Recovery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#25a244] flex-shrink-0" />
                <span className="font-medium text-gray-200">Vendor & Buyer Network</span>
              </div>
            </div>

          </div>

          {/* Right Card / Visual Showcase Column */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl text-white space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
                  Core Operation
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#25a244]/30 text-[#38b000] border border-[#38b000]/40 font-mono">
                  B2B
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-lg font-semibold text-white">
                  Bridging Material Supply & Industry Need
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We facilitate direct channelisation between smaller collection vendors and structured commercial buyers across industrial corridors.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-300">Electronic Scrap & PCBs</span>
                  <span className="text-[#38b000] font-mono">01</span>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-300">Used Electrical Motors</span>
                  <span className="text-[#38b000] font-mono">02</span>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-300">Copper Wires & Metals</span>
                  <span className="text-[#38b000] font-mono">03</span>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between">
                  <span className="text-gray-300">Industrial Machinery Parts</span>
                  <span className="text-[#38b000] font-mono">04</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-gray-400 border-t border-white/10 flex items-center justify-between">
                <span>Muradnagar, Ghaziabad</span>
                <span className="text-gray-300 font-medium">JNSAAAA RECYCLE PVT LTD</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#25a244] to-transparent opacity-80" />
    </section>
  );
}
