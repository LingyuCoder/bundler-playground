const rspack = require("@rspack/core");

/** @type {import("@rspack/core").Configuration} */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.jsx"
  },
  resolve: {
    extensions: ["...", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: "builtin:swc-loader",
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
        // type: "asset/resource"
      },
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html"
    })
  ]
};