const webpack = require('webpack');
const dev = true;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreactRefreshPlugin = require('@prefresh/webpack');
/** @type {import('webpack').Configuration} */
const config = {
  mode: "development",
  entry: {
    main: './src/index.jsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  experiments: {
    css: true
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
                  ["@swc/plugin-prefresh", {}]
                ] // enable prefresh specific transformation
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
    new HtmlWebpackPlugin({
      template: './index.html',
      scriptLoading: 'blocking',
    }),
    dev && new webpack.HotModuleReplacementPlugin(),
    dev && new PreactRefreshPlugin()
  ].filter(Boolean),
};
module.exports = config;
