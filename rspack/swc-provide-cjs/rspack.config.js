const rspack = require("@rspack/core");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: false
              },
              externalHelpers: true,
            }
          }
        },
        type: "javascript/auto"
      }
    ]
  },
};
