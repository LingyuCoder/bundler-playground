const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		moduleIds: "named",
	},
	devServer: {
		devMiddleware: {
			writeToDisk: true
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	]
};
