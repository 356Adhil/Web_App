const mongoose = require("mongoose")
const userSignup = require("../controller/userController/userSignup")
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
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
})

try {
    SignUpSchema.path('email').validate(async(email)=>{
        const emailCount = await mongoose.models.users.countDocuments({ email })
        return !emailCount
      })
    
} catch (error) {
    alert('Email already exist')
}
// SignUpSchema.path('email').validate(async(email)=>{
//   const emailCount = await mongoose.models.users.countDocuments({ email })
//   return !emailCount
// },'Email already exist')





const User = mongoose.model("users",SignUpSchema)
module.exports = User