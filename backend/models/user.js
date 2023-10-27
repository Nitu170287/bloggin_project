
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:string,
        require: true
    },
    usename:{
        type:string,
        require: true,
        unique: true,
    },
    email:{
        type:string,
        require: true,
        unique:true,
    } ,
    password:{
        type:string,
        require: true,
    }
})

module.exports = mongoose.model("users", userSchema)