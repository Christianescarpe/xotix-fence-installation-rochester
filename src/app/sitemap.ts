import { MetadataRoute } from 'next';
import { pagesData } from '@/data/pagesData';
import { blogsData } from '@/data/blogsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xotix-fence-installation-rochester.vercel.app';
  const lastModified = new Date();

  // 1. Core static routes
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 2. Service and Location Pages from pagesData (excluding Home which is already added)
  const contentPages: MetadataRoute.Sitemap = pagesData
    .filter((p) => p.pageType !== 'Home')
    .map((p) => ({
      url: `${baseUrl}${p.urlSlug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: p.pageType === 'Service' ? 0.9 : 0.8,
    }));

  // 3. Blog articles from blogsData
  const blogRoutes: MetadataRoute.Sitemap = blogsData.map((b) => ({
    url: `${baseUrl}${b.urlSlug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...coreRoutes, ...contentPages, ...blogRoutes];
}
