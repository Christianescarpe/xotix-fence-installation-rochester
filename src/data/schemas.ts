import { siteConfig } from './siteConfig';
import { PageData } from './pagesData';
import { BlogData } from './blogsData';

const BASE_URL = 'https://xotix-fence-installation-rochester.vercel.app';
const LOGO_URL = `${BASE_URL}/images/optimized/white-vinyl-fence-surrounding-green-suburban-yard-2026-09-22-23-38-13-utc.webp`;

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${BASE_URL}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: BASE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: siteConfig.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '264 Hudson Ave',
      addressLocality: 'Rochester',
      addressRegion: 'NY',
      postalCode: '14605',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.1685628,
      longitude: -77.6012765,
    },
    hasMap: 'https://maps.google.com/?cid=3382121307567849204',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Rochester, NY' },
      { '@type': 'AdministrativeArea', name: 'Greece, NY' },
      { '@type': 'AdministrativeArea', name: 'Irondequoit, NY' },
      { '@type': 'AdministrativeArea', name: 'Brighton, NY' },
      { '@type': 'AdministrativeArea', name: 'Henrietta, NY' },
      { '@type': 'AdministrativeArea', name: 'Gates, NY' },
      { '@type': 'AdministrativeArea', name: 'Chili, NY' },
      { '@type': 'AdministrativeArea', name: 'Penfield, NY' },
      { '@type': 'AdministrativeArea', name: 'Webster, NY' },
      { '@type': 'AdministrativeArea', name: 'Fairport, NY' },
      { '@type': 'AdministrativeArea', name: 'Pittsford, NY' },
      { '@type': 'AdministrativeArea', name: 'Victor, NY' },
      { '@type': 'AdministrativeArea', name: 'Spencerport, NY' },
      { '@type': 'AdministrativeArea', name: 'Monroe County, NY' },
    ],
  };
}

export function getServiceSchema(page: PageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.pageTitle,
    description: page.metaDescription,
    url: `${BASE_URL}/${page.cleanSlug}/`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '264 Hudson Ave',
        addressLocality: 'Rochester',
        addressRegion: 'NY',
        postalCode: '14605',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Monroe County, NY',
    },
  };
}

export function getLocationSchema(page: PageData) {
  const townName = page.pageTitle.replace('Fence Installation ', '');
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${townName}`,
    description: page.metaDescription,
    url: `${BASE_URL}/${page.cleanSlug}/`,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '264 Hudson Ave',
      addressLocality: 'Rochester',
      addressRegion: 'NY',
      postalCode: '14605',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: townName,
    },
    parentOrganization: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      url: BASE_URL,
    },
  };
}

export function getBlogPostingSchema(blog: BlogData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.blogTitle,
    description: blog.metaDescription,
    url: `${BASE_URL}${blog.urlSlug}`,
    image: `${BASE_URL}${blog.image}`,
    datePublished: '2026-10-01T00:00:00+00:00',
    dateModified: '2026-10-01T00:00:00+00:00',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}${blog.urlSlug}`,
    },
  };
}

export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${siteConfig.name}`,
    description: `Contact ${siteConfig.name}. Call ${siteConfig.phoneDisplay} or visit us at ${siteConfig.address}.`,
    url: `${BASE_URL}/contact/`,
    mainEntity: {
      '@type': 'HomeAndConstructionBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '264 Hudson Ave',
        addressLocality: 'Rochester',
        addressRegion: 'NY',
        postalCode: '14605',
        addressCountry: 'US',
      },
    },
  };
}
