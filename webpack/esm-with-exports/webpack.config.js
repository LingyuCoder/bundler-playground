/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "production",
  devtool: false,
  entry: "./index.js",
  optimization: {
    minimize: false,
    concatenateModules: false,
    moduleIds: "named"
  },
  stats: {
    all: true
  }
};
