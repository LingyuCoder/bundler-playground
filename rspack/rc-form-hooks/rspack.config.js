module.exports = {
  mode: "development",
  entry: "./index.js",
  target: [
    'web',
    'es5'
  ],
  experiments: {
    asyncWebAssembly: true
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/async/[name].js',
    publicPath: '/',
    hashFunction: 'xxhash64',
    webassemblyModuleFilename: 'static/wasm/[hash].module.wasm',
    cssFilename: 'static/css/[name].css',
    cssChunkFilename: 'static/css/async/[name].css'
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.json'
    ],
    modules: [
      'node_modules',
    ],
  },
};