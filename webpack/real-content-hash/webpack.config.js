const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    clean: true,
    hashFunction: "xxhash64",
    assetModuleFilename: '[contenthash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(svg|txt)$/,
        type: "asset/resource"
      }
    ]
  },
  optimization: {
    realContentHash: true
  }
};
