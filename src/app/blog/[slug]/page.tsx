import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Calendar, ArrowRight, Phone } from 'lucide-react';
import { blogsData } from '@/data/blogsData';
import { siteConfig } from '@/data/siteConfig';
import Hero from '@/components/Hero';
import ServingAreaSection from '@/components/ServingAreaSection';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqCards from '@/components/FaqCards';
import CallToAction from '@/components/CallToAction';
import ContentRenderer from '@/components/ContentRenderer';

import JsonLd from '@/components/JsonLd';
import { getBlogPostingSchema } from '@/data/schemas';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.cleanSlug,
  }));
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const blog = blogsData.find((b) => b.cleanSlug === params.slug);
  if (!blog) return {};

  const canonicalUrl = `https://xotix-fence-installation-rochester.vercel.app/blog/${blog.cleanSlug}/`;

  return {
    title: {
      absolute: blog.seoTitle,
    },
    description: blog.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.seoTitle,
      description: blog.metaDescription,
      url: canonicalUrl,
      siteName: 'Xotix Fence Installation Rochester',
      locale: 'en_US',
      type: 'article',
      publishedTime: '2026-10-01T00:00:00.000Z',
      images: blog.image
        ? [
            {
              url: blog.image,
              width: 1200,
              height: 630,
              alt: blog.blogTitle,
            },
          ]
        : undefined,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostProps) {
  const blog = blogsData.find((b) => b.cleanSlug === params.slug);

  if (!blog) {
    notFound();
  }

  const otherBlogs = blogsData.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="single-blog-page bg-[#0d0f12] text-white">
      <JsonLd data={getBlogPostingSchema(blog)} />
      {/* 1. Hero matching homepage */}
      <Hero
        title={blog.blogTitle}
        subtitle={blog.metaDescription}
        badge="// ROCHESTER FENCE GUIDE"
        image={blog.image}
      />

      {/* 2. Serving Rochester & Monroe County Banner */}
      <ServingAreaSection />

      {/* 3. Article Content */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] border-b border-[#212631]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-8 font-mono border-b border-[#212631] pb-4">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
              {blog.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
              {blog.date}
            </span>
          </div>

          <div className="p-6 sm:p-12 bg-[#14171d] border border-[#232833] shadow-xl">
            <ContentRenderer 
              content={blog.content.replace(/^<h1>.*?<\/h1>\s*/i, '')} 
              className="blog-article-content text-white [&_p]:!text-white [&_li]:!text-white"
            />
          </div>

          {/* More Articles */}
          <div className="mt-16 pt-12 border-t border-[#212631]">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-8">
              More Rochester Fence Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherBlogs.map((b) => (
                <Link
                  key={b.id}
                  href={b.urlSlug}
                  className="p-5 bg-[#14171d] border border-[#232833] hover:border-[#ff5500] transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 font-mono uppercase block mb-2">
                      {b.readTime}
                    </span>
                    <h4 className="text-xs sm:text-sm font-black uppercase text-white group-hover:text-[#ff5500] transition-colors leading-snug">
                      {b.blogTitle}
                    </h4>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-xs font-black uppercase tracking-wider text-[#ff5500]">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
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
