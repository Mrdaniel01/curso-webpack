const path = require('path')

module.exports = {
entry: {
  home: path.resolve(__dirname,'src/js/index.js'),
  conctacto: path.resolve(__dirname,'src/js/contacto.js'),
  precios: path.resolve(__dirname,'src/js/precios.js'),
},
  
mode: 'development',
output: {
  path: path.resolve(__dirname, 'dist'), //me regresa una ruta absoluta//__dirname es programatico
  filename: 'js/[name].js' //primer js crea una carpeta
  }
}