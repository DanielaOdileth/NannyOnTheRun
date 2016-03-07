var naniController = require('./controllers/naniController');
var userController = require('./controllers/userController');
var clienteController = require('./controllers/clienteController')
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Nani')}}},
	{method: 'GET', path: '/v1/nanis', config: naniController.getNani},
  {method: 'POST', path: '/v1/nani', config: naniController.createNani},
  {method: 'GET', path: '/vi/deletnani', config: naniController.deleteNani},
	{method: 'POST', path: '/v1/register', config: userController.createUser},
  {method: 'GET', path: '/v1/cliente', config: clienteController.getCliente},
  {method: 'POST', path: '/v1/cliente', config: clienteController.createCliente},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
