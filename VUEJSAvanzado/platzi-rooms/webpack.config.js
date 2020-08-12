const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require ('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJsPlugin = require ('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {  
    app: path.resolve(__dirname,'./src/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].[hash].js', //primer js crea una carpeta
    publicPath: 'dist',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new TerserJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
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
          {
            loader: MiniCSSExtractPlugin.loader,
          },
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
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: '[hash].[ext]',
            outputPath: 'assets'
          }
        } 
        
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
      context: path.resolve(__dirname, 'src')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist', 'js', '*.dll.js'),
      outputPath: 'js',
      publicPath: 'js'
    }),
    new CleanWebpackPlugin ({
      cleanOnceBeforeBuildPatterns: ['**/app.*']
    }),    
    new VueLoaderPlugin()
    
  ],
}