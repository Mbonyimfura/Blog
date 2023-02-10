const mongoose=require('mongoose')

const realEstateSchema=new mongoose.Schema({
    location:{
        province:{
            type:String,
        },
        district:{
            type:String,
        },
        street:{
            type:String,
        }
    },
    price:{
        type:String
    },
    images:{
        type:Array,
        default:[]
    },
    beds:{
        type:Number
    },
    year:{
        type:Date,
        default:Date.now
    },
    bath:{
        type:Number
    },
    lot_size:{
        type:String
    },
    status:{
        type:String,
        default:false
    },
    description:{
        type:String
    }
    
},{timestamps:true})

module.exports=mongoose.model('Estate',realEstateSchema)