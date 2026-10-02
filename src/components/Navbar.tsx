'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { servicePages, locationPages } from '@/data/pagesData';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="w-full z-50 sticky top-0 bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#212631]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching the orange emblem design */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#ff5500] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-md shadow-orange-950/50 group-hover:scale-105 transition-transform">
              <span>XF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-sm sm:text-base tracking-wider text-white uppercase group-hover:text-[#ff5500] transition-colors leading-tight">
                Xotix Fence
              </span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Installation Rochester
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links matching the design image */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-gray-300">
            <Link 
              href="/" 
              className={`py-2 transition-colors relative ${
                pathname === '/' ? 'text-white' : 'hover:text-[#ff5500]'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5500]"></span>
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 py-2 hover:text-[#ff5500] transition-colors"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#ff5500] group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-[#14171c] border border-[#2b313e] shadow-2xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="max-h-[380px] overflow-y-auto">
                  {servicePages.map((service) => (
                    <Link
                      key={service.urlSlug}
                      href={service.urlSlug}
                      className="block px-4 py-2.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#ff5500] transition-all"
                    >
                      {service.pageTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center gap-1.5 py-2 hover:text-[#ff5500] transition-colors"
              >
                Locations
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#ff5500] group-hover:rotate-180 transition-transform" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-[#14171c] border border-[#2b313e] shadow-2xl py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="max-h-[380px] overflow-y-auto">
                  {locationPages.map((loc) => (
                    <Link
                      key={loc.urlSlug}
                      href={loc.urlSlug}
                      className="block px-4 py-2.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-[#ff5500] transition-all"
                    >
                      {loc.pageTitle.replace('Fence Installation ', '')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/blog/" 
              className={`py-2 transition-colors relative ${
                pathname?.startsWith('/blog') ? 'text-white' : 'hover:text-[#ff5500]'
              }`}
            >
              Blog
              {pathname?.startsWith('/blog') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5500]"></span>
              )}
            </Link>

            <Link 
              href="/contact/" 
              className={`py-2 transition-colors relative ${
                pathname?.startsWith('/contact') ? 'text-white' : 'hover:text-[#ff5500]'
              }`}
            >
              Contact
              {pathname?.startsWith('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff5500]"></span>
              )}
            </Link>
          </nav>

          {/* Right Orange CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-outline-dark hover:bg-[#ff5500] hover:border-[#ff5500]"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff5500] group-hover:text-white" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2.5 bg-[#ff5500] text-white"
              aria-label="Call Xotix Fence"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111317] border-t border-[#232832] px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black uppercase tracking-wider text-white hover:text-[#ff5500]"
          >
            Home
          </Link>

          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] mb-2">
              Services
            </div>
            <div className="grid grid-cols-1 gap-1 pl-3">
              {servicePages.map((s) => (
                <Link
                  key={s.urlSlug}
                  href={s.urlSlug}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs text-gray-300 hover:text-white"
                >
                  {s.pageTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#ff5500] mb-2">
              Locations
            </div>
            <div className="grid grid-cols-2 gap-1 pl-3">
              {locationPages.map((l) => (
                <Link
                  key={l.urlSlug}
                  href={l.urlSlug}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-xs text-gray-300 hover:text-white truncate"
                >
                  {l.pageTitle.replace('Fence Installation ', '')}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black uppercase tracking-wider text-white hover:text-[#ff5500]"
          >
            Blog
          </Link>

          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-black uppercase tracking-wider text-white hover:text-[#ff5500]"
          >
            Contact
          </Link>

          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="w-full btn-orange text-center"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
