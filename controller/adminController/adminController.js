

const admin = {email: 'admin@gmail.com', password: '1100'}

module.exports = {

    loginPage:(req,res)=>{
        if(req.session.admin){
            res.redirect('/home')
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
    

}