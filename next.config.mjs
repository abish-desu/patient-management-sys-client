/** @type {import('next').NextConfig} */

const apiBaseUrl = "http://localhost:6969";

const nextConfig = {
  env: {
    NEXT_API_URL: apiBaseUrl,
  },
};

export default nextConfig;
