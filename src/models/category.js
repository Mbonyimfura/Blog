const mongoose=require('mongoose')

const CategorytSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  }
},
{timestamps:true}
);
module.exports=model('Category',CategorySchema)