const path = require("path");
const { h64 } = require("xxhashjs");
const fs = require("fs");

const buffer = fs.readFileSync(path.resolve(__dirname, "file.svg"));
console.log(h64(buffer, 0).toString(16));

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
