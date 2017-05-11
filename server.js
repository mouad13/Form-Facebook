var express = require('express');
var bodyParser = require('body-parser');


var app = express();


app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname+ '/'));


app.post('/signup', function(req, res){
	

	res.render('index.jade', { formulaire: req.body} );
	console.log('youpiii');

});





app.listen(3300, function () {
	console.log('posqkdpok');

})

