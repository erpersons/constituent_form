var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'erpersons@gmail.com',
        pass: process.env.PASSWORD
    },
    
        tls: {
            rejectUnauthorized: false
        }
});

let mailOptions = {
    from: '"Emily Persons" erpersons@gmail.com', //replaced with cEmail (constituent's email)
    to: 'erpersons@gmail.com', //sending email to self instead of Senator
    subject: 'Message thru Nodemailer',
    text: 'Message to Senator' //replaced with var message
};

router.post('./', function(req, res) {
    // var sEmail = req.body.Senators.email => Senators.email?
    // var message = req.body.message;
    // var cEmail = req.body.email;

    let mailOptions = {
        from: '"Emily Persons" erpersons@gmail.com', //replaced with cEmail (constituent's email)
        to: 'erpersons@gmail.com', //sending email to self instead of Senator
        subject: 'Message thru Nodemailer', 
        text: 'Message to Senator' //replaced with var message
    };
    
})
transporter.sendMail(mailOptions, (error, info)=> {
    if(error){
        return console.log(error);
    } else {
        console.log('message sent!');
        console.log(info);
    }
});

module.exports = router;