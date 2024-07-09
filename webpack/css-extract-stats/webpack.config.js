const CssExtractRspackPlugin = require("mini-css-extract-plugin");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	devtool: 'cheap-module-source-map',
	entry: "./index.js",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [CssExtractRspackPlugin.loader, "css-loader"]
			},
			{
				test: /\.png$/,
				type: "asset/resource"
			}
		]
	},
	profile: true,
	plugins: [
		new CssExtractRspackPlugin({
			filename: "[name].css"
		})
	],
	optimization: {
		minimize: false,
		concatenateModules: false
	},
	stats: {
		all: true
	}
};
