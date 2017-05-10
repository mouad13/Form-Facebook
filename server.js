var express = require('express');
var bodyParser = require('body-parser');

var app = express();




app.use(express.static(__dirname+ '/'));


app.post('/route1', function(req, resp){
	console.log('youpiii');

});





app.listen(3300, function () {
	console.log('posqkdpok');

})

