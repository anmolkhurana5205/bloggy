import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "i.imgur.com",
      "picsum.photos",
      "plus.unsplash.com",
    ],
  },
  devIndicators: false,
};

export default nextConfig;
