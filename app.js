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

 app.set('view engine', 'ejs')

// app.set('layout', 'layout/layouts')
// app.use(expressLayouts)
// app.set("view engine","hbs")

app.set('views','./views/user')

app.use(express.static("public"))
app.use("css",express.static(path.join(__dirname + "public/css")))

// router
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(port,console.log("Server running at",port))