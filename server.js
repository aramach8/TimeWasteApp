var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());

//declaring the base folder for the entire app
app.use('/app', express.static(__dirname + "/app"));

app.get('/', function(req, res){
   //res.sendFile('index.html'); 
   res.sendFile(path.resolve('index.html')); 
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);

app.listen('3000', function(){
   console.log("Listening for localhost 3000"); 
});