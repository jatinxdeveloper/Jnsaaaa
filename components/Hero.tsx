"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Phone, Recycle, Sparkles } from "lucide-react";

interface FloatingItemConfig {
  id: string;
  imageSrc: string;
  alt: string;
  className: string;
  floatDuration: number;
  initialRotate: number;
  baseX: number;
  baseY: number;
  ampX: number;
  ampY: number;
  speedMultiplier: number;
}

const leftItems: FloatingItemConfig[] = [
  {
    id: "l1",
    imageSrc: "/images/board.png",
    alt: "Electronic Circuit Board",
    className: "w-28 h-28 sm:w-36 sm:h-36 -rotate-6",
    floatDuration: 2.8,
    initialRotate: -8,
    baseX: 0,
    baseY: 0,
    ampX: 18,
    ampY: 28,
    speedMultiplier: 1.4,
  },
  {
    id: "l2",
    imageSrc: "/images/screw-part.png",
    alt: "Industrial Gears & Machinery Parts",
    className: "w-24 h-24 sm:w-28 sm:h-28 ml-4 rotate-6",
    floatDuration: 3.2,
    initialRotate: 6,
    baseX: 12,
    baseY: 0,
    ampX: 22,
    ampY: -30,
    speedMultiplier: 1.25,
  },
  {
    id: "l3",
    imageSrc: "/images/screw2.png",
    alt: "Industrial Screws and Fasteners",
    className: "w-26 h-20 sm:w-32 sm:h-24 -rotate-12",
    floatDuration: 2.5,
    initialRotate: -12,
    baseX: -4,
    baseY: 0,
    ampX: 20,
    ampY: 26,
    speedMultiplier: 1.5,
  },
];

const rightItems: FloatingItemConfig[] = [
  {
    id: "r1",
    imageSrc: "/images/spare-part.png",
    alt: "Interlocking Industrial Gears",
    className: "w-28 h-28 sm:w-36 sm:h-36 rotate-10",
    floatDuration: 3.0,
    initialRotate: 10,
    baseX: 0,
    baseY: 0,
    ampX: -22,
    ampY: -28,
    speedMultiplier: 1.3,
  },
  {
    id: "r2",
    imageSrc: "/images/board.png",
    alt: "Electronic PCB Scrap Component",
    className: "w-24 h-24 sm:w-28 sm:h-28 -rotate-12 mr-3",
    floatDuration: 3.4,
    initialRotate: -12,
    baseX: -8,
    baseY: 0,
    ampX: -24,
    ampY: 32,
    speedMultiplier: 1.15,
  },
  {
    id: "r3",
    imageSrc: "/images/screw-part.png",
    alt: "Precision Industrial Gears",
    className: "w-26 h-26 sm:w-30 sm:h-30 rotate-8",
    floatDuration: 2.6,
    initialRotate: 8,
    baseX: 4,
    baseY: 0,
    ampX: -18,
    ampY: -26,
    speedMultiplier: 1.4,
  },
];

// Completely unconstrained single floating item with high-speed ambient physics + rapid cursor repulsion
function UnconstrainedFloatingItem({ item }: { item: FloatingItemConfig }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Physical coordinates
  const currentPos = useRef({ x: 0, y: 0, rot: item.initialRotate });
  const repulsionForce = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    timeRef.current = Math.random() * 100;
    const el = itemRef.current;
    if (!el) return;

    // Fast mouse repulsion tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - itemCenterX;
      const deltaY = e.clientY - itemCenterY;
      const distance = Math.hypot(deltaX, deltaY);

      const triggerRadius = 260; // Wide interactive detection zone

      if (distance < triggerRadius && distance > 0) {
        // High velocity repulsion pushing directly away from mouse
        const intensity = Math.pow((triggerRadius - distance) / triggerRadius, 1.2);
        const pushDist = intensity * 160; // Far push distance
        repulsionForce.current.x = -(deltaX / distance) * pushDist;
        repulsionForce.current.y = -(deltaY / distance) * pushDist;
      } else {
        // Smoothly decay repulsion
        repulsionForce.current.x *= 0.88;
        repulsionForce.current.y *= 0.88;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 60FPS continuous fluid ambient motion loop
    let lastTime = performance.now();
    const animate = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      timeRef.current += delta * item.speedMultiplier * 2.2; // Faster ambient speed

      // Continuous harmonic floating motion
      const ambientX = Math.sin(timeRef.current) * item.ampX + Math.cos(timeRef.current * 0.7) * (item.ampX * 0.4);
      const ambientY = Math.cos(timeRef.current * 1.1) * item.ampY + Math.sin(timeRef.current * 0.8) * (item.ampY * 0.3);
      const ambientRot = item.initialRotate + Math.sin(timeRef.current * 0.9) * 7;

      // Combine ambient orbit + fast cursor push with spring physics
      const targetX = ambientX + repulsionForce.current.x;
      const targetY = ambientY + repulsionForce.current.y;
      const targetRot = ambientRot + (repulsionForce.current.x * 0.12);

      // Smooth interpolation (faster response on push, graceful spring back)
      const lerpFactor = repulsionForce.current.x !== 0 ? 0.22 : 0.08;
      currentPos.current.x += (targetX - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (targetY - currentPos.current.y) * lerpFactor;
      currentPos.current.rot += (targetRot - currentPos.current.rot) * lerpFactor;

      if (el) {
        el.style.transform = `translate3d(${currentPos.current.x.toFixed(2)}px, ${currentPos.current.y.toFixed(2)}px, 0px) rotate(${currentPos.current.rot.toFixed(2)}deg)`;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [item]);

  return (
    <div
      ref={itemRef}
      className={`relative cursor-pointer select-none will-change-transform group ${item.className}`}
      style={{
        transform: `translate3d(0px, 0px, 0px) rotate(${item.initialRotate}deg)`,
      }}
    >
      {/* Pure Cutout Image entity with natural drop shadow filter */}
      <div className="relative w-full h-full min-h-[90px] drop-shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_25px_35px_rgba(37,162,68,0.35)]">
        <Image
          src={item.imageSrc}
          alt={item.alt}
          fill
          className="object-contain object-center pointer-events-none"
          sizes="160px"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [businessName, setBusinessName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleQuickLead = (e: React.FormEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const nameInput = document.getElementById("fullName") as HTMLInputElement;
      const compInput = document.getElementById("companyName") as HTMLInputElement;
      const phoneInput = document.getElementById("phone") as HTMLInputElement;
      if (compInput && businessName) compInput.value = businessName;
      if (nameInput && businessName) nameInput.value = businessName;
      if (phoneInput && contactInfo) phoneInput.value = contactInfo;
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#f7faf8] text-[#141916] overflow-hidden pt-24 pb-6 sm:pt-28 sm:pb-8 flex flex-col justify-between"
    >
      {/* Background Soft Green Glow Accents */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#25a244]/12 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#25a244]/12 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Floating Category Elements - Left & Right (Desktop & Large Screens) */}
        <div className="relative">
          
          {/* Left Floating Items - Inset with healthy x-padding */}
          <div className="hidden xl:flex flex-col gap-10 absolute left-0 lg:left-4 xl:left-8 top-1/2 -translate-y-1/2 w-36 pointer-events-auto select-none z-20">
            {leftItems.map((item) => (
              <UnconstrainedFloatingItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right Floating Items - Inset with healthy x-padding */}
          <div className="hidden xl:flex flex-col gap-10 absolute right-0 lg:right-4 xl:right-8 top-1/2 -translate-y-1/2 w-36 pointer-events-auto select-none items-end z-20">
            {rightItems.map((item) => (
              <UnconstrainedFloatingItem key={item.id} item={item} />
            ))}
          </div>

          {/* Main Editorial Content */}
          <div className="text-center max-w-4xl mx-auto space-y-5 sm:space-y-6">
            
            {/* Title with matching typographic hierarchy */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-[#141916] leading-[1.12]">
              Industrial Recycling. <br />
              <span className="text-[#141916]">Smarter Material Recovery.</span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-[#525954] max-w-2xl mx-auto font-normal leading-relaxed">
              Responsible sourcing and dependable recovery channels for recyclable metals, electronic scrap and machinery components.
            </p>

            {/* Interactive Quick Lead Bar with Outer Pill Ring */}
            <div className="pt-2 sm:pt-4 max-w-3xl mx-auto">
              <div className="relative p-2 sm:p-3 rounded-2xl sm:rounded-full border-2 border-[#bbf7d0]/80 bg-[#e8f5e9]/30 shadow-sm backdrop-blur-sm">
                
                {/* Floating Top Pill Tag */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 rounded-full bg-[#c7f9cc] border border-[#86efac] text-[#032b17] text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs whitespace-nowrap">
                  Tell Us What You Need to Recycle
                </div>

                {/* Inner Form with two input capsules & submit circle */}
                <form
                  onSubmit={handleQuickLead}
                  className="bg-white rounded-xl sm:rounded-full p-1.5 sm:p-2 border border-gray-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-2"
                >
                  {/* Business Name Input */}
                  <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 rounded-lg sm:rounded-full border border-gray-100 focus-within:border-[#25a244] bg-[#fafcfa] transition-colors">
                    <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Your business name"
                      className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>

                  {/* Phone / Email Input */}
                  <div className="flex-1 w-full flex items-center gap-3 px-4 py-2.5 rounded-lg sm:rounded-full border border-gray-100 focus-within:border-[#25a244] bg-[#fafcfa] transition-colors">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="Phone number or email"
                      className="w-full bg-transparent text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-11 h-10 sm:h-11 rounded-lg sm:rounded-full bg-[#032b17] hover:bg-[#25a244] text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all duration-200 shadow-md group flex-shrink-0 py-2 sm:py-0"
                    aria-label="Submit lead and discuss requirements"
                  >
                    <span className="sm:hidden font-semibold">Get in Touch</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>

              </div>

              {/* Sub-lead footnote */}
              <p className="text-[11px] sm:text-xs text-[#737873] mt-3 font-medium">
                For industrial suppliers, businesses and material partners
              </p>
            </div>

          </div>

        </div>



        {/* Bottom Floating Pill Banner */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-full bg-[#032b17] text-white text-xs sm:text-sm shadow-lg border border-[#25a244]/40">
            <div className="w-6 h-6 rounded-full bg-[#25a244] text-white flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-gray-200 font-medium">
              Built on responsible sourcing and long-term business relationships
            </span>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 text-[#86efac] font-bold hover:underline ml-2"
            >
              <span>Partner with JNSAAAA &rarr;</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
