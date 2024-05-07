/** @type {import("@rspack/core").Configuration} */
module.exports = {
	devtool: false,
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		nodeEnv: false
	}
};
