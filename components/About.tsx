"use client";

import Image from "next/image";
import { Building2, MapPin, FileCheck2, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white text-[#121814] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#25a244]">
            <span className="w-6 h-[2px] bg-[#25a244]" />
            <span>Company Profile</span>
          </div>
          <h2 className="font-heading text-[35px] leading-[36px] font-bold tracking-tight text-[#032b17]">
            A Practical Approach to Industrial Material Recovery.
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            <strong className="text-gray-900 font-semibold">JNSAAAA RECYCLE PRIVATE LIMITED</strong> is an incorporated Indian enterprise operating in the industrial scrap and material recovery ecosystem.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-gray max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Our core operational purpose is to create structured, dependable channelisation between regional suppliers with recyclable industrial inventory and onward industrial buyers seeking specific raw material inputs.
              </p>
              <p>
                By systematically categorizing materials—including electronic assemblies, discarded electrical motors, clean copper wiring, and disassembled machinery parts—we eliminate inefficiencies and foster mutually beneficial commercial partnerships.
              </p>
            </div>

            {/* Registered Entity Credential Box */}
            <div className="mt-8 rounded-2xl bg-[#f8faf8] border border-gray-200 p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                <div className="w-10 h-10 rounded-lg bg-[#e8f5e9] text-[#25a244] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#032b17]">
                    JNSAAAA RECYCLE PRIVATE LIMITED
                  </h3>
                  <p className="text-xs text-gray-500">
                    Officially Registered Private Limited Enterprise (India)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                
                <div className="p-4 rounded-xl bg-white border border-gray-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-500 font-medium">
                    <MapPin className="w-4 h-4 text-[#25a244]" />
                    <span>Registered Business Address</span>
                  </div>
                  <p className="text-gray-900 font-medium leading-snug">
                    Muradnagar, Ghaziabad, <br />
                    Uttar Pradesh — 201206, India
                  </p>
                  <p className="text-[10px] text-gray-400 pt-1">
                    *Designated principal place of business under GST registration.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-500 font-medium">
                    <FileCheck2 className="w-4 h-4 text-[#25a244]" />
                    <span>Compliance & Taxation</span>
                  </div>
                  <p className="text-gray-900 font-medium">
                    Registered Taxpayer (GST Regular)
                  </p>
                  <p className="text-xs text-gray-600">
                    State Jurisdiction: Uttar Pradesh
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#25a244] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>GST Verified Business Entity</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Operational Tenets */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#032b17] text-white shadow-xl space-y-6">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-[#38b000]" />
                <span>Our Business Principles</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38b000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Transparent Evaluation</strong>
                    <span className="text-gray-300">Clear specifications and realistic assessment of material lots.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38b000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Direct Channelisation</strong>
                    <span className="text-gray-300">Connecting smaller regional suppliers with authentic industrial demand.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#38b000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Reliable Fulfillment</strong>
                    <span className="text-gray-300">Structured communication, agreed delivery timelines, and compliant documentation.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-300">
                Ready to initiate a trade discussion or supply enquiry?
                <a href="#contact" className="block mt-2 text-[#38b000] font-bold hover:underline">
                  Connect with our team &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
