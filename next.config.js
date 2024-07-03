/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['trichq.geeklab.am'],
  },
  env: {
    API_URL: "https://trichq.geeklab.am/api",
    IMAGE_URL: "https://trichq.geeklab.am/storage/",
  },
};

module.exports = nextConfig;
