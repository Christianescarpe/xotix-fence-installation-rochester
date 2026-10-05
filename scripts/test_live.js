const https = require('https');

function testUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          data
        });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

async function run() {
  const sitemapRes = await testUrl('https://fenceinstallationrochesterny.site/sitemap.xml');
  console.log('Sitemap status:', sitemapRes.status);
  const locs = (sitemapRes.data.match(/<loc>(.*?)<\/loc>/g) || []).map(l => l.replace(/<\/?loc>/g, ''));
  console.log('Total URLs found in sitemap.xml:', locs.length);

  const nonMatching = locs.filter(u => !u.startsWith('https://fenceinstallationrochesterny.site/'));
  console.log('Non-matching URLs:', nonMatching.length);

  // Sample check a few pages
  for (const testUrlPath of [locs[0], locs[1], locs[3], locs[15], locs[30]]) {
    const res = await testUrl(testUrlPath);
    console.log(`Verified ${testUrlPath} -> HTTP ${res.status}`);
  }
}
run();
