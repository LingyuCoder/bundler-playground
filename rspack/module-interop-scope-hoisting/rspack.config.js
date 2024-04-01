/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry: "./index.js",
	optimization: {
		minimize: false,
		moduleIds: "named",
		usedExports: true,
		providedExports: true,
		concatenateModules: true,
		mangleExports: false
	},
	mode: "production",
	target: "async-node",
	devtool: false,
	cache: false,
	experiments: {
		rspackFuture: {
			newTreeshaking: true
		}
	}
};
