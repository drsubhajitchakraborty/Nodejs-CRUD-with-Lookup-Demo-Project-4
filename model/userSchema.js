const mongoose = require('mongoose');

//Create userSchema

var userSchema = new mongoose.Schema({
    name: {type: String},
	email: {type: String},
    mobilenumber: {type: String},
    password: {type: String},
    otp:{type: String},
    authtoken: {type: String,default: ''},
    is_active:{type: Number},
    is_deleted:{type: Number},
    status:{type: Number},
    created_by:{type: String},
    updated_by:{type: String},
},{
    timestamps: true
});



module.exports = mongoose.model("userSchema", userSchema);

console.log('User Registration Schema created..');