process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	express = require('./config/express'),
	mongoose = require('./config/mongoose');

var db = mongoose(),
	app = express();

app.listen(config.port);

module.exports = app;
console.log('server is listening to port ' + config.port);