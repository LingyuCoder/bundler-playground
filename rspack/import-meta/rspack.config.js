const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	entry: "./src/c",
	optimization: {
		runtime: 'main'
	},
	output: {
		publicPath: "auto"
	},
	optimization: {
		minimize: false,
	},
	node: {
		__filename: true,
		__dirname: true
	},
	plugins: [{
		apply(compiler) {
			compiler.hooks.thisCompilation.tap('te', (compilation) => {
				compilation.hooks.afterOptimizeModules.tap('te', (...args) => {
					console.log(args);
				});
			});
		}
	}]
};
