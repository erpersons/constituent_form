var express = require('express');
var router = express.Router();
var path = require('path');
var Senators = require('../models/dbInput.js').Senators;

router.get('/', function (req, res) {
    console.log('GET senators route hit!');

    Senators.find({}, function (err, Obj) { 
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