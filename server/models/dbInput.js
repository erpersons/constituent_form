var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
mongoose.createConnection('localhost:27017/Senate');

var constituentSchema = new Schema({
    name: String,
    email: String,
    address: String,
    message: String,
    checkBox: Boolean,
    senator: String, //not sure how to pick either Senator OR District. a post?
    district: String
})

var senSchema = new Schema({
    senName: String,
    email: String
}, {
    collection: 'Senators'
    }); // collection in the database would be Senator names and email addresses

// mongoose.model('Senators', new Schema({ senName: String, email: String}), 'senators');


var distSchema = new Schema({
    dist: Number,
    email: String
}); // collection in the database would be District #s and email addresses

// mongoose.model('senators', new Schema({senName: String, email: String}), 'Senators');


var senSchema = mongoose.model('Senator', senSchema); //mongo will pluralize Senator
var distSchema = mongoose.model('District', distSchema); //mongo will pluralize District
var Info = mongoose.model('constituentschema', constituentSchema);
module.exports = Info;