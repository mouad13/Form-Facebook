'use strict';

var Hapi = require('hapi');
// var Path = require('path');


var server = new Hapi.Server();


server.connection({ 
    host: 'localhost', 
    port: 3300 		
});

// server.route({
//     method: 'POST',
//     path:'/signup', 
//     handler: function (request, reply) {

//         return reply('youpiii');
//     }
// });


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



server.register(require('vision'), function(err)  {

    if (err) {
        throw err;
    }

    server.views({
        engines: { jade: require('jade') },
        path: __dirname + '/views',
        compileOptions: {
            pretty: true
        }
    });

    //server.route({ method: 'GET', path: '/', handler: rootHandler });
   

    server.route({
    	method: 'POST',
    	path:'/signup', 
    	handler: function(request, reply){
    		reply.view('index.jade', {formulaire: request.payload});
    	}
    }); 
});















// var express = require('express');
// var bodyParser = require('body-parser');


// var app = express();


// app.set('views', './views');
// app.set('view engine', 'jade');

// app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.static(__dirname+ '/'));


// app.post('/signup', function(req, res){
	

// 	res.render('index.jade', { formulaire: req.body} );
// 	console.log('youpiii');

// });





// app.listen(3300, function () {
// 	console.log('posqkdpok');

// })

