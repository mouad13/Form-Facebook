'use strict';

var Hapi = require('hapi');
// var Path = require('path');


var server = new Hapi.Server();


server.connection({ 
    host: 'localhost', 
    port: 3300 		
});

server.route({
    method: 'POST',
    path:'/signup', 
    handler: function (request, reply) {

        return reply('youpiii');
    }
});


server.register(require('inert'), (err) => {

	if (err) {
		throw err;
	}

	server.route({
		method: 'GET',
		path:'/{param*}', 
		handler: {
			directory: {
				path: './'
			}
		}
	});

	server.start((err) => {

	    if (err) {
	        throw err;
	    }
	    console.log('Server running at:', server.info.uri);
	});

});


