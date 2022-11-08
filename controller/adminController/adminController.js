const User = require("../../model/signUpModel")


const admin = {email: 'admin@gmail.com', password: '1100'}

module.exports = {

    loginPage:(req,res)=>{
        if(req.session.admin){
            res.redirect('/admin/home')
        }else{
            res.render('admin/adminLogin')
        }

    },
    postHome:(req,res)=>{
        if(req.body.email === admin.email && req.body.password == admin.password){
            req.session.admin = req.body.email
            res.redirect('/admin/home')
        }else{
            res.redirect('/admin')
        }
    },
    getHome:async(req,res)=>{
        if(req.session.admin){
        const usersData =  await  User.find({is_admin:0})
            res.render('admin/table',{users:usersData})
        }else{
            res.redirect('/admin')
        }

    },
    addUser:(req,res)=>{
        try {
            res.render('admin/newUser')
        } catch (error) {
            console.log(error.message);
        }
    },
    postaddUser:async(req,res)=>{
        try {
            const firstname = req.body.firstname
            const lastname = req.body.lastname
            const email = req.body.email
            const password = req.body.password

            const user = new User({
                first_name:firstname,
                last_name:lastname,
                email:email,
                password:password
    
            })
            const userData = await user.save()
            if(userData){
                res.redirect('/admin')
            }else{
                res.render('admin/newUser')
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    // add new user



}