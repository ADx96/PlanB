const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = withPlugins([], nextConfig);

module.exports = withPlugins([withImages], {
  target: "serverless",
});
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/HomePage",
        permanent: true,
      },
    ];
  },
};
