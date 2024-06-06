const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

class Plugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap("tt", (compilation) => {
      compilation.hooks.processAssets.tapPromise({
        name: "tt",
        stage: 300,
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
      }, async (assets) => {
        for (const [filename, source] of Object.entries(assets)) {
          if (!filename.endsWith('.css')) {
            continue
          }
          const content = source.source().toString('utf-8')
          console.log('final content: ', content)
        }
      })
    });
  }
}

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  // correct if "false"
  cache: true,
  mode: "development",
  entry: "./index",
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          {
            loader: path.resolve(
              __dirname,
              "fake-content.js"
            )
          }
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
    new Plugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: false,
  },
};
