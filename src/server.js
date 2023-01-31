const config=require('./config/config')
const app=require('../src/app')
const mongoose=require('mongoose')
const currentConfig=config.development
const {port,mongoUrl}=currentConfig
const server=app.listen(port,()=>{
   mongoose.set('strictQuery',false)
   mongoose.connect(mongoUrl)
   .then(()=>{
console.log(`The server is up and running on port ${port}`)
   })
   .catch(err=>{
    console.log(err)
   })
})


