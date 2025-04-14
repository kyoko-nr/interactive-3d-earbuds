import type { NextConfig } from "next";

const repoName = "interactive-3d-earbuds";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  distDir: "docs",
};

export default nextConfig;
