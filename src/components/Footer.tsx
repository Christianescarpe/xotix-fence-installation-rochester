import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { servicePages, locationPages } from '@/data/pagesData';

export default function Footer() {
  return (
    <footer className="bg-[#0a0c0e] text-white pt-16 pb-12 border-t border-[#1c2028]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#1c2028]">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[#ff5500] flex items-center justify-center text-white font-black text-lg tracking-tighter">
                <span>XF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base tracking-wider text-white uppercase group-hover:text-[#ff5500] transition-colors leading-tight">
                  Xotix Fence
                </span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Installation Rochester
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Professional fence installation in Rochester, NY for homeowners and businesses. Installing wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Monroe County.
            </p>

            <div className="space-y-2.5 text-xs text-gray-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ff5500] shrink-0" />
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="font-bold text-white hover:text-[#ff5500] transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-orange text-[11px] py-2.5 px-5"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ff5500]">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {servicePages.map((s) => (
                <li key={s.urlSlug}>
                  <Link 
                    href={s.urlSlug} 
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {s.pageTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ff5500]">
              Monroe County
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {locationPages.map((l) => (
                <li key={l.urlSlug}>
                  <Link 
                    href={l.urlSlug} 
                    className="hover:text-white transition-colors block py-0.5 truncate"
                  >
                    {l.pageTitle.replace('Fence Installation ', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Visible Google Map as requested */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#ff5500]">
              Location & Service Area Map
            </h4>
            <div className="w-full h-52 sm:h-56 overflow-hidden border border-[#212631] bg-[#161920]">
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
            <p className="text-[11px] text-gray-400">
              Serving Rochester, Greece, Irondequoit, Brighton, Henrietta, Gates, Chili, Penfield, Webster, Fairport, Pittsford & Victor.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Xotix Fence Installation Rochester. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/fence-installation/" className="hover:text-white">Services</Link>
            <Link href="/rochester-ny/" className="hover:text-white">Locations</Link>
            <Link href="/blog/" className="hover:text-white">Blog</Link>
            <Link href="/contact/" className="hover:text-white">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
