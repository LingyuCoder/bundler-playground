/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "production",
  entry: "./index",
  output: {
    library: {
      type: "commonjs-module"
    }
  },
  optimization: {
    minimize: false,
  },
};
