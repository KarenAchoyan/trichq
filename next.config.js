/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1:8000'],
  },
  env: {
    API_URL: "http://127.0.0.1:8000/api",
    IMAGE_URL: "http://127.0.0.1:8000/storage/",
  },
};

module.exports = nextConfig;
