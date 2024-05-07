const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	externals: {
		react: "var react",
	},
	optimization: {
		minimize: false,
	},
};
