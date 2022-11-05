const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const path = require("path")
const expressLayouts = require("layouts")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

app.set('layout', 'layout/layouts')
app.set("view engine","hbs")
app.set('views','./views/user')
app.use(expressLayouts)
app.use(express.static("views/user/public"))
app.use("views/user/public/css",express.static(path.join(__dirname + "views/user/public/css")))
app.use("views/user/public/img",express.static(path.join(__dirname + "views/user/public/img")))

// router
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(port,console.log("Server running at",port))