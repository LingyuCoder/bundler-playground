const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
	output: {
		publicPath: "some_public_path"
	},
	entry: {
		index: {
			import: ["./index.js"]
		}
	},
	plugins: [new HtmlWebpackPlugin({
		// root absolute
		// favicon: path.resolve(__dirname, 'favicon.ico'),

		// root relative
		// favicon: './favicon.ico',

		// sub absolute
		// favicon: path.resolve(__dirname, 'static/favicon.ico'),

		// sub relative
		favicon: './static/favicon.ico',
	})]
};
