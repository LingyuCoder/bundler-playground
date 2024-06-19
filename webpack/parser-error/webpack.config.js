const rspack = require('@rspack/core');
module.exports = {
  mode: "production",
  entry: "./index.js",
  optimization: {
    minimize: false,
    innerGraph: false,
    mangleExports: false,
    usedExports: false,
    providedExports: false
  }
};