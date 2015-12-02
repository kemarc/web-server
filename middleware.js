var middleware = {
	requireAuthentication: function(req,res,next){
			console.log('private route hit a');
			next();
	},
	logger: function(req,res,next){
		console.log(new Date() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
module.exports = middleware;