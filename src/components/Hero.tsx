'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface HeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export default function Hero({
  title = "Fence Installation in Rochester, NY",
  subtitle = "Professional fence installation in Rochester, NY for homeowners and businesses. Xotix Fence installs wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Rochester and surrounding Monroe County communities.",
  badge = "// ROCHESTER, NY",
  image = "/images/optimized/suburban-houses-and-fencing-on-a-sunny-day-2026-09-23-11-00-42-utc.webp"
}: HeroProps) {
  return (
    <section className="relative bg-[#0d0f12] text-white pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-[#1c2028]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column matching media_1790929098328.jpg */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-5">
              <span className="section-tag">
                {badge}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.08]">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-orange"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>

                <Link
                  href="/fence-installation/"
                  className="btn-outline-dark"
                >
                  <span>Fence Installation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom mini cards matching design photo */}
            <div className="pt-8 border-t border-[#1e232c] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#14171d] border border-[#232833] flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white mb-1">
                    Local Code & Frost Depth
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    Posts set below the local frost line to prevent leaning and heave.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#14171d] border border-[#232833] flex items-start gap-3">
                <div className="w-9 h-9 rounded bg-[#ff5500]/10 text-[#ff5500] flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white mb-1">
                    Monroe County Coverage
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-tight">
                    Serving Rochester, Greece, Irondequoit, Brighton and all surrounding towns.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column matching the photo collage in the design image */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#161920] border border-[#262c38] shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] block mb-1">
                  Western New York Standard
                </span>
                <p className="text-xs text-white font-bold leading-tight">
                  Whether you want a quiet backyard, a safe space for kids and pets, a clean property line, or a secure commercial yard.
                </p>
              </div>
            </div>

            {/* Dark Quote Banner underneath photo matching design */}
            <div className="p-5 bg-[#14171d] border border-[#262c38] flex items-center justify-between gap-4">
              <p className="text-xs text-gray-300 leading-relaxed">
                A fence is one of the most visible and most used parts of a property. Planning the job properly first ensures the finished fence fits your yard, budget, and daily life.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-10 h-10 rounded bg-[#ff5500] text-white flex items-center justify-center shrink-0 hover:bg-[#e64900] transition-colors"
                aria-label="Call for estimate"
              >
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
