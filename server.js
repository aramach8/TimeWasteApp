var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multiPart = require('connect-multiparty');
var multipartMiddleWare = multiPart();
var path = require('path');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());
app.use(multipartMiddleWare);

//declaring the base folder for the entire app
app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res){
   //res.sendFile('index.html'); 
   res.sendFile(path.resolve('index.html')); 
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile
app.post('/api/profile/editPhoto', multipartMiddleWare, profileController.updatePhoto);
app.post('/api/profile/editUserName', profileController.updateUserName);
app.post('/api/profile/editBio', profileController.updateBio);

app.listen('3000', function(){
   console.log("Listening for localhost 3000"); 
});