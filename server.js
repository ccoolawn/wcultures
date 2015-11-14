var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


app.use(express.static(__dirname + "/client"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = 3000;
var server = app.listen(port, function () {
	console.log('--------------------');
	console.log('--------'+port+'--------');
	console.log('--------------------');
});

require("./server/config/mongoose.js");

var routes = require("./server/config/routes.js");
routes(app);



