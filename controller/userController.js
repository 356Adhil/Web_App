module.exports={
    getLogin:(req,res)=>{
        res.render('userLogin')
    },

    getSignup:(req,res)=>{
        res.render('userSignup')
    },
    getHome:(req,res)=>{
        res.render('userHome')
    }
}