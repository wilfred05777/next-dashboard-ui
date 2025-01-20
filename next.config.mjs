/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      //  issue on external file image in nextjs
      remotePatterns: [{ hostname: "images.pexels.com" }]
   }
};

export default nextConfig;
