var express = require('express');
var router = express.Router();
var path = require('path');
var Districts = require('../models/dbInput.js').Districts

router.get('/', function (req, res) {
    console.log('GET districts route hit!');

    Districts.find({}, function (err, Obj) {
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