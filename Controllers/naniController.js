var nani = require('../schemas/nani');

exports.getNani = {
  auth: {
    mode:'required',
    strategy:'session'
  },
  handler: function(request, reply){
    var nani = nani.find({});
    reply(nani);
  }
}

exports.createNani = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newNani = new nani({
      name: request.payload.name,
      apellido: request.payload.apellido,
      nacimiento: request.payload.nacimiento,
      sexo: request.payload.sexo,
      correo: request.payload.correo,
      telefono: request.payload.telefono,
      estado: request.payload.estado
    });
    newNani.save();
    console.log('student saved');
    return reply('ok');
  }
}

exports.deleteNani = {
  auth: {
    mode: 'required',
    strategy: 'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var nani = nani.remove({});
    reply(nani);
  }
}
