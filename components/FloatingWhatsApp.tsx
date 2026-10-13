"use client";

import { WHATSAPP_BASE_URL, CONTACT_PHONE, WhatsAppIcon } from "./SocialIcons";

export default function FloatingWhatsApp() {
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    "Hello JNSAAAA Recycle, I am interested in your industrial recycling services."
  )}`;

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp with JNSAAAA Recycle at ${CONTACT_PHONE}`}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-green-950/30 transition-all duration-200 hover:scale-105 active:scale-90 focus:outline-none focus:ring-4 focus:ring-green-400/40 min-h-[44px]"
      >
        <WhatsAppIcon className="w-5 h-5 text-white flex-shrink-0" />
        <span className="text-xs sm:text-sm font-bold tracking-wide">
          WhatsApp
        </span>
      </a>
    </aside>
  );
}
