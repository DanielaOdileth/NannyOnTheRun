var mongoose = require('mongoose');

var NaniSchema = new mongoose.Schema({
  name : String,
  apellido : String,
  nacimiento : String,
  sexo : String,
  correo : String,
  telefono : String,
  estado : String,
});

module.exports = mongoose.model('Nani', NaniSchema);
