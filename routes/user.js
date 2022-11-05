const express = require("express")
const router = express.Router()
const userSignup = require('../controller/userController/userSignup')
const userLogin = require('../controller/userController/userLogin')



router.get("/",userSignup.getLogin)
router.get("/signup",userSignup.getSignup)
router.get("/home",userSignup.getHome)

router.post("/",userSignup.postLogin)

router.post('/home',userLogin.postHome)

module.exports = router