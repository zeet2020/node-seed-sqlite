var express = require('express');
var app = express();
var _ = require('underscore');


var model = require('./model.js');

var fs = require('fs');

var allowCrossDomain = function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json');
    next();

};

app.use(allowCrossDomain);



function listPost(req,res,next){
      model.Post.findAll().then(function(record){

          res.end(JSON.stringify(record));
     });
};






app.get('/',function(req,res,next){
  res.end("rest api server");
});

app.get('/post',listPost); 




app.listen(8000,function(){

   console.log("server is started 8000");
   
});
