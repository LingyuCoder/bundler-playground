/** @type {import("@rspack/core").Configuration[]} */
module.exports = [
	{
		mode: "production",
		target: "async-node",
		devtool: false,
		cache: false,
		output: {
			filename: "runtime-to-entrypoint-[name].js"
		},
		entry: {
			a1: "./a",
			b1: {
				runtime: "a1",
				import: "./b"
			}
		},
		optimization: {
			minimize: false
		},
	},
	{
		output: {
			filename: "dependOn-plus-runtime-[name].js"
		},
		entry: {
			a2: "./a",
			b2: {
				runtime: "x2",
				dependOn: "a2",
				import: "./b"
			}
		}
	},
	{
		mode: "production",
		target: "async-node",
		devtool: false,
		cache: false,
		output: {
			filename: "circular-dependOn-[name].js"
		},
		entry: {
			a3: {
				import: "./a",
				dependOn: "b3"
			},
			b3: {
				import: "./b",
				dependOn: "a3"
			}
		},
		optimization: {
			minimize: false
		},
	}
];
