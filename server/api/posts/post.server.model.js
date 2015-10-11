var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

function validateLength (v) {
	return v.length <= 40;
}

function descriptionLength (v) {
	return v.length <= 1000;
}

var PostSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank',
		validate: [validateLength, 'Title should be 40 chars in length or less']

	},
	description: {
		type: String,
		default:'',
		trim: true,
		validate: [descriptionLength, 'Description should be 1000 chars in length or less']
	},
	author: {
		type: String,
		default: '',
		trim: true,
		required: 'Author cannot be blank'
	}

});

mongoose.model('Post', PostSchema);