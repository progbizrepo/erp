// next.config.js
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // Options here
            },
          },
        ],
        
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  