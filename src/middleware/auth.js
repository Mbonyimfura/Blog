const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
    const token=req.body.token || req.headers["token"]
    if(!token) return res.status(404).json({message:'token not found'})
    try{
    const decoded=jwt.verify(token,process.env.TOKEN_KEY)
    req.user=decoded
    next();
    }
    catch(e){
    res.status(400).json('Invalid token')
    }
}
const userRole=async(req,res,next)=>{
    verifyToken(req,res,()=>{
       if(req.user.role === 'Admin'){
         next();
       }
       else{
        res.status(400).json('You are  not allowed to access this info')
       }
     })
}
module.exports={verifyToken,userRole}