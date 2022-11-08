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

        // add new user

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
    },

    // edit user

    editUser:async(req,res)=>{
        try {
            const id = req.query.email
           const userData = await User.findOne({email: id})
           if(userData){
            res.render('admin/editUser',{user:userData})
           }
           else{
            res.redirect('/admin')
           }

        } catch (error) {
            console.log(error.message);
        }
    },

    // Update User

    updateUser:async(req,res)=>{
        try {
            const id = req.query.email
           const userData = await User.updateOne({email: id},{$set:{first_name:req.body.firstname, last_name:req.body.lastname, email:req.body.email, password:req.body.password}})
           res.redirect('/admin')
        } catch (error) {
            console.log(error.message);
        }
    },

    // Delete User

    deleteUser:async(req,res)=>{
        try {
            const id = req.query.email
           await User.deleteOne({email: id})
           res.redirect('/admin')
           
        } catch (error) {
            console.log(error.message);

        }
    },

    // Logout Admin

    getLogout:(req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('logout successfully');
                res.redirect('/admin');
            }
        })
    }
    
}