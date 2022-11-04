const express = require("express")
const app = express()
const port = 3000
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const path = require("path")
const expressLayouts = require("layouts")
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

app.set('layout', 'layout/layouts')
app.set("view engine","hbs")
app.set('views','./views/user')
app.use(expressLayouts)
app.use(express.static("public"))
app.use('/',userRouter)
app.use('/admin',adminRouter)
app.listen(port,console.log("Server running at",port))