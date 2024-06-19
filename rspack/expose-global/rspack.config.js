const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		concatenateModules: false
	},
	experiments: {
		rspackFuture: {
			exposeGlobal: false
		}
	}
};
