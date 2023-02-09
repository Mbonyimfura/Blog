const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  desc:{
   type:String,
   required:true
  },
  image:{
    type:String,
    required:false
  },
  likes:{
    type:Number,
    default:0
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Comment'
  }]
},
{timestamps:true}
);
module.exports=mongoose.model('Post',PostSchema)