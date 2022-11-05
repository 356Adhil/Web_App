const Users = require("../../model/signUpModel")

module.exports={


    postHome:(req,res)=>{
        const {email,password} = req.body
        Users.findOne({email:email, password:password})
        .then((result)=>{
            if(result){
                res.render('userHome')
            }
            else{
                console.log("invalid Entry");
            }

        })
        .catch((err)=>{
            console.log(err);
        })
    },
}