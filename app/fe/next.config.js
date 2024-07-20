/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: true,
});
const withVideos = require("next-videos");
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: false,
  output: "standalone",
};

module.exports = {
  ...withPWA(),
  ...withVideos(),
  ...nextConfig,
};
