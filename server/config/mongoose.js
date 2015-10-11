var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function () {
	var db = mongoose.connect(config.db);
	require('../api/posts/post.server.model');
	return db;
};