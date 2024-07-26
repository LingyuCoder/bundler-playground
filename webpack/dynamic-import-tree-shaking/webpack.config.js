/**@type {import("@rspack/core").Configuration}*/
module.exports = {
	context: __dirname,
	entry: "./index.js",
	optimization: {
		minimize: false,
		providedExports: true,
		usedExports: true,
		sideEffects: true,
		innerGraph: true
	},
};
