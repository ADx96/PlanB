const withPlugins = require("next-compose-plugins");

const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
};

module.exports = withPlugins([], nextConfig);

module.exports = {
  target: "serverless", // add this line
};

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
