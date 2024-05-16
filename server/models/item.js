const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    } ,
    email:{
        type: String,
        required : true
    } ,
    password :{
        type :String,
        required : true
    } ,
    height :{
        type : Number,
        required : true
    } ,
    weight :{
        type : Number,
        required : true
    } ,
    bmi :{
        type :Number,
        required : true
    },
    date :{
        type : String,
        required : true
    } 
})

const itemModel = mongoose.model("item", itemSchema)
module.exports = itemModel