"use client";

import Image from "next/image";

export default function WeighingAccuracy() {
  return (
    <section className="pt-2 pb-6 sm:pb-8 bg-[#F6F9F7] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-transparent">
          <div className="relative aspect-[1024/388] w-full">
            <Image
              src="/images/weighing-accuracy-banner.png"
              alt="100% weighing accuracy guaranteed"
              fill
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
