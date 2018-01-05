var mongoose = require('mongoose')
mongoose.Promise = global.Promise;

var SortSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	type:{
		type: Number,
		required: true
	},
	sort:Number
})
mongoose.model('Sort',SortSchema);