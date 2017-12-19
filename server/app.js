var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');
//DB Module
var db = require('./modules/db.config.js');

//route includes
//
app.use(bodyParser.json());
app.use(express.static('server/public')); 

//routes
//
app.listen(port, function () {
    console.log('server up on:', port);
}); //end server spin up