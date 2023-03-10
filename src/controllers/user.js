const User=require('../models/user')
const bcrypt=require('bcrypt')
const Post=require('../models/post');
const { json } = require('express');
//const loginUser=require('../middleware/auth')

//update controller
const updateUser=async(req,res)=>{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
 try{
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
res.status(200).json(user);
}catch(e){
res.status(500).send('please review your data and try again later')
}
}

//get user
const getUser=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user) return res.status(401).json('user not found')
        const {password,...others}=user._doc
        res.status(200).json(others)
            }catch(e){
                res.status(404).json('User with that id does  not exist')
            } 
}
//delete user
const deleteUser=async(req,res)=>{
   try{
   await User.findOneAndDelete(req.params.id)
   res.status(200).json('User has been deleted successful');
   }
   catch(e){
   res.status(400).send(e)
   }
}
const getAllUsers=async(req,res)=>{
    try{
const user=await User.find()
if(!user) return res.status(401).json('user not found')
res.status(200).json(user)
    }catch(e){
res.status(404).json('users not found')
    }
}

module.exports={
    updateUser,getUser,deleteUser,getAllUsers
}