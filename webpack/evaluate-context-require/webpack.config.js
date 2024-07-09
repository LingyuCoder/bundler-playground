const { DefinePlugin } = require("webpack");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: 'development',
	entry: "./index.js",
	devtool: false,
	devServer: {
		devMiddleware: {
			writeToDisk: true
		}
	},
	plugins: [
		new DefinePlugin({
			IS_OVERSEA: false
		})
	],
	optimization: {
		minimize: false
	},
};
