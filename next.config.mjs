/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Vercel ke liye yahan 'output: export' nahi hona chahiye
  images: {
    unoptimized: true,
  },
};

export default nextConfig;