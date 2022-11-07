const express = require("express")
const router = express.Router()
const userSignup = require('../controller/userController/userSignup')
const userLogin = require('../controller/userController/userLogin')



router.get("/",userLogin.getLogin)
router.get("/signup",userSignup.getSignup)
router.get("/home",userLogin.getHome)

router.get('/logoutAction',userSignup.getLogout)

//signUp to Login
router.post("/",userSignup.postSignup)

router.post('/home',userLogin.postHome)

module.exports = router