import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/siteConfig';

import JsonLd from '@/components/JsonLd';
import { getLocalBusinessSchema } from '@/data/schemas';

export const metadata: Metadata = {
  metadataBase: new URL('https://fenceinstallationrochesterny.site'),
  title: 'Fence Installation Rochester NY | Xotix Fence',
  description: 'Professional fence installation in Rochester, NY. Wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Rochester and Monroe County.',
  keywords: [
    'Fence Installation Rochester NY',
    'Wood Fence Rochester',
    'Vinyl Fence Rochester',
    'Privacy Fence Rochester',
    'Chain Link Fence Rochester',
    'Monroe County Fencing Contractor'
  ],
  authors: [{ name: siteConfig.name }],
  verification: {
    google: 'QjeggimgvQSA6DIo9pJCVs_BR6S3ZT64yEJBV7BzXqs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Fence Installation Rochester NY | Xotix Fence',
    description: 'Professional fence installation in Rochester, NY. Wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Rochester and Monroe County.',
    url: 'https://fenceinstallationrochesterny.site',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Fence Installation Rochester NY | Xotix Fence',
    description: 'Professional fence installation in Rochester, NY. Wood, vinyl, chain link, aluminum, privacy and custom fencing throughout Rochester and Monroe County.',
    images: ['/images/optimized/white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={getLocalBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fafbfc] text-[#141a13] antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
