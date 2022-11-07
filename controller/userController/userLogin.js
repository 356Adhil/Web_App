const { response } = require("express")
const user = require("../../model/signUpModel")

module.exports={

    getLogin:(req,res)=>{
        res.render('userLogin')
    },
    getHome:(req,res)=>{
        res.render('userHome')
    },

    postHome:(req,res)=>{
        const {email,password} = req.body
        user.findOne({email:email, password:password})
        .then((result)=>{
            if(result){
                req.session.loggedIn=true
                req.session.user=response.user
                res.redirect('/home')
            }
            else{
                res.redirect('/')
                console.log("invalid Entry");
            }

        })
        .catch((err)=>{
            console.log(err);
        })
    },

}
