/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "production",
  target: "async-node",
  devtool: false,
  cache: false,
  entry: {
    a: {
      import: "./entryA",
      runtime: "runtime"
    },
    b: {
      import: "./entryB",
      dependOn: "a"
    }
  },
  output: {
    filename: "[name].js"
  },
  experiments: {
    rspackFuture: {
      newTreeshaking: true
    }
  },
  optimization: {
    minimize: false,
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
        a: {
          test: /moduleA/,
          name: "a",
          enforce: true
        },
        b: {
          test: /moduleB/,
          name: "b",
          enforce: true
        },
        c: {
          test: /moduleC/,
          name: "runtime",
          enforce: true
        }
      }
    }
  },
  stats: {
    all: true
  }
};
