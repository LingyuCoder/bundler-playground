/**@type {import("webpack").Configuration}*/
module.exports = {
	mode: "production",
	entry: {
		main: "./index.js"
	},
	optimization: {
		moduleIds: "natural",
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
