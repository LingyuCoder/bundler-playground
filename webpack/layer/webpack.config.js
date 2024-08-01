const path = require("path");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  target: ['web', 'es2017'],
  mode: "production",
  entry: {
    aaa: { import: './index.js', layer: 'aaa' },
    bbb: { import: './index.js', layer: 'bbb' },
  },
  experiments: {
    layers: true
  },
  externals: {
    byLayer: {
      aaa: {
        './bbb': 'undefined',
      },
      bbb: {
        './aaa': 'undefined',
      },
    },
  },
  optimization: {
    concatenateModules: false,
    minimize: false,
  },
};
