var nani = require('../schemas/cliente');

exports.createCliente = {
  auth: {
    mode:'required',
    strategy:'session'
  },
  handler: function(request, reply){
    var newCliente = new cliente({
      name: request.payload.name,
      apellido: request.payload.apellido,
      nacimiento: request.payload.nacimiento,
      sexo: request.payload.sexo,
      correo: request.payload.correo,
      telefono: request.payload.telefono,
      estado: request.payload.estado
    });
    newCliente.save();
    console.log('student saved');
    return reply('ok');
  }
}

exports.getCliente = {
  auth: {
    mode:'required',
    strategy:'session'
  },
  handler: function(request, reply){
    var cliente = cliente.find({});
    reply(cliente);
  }
}
