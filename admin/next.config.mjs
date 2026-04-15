/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Vercel deployment
  
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig