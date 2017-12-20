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
    senator: String,
    district: String

    
})

var Info = mongoose.model('constituentSchema', constituentSchema);
module.exports = Info;