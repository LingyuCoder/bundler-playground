const minifyPlugin = require('@rspack/plugin-minify');
const rspack = require('@rspack/core');
module.exports = {
  mode: "production",
  entry: "./index.js",
  optimization: {
    minimizer: [
      // new rspack.SwcJsMinimizerRspackPlugin({
      //   format: {
      //     comments: false,
      //     asciiOnly: false,
      //   },
      // }),
      // new rspack.SwcCssMinimizerRspackPlugin(),

      new minifyPlugin({
        minifier: 'terser',
      }),
    ],
  }
};