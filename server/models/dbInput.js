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

var senSchema = new Schema({
    senName: String,
    email: String
}) //not working

var distSchema = new Schema({
    dist: Number,
    email: String
}) //not working

var senSchema = mongoose.model('Senator', senSchema);
var Info = mongoose.model('constituentschema', constituentSchema);
// module.exports = Info;
module.exports = {const: Info, sens: senSchema}