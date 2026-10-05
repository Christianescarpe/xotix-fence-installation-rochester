const fs = require('fs');
const path = require('path');
const { pagesData } = require('../src/data/pagesData.ts');
const { blogsData } = require('../src/data/blogsData.ts');

const baseUrl = 'https://fenceinstallationrochesterny.site';
const now = new Date().toISOString().split('T')[0];

const urls = [
  { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${baseUrl}/contact/`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/blog/`, priority: '0.8', changefreq: 'weekly' }
];

pagesData
  .filter((p) => p.pageType !== 'Home')
  .forEach((p) => {
    urls.push({
      loc: `${baseUrl}${p.urlSlug}`,
      priority: p.pageType === 'Service' ? '0.9' : '0.8',
      changefreq: 'monthly',
    });
  });

blogsData.forEach((b) => {
  urls.push({
    loc: `${baseUrl}${b.urlSlug}`,
    priority: '0.7',
    changefreq: 'monthly',
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const u of urls) {
  xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const rootPath = path.join(__dirname, '..', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf8');
fs.writeFileSync(rootPath, xml, 'utf8');
console.log(`Successfully wrote ${urls.length} URLs to ${publicPath} and ${rootPath}`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://fenceinstallationrochesterny.site/sitemap.xml
`;

const publicRobots = path.join(__dirname, '..', 'public', 'robots.txt');
const rootRobots = path.join(__dirname, '..', 'robots.txt');
fs.writeFileSync(publicRobots, robotsTxt, 'utf8');
fs.writeFileSync(rootRobots, robotsTxt, 'utf8');
console.log(`Successfully wrote robots.txt to ${publicRobots} and ${rootRobots}`);

