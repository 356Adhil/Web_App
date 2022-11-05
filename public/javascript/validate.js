const {use} = require('../../routes/user')

function checkLogin(form){
    firstname = document.getElementById('form3Example1')
    email = document.getElementById('form3Example3')
    password = document.getElementById('form3Example4')
    if (username.value == ""){
        alert('Email and Password is needed')
        username.focus()
        return false
    }
    if (email.value == ''){
        alert('Email and Password is needed')
        email.focus()
        return false
    }
    re = /^[-_a-zA-Z0-9.,@#!?]*$/
    if (!re.test(email.value)){
        alert('Email can only contains letters, numbers and _-.,@#!?')
        email.focus()
        return false
    }
    if (password.value == ''){
        alert('Password is needed')
        password.focus()
        return false
    }
    return true
}