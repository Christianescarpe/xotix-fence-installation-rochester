import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface CallToActionProps {
  tag?: string;
  title?: string;
  contentHtml?: string;
}

export default function CallToAction({
  tag = "// GET STARTED",
  title = "Request your fence installation estimate",
  contentHtml,
}: CallToActionProps) {
  return (
    <section className="bg-[#111317] text-white py-16 sm:py-24 border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#161920] border border-[#262c38] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column strictly from spreadsheet */}
            <div className="lg:col-span-8 space-y-5">
              <span className="section-tag">
                {tag}
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                {title}
              </h2>

              {contentHtml ? (
                <div 
                  className="prose prose-invert max-w-2xl text-xs sm:text-sm text-gray-300 leading-relaxed space-y-3 [&_a]:text-[#ff5500] [&_a]:font-bold [&_a]:underline hover:[&_a]:text-white"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              ) : (
                <>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                    Ready to get started? Contact Xotix Fence Installation Rochester at <span className="font-bold text-white">{siteConfig.phoneDisplay}</span> or visit us at <span className="text-white">{siteConfig.address}</span> to talk through your project.
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl">
                    Tell us your address, the type of fence you have in mind, and any deadlines you are working toward, and we will follow up with the next steps. Clear scope, honest recommendations and tidy workmanship are what we aim to deliver on every job.
                  </p>
                </>
              )}

              <div className="pt-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-orange"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Office Location Card */}
            <div className="lg:col-span-4 bg-[#111317] border border-[#242935] p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ff5500]">
                <MapPin className="w-4 h-4 text-[#ff5500]" />
                <span>Rochester Office</span>
              </div>

              <h3 className="text-base font-black uppercase text-white">
                {siteConfig.name}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {siteConfig.address}
              </p>

              <div className="pt-2 border-t border-[#1e232c]">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ff5500] hover:text-white transition-colors"
                >
                  <span>Direct Line: {siteConfig.phoneDisplay}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
