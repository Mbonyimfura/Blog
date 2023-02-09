const mongoose=require('mongoose')

const realEstateSchema=new mongoose.Schema({
    location:[{
        province:{
            type:String,
        },
        district:{
            type:String,
        },
        street:{
            type:String,
        }
    }],
    price:{
        type:String
    },
    images:[{
        type:String,
        required:true
    }],
    beds:{
        type:Number
    },
    year:{
        type:Number
    },
    bath:{
        type:Number
    },
    lot_size:{
        type:String
    },
    status:{
        type:String
    },
    description:{
        type:String
    }
    
},{timestamps:true})

module.exports=mongoose.model('Real_estate',realEstateSchema)