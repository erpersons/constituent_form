var express = require('express');
var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
var  infoMessCollection = require('../models/dbInput.js')
var bodyParser = require('body-parser');

router.post('/', function (req, res){
    var newInfoMess = new infoMessCollection({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        message: req.body.message,
        checkBox: req.body.checkBox,
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