'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Post Depth and Spacing",
      detail: "We plan post depth and spacing around the local frost line so fences do not heave or lean after freeze and thaw cycles."
    },
    {
      title: "Drainage and Grade",
      detail: "Attention to drainage and ground grade prevents standing water around posts and ensures clean, straight alignment across slopes."
    },
    {
      title: "Material Selection for Local Climate",
      detail: "Recommending materials that make sense for how you will actually use the fence and how it will withstand Western New York snow and moisture."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column matching media_1790929098328.jpg */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="section-tag">
                // LOCAL CONDITIONS
              </span>
              <h2 className="section-heading">
                Why Fence Installation Is Different in Rochester
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Rochester is not an easy place for a fence. Winters bring heavy snow, lake-effect weather and repeated freeze and thaw cycles. Spring brings wet, shifting soil. Those conditions are the main reason fences lean, heave and fail early when the work is rushed.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our approach is built for local conditions. We plan post depth and spacing around the frost line, pay attention to drainage and grade, and recommend materials that make sense for how you will actually use the fence. A fence set properly in the ground and aligned carefully will stay straighter, last longer and need fewer repairs.
            </p>

            {/* List with chevron matching the design image */}
            <div className="space-y-3 pt-2">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.title}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 border cursor-pointer transition-all ${
                    activeTab === idx
                      ? 'bg-[#181c23] border-[#ff5500]'
                      : 'bg-[#13161c] border-[#232833] hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                      {tab.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 text-[#ff5500] transition-transform ${
                      activeTab === idx ? 'rotate-90' : ''
                    }`} />
                  </div>
                  {activeTab === idx && (
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed pt-2 border-t border-[#2a303d]">
                      {tab.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-orange"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 2 Stacked Photo Cards matching media_1790929098328.jpg */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#161920] border border-[#262c38]">
              <Image
                src="/images/optimized/craftsman-uses-nail-gun-to-build-fence-2026-09-24-11-17-47-utc.webp"
                alt="Craftsman building fence"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-[10px] font-black uppercase tracking-widest text-[#ff5500] bg-black/60 px-2.5 py-1">
                Local Rochester Craftsmanship
              </span>
            </div>

            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#161920] border border-[#262c38]">
              <Image
                src="/images/optimized/building-wooden-fence-with-drill-in-golden-sunligh-2026-09-24-08-01-19-utc.webp"
                alt="Wooden fence construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-[10px] font-black uppercase tracking-widest text-[#ff5500] bg-black/60 px-2.5 py-1">
                Planned Post Depth & Alignment
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
