/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const node_modules_dir = path.resolve(__dirname, "node_modules");

module.exports = {
  context: __dirname + "/app",

  entry: {
    app: "./js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./[name].js"
  },
  resolve: {},
  module: {
    rules: [
      // StyleSheets
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: loader => [precss, autoprefixer]
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              mimetype: "application/font-woff"
            }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              mimetype: "application/octet-stream"
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              mimetype: "image/svg"
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /bootstrap\/js\//,
        use: "imports-loader?$-jquery"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "BayCare HealthNav",
      template: "index.ejs"
    })
  ],
  mode: "development"
};
