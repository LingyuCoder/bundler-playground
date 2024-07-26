const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  entry: "./index",
  plugins: [{
    apply(compiler) {
      compiler.hooks.done.tap("asdf", (stats) => {
        console.log(stats.toJson({errors: true}).errors);
      });
    }
  }]
};
