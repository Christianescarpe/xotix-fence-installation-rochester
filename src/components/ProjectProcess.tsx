'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const defaultSteps = [
  {
    num: "01",
    title: "Estimate and walk-through",
    desc: "We review your property, discuss what you want the fence to do, measure the run, and note gates, slopes, trees and obstacles. We also talk through material options so you can compare looks, upkeep and cost before deciding.",
    image: "/images/optimized/adult-man-constructing-a-fence-in-rural-setting-2026-09-24-11-17-38-utc.webp"
  },
  {
    num: "02",
    title: "Property lines and utilities",
    desc: "Before any digging, the fence line is confirmed against your survey or known markers, and underground utilities are marked through the 811 process.",
    image: "/images/optimized/worker-installing-metal-fence-along-brick-foundati-2026-09-24-14-40-20-utc.webp"
  },
  {
    num: "03",
    title: "Permits and approvals",
    desc: "Many Monroe County municipalities and some neighborhoods have rules on height, setbacks and style. We help you understand what applies so there are no surprises.",
    image: "/images/optimized/slatted-fence-on-a-suburban-property-line-2026-09-23-23-21-44-utc.webp"
  },
  {
    num: "04",
    title: "Installation",
    desc: "Posts are set below the local frost line, rails and panels are aligned and fastened, and gates are hung and adjusted so they swing and latch properly.",
    image: "/images/optimized/building-fence-with-electric-drill-on-sunny-day-2026-09-23-21-28-06-utc.webp"
  },
  {
    num: "05",
    title: "Final walk-through",
    desc: "We check the finished fence with you, clean up the work area, and explain simple care steps so it keeps its good looks for years.",
    image: "/images/optimized/white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.webp"
  }
];

interface StepItem {
  num: string;
  title: string;
  desc: string;
  image?: string;
}

interface ProjectProcessProps {
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
}

export default function ProjectProcess({
  title = "How a Xotix Fence project works",
  subtitle = "Every project follows the same clear path so you always know what happens next.",
  steps: customSteps,
}: ProjectProcessProps) {
  const displaySteps = customSteps && customSteps.length > 0 
    ? customSteps.map((s, idx) => ({
        ...s,
        image: s.image || defaultSteps[idx % defaultSteps.length].image
      }))
    : defaultSteps;

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header strictly from spreadsheet */}
        <div className="max-w-3xl mb-14">
          <span className="section-tag">
            // PROJECT WORKFLOW
          </span>
          <h2 className="section-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Interactive Step-by-Step Split Layout matching media_1790929098328.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Selectable Steps */}
          <div className="lg:col-span-5 space-y-2">
            {displaySteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`w-full p-4 text-left border flex items-center justify-between transition-all ${
                  activeStep === idx
                    ? 'bg-[#1a1e27] border-[#ff5500] text-white shadow-lg'
                    : 'bg-[#15181f] border-[#222733] text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-black px-2 py-0.5 ${
                    activeStep === idx ? 'bg-[#ff5500] text-white' : 'bg-[#222733] text-gray-400'
                  }`}>
                    {step.num}
                  </span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wide">
                    {step.title}
                  </span>
                </div>
                <ArrowRight className={`w-4 h-4 transition-transform ${
                  activeStep === idx ? 'text-[#ff5500] translate-x-1' : 'text-gray-600'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Column: Active Step Details & Image */}
          <div className="lg:col-span-7 bg-[#161920] border border-[#262c38] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between border-b border-[#262c38] pb-4">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#ff5500]">
                  Step {displaySteps[activeStep]?.num || '01'} of 0{displaySteps.length}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Xotix Fence Workflow
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                {displaySteps[activeStep]?.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {displaySteps[activeStep]?.desc}
              </p>
            </div>

            {/* Step Photo */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black/40 border border-[#2b313e]">
              <Image
                src={displaySteps[activeStep]?.image || defaultSteps[0].image}
                alt={displaySteps[activeStep]?.title || 'Xotix Fence Step'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-bold">
                <span>Clear Scope & Tidy Workmanship</span>
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-[#ff5500] hover:underline"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
