var express = require('express');

var app = express();

app.get('/',function(req,res,next){
    console.log("one");
    next();
});

app.get('/',function(req,res){
    console.log("two");
});

app.get('/',function(req,res){
    console.log("Three");
})

app.listen(3000,function(err){
    if(err) throw err;
    console.log("Server is running");
});


//Difference between USE and GET

// app.use('/', cb); 

//  "matches everything that starts with /"
//  matches / 
//  matches /foo 
//  matches /foo/bar

// app.get('/', cb);

//  "only matches /"
//  matches /
//  doesn't match /foo
//  doesn't match /foo/bar
