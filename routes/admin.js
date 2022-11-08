const express =require("express")
const router = express.Router()
const adminController = require('../controller/adminController/adminController')

router.get('/',adminController.loginPage)
router.post('/home',adminController.postHome)
router.get('/home',adminController.getHome)

router.get('/add',adminController.addUser)
router.post('/add',adminController.postaddUser)

module.exports = router