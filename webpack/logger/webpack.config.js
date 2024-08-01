const path = require("path");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  entry: "./index",
  plugins: [{
    apply(compiler) {
      compiler.hooks.thisCompilation.tap("test plugin", compilation => {
        const logger = compiler.getInfrastructureLogger("TEST");
        logger.debug("not displayed");
        logger.clear();
        logger.debug("will displayed");
      });
    }
  }],
  infrastructureLogging: {
    level: "verbose",
    debug: true,
  },
};
