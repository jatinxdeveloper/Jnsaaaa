"use client";

import Image from "next/image";
import { ArrowUp, MapPin, ShieldCheck, Phone, Mail } from "lucide-react";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL,
  CONTACT_EMAIL_MAILTO,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  WHATSAPP_BASE_URL,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "./SocialIcons";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappDirectUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "Hello JNSAAAA Recycle, I have an inquiry regarding industrial recycling and material recovery."
  )}`;

  return (
    <footer className="bg-[#f7faf8] text-[#4b5563] border-t border-gray-200/90 relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-gray-200">
          
          {/* Brand & Social Media Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5 sm:space-y-6">
            <div className="flex items-center">
              <div className="relative h-10 sm:h-12 w-48 sm:w-60">
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

            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#1e6f3b] bg-[#e8f5e9] border border-[#c8e6c9] px-3 sm:px-3.5 py-2 rounded-xl w-fit font-medium">
              <ShieldCheck className="w-4 h-4 text-[#25a244] flex-shrink-0" />
              <span>Registered Under Companies Act · Govt. of India</span>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#032b17] block">
                Connect on Social Media
              </span>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow JNSAAAA Recycle on Instagram"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-amber-500/10 hover:via-rose-500/10 hover:to-purple-500/10 text-gray-700 hover:text-pink-600 transition-all text-xs font-semibold shadow-xs active:scale-95 group min-h-[42px]"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600 transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span className="truncate">Instagram</span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with JNSAAAA Recycle on Facebook"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 hover:border-blue-500/50 hover:bg-blue-50/60 text-gray-700 hover:text-blue-600 transition-all text-xs font-semibold shadow-xs active:scale-95 group min-h-[42px]"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span className="truncate">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#032b17] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors inline-block py-0.5">
                  Home
                </a>
              </li>
              <li>
                <a href="#materials" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors inline-block py-0.5">
                  Material Categories
                </a>
              </li>
              <li>
                <a href="#approach" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors inline-block py-0.5">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors inline-block py-0.5">
                  About JNSAAAA
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#4b5563] hover:text-[#25a244] font-medium transition-colors inline-block py-0.5">
                  Contact & Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#032b17] uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Phone */}
              <div className="space-y-1">
                <span className="text-[11px] text-gray-500 font-medium block">Phone / Mobile</span>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="inline-flex items-center gap-2.5 text-[#032b17] hover:text-[#25a244] font-semibold transition-colors group py-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e8f5e9] text-[#25a244] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25a244] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{CONTACT_PHONE}</span>
                </a>
              </div>

              {/* Email / Gmail */}
              <div className="space-y-1">
                <span className="text-[11px] text-gray-500 font-medium block">Email Address</span>
                <a
                  href={CONTACT_EMAIL_MAILTO}
                  className="inline-flex items-center gap-2.5 text-[#032b17] hover:text-[#25a244] font-semibold transition-colors break-all group py-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e8f5e9] text-[#25a244] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25a244] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-[13px]">{CONTACT_EMAIL}</span>
                </a>
              </div>

              {/* WhatsApp Direct Action */}
              <div className="pt-1.5">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25a244] hover:bg-[#1e8236] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all group w-full sm:w-auto min-h-[44px]"
                >
                  <WhatsAppIcon className="w-4 h-4 transition-transform group-hover:scale-110 flex-shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Registered Office & Compliance */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#032b17] uppercase tracking-wider">
              Registered Office
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-[#4b5563]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#25a244] flex-shrink-0 mt-0.5" />
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
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e6f3b] hover:text-[#25a244] transition-colors group py-1"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#6b7280]">
          <p className="text-center sm:text-left text-[11px] sm:text-xs">
            © {currentYear} <strong className="text-[#032b17] font-semibold">JNSAAAA RECYCLE PRIVATE LIMITED</strong>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-5 font-medium text-[11px] sm:text-xs">
            <a href={CONTACT_PHONE_TEL} className="hover:text-[#25a244] transition-colors py-1">
              {CONTACT_PHONE}
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={CONTACT_EMAIL_MAILTO} className="hover:text-[#25a244] transition-colors py-1 break-all">
              {CONTACT_EMAIL}
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={whatsappDirectUrl} target="_blank" rel="noopener noreferrer" className="text-[#25a244] hover:underline py-1">
              WhatsApp Connect
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
