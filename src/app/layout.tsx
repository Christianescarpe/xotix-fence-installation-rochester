import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL('https://xotix-fence-installation-rochester.vercel.app'),
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
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
