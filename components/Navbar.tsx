"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_BASE_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "./SocialIcons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { name: "About Us", href: "#about" },
    { name: "Materials We Handle", href: "#materials" },
    { name: "Our Process", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100"
        : "bg-transparent py-4 sm:py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Horizontal Brand Logo */}
          <Link
            href="#home"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25a244] rounded-lg py-1"
            aria-label="JNSAAAA Recycle Private Limited Home"
          >
            <div className="relative h-10 sm:h-11 md:h-12 w-48 sm:w-52 md:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/jnsaaaa-brand-logo-transparent.png"
                alt="JNSAAAA Recycle Private Limited"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#202522] hover:text-[#25a244] transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA Pill */}
          <div className="hidden sm:flex items-center">
            <a
              href="#materials"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#032b17] hover:bg-[#25a244] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm group"
            >
              <span>Explore Materials</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#25a244]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-black/40 backdrop-blur-sm md:hidden flex flex-col">
          <div className="bg-white text-gray-900 border-b border-gray-200 shadow-2xl px-6 pt-5 pb-8 space-y-4">
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

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello JNSAAAA Recycle, I am contacting you from the website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm text-center transition-colors shadow-sm min-h-[44px]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={CONTACT_PHONE_TEL}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#e8f5e9] text-[#032b17] hover:bg-[#c8e6c9] font-semibold text-sm text-center transition-colors border border-[#c8e6c9] min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-[#25a244]" />
                <span>Call {CONTACT_PHONE}</span>
              </a>

              {/* Social Channels in Drawer */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>
                <span className="text-gray-300">·</span>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
