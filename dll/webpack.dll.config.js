const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {  
    modules: [
      'react',
      'react-dom'
    ]
  },
    
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
    filename: 'js/[name].js', //primer js crea una carpeta
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      name:'[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    })
  ],
  
  
}