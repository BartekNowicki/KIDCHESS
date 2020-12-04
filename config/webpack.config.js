/* eslint-env node */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    
    path: path.resolve(__dirname, '../', 'build'),
    // filename: 'js/[name].js',
    filename: 'js/[name].[contenthash].js',
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {      
        test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [ {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            } } ] },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: 'file-loader',
      },

      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/template.html",
      title: 'Caching'
    }),
  ]  
 };


//SWITCHED TO INLINE LOADER FOR SVG
//REMOVED SVG FROM THE LIST:
//  {
//   test: /\.(jpg|png|svg|gif|jpeg)$/,
//   use: 'file-loader',
// },
//ADDED A SEPARATE RULE FOR SVG:
// {
//   test: /\.svg$/,
//   loader: 'svg-inline-loader'
// }
