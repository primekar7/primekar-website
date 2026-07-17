import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root explicitly — an unrelated lockfile in the
    // parent home directory otherwise makes Turbopack guess the wrong root.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
