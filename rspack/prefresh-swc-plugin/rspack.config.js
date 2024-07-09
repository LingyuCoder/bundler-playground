const rspack = require('@rspack/core');
const dev = true;
const PreactRefreshPlugin = require('@rspack/plugin-preact-refresh');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: './src/index.jsx',
  },
  experiments: {
    css: true
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    alias: {
      "preact-like-framework": "preact/compat",
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'swc-loader',
          options: {
            sourceMap: true,
            jsc: {
              experimental: {
                plugins: [
                  [
                    "@swc/plugin-prefresh", // enable prefresh specific transformation
                    {
                      "library": ["preact-like-framework"] // the customizable preact name, default is `["preact", "preact/compat", "react"]`
                    }
                  ]
                ]
              },
              parser: {
                syntax: 'ecmascript',
                jsx: true,
              },
              externalHelpers: true,
              preserveAllComments: false,
              transform: {
                react: {
                  runtime: 'automatic',
                  pragma: 'h',
                  pragmaFrag: 'Fragment',
                  throwIfNamespace: true,
                  useBuiltins: false,
                  refresh: true, // enable react hooks hmr compatiblity
                },
              },
            },
          },
        },
        type: 'javascript/auto',
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
      scriptLoading: 'blocking',
    }),
    dev && new rspack.HotModuleReplacementPlugin(),
    dev && new PreactRefreshPlugin(),
  ].filter(Boolean),
};
module.exports = config;
