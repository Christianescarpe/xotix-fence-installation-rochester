import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin, FileText, Compass, Wrench, Phone } from 'lucide-react';
import Hero from './Hero';
import ServingAreaSection from './ServingAreaSection';
import ProjectProcess from './ProjectProcess';
import FaqCards from './FaqCards';
import CallToAction from './CallToAction';
import ContentRenderer from './ContentRenderer';
import { PageData } from '@/data/pagesData';
import { siteConfig } from '@/data/siteConfig';

interface LocationTemplateProps {
  page: PageData;
}

export function parseLocationContent(html: string) {
  // 1. Intro before the first <h2>
  const introMatch = html.match(/^([\s\S]*?)(?=<h2>)/i);
  const intro = introMatch ? introMatch[1].replace(/<h1>.*?<\/h1>/i, '').trim() : '';

  // 2. Extract all H2 sections
  const sections: Record<string, string> = {};
  const regex = /<h2>(.*?)<\/h2>([\s\S]*?)(?=(?:<h2>|$))/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const title = match[1].trim();
    const body = match[2].trim();
    sections[title] = body;
  }

  const keys = Object.keys(sections);
  const homesKey = keys.find(k => k.includes('Homes and Properties'));
  const conditionsKey = keys.find(k => k.includes('Local Conditions'));
  const requestedKey = keys.find(k => k.includes('Most Requested'));
  const permitsKey = keys.find(k => k.includes('Permits and Local Rules'));
  const servicesKey = keys.find(k => k.includes('Fence Services Available'));
  const planningKey = keys.find(k => k.includes('Planning Your'));
  const processKey = keys.find(k => k.includes('How a Xotix Fence project works'));
  const faqKey = keys.find(k => k.includes('Fence Questions') || k.includes('Questions'));
  const ctaKey = keys.find(k => k.includes('Request your'));

  // 3. Process Steps parsing
  let steps: Array<{ num: string; title: string; desc: string }> = [];
  if (processKey && sections[processKey]) {
    const liRegex = /<li>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let idx = 0;
    while ((liMatch = liRegex.exec(sections[processKey])) !== null) {
      const text = liMatch[1].replace(/<[^>]+>/g, '').trim();
      const dotIdx = text.indexOf('.');
      if (dotIdx > 0 && dotIdx < 40) {
        steps.push({
          num: `0${idx + 1}`,
          title: text.substring(0, dotIdx).trim(),
          desc: text.substring(dotIdx + 1).trim()
        });
      } else {
        steps.push({
          num: `0${idx + 1}`,
          title: `Step 0${idx + 1}`,
          desc: text
        });
      }
      idx++;
    }
  }

  // 4. FAQ Parsing
  let faqs: Array<{ q: string; a: string }> = [];
  if (faqKey && sections[faqKey]) {
    const faqRegex = /<p><strong>(.*?)<\/strong>([\s\S]*?)<\/p>/gi;
    let fMatch;
    while ((fMatch = faqRegex.exec(sections[faqKey])) !== null) {
      faqs.push({
        q: fMatch[1].replace(/<[^>]+>/g, '').trim(),
        a: fMatch[2].trim()
      });
    }
  }

  return {
    intro,
    homes: homesKey ? { title: homesKey, content: sections[homesKey] } : null,
    conditions: conditionsKey ? { title: conditionsKey, content: sections[conditionsKey] } : null,
    requested: requestedKey ? { title: requestedKey, content: sections[requestedKey] } : null,
    permits: permitsKey ? { title: permitsKey, content: sections[permitsKey] } : null,
    services: servicesKey ? { title: servicesKey, content: sections[servicesKey] } : null,
    planning: planningKey ? { title: planningKey, content: sections[planningKey] } : null,
    steps,
    faqTitle: faqKey || "Frequently Asked Questions",
    faqs,
    cta: ctaKey ? { title: ctaKey, content: sections[ctaKey] } : null
  };
}

const quickFenceTypes = [
  { name: 'Wood Fence', slug: '/wood-fence/', letter: 'W', desc: 'Cedar & pressure-treated privacy, shadowbox, & split rail.' },
  { name: 'Vinyl Fence', slug: '/vinyl-fence/', letter: 'V', desc: 'Low-maintenance privacy & picket styles built for freeze-thaw.' },
  { name: 'Chain Link', slug: '/chain-link-fence/', letter: 'C', desc: 'Durable galvanized & black vinyl-coated boundaries.' },
  { name: 'Aluminum Fence', slug: '/aluminum-fence/', letter: 'A', desc: 'Architectural ornamental fencing & pool-code safety barriers.' },
  { name: 'Privacy Fence', slug: '/privacy-fence/', letter: 'P', desc: 'Full-coverage 6ft backyard enclosures for yards & patios.' },
  { name: 'Fence Repair', slug: '/fence-repair/', letter: 'R', desc: 'Post stabilization, gate adjustments, & winter damage restoration.' },
];

export default function LocationTemplate({ page }: LocationTemplateProps) {
  const parsed = parseLocationContent(page.content);

  // Extract clean plain-text intro for hero subtitle if possible
  const plainIntro = parsed.intro.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  return (
    <div>
      {/* 1. Hero Section matching homepage design */}
      <Hero
        title={page.pageTitle}
        subtitle={plainIntro || page.metaDescription}
        badge="// MONROE COUNTY SERVICE LOCATION"
        image={page.image}
      />

      {/* 2. Serving Rochester & Monroe County Navigation Bar */}
      <ServingAreaSection />

      {/* 3. Local Homes & Environmental Planning (2-Column Modern Grid) */}
      {(parsed.homes || parsed.conditions) && (
        <section className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Fences for [Town] Homes & Properties */}
              {parsed.homes && (
                <div className="bg-[#14171d] border border-[#232833] p-8 sm:p-10 flex flex-col justify-between hover:border-[#ff5500]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="section-tag mb-0">
                        // PROPERTY PROFILES & LOT PLANNING
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black uppercase text-white mb-6">
                      {parsed.homes.title}
                    </h2>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <ContentRenderer content={parsed.homes.content} />
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-[#212631] flex items-center justify-between text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <Compass className="w-4 h-4 text-[#ff5500]" />
                      Custom Lot Mapping
                    </span>
                    <span className="text-[#ff5500]">Monroe County</span>
                  </div>
                </div>
              )}

              {/* Card 2: Local Conditions We Plan For in [Town] */}
              {parsed.conditions && (
                <div className="bg-[#14171d] border border-[#232833] p-8 sm:p-10 flex flex-col justify-between hover:border-[#ff5500]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="section-tag mb-0">
                        // ENVIRONMENTAL & CLIMATE FACTORS
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black uppercase text-white mb-6">
                      {parsed.conditions.title}
                    </h2>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <ContentRenderer content={parsed.conditions.content} />
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-[#212631] flex items-center justify-between text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <ShieldCheck className="w-4 h-4 text-[#ff5500]" />
                      42" Frost-Line Depths
                    </span>
                    <span className="text-[#ff5500]">Weather Resistance</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 4. Most Requested Fences & Fence Services */}
      {(parsed.requested || parsed.services) && (
        <section className="py-16 sm:py-24 bg-[#111317] text-white border-b border-[#212631]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header strictly from spreadsheet */}
            {parsed.requested && (
              <div className="max-w-3xl">
                <span className="section-tag">
                  // LOCAL DEMAND & MATERIALS
                </span>
                <h2 className="section-heading mb-6">
                  {parsed.requested.title}
                </h2>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed p-6 bg-[#161920] border border-[#262c38]">
                  <ContentRenderer content={parsed.requested.content} />
                </div>
              </div>
            )}

            {/* Quick 6-Fence Grid matching homepage ServicesSection styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickFenceTypes.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="bg-[#14171d] border border-[#232833] p-6 flex flex-col justify-between hover:border-[#ff5500] hover:bg-[#181c24] transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#ff5500] text-white font-mono font-black text-sm flex items-center justify-center mb-4">
                      {item.letter}
                    </div>
                    <h3 className="text-base font-black uppercase text-white mb-2 group-hover:text-[#ff5500] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#222733] flex items-center justify-between text-xs font-bold text-gray-400">
                    <span className="text-[#ff5500] group-hover:underline">View Specs</span>
                    <ArrowRight className="w-4 h-4 text-[#ff5500] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Available Fence Services strictly from sheet */}
            {parsed.services && (
              <div className="bg-[#161920] border border-[#262c38] p-8 sm:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <Wrench className="w-4 h-4 text-[#ff5500]" />
                  <span className="text-xs font-mono font-black text-[#ff5500] uppercase tracking-widest">
                    // COMPLETE INSTALLATION & REPAIR SCOPE
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-white mb-4">
                  {parsed.services.title}
                </h3>
                <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <ContentRenderer content={parsed.services.content} />
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 5. Permits, Local Rules & Project Planning (2-Column Feature Cards) */}
      {(parsed.permits || parsed.planning) && (
        <section className="py-16 sm:py-24 bg-[#0d0f12] text-white border-b border-[#212631]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Permits and Local Rules strictly from sheet */}
              {parsed.permits && (
                <div className="bg-[#14171d] border border-[#232833] p-8 sm:p-10 flex flex-col justify-between hover:border-[#ff5500]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="section-tag mb-0">
                        // MUNICIPAL CODE & PERMITS
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black uppercase text-white mb-6">
                      {parsed.permits.title}
                    </h2>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <ContentRenderer content={parsed.permits.content} />
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-[#212631] flex items-center justify-between text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <FileText className="w-4 h-4 text-[#ff5500]" />
                      Local Code Verification
                    </span>
                    <span className="text-[#ff5500]">Monroe County</span>
                  </div>
                </div>
              )}

              {/* Card 2: Planning Your Fence Project strictly from sheet */}
              {parsed.planning && (
                <div className="bg-[#14171d] border border-[#232833] p-8 sm:p-10 flex flex-col justify-between hover:border-[#ff5500]/60 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="section-tag mb-0">
                        // TIMING & SITE WALK-THROUGH
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black uppercase text-white mb-6">
                      {parsed.planning.title}
                    </h2>
                    <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <ContentRenderer content={parsed.planning.content} />
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-[#212631] flex items-center justify-between text-xs font-bold text-gray-400">
                    <span className="flex items-center gap-1.5 text-white">
                      <Compass className="w-4 h-4 text-[#ff5500]" />
                      On-Site Estimate
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-[#ff5500] hover:underline"
                    >
                      Call {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 6. Step-by-Step Project Process (Using Designated 5 Steps from the sheet) */}
      <ProjectProcess
        title="How a Xotix Fence project works"
        subtitle="Every project follows the same clear path so you always know what happens next."
        steps={parsed.steps.length > 0 ? parsed.steps : undefined}
      />

      {/* 7. Local Town FAQs (Using Designated Questions from the sheet) */}
      <FaqCards
        tag="// LOCAL QUESTIONS & ANSWERS"
        title={parsed.faqTitle}
        faqs={parsed.faqs.length > 0 ? parsed.faqs : undefined}
      />

      {/* 8. Call To Action Banner (Using Designated Estimate copy from sheet) */}
      <CallToAction
        title={parsed.cta?.title || "Request your fence installation estimate"}
        contentHtml={parsed.cta?.content}
      />
    </div>
  );
}
