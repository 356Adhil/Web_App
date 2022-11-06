// const {use} = require('../../routes/user')

// function checkLogin(form){
//     firstname = document.getElementById('form3Example1')
//     email = document.getElementById('form3Example3')
//     password = document.getElementById('form3Example4')
//     if (username.value == ""){
//         alert('Email and Password is needed')
//         username.focus()
//         return false
//     }
//     if (email.value == ''){
//         alert('Email and Password is needed')
//         email.focus()
//         return false
//     }
//     re = /^[-_a-zA-Z0-9.,@#!?]*$/
//     if (!re.test(email.value)){
//         alert('Email can only contains letters, numbers and _-.,@#!?')
//         email.focus()
//         return false
//     }
//     if (password.value == ''){
//         alert('Password is needed')
//         password.focus()
//         return false
//     }
//     return true
// }




function validation(){
let flag=0
let username= document.getElementById('form3Example1').value.trim()
let email = document.getElementById('form3Example3').value.trim()      
let password = document.getElementById('form3Example4').value.trim()


if(username==''){
  document.getElementById('usernameError').innerHTML="Firstname Required"
  flag=1
}else if(username.length<3){
  document.getElementById('usernameError').innerHTML="Enter atleast 3 character"
  flag=1
}else{
  document.getElementById('usernameError').innerHTML=""
}

if(email==''){
    document.getElementById('emailError').innerHTML="email Required"
    flag=1
}else{
    document.getElementById('emailError').innerHTML=""
}

if(password==''){
    document.getElementById('passwordError').innerHTML="Password Required"
    flag=1
}else{
    document.getElementById('passwordError').innerHTML=""
}

if(flag==1){
    return false
}

}

