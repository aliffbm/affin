
var port = 3000; 
var express = require('express'); 
var app = express();
var path = require('path');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser'); 
var multer = require('multer'); 
var upload = multer(); 

var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/myDB';

mongoose.connect(mongoDB);

var db = mongoose.connection; 

db.on('error', console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

//app.use(express.static('/'));

app.engine('mustache', mustacheExpress()); 
app.set('view engine', 'mustache'); 


app.use(express.static(path.join(__dirname, 'public')));


var Users = require('./routes/users.js');

app.get("/", function(req, res){

	res.render('index', {"thisText": "ahem"});
}); 

app.get("/login/:username", function(req, res){

	res.send("hello world " + req.params.username);


})

app.post("/data", function(req, res){
	var data = req.body;
	console.log(data.users[1]);
	res.send("data");
})

app.post("/login", function(req, res){
	
	var name = req.body.username//req.body.username;

	res.redirect("login/"+name);
	//res.redirect('/');

	console.log(name); 
			
});  
app.listen(port); 



console.log("Listening on port " + port); 
