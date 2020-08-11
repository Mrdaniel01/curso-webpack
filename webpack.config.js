const path = require('path')

module.exports = {
entry: './index.js',
output: {
  path: path.resolve(__dirname), //me regresa una ruta absoluta//__dirname es programatico
  filename: 'bundle.js' 
  }
}