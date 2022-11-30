const mongoose = require('mongoose');

//Create userSchema

var productschema = new mongoose.Schema({
    name: {type: String},
	userId: {type: String},
    is_active:{type: Number},
    is_deleted:{type: Number},
    status:{type: Number},
    created_by:{type: String},
    updated_by:{type: String},
   
},{
    timestamps: true
});



module.exports = mongoose.model("productschema", productschema);

console.log('productSchema created..');