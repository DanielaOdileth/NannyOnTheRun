var mongoose = require('mongoose');

var ClienteSchema = new mongoose.Schema({
  name : String,
  apellido : String,
  nacimiento : String,
  sexo : String,
  correo : String,
  telefono : String,
  estado : String,
});

module.exports = mongoose.model('Cliente', ClientoSchema);
