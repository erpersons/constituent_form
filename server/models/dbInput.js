var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
require('../modules/db.config.js');

var constituentSchema = new Schema({
    name: String,
    email: String,
    address: String,
    message: String,
    checkBox: Boolean,
    senator: String,
    district: String
})

var senSchema = new Schema({
    senName: String,
    email: String
}) // collection in the database would be Senator name and email address

var distSchema = new Schema({
    dist: Number,
    email: String
}) // collection in the database would be District # and email address

var senators = mongoose.model('Senator', senSchema); //mongo will pluralize Senator
var districts = mongoose.model('District', distSchema); //mongo will pluralize District
var constituents = mongoose.model('Constituent', constituentSchema);

// export models object
module.exports = {
    Senators: senators,
    Districts: districts,
    Constituents: constituents
};