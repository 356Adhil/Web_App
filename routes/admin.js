const express =require("express")
const router = express.Router()
const adminController = require('../controller/adminController/adminController')

router.get('/',adminController.loginPage)
router.post('/home',adminController.postHome)




module.exports = router