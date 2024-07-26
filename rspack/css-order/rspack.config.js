/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "development",
  experiments: {
    css: true
  },
  optimization: {
    minimize: false,
  },
  entry: "./index.js",
};