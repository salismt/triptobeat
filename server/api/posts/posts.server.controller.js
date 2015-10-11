var Post = require('mongoose').model('Post');

var getErrorMessage = function (err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) {
				return err.errors[errName].message;
			}
		}
	}
	else {
		return 'Unknown server error';
	}
};

exports.create = function (req, res) {
	var post = new Post(req.body);

	post.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			return res.status(201).json(post);
		}
	});
};

exports.list = function (req, res) {
	Post.find().sort('-created').exec(function (err, posts) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			return res.status(201).json(posts);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.post);
};

exports.postByID = function (req, res, next, id) {
	Post.findById(id).exec(function (err, post) {
		if (err) {
			return next(err);
		}
		if (!post) {
			return next(new Error('Falied to load the post'));
		}
		else {
			req.post = post;
			next();
		}
	});
};

exports.update = function (req, res) {
	var post = req.post;
	post.title = req.body.title;
	post.description = req.body.description;

	post.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else return res.status(201).json(post);
	});
};

exports.delete = function (req, res) {
	var post = req.post;
	post.remove(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			return res.status(201).json(post);
		}
	});
};