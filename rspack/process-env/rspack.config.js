const DefinePlugin = require('@rspack/core').DefinePlugin;

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./index",
	optimization: {
		minimize: false,
		nodeEnv: false
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': '\'production\''
		})
	]
};
