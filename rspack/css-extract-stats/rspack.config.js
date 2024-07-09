const { CssExtractRspackPlugin } = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry: "./index.js",
	output: {
		publicPath: '/',
	},
	devtool: "source-map",
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
	plugins: [
		new CssExtractRspackPlugin({
			filename: "[name].css"
		})
	],
	optimization: {
		minimize: true
	},
	experiments: {
		css: false
	},
	stats: {
		all: true,
		// errorStack: false
	}
};
