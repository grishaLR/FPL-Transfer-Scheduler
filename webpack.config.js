/* eslint-disable quotes */
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.bundle.js",
  },
  // resolve: { modules: [path.resolve(__dirname, "build"), "node_modules"] },
  devServer: {
    publicPath: '/build/',
    contentBase: path.join(__dirname, "/build"),
    proxy: { '/api': 'http://localhost:3000' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, "client", "index.html"),
  //   }),
  // ],
};
