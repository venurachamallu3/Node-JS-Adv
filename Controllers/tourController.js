const express = require('express');
const Tour = require('../Model/TourModel');

exports.getAllTours = async(req,res)=>{
    try{

        console.log("Fetching all the Tours from the DB...")
        const allTours = await Tour.find();
        res.status(200).json({
            status:"Sucessfully Fetched..",
            count:allTours.length,
            data:{allTours}
        })
    }
    catch(err){
        res.status(500).json({
            status:"Server Error"
        })
    }
}



exports.getTour = async(req,res)=>{
    
    console.log("Fetching the Tour from the DB...", req.params.id)
    try{
        console.log("Fetching the Tour from the DB...", req.params.id)
        const tour = await Tour.findById(req.params.id);
        res.status(200).json({
            status:"Sucessfully Fetched..",
            data:{tour}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}


exports.deleteTour = async(req,res)=>{

    try{
        console.log("Deleting the Tour from the DB...", req.params.id)
        const tour = await Tour.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:"Sucessfully Deleted..",
            data:{tour}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}




exports.updateTour = async(req,res)=>{

    try{
        console.log("Updating the Tour from the DB...", req.params.id)
        const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        res.status(200).json({
            status:"Sucessfully Updated..",
            data:{tour}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}


exports.createTour = async(req,res)=>{
    try{
        console.log("Creating newTour...")
        const newTour = await Tour.create(req.body);
        res.status(200).json({
            status:"Sucessfully created....",
            data:{newTour}
        })
    }
    catch(err){
        res.status(500).json({
            status:err.message
        })
    }
}

