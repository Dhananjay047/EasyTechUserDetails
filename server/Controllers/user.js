import express from 'express';
import mongoose from 'mongoose';
import UserDetails from '../models/userModel.js'


export const getUsers = async(req,res) => {
    try{
        const userDetails = await UserDetails.find();
        res.status(200).json(userDetails);
    }catch(error){
        res.status(404).json({message:error.message});
        console.log(error);
    }
}

export const createUser = async (req,res) => {
    const {name,email,phone,city,state,country,area} = req.body;
    try{
        let newUser = await UserDetails.findOne({email});
        if (newUser) return res.status(400).send("User already registered.");
        else{
            newUser = new UserDetails({name,email,phone,city,state,country,area});
            console.log(newUser);
            await newUser.save();
            res.status(201).json(newUser);
        }
    } catch(error){
        res.status(409).json({message:error.message});
    }

} 

export const updateUser = async (req,res) =>{
    const { id : _id } = req.params;
    const {name,email,phone,city,state,country,area} = req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that Id');
        const updateDetails = { name,email,phone,city,state,country,area };
        const updatedUser = await UserDetails.findByIdAndUpdate(_id, updateDetails , {new:true});
        res.json(updatedUser);
    } catch(error){
        res.status(409).json({message:error.message});
    }

}

export const deleteUser = async(req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that Id');
    await UserDetails.findByIdAndRemove(id);
    res.json({message:"post deleted sucessfully"});
}
