import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
