/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      domains: ["gridlines-resources-dev.s3.ap-south-1.amazonaws.com", "localhost"],
   },
   async redirects() {
      return [
         {
            source: "/products/ccrv-api",
            destination: "/products/criminal-court-record-verification",
            permanent: true,
         },
      ];
   },
};

module.exports = nextConfig;
