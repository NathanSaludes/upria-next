import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config) => {
      config.resolve.alias["@"] = path.resolve(__dirname);
      return config;
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**",
         },
         {
            hostname: "gs://upria-bucket-test/",
         },
      ],
   },
};

export default nextConfig;
