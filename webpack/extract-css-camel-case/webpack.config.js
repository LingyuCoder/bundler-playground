const rspack = require('@rspack/core');
const path = require('path');
const CssExtractWebpackPlugin = require("mini-css-extract-plugin");


/** @type {import('@rspack/cli').Configuration} */
const config = {
  devtool: false,
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
          CssExtractWebpackPlugin.loader,
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
    new CssExtractWebpackPlugin(),
  ],
  experiments: {
    css: false,
  },
};
module.exports = config;
