import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ServingAreaSection from '@/components/ServingAreaSection';
import CallToAction from '@/components/CallToAction';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact | Xotix Fence Installation Rochester',
  },
  description: 'Contact Xotix Fence Installation Rochester. Call (585) 481-8674 or visit us at 264 Hudson Ave, Rochester, NY 14605 to schedule your fence estimate.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#0d0f12] text-white">
      {/* 1. Hero Section matching homepage design */}
      <Hero
        title="Contact Xotix Fence Installation Rochester"
        subtitle="Ready to get started? Contact Xotix Fence Installation Rochester at (585) 481-8674 or visit us at 264 Hudson Ave, Rochester, NY 14605, United States to talk through your project."
        badge="// GET IN TOUCH"
        image="/images/optimized/craftsman-installing-wooden-fence-panels-outdoors-2026-09-24-11-21-41-utc.webp"
      />

      {/* 2. Serving Rochester & Monroe County Banner */}
      <ServingAreaSection />

      {/* 3. Contact Information Cards */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] border-b border-[#212631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="section-tag">
              // OFFICE & DIRECT COMMUNICATION
            </span>
            <h2 className="section-heading mb-4">
              Connect With Our Team
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Tell us your address, the type of fence you have in mind, and any deadlines you are working toward, and we will follow up with the next steps. Clear scope, honest recommendations and tidy workmanship are what we aim to deliver on every job.
            </p>
          </div>

          {/* 3-Column Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Phone Card */}
            <div className="bg-[#14171d] border border-[#232833] p-8 flex flex-col justify-between hover:border-[#ff5500] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#ff5500] text-white flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <span className="text-[10px] font-mono font-black text-[#ff5500] uppercase tracking-widest block mb-2">
                  // DIRECT PHONE
                </span>
                <h3 className="text-xl font-black uppercase text-white mb-3">
                  Call For Estimates
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  Call our Rochester office directly to discuss your fence run, material options, and schedule an on-site property walk-through.
                </p>
              </div>

              <div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-orange w-full text-center"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#14171d] border border-[#232833] p-8 flex flex-col justify-between hover:border-[#ff5500] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#1a1f29] border border-[#2c3342] text-[#ff5500] flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-black text-[#ff5500] uppercase tracking-widest block mb-2">
                  // OFFICE LOCATION
                </span>
                <h3 className="text-xl font-black uppercase text-white mb-3">
                  Rochester Office
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-2 font-bold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  {siteConfig.address}
                </p>
              </div>

              <div className="pt-4 border-t border-[#212631] text-xs text-gray-400 font-mono">
                <span>Monroe County, NY</span>
              </div>
            </div>

            {/* Service Region Card */}
            <div className="bg-[#14171d] border border-[#232833] p-8 flex flex-col justify-between hover:border-[#ff5500] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#1a1f29] border border-[#2c3342] text-[#ff5500] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-black text-[#ff5500] uppercase tracking-widest block mb-2">
                  // COVERAGE AREA
                </span>
                <h3 className="text-xl font-black uppercase text-white mb-3">
                  Service Area
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  Providing professional fence installation and repair throughout Rochester and all Monroe County towns, plus Victor in Ontario County.
                </p>
              </div>

              <div className="pt-4 border-t border-[#212631] flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
                  Licensed & Insured
                </span>
                <span className="text-[#ff5500] font-mono font-bold">13 Towns</span>
              </div>
            </div>

          </div>

          {/* 4. Full-Width Interactive Google Map as Requested */}
          <div className="bg-[#14171d] border border-[#232833] p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="section-tag mb-1">
                  // INTERACTIVE LOCATION MAP
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                  Rochester Office & Service Area Map
                </h3>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-outline-dark shrink-0"
              >
                <Phone className="w-4 h-4 text-[#ff5500]" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>

            <div className="w-full h-[400px] sm:h-[500px] border border-[#262c38] overflow-hidden bg-[#161920]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.0891255409847!2d-77.6012765!3d43.1685628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b599f40c1ab9%3A0x2eefc4fbfd4402f4!2sXotix%20Fence%20Installation%20Rochester!5e1!3m2!1sen!2sph!4v1790926072506!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Xotix Fence Installation Rochester Map"
                className="w-full h-full filter invert hue-rotate-180 brightness-95 contrast-125"
              />
            </div>

            <div className="pt-6 mt-6 border-t border-[#232833] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span>264 Hudson Ave, Rochester, NY 14605, United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ff5500] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white font-bold">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Call To Action Banner */}
      <CallToAction />
    </div>
  );
}
