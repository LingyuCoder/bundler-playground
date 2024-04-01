const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrefreshWebpackPlugin = require("@prefresh/webpack");
const ENV = process.env.NODE_ENV || 'development';

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ["...", "jsx"],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new PrefreshWebpackPlugin()
  ],
  mode: 'development',
  devtool: false,
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
};