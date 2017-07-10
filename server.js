var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost:27017/time-waste');

app.get('/', function(req, res){
   //res.sendFile('index.html'); 
   res.sendFile(path.resolve('index.html')); 
});

app.listen('3000', function(){
   console.log("Listening for localhost 3000"); 
});