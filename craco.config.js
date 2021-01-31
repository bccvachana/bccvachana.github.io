module.exports = {
  webpack: {
    configure: (config) => {
      const oneOfRule = config.module.rules.find(
        (rule) => typeof rule.oneOf !== 'undefined'
      );
      oneOfRule.oneOf.unshift({
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      });
      return config;
    },
  },
};
