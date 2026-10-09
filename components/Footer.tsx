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
    <footer className="bg-[#010f08] text-gray-400 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 industrial-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-white p-1.5 shadow-md border border-gray-100 flex-shrink-0">
                <Image
                  src="/images/jnsaaaa-logo.png"
                  alt="JNSAAAA RECYCLE PRIVATE LIMITED"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight block">
                  JNSAAAA
                </span>
                <span className="text-xs uppercase font-semibold text-[#38b000] tracking-wider">
                  Recycle Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Connecting recyclable materials, machinery components, and businesses through practical material recovery and onward supply.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-[#38b000]" />
              <span>Registered Under Companies Act · Govt. of India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-white transition-colors">
                  Material Categories
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About JNSAAAA
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Registered Office & Compliance */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider">
              Registered Office
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38b000] flex-shrink-0 mt-1" />
                <span>
                  Muradnagar, Ghaziabad,<br />
                  Uttar Pradesh — 201206, India
                </span>
              </div>
              <p className="text-[11px] text-gray-500">
                Principal place of business as per official GST and corporate records.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#38b000] hover:text-white transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} <strong className="text-gray-300 font-medium">JNSAAAA RECYCLE PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>B2B Industrial Material Recovery</span>
            <span>Muradnagar · Ghaziabad · UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
