var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var path = require('path');
//DB Module
var db = require('./modules/db.config.js');

//route includes
var submitRouter = require('./routes/submit-route');
var indexRouter = require('./routes/index.router');
var senRouter = require('./routes/senGet-route');
var distRouter = require('./routes/distGet-route');

app.use(bodyParser.json());
app.use(express.static('server/public')); 

//routes
app.use('/submit-route', submitRouter);
app.use('/', indexRouter); //must be last
app.use('/senGet-route', senRouter);
app.use('/distGet-route', distRouter);

app.listen(port, function () {
    console.log('server up on:', port);
}); //end server spin up