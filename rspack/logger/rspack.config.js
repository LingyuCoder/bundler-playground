const path = require("path");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  entry: "./index",
  plugins: [{
    apply(compiler) {
      compiler.hooks.compilation.tap('MyPlugin', compilation => {
        compilation.hooks.processAssets.tapPromise('MyPlugin', async () => {
          const itemCache = compilation.getCache('MyPlugin').getItemCache("assets");
          await itemCache.storePromise('cached value');
          console.log(await itemCache.getPromise());
        });
      });
    }
  }],
  optimization: {
  },
  // stats: {
  //   logging: "verbose",
  //   loggingDebug: true,
  // },
  infrastructureLogging: {
    level: "verbose",
    debug: true,
  },
  cache: true
};
