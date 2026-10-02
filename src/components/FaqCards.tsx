import React from 'react';
import { HelpCircle } from 'lucide-react';

const defaultFaqs = [
  {
    q: "How long does fence installation take?",
    a: "Many residential fences can be installed in a few days once materials and approvals are in place, though larger or more complex jobs take longer. Weather and ground conditions also play a role."
  },
  {
    q: "Do I need a permit for a fence in Rochester?",
    a: "Many municipalities require a permit or have rules on height and placement, so it is wise to check before building. We can guide you through what is typically needed."
  },
  {
    q: "What is the best fence for a Rochester winter?",
    a: "Any well-installed fence can handle it, but proper post depth is the most important factor. Vinyl and aluminum resist moisture, while quality wood performs well with sealing and maintenance."
  }
];

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCardsProps {
  tag?: string;
  title?: string;
  faqs?: FaqItem[];
}

export default function FaqCards({
  tag = "// QUESTIONS & ANSWERS",
  title = "Frequently Asked Questions",
  faqs: customFaqs,
}: FaqCardsProps) {
  const displayFaqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

  return (
    <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header strictly from spreadsheet */}
        <div className="max-w-3xl mb-14">
          <span className="section-tag">
            {tag}
          </span>
          <h2 className="section-heading">
            {title}
          </h2>
        </div>

        {/* Dynamic FAQ Cards in dark theme */}
        <div className={`grid grid-cols-1 ${displayFaqs.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {displayFaqs.map((faq, idx) => (
            <div 
              key={faq.q}
              className="bg-[#161920] border border-[#262c38] p-7 flex flex-col justify-between hover:border-[#ff5500] transition-colors"
            >
              <div>
                <div className="w-8 h-8 bg-[#ff5500] text-white flex items-center justify-center text-xs font-black mb-4">
                  0{idx + 1}
                </div>

                <h3 className="text-base font-black uppercase text-white mb-3 leading-snug">
                  {faq.q}
                </h3>

                <p 
                  className="text-xs sm:text-sm text-gray-400 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.a }}
                />
              </div>

              <div className="pt-4 mt-6 border-t border-[#242935] flex items-center justify-between text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                <span>Xotix Fence FAQ</span>
                <span className="text-[#ff5500]">Monroe County</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
