module.exports = {
  mode: "production",
  entry: './src/index.js',
  optimization: {
    minimize: false,
    sideEffects: true,
    usedExports: false
  },
  experiments: {
    rspackFuture: {
      newTreeshaking: false
    }
  },
}