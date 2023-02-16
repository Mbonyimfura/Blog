const jwt=require('jsonwebtoken')

const verifyToken=async(req,res,next)=>{
  const authHeader=req.headers.authorization|| req.headers.token;
  if(!authHeader || !authHeader.startsWith('Bearer')){
 return res.status(401).json('No token provided')
}
const token=authHeader.split(' ')[1]
if(!token) return res.status(401).json('No token provided')
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