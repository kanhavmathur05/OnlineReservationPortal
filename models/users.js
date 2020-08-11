const mongoose = require('mongoos');
const Schema = mongoose.Schema;

const users = new Schema({
    id:String,
    userName:String,
    email:String,
    password:String,
    age:Number
})

module.exports = mongoose.model("users",users);