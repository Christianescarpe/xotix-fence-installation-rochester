import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServingAreaSection from '@/components/ServingAreaSection';
import ServicesSection from '@/components/ServicesSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import AboutSection from '@/components/AboutSection';
import ProjectProcess from '@/components/ProjectProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import FaqCards from '@/components/FaqCards';
import CallToAction from '@/components/CallToAction';
import { homePage } from '@/data/pagesData';

export const metadata: Metadata = {
  title: {
    absolute: homePage.seoTitle,
  },
  description: homePage.metaDescription,
  alternates: {
    canonical: 'https://fenceinstallationrochesterny.site/',
  },
  openGraph: {
    title: homePage.seoTitle,
    description: homePage.metaDescription,
    url: 'https://fenceinstallationrochesterny.site/',
    siteName: 'Xotix Fence Installation Rochester',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/optimized/white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.webp',
        width: 1200,
        height: 630,
        alt: 'Xotix Fence Installation Rochester',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        title="Fence Installation in Rochester, NY"
        subtitle="Professional fence installation in Rochester, NY for homeowners and businesses. Xotix Fence installs wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Rochester and surrounding Monroe County communities."
      />

      {/* 2. Serving Rochester & Monroe County (Wide Media Banner & Towns) */}
      <ServingAreaSection />

      {/* 3. Fence Types We Install (Dark Cards with Orange Badges) */}
      <ServicesSection />

      {/* 4. Residential & Commercial Fencing (4-Card Scope Grid) */}
      <ApplicationsSection />

      {/* 5. Why Fence Installation Is Different in Rochester (Accordion & Stacked Photos) */}
      <AboutSection />

      {/* 6. How a Xotix Fence Project Works (Interactive 5-Step Workflow) */}
      <ProjectProcess />

      {/* 7. Why Homeowners Choose Xotix Fence (Carousel / Selectable Projects) */}
      <WhyChooseUs />

      {/* 8. Frequently Asked Questions (3-Card Layout) */}
      <FaqCards />

      {/* 9. Request Your Fence Installation Estimate (Bottom CTA) */}
      <CallToAction />
    </div>
  );
}
