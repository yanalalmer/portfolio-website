/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TITAN_EMAIL: process.env.TITAN_EMAIL,
    TITAN_PASSWORD: process.env.TITAN_PASSWORD,
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
};

export default nextConfig;
