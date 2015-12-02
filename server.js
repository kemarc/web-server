var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req,res,next){
			console.log('private route hit a');
			next();
	},
	logger: function(req,res,next){
		console.log(req.method + ' ' + req.originalUrl);
		next();
	}
};

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