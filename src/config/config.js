const dotenv=require('dotenv')
const { Mongoose } = require('mongoose')

dotenv.config()

module.exports={
    development:{
        mongoUrl:process.env.MONGODB_URL,
        port:process.env.PORT
    },
    production:{
        mongoUrl:process.env.MONGODB_URL,
        port:process.PORT
    }
}
