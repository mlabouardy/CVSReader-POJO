var express=require('express');
var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.post('/orders',function(req,res){
	res.send(req.body);
});

app.post('/customers',function(req,res){
	res.send(req.body);
});

app.listen(3000,function(){
	console.log('Here we go !');
});