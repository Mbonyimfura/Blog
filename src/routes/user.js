const router=require('express').Router();
const User=require('../models/user')
const bcrypt=require('bcrypt')
const Post=require('../models/post')

//Upadate 
router.patch('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
try{
const updateUser=await User.findOneAndUpdate(req.params.id,{
    $set:req.body,
},
{new:true})
res.status(200).json(updateUser);
}catch(e){
res.status(500).send(e)
}
    }else{
        res.status(401).json('you can only update your account!')
    }
})
//get user
router.get('/:id',async(req,res)=>{
    try{
const user=await User.findOne(req.params.id);
const {password,...others}=user._doc
res.status(200).json(others)
    }catch(e){
        res.status(404).json('User with that id that is not ')
    }
})

//delete
router.delete('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
     try{
 const user=await User.findOne(req.body.params)
 
try{
    await Post.deleteMany({username:user.username})
await User.findOneAndDelete(req.params.id)
res.status(200).json('User has been deleted successful');
}
catch(e){
res.status(500).send(e)
}
}catch(e){
   res.status(404).json('User does not exist')     
} 
    }else{
        res.status(401).json('you can only delete your account!')
    }
})





module.exports=router