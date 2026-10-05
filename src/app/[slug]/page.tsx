import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { pagesData } from '@/data/pagesData';
import Hero from '@/components/Hero';
import ServingAreaSection from '@/components/ServingAreaSection';
import ServicesSection from '@/components/ServicesSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import AboutSection from '@/components/AboutSection';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqCards from '@/components/FaqCards';
import CallToAction from '@/components/CallToAction';
import ContentRenderer from '@/components/ContentRenderer';

import LocationTemplate from '@/components/LocationTemplate';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return pagesData
    .filter((p) => p.pageType !== 'Home')
    .map((p) => ({
      slug: p.cleanSlug,
    }));
}

import JsonLd from '@/components/JsonLd';
import { getServiceSchema } from '@/data/schemas';

export function generateMetadata({ params }: PageProps): Metadata {
  const page = pagesData.find((p) => p.cleanSlug === params.slug);
  if (!page) return {};

  const canonicalUrl = `https://xotix-fence-installation-rochester.vercel.app/${page.cleanSlug}/`;

  return {
    title: {
      absolute: page.seoTitle,
    },
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: 'Xotix Fence Installation Rochester',
      locale: 'en_US',
      type: 'website',
      images: page.image
        ? [
            {
              url: page.image,
              width: 1200,
              height: 630,
              alt: page.pageTitle,
            },
          ]
        : undefined,
    },
  };
}

export default function GenericPage({ params }: PageProps) {
  const page = pagesData.find((p) => p.cleanSlug === params.slug);

  if (!page) {
    notFound();
  }

  // If this is a Location page, use the dedicated LocationTemplate with designated sheet content
  if (page.pageType === 'Location') {
    return <LocationTemplate page={page} />;
  }

  // Service Page: Parse designated FAQ and CTA if available
  const faqMatch = page.content.match(/<h2>(.*?(?:Questions|FAQ).*?)<\/h2>([\s\S]*?)(?=<h2>|$)/i);
  let serviceFaqs: Array<{ q: string; a: string }> = [];
  let serviceFaqTitle = "Frequently Asked Questions";
  if (faqMatch) {
    serviceFaqTitle = faqMatch[1].trim();
    const faqRegex = /<p><strong>(.*?)<\/strong>([\s\S]*?)<\/p>/gi;
    let fMatch;
    while ((fMatch = faqRegex.exec(faqMatch[2])) !== null) {
      serviceFaqs.push({
        q: fMatch[1].replace(/<[^>]+>/g, '').trim(),
        a: fMatch[2].trim()
      });
    }
  }

  const ctaMatch = page.content.match(/<h2>(Request your.*?)<\/h2>([\s\S]*?)$/i);
  const ctaTitle = ctaMatch ? ctaMatch[1].trim() : "Request your fence installation estimate";
  const ctaContent = ctaMatch ? ctaMatch[2].trim() : undefined;

  // Deduplicate content:
  // 1. Remove leading <h1> (Hero is the sole H1)
  // 2. Remove duplicate "How a Xotix Fence project works" (ProjectProcess renders it)
  // 3. Remove duplicate FAQs if parsed into FaqCards
  // 4. Remove duplicate CTA (CallToAction renders it)
  let cleanedContent = page.content
    .replace(/^<h1>.*?<\/h1>\s*/i, '')
    .replace(/<h2>How a Xotix Fence project works<\/h2>[\s\S]*?(?=<h2>|$)/i, '')
    .replace(/<h2>Request your (fence installation )?estimate<\/h2>[\s\S]*$/i, '')
    .replace(/<h2>Request your .*? estimate<\/h2>[\s\S]*$/i, '');

  if (faqMatch) {
    cleanedContent = cleanedContent.replace(/<h2>(.*?(?:Questions|FAQ).*?)<\/h2>[\s\S]*?(?=<h2>|$)/i, '');
  }

  return (
    <div>
      <JsonLd data={getServiceSchema(page)} />
      {/* 1. Hero Section matching homepage design */}
      <Hero
        title={page.pageTitle}
        subtitle={page.metaDescription}
        badge="// FENCING SERVICE"
        image={page.image}
      />

      {/* 2. Serving Rochester & Monroe County (Wide Media Banner & Towns) */}
      <ServingAreaSection />

      {/* 3. In-Depth Specific Content for this Service */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="section-tag">
              // SERVICE SPECIFICATIONS
            </span>
            <h2 className="section-heading">
              {page.pageTitle}
            </h2>
          </div>

          <div className="p-8 sm:p-12 bg-[#14171d] border border-[#232833] shadow-xl">
            <ContentRenderer content={cleanedContent} />
          </div>
        </div>
      </section>

      {/* 4. Fence Types We Install (Dark Cards with Orange Badges) */}
      <ServicesSection />

      {/* 5. Residential & Commercial Scope Grid */}
      <ApplicationsSection />

      {/* 6. Why Fence Installation Is Different in Rochester */}
      <AboutSection />

      {/* 7. How a Xotix Fence Project Works (Interactive 5-Step Workflow) */}
      <ProjectProcess />

      {/* 8. Why Homeowners Choose Xotix Fence */}
      <WhyChooseUs />

      {/* 9. Designated Service FAQs */}
      <FaqCards
        title={serviceFaqTitle}
        faqs={serviceFaqs.length > 0 ? serviceFaqs : undefined}
      />

      {/* 10. Designated Service CTA Banner */}
      <CallToAction
        title={ctaTitle}
        contentHtml={ctaContent}
      />
    </div>
  );
}
