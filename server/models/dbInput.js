var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var constituentSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: Number,
    address: String,
    message: String,
    checkBox: Boolean,
    senator: String,
    district: String

    
})

var Info = mongoose.model('constituentSchema', constituentSchema);
module.exports = Info;