/** @type {import("@rspack/core").Configuration} */
module.exports = {
  target: "web",
  mode: "development",
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  entry: "./index",
  output: {
    library: {
      type: 'system',
    },
  },
  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'runtime',
    },
  },
};
