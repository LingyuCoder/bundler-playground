/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "production",
  optimization: {
    minimize: false,
  },
  entry: "./index.js",
  module: {
    rules: [
    {
      test: /\.css$/,
      type: 'css/auto',
    },
    {
      test: /\.(svg|png)/,
      type: "asset/resource"
    }]
  }
};