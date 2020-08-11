const path = require('path')

module.exports = {
entry: path.resolve(__dirname,'./index.js'),

mode: 'development',
output: {
  path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
  filename: 'bundle.js' 
  }
}