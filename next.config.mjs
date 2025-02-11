/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["img.clerk.com","res.cloudinary.com"], // ✅ Allow Clerk's image domain
    },
  };
  
  export default nextConfig;
  