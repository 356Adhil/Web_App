const User = require("../../model/signUpModel");

// var msg = ''

module.exports = {
  getSignup: (req, res) => {
    res.render("user/userSignup");
  },
  //homepage logout
  getLogout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("logout successfully");
        res.redirect("/");
      }
    });
  },
  postSignup: (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;

    const user = new User({
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
    });
    user
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        // msg="Email already exist"
        console.log(err);
      });
  },
};
