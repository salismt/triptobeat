var posts = require('./posts.server.controller');

module.exports = function (app) {
	app.route('/posts')
		.get(posts.list)
		.post(posts.create);

	app.route('/posts/:postId')
		.get(posts.read)
		.put(posts.update)
		.delete(posts.delete);

	app.param('postId', posts.postByID);
};