const mongoose = require("mongoose");
const userSignup = require("../controller/userController/userSignup");
const Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

var validateName = function (name) {
  return /^[a-zA-Z]+$/.test(name);
};

const SignUpSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    validate: [validateName, "please fill a valid name"],
    match: [/^[a-zA-Z]+$/, "please fill a valid name"],
  },
  last_name: {
    type: String,
    required: true,
    validate: [validateName, "please fill a valid name"],
    match: [/^[a-zA-Z]+$/, "please fill a valid name"],
  },
  email: {
    type: String,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
});

// try {
//     SignUpSchema.path('email').validate(async(email)=>{
//         const emailCount = await mongoose.models.users.countDocuments({ email })
//         return !emailCount
//       })

// } catch (error) {
//     alert('Email already exist')
// }

// SignUpSchema.path('email').validate(async(email)=>{
//   const emailCount = await mongoose.models.users.countDocuments({ email })
//   return !emailCount
// },'Email already exist')

const User = mongoose.model("users", SignUpSchema);
module.exports = User;
