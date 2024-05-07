/**@type {import("@rspack/cli").Configuration}*/
module.exports = {
	mode: "development",
	entry: {
		main: "./index.js"
	},
	optimization: {
		concatenateModules: false,
		minimize: false
	},
	devtool: false,
	module: {
		rules: [
			{
				test: /\.css$/,
				type: "css/module",
				parser: {
					namedExports: true,
				},
				generator: {
					exportsOnly: true,
					localIdentName: "[path][name][ext]__[local]"
				}
			}
		]
	},
	experiments: {
		css: true,
	}
};
