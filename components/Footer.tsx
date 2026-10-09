"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUp, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f7faf8] text-[#4b5563] border-t border-gray-200/90 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-gray-200">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <div className="relative h-11 sm:h-12 w-52 sm:w-60">
                <Image
                  src="/images/jnsaaaa-brand-logo-transparent.png"
                  alt="JNSAAAA RECYCLE PRIVATE LIMITED"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-sm">
              Connecting recyclable materials, machinery components, and businesses through practical material recovery and onward supply.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#1e6f3b] bg-[#e8f5e9] border border-[#c8e6c9] px-3.5 py-2 rounded-xl w-fit font-medium">
              <ShieldCheck className="w-4 h-4 text-[#25a244]" />
              <span>Registered Under Companies Act · Govt. of India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-[#032b17] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#materials" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors">
                  Material Categories
                </a>
              </li>
              <li>
                <a href="#approach" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors">
                  About JNSAAAA
                </a>
              </li>
            </ul>
          </div>

          {/* Registered Office & Compliance */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-bold text-[#032b17] uppercase tracking-wider">
              Registered Office
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#4b5563]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#25a244] flex-shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Muradnagar, Ghaziabad,<br />
                  Uttar Pradesh — 201206, India
                </span>
              </div>
              <p className="text-[11px] text-[#6b7280]">
                Principal place of business as per official GST and corporate records.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e6f3b] hover:text-[#25a244] transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b7280]">
          <p>
            © {currentYear} <strong className="text-[#032b17] font-semibold">JNSAAAA RECYCLE PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <span>B2B Industrial Material Recovery</span>
            <span>Muradnagar · Ghaziabad · UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
