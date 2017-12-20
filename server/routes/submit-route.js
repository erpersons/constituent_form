var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var  infoMessCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');

router.post('/', function (req, res){
    console.log('in router.post')
    console.log(req.body);
    var newInfoMess = new infoMessCollection.const({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        message: req.body.message,
        human: req.body.human,
        senator: req.body.senator,
        district: req.body.district
    }); //end newInfoMess
    newInfoMess.save(function (err) {
        if (err) {
            console.log('no worky:', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
}); //end router.post
module.exports = router;