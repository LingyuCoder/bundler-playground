const DefinePlugin = require('webpack').DefinePlugin;

/** @type {import("webpack").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		nodeEnv: false
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': '"wtf"'
		})
	]
};
