import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  transpilePackages: ["@leement/tokens"],
  agentRules: false,
};
export default nextConfig;
