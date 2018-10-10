const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './simpleComponent.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // }
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
  })],
  devtool: 'source-map',
};
