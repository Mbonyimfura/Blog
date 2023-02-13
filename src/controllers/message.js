const mailer=require('../../helpers/email')
const Contact=require('../models/contact')

const createMessage=async(req,res)=>{
   try {
    const messages=await Contact.create({
        email:req.body.email,
        message:req.body.message,
        name:req.body.name,
        phone:req.body.phone
    })
    await mailer.mailer(req.body.email,req.body.message);
res.status(201).json(messages)
   } catch (error) {
    res.status(400).send()
    
   }
   
}
const getMessages=async(req,res)=>{
   try {
    const message=await Contact.find()
    res.status(200).json(message)
   } catch (error) {
    res.status(404).json('The messages you are you looking for are not found')
   }
  
}
const getMessage=async(req,res)=>{
    try {
     const message=await Contact.findById(req.params.id) 
     res.status(200).json(message)  
    } catch (error) {
        res.status(404).json('message does not exist')
    }
}
const updateMessage=async(req,res)=>{
    try {
      const message=await Contact.findByIdAndUpdate(req.params.id,{
        $set:req.body
      },{new:true}) 
      res.status(201).json(message)
    } catch (error) {
        res.status(400).json('data was not upadted')
    }
}
const deleteMessage=async(req,res)=>{
    try {
      const message=await Contact.findByIdAndDelete(req.params.id)
      res.status(200).json('message deleted successfully ')  
    } catch (error) {
        res.status(404).json('not found')
    }
}

module.exports={
    createMessage,getMessages,getMessage,deleteMessage,updateMessage
}