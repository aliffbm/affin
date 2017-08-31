var models = require('./models.js'); 

exports.addUser = function(req, res){

	var user = new models.Users({firstName: "Aliff", 
		lastName: "Macapinlac", 
		age: 30,
		password: "123"
	})
	user.save(function(){
		res.send(user)	
	})

	

}