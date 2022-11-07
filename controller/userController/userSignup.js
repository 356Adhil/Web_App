const User = require("../../model/signUpModel")

module.exports={



    getSignup:(req,res)=>{
        res.render('user/userSignup')
    },
//homepage logout
    getLogout: (req, res) => {
        console.log(req.session);
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('logout successfully');
                console.log(req.session);
                res.redirect('/');
            }
        })
    },
    postSignup:(req,res)=>{
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let email = req.body.email
        let password = req.body.password

        const user = new User({
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