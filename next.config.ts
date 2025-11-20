import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  // Turbopack config is now at the top level, not under experimental
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./features/request.ts",
});

export default withNextIntl(nextConfig);
