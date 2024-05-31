const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  output: {
    clean: true,
  },
  cache: true,
  mode: "development",
  entry: "./index",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/resource',
      },
    ]
  },
  experiments: {
    css: false
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: "[name].css"
    })
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    liveReload: true,
    devMiddleware: {
      writeToDisk: true
    }
  },

};
