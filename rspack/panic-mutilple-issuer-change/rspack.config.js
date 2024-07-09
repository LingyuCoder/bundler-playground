/** @type {import("@rspack/core").Configuration} */
module.exports = {
  devtool: false,
  mode: "development",
  entry: "./index",
  optimization: {
    minimize: false,
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [{
    apply(compiler) {
      compiler.hooks.done.tap("test plugin", (stats) => {
        const statsJson = stats.toJson({
          all: true

        });
        // console.log(statsJson);
      });
    }
  }]
};

