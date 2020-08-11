const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: {  
  home: path.resolve(__dirname,'./src/js/index.js'),
},
  
mode: 'development',
output: {
  path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
  filename: 'js/[name].js' //primer js crea una carpeta
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'          
        ]      
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}