const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		moduleIds: "named",
		concatenateModules: true
	},
	devServer: {
		devMiddleware: {
			writeToDisk: true
		}
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: "./index.html"
		})
	]
};
