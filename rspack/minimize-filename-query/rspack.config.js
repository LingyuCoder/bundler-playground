const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	output: {
		filename: '[name].js?[contenthash]',
		cssFilename: '[name].css?[contenthash]',
	},
	optimization: {
		minimize: true,
	},
};
