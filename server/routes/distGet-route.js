var express = require('express');
var router = express.Router();
var path = require('path');
var Info = require('../models/dbInput.js')
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    console.log('GET districts route hit!');

    Info.find({ 'district': { $exists: true } }, function (err, Obj) {
        if (err) {
            res.sendStatus(500);
            console.log('distGet-route error', err);
        } else {
            console.log('distGet-route HIT', Obj);
            res.send(Obj);
        }
    });
}); //end router.get

module.exports = router;