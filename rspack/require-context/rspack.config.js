/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    clean: true
  },
  optimization: {
    moduleIds: "named",
    chunkIds: "named",
    minimize: false,
  }
};
