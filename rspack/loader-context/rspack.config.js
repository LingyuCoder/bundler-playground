const path = require("path");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  target: ['web', 'es2017'],
  mode: "production",
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  entry: "./index",
  module: {
    rules: [{
      test: /.js$/,
      use: [path.resolve(__dirname, './loader.js')]
    }]
  },
  optimization: {
    minimize: false,
  },
};
