var express = require('express');
var router = express.Router();
var path = require('path');
var Info = require('../models/dbInput.js')

router.get('/', function (req, res) {
    console.log('GET senators route hit!');

    Info.find({name: { $exists: true } }, function (err, Obj) {
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