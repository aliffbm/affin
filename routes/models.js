var Mongoose = require('mongoose');

var Users = Mongoose.Schema({
	firstName: String, 
	lastName: String, 
	age: Number, 
	password: String });

exports.Users = Mongoose.model('users', Users); 

var Comments = Mongoose.Schema({
	comment: String, 
	userWhoCreated: String
})

exports.Comments = Mongoose.model('comments', Comments)