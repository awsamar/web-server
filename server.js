var express = require('express');
var app = express();
var PORT = 3000;
// app.get('/', function(req, res) {
// 	res.send('Hello Express');
// });


var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		
		console.log('Request:' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About us');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(PORT, function(){
	console.log('Express Server started on port ' + PORT + '.');
});
