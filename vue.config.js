const { defineConfig } = require('@vue/cli-service');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/CSI_AppStore/' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new MiniCssExtractPlugin(),
    ],
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        zlib: require.resolve('browserify-zlib'),
        util: require.resolve('util/'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert/'),
      },
    },
  },
});
