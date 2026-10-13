"use client";

import { Share2, MessageSquare, CheckCircle } from "lucide-react";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detail: string;
}

const steps: StepProps[] = [
  {
    number: "01",
    title: "Share the Material",
    description: "Tell us what material, machinery, or components you have available.",
    detail: "Submit photos, estimated tonnage, component condition, and physical location.",
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Discuss the Requirement",
    description: "Share the relevant material details, quantity, and commercial requirements.",
    detail: "We match technical specifications with current buyer requirements and market feasibility.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Coordinate the Next Step",
    description: "Suitable requirements can move forward after the details are reviewed and agreed upon.",
    detail: "Align on delivery scheduling, inspection protocol, and commercial terms.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="py-12 md:py-16 bg-[#f4f7f4] text-[#121814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#25a244]">
            <span className="w-6 h-[2px] bg-[#25a244]" />
            <span>Structured Process</span>
            <span className="w-6 h-[2px] bg-[#25a244]" />
          </div>
          <h2 className="font-heading text-[35px] leading-[36px] font-bold tracking-tight text-[#032b17]">
            From Material to Opportunity.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            A practical three-step workflow designed to streamline industrial material evaluation and channelisation.
          </p>
        </div>

        {/* 3-Step Timeline with Connecting Line */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-[#25a244]/20 via-[#25a244] to-[#25a244]/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#e8f5e9] text-[#25a244] group-hover:bg-[#25a244] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      {step.icon}
                    </div>
                    <span className="font-mono text-2xl font-bold text-gray-300 group-hover:text-[#25a244] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading text-xl font-bold text-[#032b17] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Practical Process Detail */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 font-medium leading-normal bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="text-gray-900 font-semibold block mb-0.5">Focus:</span>
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            Note: All commercial, logistics, and processing terms are determined on a lot-by-lot basis following physical review and mutual agreement.
          </p>
        </div>

      </div>
    </section>
  );
}
