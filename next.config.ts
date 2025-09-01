//- next.config.ts

import type { NextConfig } from "next";

const path = require('path')
const cdnArr = (process.env.NEXT_PUBLIC_CONFIG_IMAGE_REMOTE ?? "").split('|');
const cdnArrUrl = cdnArr.map((url) => (new URL(url)));

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    remotePatterns: cdnArrUrl,
  },
};

export default nextConfig;
