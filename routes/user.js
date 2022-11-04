const express = require("express")
const router = express.Router()
const userControllers = require('../controller/userController')


router.get("/",userControllers.getLogin)
router.get("/signup",userControllers.getSignup)
router.get("/home",userControllers.getHome)


module.exports = router