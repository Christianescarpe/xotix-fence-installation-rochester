import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ApplicationsSection() {
  const cards = [
    {
      title: "Residential Fencing",
      subtitle: "Privacy, safety and style",
      desc: "Backyard privacy enclosures, fences for dogs and pets, perimeter fencing for larger lots, and pool enclosures.",
      image: "/images/optimized/new-wooden-fence-on-a-sunny-day-2026-09-23-05-32-26-utc.webp",
      slug: "/fence-installation/"
    },
    {
      title: "Commercial Fencing",
      subtitle: "Property protection",
      desc: "Commercial fencing for storage yards, parking lots, retail properties, apartment communities, and schools.",
      image: "/images/optimized/assembling-a-metal-structure-in-a-suburban-yard-2026-09-25-00-35-37-utc.webp",
      slug: "/commercial-fencing/"
    },
    {
      title: "Pool Fence Installation",
      subtitle: "Safe boundaries",
      desc: "Pool enclosures and gates sized and positioned for safety, barrier requirements, and clean visual lines.",
      image: "/images/optimized/white-fence-and-greenery-in-a-suburban-setting-2026-09-22-16-31-01-utc.webp",
      slug: "/pool-fence/"
    },
    {
      title: "Repairs & Replacements",
      subtitle: "Targeted maintenance",
      desc: "Targeted fixes for damaged panels, sagging gates, or leaning sections, and full replacements when fences reach the end of their life.",
      image: "/images/optimized/person-repairing-a-wooden-fence-outdoors-during-da-2026-09-24-07-56-06-utc.webp",
      slug: "/fence-repair/"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header strictly from spreadsheet */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag">
            // FENCING SCOPE
          </span>
          <h2 className="section-heading">
            Residential & Commercial Fencing
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            For homeowners, we build fences for privacy, safety and style. For businesses, we install fencing that protects property and stands up to daily use.
          </p>
        </div>

        {/* 4 Cards Grid matching media_1790929098328.jpg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#161920] border border-[#262c38] overflow-hidden flex flex-col justify-between hover:border-[#ff5500] transition-colors group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-black/50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161920] via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-base font-black uppercase text-white mb-2 group-hover:text-[#ff5500] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={card.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white hover:text-[#ff5500] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
