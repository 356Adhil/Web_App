const Users = require("../../model/signUpModel")

module.exports={



    getSignup:(req,res)=>{
        res.render('userSignup')
    },
//homepage logout
    getLogout: (req, res) => {
        res.redirect('/');
        console.log('logout successfully');
        //
    },
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