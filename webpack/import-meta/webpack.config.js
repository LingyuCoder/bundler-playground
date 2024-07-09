const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./src/c",
	optimization: {
		minimize: false,
	},
	node: {
		__filename: true,
		__dirname: true
	}
};
