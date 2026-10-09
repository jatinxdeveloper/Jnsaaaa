"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Materials", href: "#materials" },
    { name: "Our Approach", href: "#approach" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-gray-100"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent py-3.5 sm:py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25a244] rounded-xl"
            aria-label="JNSAAAA Recycle Private Limited Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md border border-gray-200/80 flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/jnsaaaa-logo.png"
                alt="JNSAAAA RECYCLE PRIVATE LIMITED"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-bold text-base sm:text-lg md:text-xl tracking-tight leading-none ${
                  isScrolled ? "text-[#032b17]" : "text-white"
                }`}
              >
                JNSAAAA
              </span>
              <span
                className={`text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider mt-1 ${
                  isScrolled ? "text-[#25a244]" : "text-[#38b000]"
                }`}
              >
                Recycle Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#25a244] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#25a244] hover:after:w-full after:transition-all after:duration-200 ${
                  isScrolled ? "text-gray-700" : "text-gray-200"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop / Tablet Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow group ${
                isScrolled
                  ? "bg-[#032b17] text-white hover:bg-[#064023]"
                  : "bg-[#25a244] text-white hover:bg-[#1e8236]"
              }`}
            >
              <span>Discuss a Requirement</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25a244] transition-colors ${
                isScrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] sm:top-[68px] z-40 bg-black/50 backdrop-blur-sm lg:hidden flex flex-col">
          <div className="bg-white text-gray-900 border-b border-gray-200 shadow-2xl px-6 pt-5 pb-8 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-semibold text-gray-800 hover:text-[#25a244] hover:bg-[#e8f5e9]/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#032b17] text-white font-semibold text-sm text-center hover:bg-[#064023] transition-colors shadow-sm"
              >
                <span>Discuss a Requirement</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-gray-500 text-center pt-2">
                JNSAAAA RECYCLE PRIVATE LIMITED · Muradnagar, Ghaziabad
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
