var express=require('express');

var app=express();

app.use('/',function(req,res){
	res.send('It\'s working !!');
});

app.listen(3000,function(){
	console.log('Here we go !');
});