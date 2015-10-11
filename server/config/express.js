var express = require('express'),
	bodyParser = require('body-parser'),
	compression = require('compression'),
	cookieParser = require('cookie-parser'),
	methodOverride = require('method-override'),
	logger = require('morgan');

module.exports = function () {
	var app = express();

	app.set('views', './server/views');
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	app.use(logger('dev'));
	app.use(compression());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	app.use(cookieParser());

	require('../api/index/index.server.routes')(app);
	require('../api/posts/posts.server.routes')(app);
	app.use(express.static('./client'));

	return app;
};