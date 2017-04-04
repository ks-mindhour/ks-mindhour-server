var express = require('express');
var morgan = require('morgan');	//middleware

var hostname = 'localhost';

// process.env.PORT lets the port be set by Heroku
var portnumber = process.env.PORT || 8080;;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(portnumber,hostname,function(){
	console.log('server is running at http://');

});

