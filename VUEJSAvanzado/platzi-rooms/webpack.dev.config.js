const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') 
const VueLoaderPlugin = require ('vue-loader/lib/plugin')

module.exports = {
  entry: {  
    app: path.resolve(__dirname,'./src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].js', //primer js crea una carpeta
    publicPath: 'http://localhost:9000/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/ //tener siempre presente para no tener problemas de performance
      },      
      {
        test: /\.css|postcss$/,
        use:[
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              importLoaders: 1
            }
          }, 
          'postcss-loader'
        ],    
      },
      {
        test: /\.jpg|svg|png$/,
        use: {
          loader: 'file-loader',
          options: {
            output: 'assets/',
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
  ],
}