const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: 'development',
  devtool: false,
  entry: "./index.js",
  output: {
    clean: true
  },
  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })]
};