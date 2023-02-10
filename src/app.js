const express=require('express')
const cors=require('cors')
const AuthRoute=require('../src/routes/auth')
const userRoute=require('../src/routes/user')
const postRoute=require('../src/routes/post')
const commentRoute=require('../src/routes/comment')
const estateRouter=require('../src/routes/estate')
const swaggerDocs=require('../src/documentation/swagger')
const app=express()
// app.use(express.static(__dirname,'../public'))
app.use(express.json())
app.use(cors())
app.use('/welcome',(req,res)=>{
    res.send({message:'Welcome to my blog app'})
})
swaggerDocs(app);
app.use('/api/auth',AuthRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comments',commentRoute)
app.use('/api/estates',estateRouter)

module.exports=app