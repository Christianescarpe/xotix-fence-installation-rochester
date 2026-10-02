/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Local fast rendering of images without stalling
  },
  trailingSlash: true, // Matches the slug format /wood-fence/ from spreadsheet
};

module.exports = nextConfig;
