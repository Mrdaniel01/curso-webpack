const path = require('path')
const webpack = require('webpack')
const TerserJsPlugin = require ('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {  
    modules: [
      'firebase',
      'tiny-slider',
      'vue',
      'vue-router',
      'vuex',
    ]
  },
  optimization: {
    minimizer: [
      new TerserJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].[hash].dll.js', //primer js crea una carpeta
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      name:'[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
  
  
}