const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    address: String,
    status:{
        type:String,
        enum:['active','inactive'],
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = studentSchema;