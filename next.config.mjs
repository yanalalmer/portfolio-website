/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TITAN_EMAIL: process.env.TITAN_EMAIL,
    TITAN_PASSWORD: process.env.TITAN_PASSWORD,
  },
};

export default nextConfig;
