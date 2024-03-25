
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.jsx"
  },
  resolve: {
    extensions: ["...", ".jsx"]
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "swc-loader",
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true
              },
              externalHelpers: true,
              preserveAllComments: false,
              transform: {
                react: {
                  runtime: "automatic",
                  throwIfNamespace: true,
                  useBuiltins: false
                }
              }
            }
          }
        },
        type: "javascript/auto"
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};