const express =require("express")
const router = express.Router()

router.get('/home',(req,res)=>{
    res.render('admin/kkk')
})

module.exports = router