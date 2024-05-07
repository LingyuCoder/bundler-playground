const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	externals: {
		react: "umd react",
	},
	optimization: {
		minimize: false,
	},
};
