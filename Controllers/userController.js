const express = require('express');
const User = require('../Model/userModel');
const Tour = require('../Model/TourModel');

exports.getAllUsers = async(req,res)=>{
    try{

        console.log("Fetching all the Users from the DB...")
        const allUsers = await User.find();
        res.status(200).json({
            status:"Sucessfully Fetched..",
            count:allUsers.length,
            data:{allUsers}
        })
    }
    catch(err){
        res.status(500).json({
            status:"Server Error"
        })
    }
}



exports.getUser = async(req,res)=>{
    
    console.log("Fetching the User from the DB...", req.params.id)
    try{
        console.log("Fetching the User from the DB...", req.params.id)
        const user = await User.findById(req.params.id);
        const tour = await Tour.find({name:user.address})
        res.status(200).json({
            status:"Sucessfully Fetched..",
            data:{user}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}


exports.deleteUser = async(req,res)=>{

    try{
        console.log("Deleting the User from the DB...", req.params.id)
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"Sucessfully Deleted..",
            data:{user}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}




exports.updateUser = async(req,res)=>{

    try{
        console.log("Updating the User from the DB...", req.params.id)
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).json({
            status:"Sucessfully Updated..",
            data:{user}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}


exports.createUser = async(req,res)=>{
    try{
        console.log("Creating newUser ...")
        const newUser= await User.create(req.body);
        res.status(200).json({
            status:"Sucessfully created....",
            data:{newUser}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}

