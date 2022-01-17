const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = withPlugins([], nextConfig);

module.exports = withPlugins([], {
  target: "serverless",
});
module.exports = {
  assetPrefix: "./",
};
s;
