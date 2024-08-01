const { CssExtractRspackPlugin, DefinePlugin } = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry: "./index.js",
	devServer: {
		devMiddleware: {
			writeToDisk: true
		}
	},
	module: {
		rules: [
			{
				resource: /.png/,
				type: 'asset/resource',
				generator: {
					filename: '[path][name][ext]'
				}
			},
		]
	},
	plugins: [
	],
	optimization: {
		minimize: false
	},
	experiments: {
		css: false
	},
};
