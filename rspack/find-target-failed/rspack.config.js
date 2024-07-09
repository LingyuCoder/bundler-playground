/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  entry: './index.js',
  optimization: {
    minimize: false
  }
};
module.exports = config;
