const express=require('express')
const cors=require('cors')
const AuthRoute=require('../src/routes/auth')
const app=express()
// app.use(express.static(__dirname,'../public'))
app.use(express.json())
app.use(cors())
app.use('/welcome',(req,res,next)=>{
    res.send({message:'Welcome to my blog app'})
})
app.use('/api/auth',AuthRoute)

module.exports=app