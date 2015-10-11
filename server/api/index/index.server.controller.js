exports.render = function (req, res) {
	res.status(201).render('index', {
		title: 'Welcome to triptobeat'
	});
};