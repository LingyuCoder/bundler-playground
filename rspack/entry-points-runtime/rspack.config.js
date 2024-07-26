/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry: {
		a: {
			import: "./a.mjs",
			runtime: "a-runtime",
			name: "a-name"
		},
		b: {
			import: "./b.mjs",
			runtime: "b-runtime"
		},
		ax: {
			import: "./ax.mjs",
			runtime: "ax-runtime",
			name: "ax-name"
		},
		bx: {
			import: "./bx.mjs",
			runtime: "bx-runtime",
			name: "bx-name"
		},
	},
	target: "web",
	output: {
		filename: "[id].js",
	},
	optimization: {
		chunkIds: "named",
		moduleIds: "named",
		minimize: false,
		usedExports: true,
		providedExports: true,
		innerGraph: true,
		sideEffects: false,
		concatenateModules: true,
		// splitChunks: {
		// 	cacheGroups: {
		// 		forceMerge: {
		// 			test: /shared/,
		// 			enforce: true,
		// 			name: "shared",
		// 			chunks: "all"
		// 		}
		// 	}
		// }
	},
	experiments: {
		topLevelAwait: true
	},
	module: {
		rules: [
			{
				test: /dep/,
				sideEffects: false
			}
		]
	},
};
