const { response } = require("express")
const user = require("../../model/signUpModel")

module.exports={

    getLogin:(req,res)=>{
        if(req.session.email){
            res.render('user/userHome')
        }else{
            res.render('user/userLogin')
        }
        
    },
    getHome:(req,res)=>{
        if(req.session.email){
            res.render('user/userHome')
        }else{
            res.redirect('/')
        }
    },

    postHome:(req,res)=>{
        const {email,password} = req.body
        user.findOne({email:email, password:password})
        .then((result)=>{
            if(result){
                req.session.loggedIn=true;
                req.session.email = req.body.email
                res.redirect('/home')
                console.log(req.session.email);
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
