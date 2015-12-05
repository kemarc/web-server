var express = require('express');
var app = express();
var PORT = process.env.HOST || 3000;

var middleware = require('middleware.js');

app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.listen(PORT, function(){
	console.log('express server started on port:' + PORT);
});