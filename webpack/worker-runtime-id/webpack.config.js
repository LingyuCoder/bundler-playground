const webpack = require("webpack");
const fs = require("fs");
/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "development",
  entry: "./index",
  devtool: false,
  stats: {
    all: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), {
    apply(compiler) {
      compiler.hooks.done.tap("test", stats => {
        fs.writeFileSync("./stats.json", JSON.stringify(stats.toJson({
          all: true
        }), null, 2), 'utf-8');
      });
    }
  }],
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
};
