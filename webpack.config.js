var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
//require("./css/style.scss");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
   module: {
     loaders: [
       {
       test: /\.scss$/,
       loaders: ["style", "css", "sass"]
     },
       {
         test: /\.js?$/,
         exclude: /(node_modules|bower_components)/,
         loader: 'babel-loader',
         query: {
           presets: ['react', 'es2015'],
           plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
         }
       }
     ]
   },
   output: {
     path: __dirname + "/src/",
     filename: "client.min.js"
   },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
