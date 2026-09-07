/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All images are local, pre-sized static assets, so skip the
    // on-the-fly resize pipeline for simpler, more reliable local dev.
    unoptimized: true,
  },
};

module.exports = nextConfig;
