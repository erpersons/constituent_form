var express = require('express');
var router = express.Router();
var path = require('path');
var Info = require('../models/dbInput.js');
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    console.log('GET senators route hit!');

    Info.find({ 'senName': { $exists: true }}, function (err, Obj) {  //shouldn't be Info
        if (err) {
            res.sendStatus(500);
            console.log('senGet-route error', err);
        } else {
            console.log('senGet-route HIT', Obj);
            res.send(Obj);
        }
    });
}); //end router.get

module.exports = router;