/**@type {import("@rspack/cli").Configuration}*/
module.exports = {
	mode: "development",
	entry: {
		main: "./index.js"
	},
	optimization: {
		minimize: false
	},
	devtool: false,
};
