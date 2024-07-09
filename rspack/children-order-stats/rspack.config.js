/** @type {import("@rspack/core").Configuration} */
module.exports = {
	target: "web",
	entry: "./index.js",
	output: {
		chunkFilename: "[name].js",
		crossOriginLoading: "anonymous"
	},
	optimization: {
		minimize: true
	},
	stats: {
		all: true
	}
};
