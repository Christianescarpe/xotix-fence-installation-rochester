'use client';

import React from 'react';
import Link from 'next/link';
import { 
  TreePine, 
  Shield, 
  Grid, 
  Fence, 
  Building2, 
  Wrench, 
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  const fenceTypes = [
    {
      title: "Wood Fencing",
      slug: "/wood-fence/",
      desc: "Classic choice for warmth and flexibility. Our wood fence installation covers cedar and pressure-treated styles, from solid privacy panels to shadowbox, picket and stockade designs. Wood suits homeowners who want a natural look and the option to stain or paint over time.",
      badge: "W",
      icon: TreePine
    },
    {
      title: "Vinyl Fencing",
      slug: "/vinyl-fence/",
      desc: "Favorite for people who want privacy without the upkeep. Our vinyl fence installation uses durable PVC systems that do not need painting, resist rot and insects, and clean up with a simple wash. Available in privacy, semi-privacy, picket and ranch-rail styles.",
      badge: "V",
      icon: Shield
    },
    {
      title: "Chain Link Fencing",
      slug: "/chain-link-fence/",
      desc: "Remains the practical answer for budget-conscious, durable enclosures. Our chain link fence installation includes galvanized and black vinyl-coated options for residential yards, dog runs, schools, lots and commercial properties.",
      badge: "C",
      icon: Grid
    },
    {
      title: "Aluminum & Ornamental",
      slug: "/aluminum-fence/",
      desc: "Refined look that never rusts. Strong choice for front yards, pool enclosures and properties where you want a boundary without blocking the view.",
      badge: "A",
      icon: Fence
    },
    {
      title: "Privacy Fences",
      slug: "/privacy-fence/",
      desc: "Backyard privacy enclosures to block sightlines, keep children and pets safe, secure property lines, and create quiet comfort for homeowners.",
      badge: "P",
      icon: Building2
    },
    {
      title: "Repairs & Replacements",
      slug: "/fence-repair/",
      desc: "Targeted fixes for damaged panels, sagging gates, or leaning sections, and full replacements when older fences reach the end of their life.",
      badge: "R",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header layout matching media_1790928108428.jpg */}
        <div className="max-w-3xl mb-14">
          <span className="section-tag">
            // OUR FENCING
          </span>
          <h2 className="section-heading">
            Fence Types We Install
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            Every property is different, so we install a full range of fencing rather than pushing a single product. Here is a quick look at the options most Rochester customers ask about.
          </p>
        </div>

        {/* Dark Cards Grid with Orange Square Badges matching design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fenceTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div 
                key={type.title}
                className="bg-[#14171d] border border-[#232833] p-7 flex flex-col justify-between hover:border-[#ff5500] transition-all group"
              >
                <div>
                  {/* Orange square badge matching design */}
                  <div className="w-10 h-10 bg-[#ff5500] text-white flex items-center justify-center font-black text-sm uppercase mb-5 shadow-md shadow-orange-950/40">
                    <span>{type.badge}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black uppercase text-white mb-3 group-hover:text-[#ff5500] transition-colors">
                    {type.title}
                  </h3>

                  <p 
                    className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ 
                      __html: type.desc
                        .replace('wood fence installation', '<a href="/wood-fence/" class="text-[#ff5500] font-bold underline underline-offset-4 hover:text-white transition-colors">wood fence installation</a>')
                        .replace('vinyl fence installation', '<a href="/vinyl-fence/" class="text-[#ff5500] font-bold underline underline-offset-4 hover:text-white transition-colors">vinyl fence installation</a>')
                        .replace('chain link fence installation', '<a href="/chain-link-fence/" class="text-[#ff5500] font-bold underline underline-offset-4 hover:text-white transition-colors">chain link fence installation</a>')
                    }}
                  />
                </div>

                <div className="pt-4 border-t border-[#1e232c]">
                  <Link
                    href={type.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ff5500] hover:text-white transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
