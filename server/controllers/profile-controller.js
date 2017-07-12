var User = require('../datasets/users');
var fs = require('fs-extra');
var path = require('path');

module.exports.updatePhoto = function(req, res){
    var file = req.files.file;
    var userId = req.body.userId;
    console.log("User "+userId+" is submitting "+file.name);
    
    var uploadDate = new Date();
    
    var now = new Date();
    var date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "H-" +  now.getMinutes() + "M";
    
    var tempPath = file.path;
    var targetPath = path.join(__dirname, "../../uploads/" + userId + date + file.name);
    var savePath = "/uploads/" + userId + date + file.name;
    
    fs.rename(tempPath, targetPath, function(err){
        if(err){
            console.log(err);
        } else {
            User.findById(userId, function(err, userData){
                var user = userData;
                user.image = savePath;
                user.save(function(err){
                    if(err){
                        console.log("photo save failed");
                        //res.json(status: 500);
                    } else {
                        console.log("photot save successful");
                        //res.json(status: 200);
                    }
                })
            })
        }
    })
};

module.exports.updateUserName = function(req, res){
    var userId = req.body.userId;
    var username = req.body.username;
    console.log("Updating username: "+username+" for id: "+userId);
    User.findById(userId, function(err, userData){
        if(userData){
            var user =  userData;
            user.username = username;
            user.save(function(err){
               if(err){
                   console.log("username save failed");
                   //res.json(status: 500);
               } else {
                   console.log("username save successful");
                   //res.json(status: 200);
               }           
            });
        }else{
            console.log("No record with id found for username update");
        }           
    });
};

module.exports.updateBio = function(req, res){
    var userId = req.body.userId;
    var bio = req.body.bio;
    console.log("Updating bio: "+bio+" for id: "+userId);
    User.findById(userId, function(err, userData){
        if(userData){
            var user =  userData;
            user.bio = bio;
            user.save(function(err){
               if(err){
                   console.log("bio save failed");
                   //res.json(status: 500);
               } else {
                   console.log("bio save successful");
                   //res.json(status: 200);
               }           
            });
        }else{
            console.log("No record with id found for bio update");
        }           
    });
};