const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	output: {
		uniqueName: "sss"
	},
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		concatenateModules: false
	},
	
};
