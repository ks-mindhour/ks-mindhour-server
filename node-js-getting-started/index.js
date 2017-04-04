var express = require('express');
var morgan = require('morgan');	//middleware
var mongoose = require('mongoose');

//var hostname = 'localhost';

// process.env.PORT lets the port be set by Heroku
var portnumber = process.env.PORT || 8080;

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(morgan('dev'));


var Schema = mongoose.Schema;

//ObjectId = Schema.ObjectId;
var customer = new Schema({
//	id : ObjectId;
    firstname    		: String,
    lastname     		: String,
    contactnumber       : String,
    password	        : String
});

Resource = mongoose.model('Resource', new Schema());
//Todo = mongoose.model('customer', Schema);	//this line contains error

mongoose.connect(process.env.MONGODB_URI, function (error) {
    if (error) 
    	{
    		console.error(error);
    		console.log("fuck yaar");
    	}
    else console.log('mongo connected');
});



app.get('/',function(req, res){
	Resource.find( function ( err, todos ){
      res.json(200, todos);
    });
});

app.post('/', function(req, res) {
	/*
    var f_name = req.body.first_name;
    var l_name = req.body.last_name;
    var mail_id = req.body.email;
    var password = req.body.password;
*/
    var res1 = new Resource( req.body );
    res1.save(function (err) {
        console.log(res1.f_name);
     // res.json(200, res1);
    });

    //res.send(f_name + ' ' + l_name + ' ' + mail_id);
});


//app.use(express.static(__dirname + '/public'));

app.listen(portnumber,function(){
	console.log('server is running at http://');

});

