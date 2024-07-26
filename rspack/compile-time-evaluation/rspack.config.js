/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  target: "web",
  entry: './index.js',
  optimization: {
    minimize: false,
  }
};
module.exports = config;
