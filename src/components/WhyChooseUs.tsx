'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function WhyChooseUs() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      num: "01",
      title: "Clear Communication",
      desc: "Clear communication from the first call, straightforward recommendations rather than upsells, and respect for your property.",
      image: "/images/optimized/craftsman-uses-nail-gun-to-build-fence-2026-09-24-11-17-47-utc.webp"
    },
    {
      num: "02",
      title: "Careful Layout & Depth",
      desc: "Posts set properly below the local frost line and aligned carefully so the fence stays straighter, lasts longer and needs fewer repairs.",
      image: "/images/optimized/new-wooden-fence-on-a-sunny-day-2026-09-23-05-32-26-utc.webp"
    },
    {
      num: "03",
      title: "Complete Follow-Through",
      desc: "From utility markout through final walk-through, you will always know what is being built, where it is going and what comes next.",
      image: "/images/optimized/white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.webp"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header strictly from spreadsheet */}
        <div className="max-w-3xl mb-14">
          <span className="section-tag">
            // LOCAL COMMITMENT
          </span>
          <h2 className="section-heading">
            Why Homeowners Choose Xotix Fence
          </h2>
        </div>

        {/* Carousel / Tabbed Project Showcase matching media_1790929098328.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Feature Card */}
          <div className="lg:col-span-5 bg-[#14171d] border border-[#232833] p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono font-black text-[#ff5500]">
                {projects[activeProject].num} / 03
              </span>

              <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                {projects[activeProject].title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                People call us because they want a fence done right. We offer clear communication from the first call, straightforward recommendations rather than upsells, careful layout and installation, and respect for your property while we work.
              </p>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                You will always know what is being built, where it is going and what comes next. If you would like to read more about fence types and industry standards before you decide, the <a href="https://www.americanfenceassociation.com/" target="_blank" rel="noopener noreferrer" className="text-[#ff5500] font-bold underline underline-offset-4 hover:text-white transition-colors">American Fence Association</a> is a helpful independent resource.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1e232c]">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-orange w-full"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#161920] border border-[#262c38]">
            <Image
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] block mb-1">
                Rochester, NY Craftsmanship
              </span>
              <p className="text-xs text-white font-bold">
                {projects[activeProject].desc}
              </p>
            </div>
          </div>

          {/* Right Selectable Columns (01, 02, 03) */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3">
            {projects.map((proj, idx) => (
              <button
                key={proj.num}
                onClick={() => setActiveProject(idx)}
                className={`flex-1 p-4 border text-center flex flex-col items-center justify-center transition-all ${
                  activeProject === idx
                    ? 'bg-[#1f242e] border-[#ff5500] text-[#ff5500]'
                    : 'bg-[#14171d] border-[#232833] text-gray-500 hover:text-white'
                }`}
              >
                <span className="text-xl sm:text-2xl font-black font-mono block">
                  {proj.num}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider block mt-1 line-clamp-1">
                  {proj.title}
                </span>
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
