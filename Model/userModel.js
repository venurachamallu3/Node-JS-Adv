const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    "name":{
        type:String,
        require:true
    },
    "email":{
        type:String,
        unique:true,
        require:true
    },
    "address":{
        type:String,
        default:"Banglore"
    }
})

const User = new mongoose.model('User',userSchema)

module.exports= User;