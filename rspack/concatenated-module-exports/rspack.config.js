/** @type {import('@rspack/cli').Configuration} */
const config = {
  mode: 'production',
  target: "async-node",
  entry: './index.js',
  optimization: {
    minimize: false,

    // correct output `1`
    // providedExports: false,
    // usedExports: false,

    // wrong output `{ QueryClient: 1 }`
    providedExports: true,
    usedExports: false,

    // panic
    // providedExports: false,
    // usedExports: true,
  }
};
module.exports = config;
