const express = require("express");
const app = express()
const mongoose = require("mongoose")
const TourModel = require('./Model/TourModel')
const UserModel =  require('./Model/userModel')
const tourRoute =  require('./Routes/tourRoute')
const userRoute = require ("./Routes/userRoute")

app.use(express.json())
const router = express.Router();

mongoose.connect("mongodb://localhost:27017/Tour").then(con=>{
    console.log("DB Connected Succesfully......")
}).catch(err=>console.log("error is ",err))


app.use('/api/v1/tour',tourRoute)
app.use('/api/v1/user',userRoute)

app.use('/',(req,res)=>{
    res.send("WELCOME TO THE TOUR PLANNING APPLICATION.....")
})




app.listen('3000',(req,res)=>{
    console.log("Application running on port 3000...")
})