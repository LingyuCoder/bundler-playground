/**@type {import("@rspack/core").Configuration}*/
module.exports = {
	mode: 'production',
	entry: {
		a: './a.js',
		b: './b.js',
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /js/,
				sideEffects: false
			}
		]
	},
	optimization: {
		moduleIds: "named",
		chunkIds: "named",
		minimize: false,
		concatenateModules: true,
		sideEffects: true,
		usedExports: true,
		innerGraph: true,
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			cacheGroups: {
				shared: {
					test: /(report_basic|report_config)/,
					name: 'shared',
					enforce: true
				}
			}
		}
	}
}
