const router=require('express').Router();
const User=require('../models/user')
const bcrypt=require('bcrypt')

//Register 
router.post('/register',async(req,res)=>{
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt)
try{
const user= await User.create({
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword,
})
res.status(200).json(user)
}catch(e){
res.status(500).send(e)
}
})
module.exports=router
//login