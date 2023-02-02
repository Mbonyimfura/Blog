const express=require('express')
const cors=require('cors')
const AuthRoute=require('../src/routes/auth')
const userRoute=require('../src/routes/user')
const postRoute=require('../src/routes/post')
const swaggerDocs=require('../src/documentation/swagger')
const multer=require('multer')
const app=express()
// app.use(express.static(__dirname,'../public'))
app.use(express.json())
app.use(cors())
app.use('/welcome',(req,res,next)=>{
    res.send({message:'Welcome to my blog app'})
})
swaggerDocs(app);
app.use('/api/auth',AuthRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)

module.exports=app