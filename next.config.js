const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  experimental: {
    appDir: true, // O false, se stai usando pages invece di app
  },
};
