module.exports = {
  mode: "development",
  output: {
    filename: `[name].[fullhash].js`
  },
  optimization: {
    realContentHash: true // or false
  },
  stats: {
    hash: true
  },
};