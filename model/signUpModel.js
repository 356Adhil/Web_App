const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SignUpSchema = new Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const user = mongoose.model("User",SignUpSchema)
module.exports = user