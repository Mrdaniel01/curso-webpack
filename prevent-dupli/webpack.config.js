const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { Template } = require('webpack')

module.exports = {
  entry: {  
    home: path.resolve(__dirname,'./src/js/index.js'),
    contact: path.resolve(__dirname,'./src/js/index.js')
  },
    
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].js' //primer js crea una carpeta
  },
  // devServer: {
  //   hot: true,//recarga el navegadaro por mi, 
  //   open: true, //abre el navegador
  //   port: 9000,

  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ //tener siempre presente para no tener problemas de performance
      },
      {
        test: /\.less$/,
        use:[
          'style-loader',          
          'css-loader',
          'less-loader'          
        ]      
      },
      {
        test: /\.scss$/,
        use:[
          'style-loader',          
          'css-loader',
          'sass-loader'          
        ]      
      },
      {
        test: /\.styl$/,
        use:[
          'style-loader',          
          'css-loader',
          'stylus-loader'        
        ]      
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',          
          'css-loader'          
        ]      
      },
      {
        test: /\.jpng|png|gif|woff|ttf|svg|mp4|webm$/,
        use:{
          loader: 'url-loader',
          options: {
            limit: 90000,
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React webpack',
      template: path.resolve(__dirname, './dist/index.html')
    }),
    
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', 
      minSize: 0,
      name: 'commons' //nombre de elemento que se repetira
    }
  }
}