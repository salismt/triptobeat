module.exports = function (app) {
	var index = require('./index.server.controller');
	app.route('/')
		.get(index.render);
};