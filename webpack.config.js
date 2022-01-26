const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// 尝试使用环境变量，否则使用根路径
const ASSET_PATH = process.env.ASSET_PATH || '';

module.exports = (env) => {
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack-numbers.js',
      publicPath: ASSET_PATH,//也可以设置为 auto，auto会根据 import.meta.url、document.currentScript、script.src 或者 self.location 变量设置 publicPath。
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "public-path"
      }),
      // 这可以帮助我们在代码中安全地使用环境变量
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': '"无言独上西楼"',
      }),
    ],
  };
};