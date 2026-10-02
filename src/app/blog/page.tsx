import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, ChevronRight } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import Hero from '@/components/Hero';
import ServingAreaSection from '@/components/ServingAreaSection';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqCards from '@/components/FaqCards';
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: {
    absolute: 'Blogs',
  },
  description: 'Expert advice, cost guides, winter fence tips, and permit information for homeowners and businesses in Rochester, NY.',
};

export default function BlogIndexPage() {
  return (
    <div className="bg-[#0d0f12] text-white">
      {/* 1. Hero matching homepage */}
      <Hero
        title="Fence Guides & Rochester Insights"
        subtitle="Helpful answers on fence costs, permits, frost depth, dog fences, and winter durability in Rochester, NY and Monroe County."
        badge="// FENCE GUIDES & RESOURCES"
        image="/images/optimized/winter-sunset-behind-metal-fence-in-urban-park-2026-09-24-20-25-54-utc.webp"
      />

      {/* 2. Serving Rochester & Monroe County Banner */}
      <ServingAreaSection />

      {/* 3. Blog Cards Grid */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] border-b border-[#212631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="section-tag">
              // ARTICLES & GUIDES
            </span>
            <h2 className="section-heading">
              Latest Rochester Fence Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <article
                key={blog.id}
                className="flex flex-col bg-[#14171d] border border-[#232833] overflow-hidden hover:border-[#ff5500] transition-colors group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[#161920]">
                  <Image
                    src={blog.image}
                    alt={blog.blogTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-0 left-0 bg-[#ff5500] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                    Rochester Guide
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                        {blog.readTime}
                      </span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black uppercase text-white group-hover:text-[#ff5500] transition-colors leading-snug mb-3">
                      <Link href={blog.urlSlug}>
                        {blog.blogTitle}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-4">
                      {blog.metaDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1e232c]">
                    <Link
                      href={blog.urlSlug}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ff5500] group-hover:text-white transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <ProjectProcess />

      {/* 5. Craftsmanship Section */}
      <WhyChooseUs />

      {/* 6. FAQ Section */}
      <FaqCards />

      {/* 7. Bottom CTA */}
      <CallToAction />
    </div>
  );
}
