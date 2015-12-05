var express=require('express');
var bodyParser = require('body-parser');
var constants=require('./constants.js');
var app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

/*
* This function generates random 
* integer between two numbers low (inclusive) and high (inclusive)
*/
function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

/*
* send error code according to data
* length or availability of server
*/
function check(data, res){
	var size=data.length;
	var magic=randomIntInc(0,1);
	if(size>constants.LENGTH_ACCEPTED){
		res.status(400);
		res.send('None shall pass');
	}else if(magic==0){
		res.status(503);
		res.send('Service unavailable');
	}else{
		res.status(200);
		res.send(data);
	}
}

app.post('/orders',function(req,res){
	var orders=req.body;
	check(orders, res);
});

app.post('/customers',function(req,res){
	var customers=req.body;
	check(customers, res);
});

app.listen(3000,function(){
	console.log('Here we go !');
});