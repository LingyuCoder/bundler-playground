const rspack = require('@rspack/core');
const path = require('path');

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  mode: 'development',
  entry: {
    main: ['./src/index.js'],
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false, // Disabling minification because it takes too long on CI
  },
  plugins: [
    new rspack.CssExtractRspackPlugin(),
  ],
  experiments: {
    css: false,
  },
};
module.exports = config;
