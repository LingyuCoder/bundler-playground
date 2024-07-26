const rspack = require("@rspack/core");
const name = "PLUGIN_HOOKS";
const plugin = {
  /**
   * @param {import('webpack').Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.make.tap(name, (compilation) => {
      const report = compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT;
      compilation.hooks.processAssets.tap({ name, stage: report }, () => { });
      console.log(compilation.hooks.processAssets.taps.filter((tap) => tap.stage === report));
    });
  },
};

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
    }),
    plugin
  ]
};