const router=require('express').Router();
const User=require('../models/user')
const bcrypt=require('bcrypt')
const {verifyToken,userRole}=require('../middleware/auth')
const jwt=require('jsonwebtoken');
const user = require('../models/user');
const { sendWelcomeEmail}=require('../emails/account')

//Register 
router.post('/register',async(req,res)=>{
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
try{
const user= await User.create({
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword,
    role:req.body.role
    
})
sendWelcomeEmail(user.email,user.username)
res.status(200).json(user)
}catch(e){
res.status(500).send(e)
}
})

//login
router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username})
        if(!user) return res.status(401).json('Unable to login')
        const match= await bcrypt.compare(req.body.password,user.password);
        if(!match){
         res.status(401).send('Unable to login check your credentials')
        }
        const token=jwt.sign({id:user._id,role:user.role},process.env.TOKEN_KEY)
        user.token=token
        const {password,...others}=user._doc
        res.json({others})
    }   
    catch(e){
    res.status(400).send(e)
    }
})
module.exports=router