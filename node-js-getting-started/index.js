var express = require('express');
var morgan = require('morgan');	//middleware

var hostname = 'localhost';
var portnumber = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(portnumber,hostname,function(){
	console.log('server is running at http://');

});

