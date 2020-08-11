const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { Template } = require('webpack')

module.exports = {
  entry: {  
    home: path.resolve(__dirname,'./src/js/index.js'),
    contact: path.resolve(__dirname,'./src/js/contact.js')
  },
    
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].js' //primer js crea una carpeta
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ //tener siempre presente para no tener problemas de performance
      },      
      {
        test: /\.scss$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'          
        ]      
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader,
          }
        ],    
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React webpack',
      template: path.resolve(__dirname, './dist/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ],
}