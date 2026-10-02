import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function ServingAreaSection() {
  const towns = [
    { name: "Greece", slug: "/fence-installation-greece-ny/" },
    { name: "Irondequoit", slug: "/fence-installation-irondequoit-ny/" },
    { name: "Brighton", slug: "/fence-installation-brighton-ny/" },
    { name: "Henrietta", slug: "/fence-installation-henrietta-ny/" },
    { name: "Gates", slug: "/fence-installation-gates-ny/" },
    { name: "Chili", slug: "/fence-installation-chili-ny/" },
    { name: "Penfield", slug: "/fence-installation-penfield-ny/" },
    { name: "Webster", slug: "/fence-installation-webster-ny/" },
    { name: "Fairport", slug: "/fence-installation-fairport-ny/" },
    { name: "Pittsford", slug: "/fence-installation-pittsford-ny/" },
    { name: "Victor", slug: "/fence-installation-victor-ny/" },
    { name: "Spencerport", slug: "/fence-installation-spencerport-ny/" }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#111317] border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header strictly from spreadsheet */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-tag">
            // LOCAL COMMUNITIES
          </span>
          <h2 className="section-heading">
            Serving Rochester and Monroe County
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            Xotix Fence serves homeowners and businesses across Rochester and surrounding Monroe County communities, including Greece, Irondequoit, Brighton, Henrietta, Gates, Chili, Penfield, Webster, Fairport, Pittsford, Victor and Spencerport. Each community has its own housing styles, lot sizes and local requirements, and we bring that awareness to every project.
          </p>
        </div>

        {/* Large Wide Media Showcase Image matching the layout in media_1790929098328.jpg */}
        <div className="relative h-64 sm:h-96 lg:h-[420px] w-full overflow-hidden bg-[#161920] border border-[#262c38] shadow-2xl mb-8">
          <Image
            src="/images/optimized/suburban-houses-and-fencing-on-a-sunny-day-2026-09-23-11-00-42-utc.webp"
            alt="Serving Rochester and Monroe County fencing"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#ff5500]">
                Monroe County & Ontario County
              </span>
              <h3 className="text-lg sm:text-2xl font-black uppercase text-white mt-1">
                Local Town & Village Fence Solutions
              </h3>
            </div>

            <Link
              href="/rochester-ny/"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white bg-[#ff5500] hover:bg-[#e64900] px-4 py-2 transition-colors self-start sm:self-auto"
            >
              <span>Explore Locations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Towns Grid matching the bottom bar in design image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {towns.map((town) => (
            <Link
              key={town.name}
              href={town.slug}
              className="p-3 bg-[#161920] border border-[#242935] hover:border-[#ff5500] transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3 h-3 text-[#ff5500] shrink-0" />
                <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase truncate">
                  {town.name}
                </span>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#ff5500] shrink-0 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
