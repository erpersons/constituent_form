var mongoose = require('mongoose');

// Mongo Connection
var mongoURI = '';

if (process.env.MONGODB_URI != undefined) {
    // no .env
    mongoURI = process.env.MONGODB_URI;
} else {
    
    mongoURI = 'mongodb://localhost:27017/Senate';
}

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function (err) {
    if (err) {
        console.log("MONGO ERROR: ", err);
    }
    res.sendStatus(500);
});

mongoDB.once('open', function () {
    console.log("Connected to Mongo!");
});

module.exports = mongoDB;
