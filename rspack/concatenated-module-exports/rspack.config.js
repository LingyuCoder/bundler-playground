/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  target: "async-node",
  entry: './index.js',
  optimization: {
    minimize: false,
    // providedExports: false, // enable this line will panic
    usedExports: false, // enable this line will generate wrong exports
  }
};
module.exports = config;
