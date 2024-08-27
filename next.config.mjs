/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**"
         },
         {
            hostname: "gs://upria-bucket-test/"
         }
      ]
   }
};

export default nextConfig;
