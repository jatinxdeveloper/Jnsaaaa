"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Cpu, Layers, Cog, Zap, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MaterialCard {
  index: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  tags: string[];
}

const cardsData: MaterialCard[] = [
  {
    index: "01 / 05",
    title: "Electronic Scrap",
    description: "Circuit boards, discarded electronics, electronic components, and recoverable materials.",
    imageSrc: "/images/card-electronic-scrap.jpg",
    icon: <Cpu className="w-4 h-4 text-[#25a244]" />,
    tags: ["Printed Circuit Boards", "Telecom & Server Units", "Components & ICs"],
  },
  {
    index: "02 / 05",
    title: "Metals & Copper",
    description: "Copper wiring, metal scrap, and sorted recyclable metal materials.",
    imageSrc: "/images/card-copper-metal.jpg",
    icon: <Layers className="w-4 h-4 text-[#25a244]" />,
    tags: ["Stripped Copper Wire", "Brass & Bronze", "Non-Ferrous Alloys"],
  },
  {
    index: "03 / 05",
    title: "Industrial Machine Parts",
    description: "Used motors, mechanical components, gears, and machinery parts.",
    imageSrc: "/images/card-industrial-parts.jpg",
    icon: <Cog className="w-4 h-4 text-[#25a244]" />,
    tags: ["Machine Castings & Gears", "Shafts & Bearings", "Heavy Equipment Lots"],
  },
  {
    index: "04 / 05",
    title: "Electrical Components",
    description: "Electrical motors, cables, wiring, and industrial electrical equipment.",
    imageSrc: "/images/card-electrical-components.jpg",
    icon: <Zap className="w-4 h-4 text-[#25a244]" />,
    tags: ["Industrial Motors", "Transformers & Armatures", "Heavy Gauge Cables"],
  },
  {
    index: "05 / 05",
    title: "Industrial Scrap & Materials",
    description: "Mixed industrial scrap, metal components, and sorted recoverable materials.",
    imageSrc: "/images/card-industrial-scrap.jpg",
    icon: <Sparkles className="w-4 h-4 text-[#25a244]" />,
    tags: ["Assorted Metal Lots", "Machinery Scrap", "Bulk Recoverable Lots"],
  },
];

export default function MaterialCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackWindowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !trackRef.current || !trackWindowRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const trackWindow = trackWindowRef.current;
        const pinContainer = pinContainerRef.current;
        if (!track || !trackWindow || !pinContainer) return;

        // Boxed track calculation
        const getScrollDistance = () => {
          return track.scrollWidth - trackWindow.clientWidth + 24;
        };

        const horizontalTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getScrollDistance() * 1.2}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          horizontalTween.kill();
        };
      });

      // Tablet (min-width: 768px and max-width: 1023px)
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const track = trackRef.current;
        const trackWindow = trackWindowRef.current;
        const pinContainer = pinContainerRef.current;
        if (!track || !trackWindow || !pinContainer) return;

        const getScrollDistance = () => {
          return track.scrollWidth - trackWindow.clientWidth + 20;
        };

        const horizontalTween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getScrollDistance() * 1.25}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          horizontalTween.kill();
        };
      });
    }, sectionRef);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-10 md:py-14 bg-white text-[#202522] relative"
    >
      {/* Boxed Fit Container - Max Width 7XL with premium framing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={pinContainerRef}
          className="rounded-3xl bg-[#F8F8F5] border border-[#E8EAE6] p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden flex flex-col justify-between"
        >
          {/* Box Header - Stable throughout scrolling */}
          <div className="w-full flex-shrink-0">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-[#E8EAE6] gap-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#234B3A]">
                  <span className="w-6 h-[2px] bg-[#234B3A]" />
                  <span>MATERIALS WE HANDLE</span>
                </div>
                <h2 className="font-heading text-[35px] leading-[36px] font-bold tracking-tight text-[#202522]">
                  From E-Waste to Heavy Machinery.
                </h2>
                <p className="text-sm sm:text-base text-[#737873] font-normal max-w-2xl leading-relaxed">
                  We connect recyclable materials, industrial components, and recoverable resources with the right sourcing and supply channels.
                </p>
              </div>

              {/* Scroll Indicator badge and Action CTA */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#737873]">
                <span className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EAE6] text-[#234B3A] shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25a244] animate-pulse" />
                  Scroll down to navigate
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#234B3A] text-white hover:bg-[#032b17] transition-colors shadow-xs"
                >
                  <span>Submit Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Boxed Horizontal Track Viewport */}
          <div
            ref={trackWindowRef}
            className="w-full my-8 overflow-x-auto lg:overflow-hidden no-scrollbar"
          >
            <div
              ref={trackRef}
              className="flex items-stretch gap-6 flex-nowrap w-max"
            >
              {cardsData.map((card) => (
                <div
                  key={card.index}
                  className="w-[82vw] sm:w-[360px] lg:w-[380px] flex-shrink-0 group rounded-2xl bg-white border border-[#E8EAE6] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-900">
                    <Image
                      src={card.imageSrc}
                      alt={`JNSAAAA - ${card.title}`}
                      fill
                      className="object-cover object-center brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 82vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#032b17]/85 backdrop-blur-md text-white font-mono text-xs font-semibold border border-white/10 tracking-wider">
                      {card.index}
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xs">
                      {card.icon}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-[#202522] leading-relaxed font-normal">
                        {card.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded bg-[#F8F8F5] text-[#234B3A] text-[11px] font-medium border border-[#E8EAE6]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E8EAE6] flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#737873] uppercase tracking-wider">
                        Recovery & Supply
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#234B3A] group-hover:text-[#25a244] transition-colors"
                      >
                        <span>Explore Materials</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Box Bottom Meta Footer */}
          <div className="w-full flex-shrink-0 pt-4 border-t border-[#E8EAE6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737873]">
            <span>5 Core Industrial Material Categories</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25a244]" />
              <span>Interactive Horizontal Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
