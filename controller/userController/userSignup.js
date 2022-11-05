const Users = require("../../model/signUpModel")

module.exports={

    getLogin:(req,res)=>{
        res.render('userLogin')
    },

    getSignup:(req,res)=>{
        res.render('userSignup')
    },
    getHome:(req,res)=>{
        res.render('userHome')
    },
    // postHome:(req, res) => {
    //     if (req.body.user === user.userName && req.body.password == user.password) {
            
    //         console.log('login successful');
    //         res.redirect('/home')   
    //     } else {
    //         res.redirect('/home')
    //     }
    // },
    postLogin:(req,res)=>{
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let email = req.body.email
        let password = req.body.password

        const user = new Users({
            first_name:firstname,
            last_name:lastname,
            email:email,
            password:password

        })
        user
        .save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err);
        })

    },

}