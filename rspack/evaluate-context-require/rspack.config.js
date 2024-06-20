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
				test: /\.css$/,
				use: [CssExtractRspackPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [
		new CssExtractRspackPlugin({
			filename: "[name].css"
		}),
		new DefinePlugin({
			IS_OVERSEA: false
		})
	],
	optimization: {
		minimize: false
	},
	experiments: {
		css: false
	},
	stats: {
		all: true
	}
};
