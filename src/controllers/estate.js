const cloudinary=require("../helpers/cloudinary");
const Estate = require("../models/real_estate");
//Create Estate
const createEstate=async(req,res)=>{
    
  try{
   const images=req.files;
const url=[]
for(let file of images){
    const result=await cloudinary.uploader.upload(file.path);
    url.push(result.secure_url)
}
     const estate=await Estate.create({
            location:{
                province:req.body.province,
                district:req.body.district,
                street:req.body.street,
            },
            price:req.body.price,
            images:url,
            beds:req.body.beds,
            year:req.body.year,
            bath:req.body.bath,
            lot_size:req.body.lot_size,
            status:req.body.status,
            
            description:req.body.description,

        });
        res.status(201).json({estate})
    }
    catch(e){
        res.status(500).json('internal server error')
    } 
}
const getAllEstate=async(req,res)=>{
    try {
      const estate=await Estate.find();
      res.status(200).json(estate)  
    } catch (e) {
       res.status(404).json('Not found') 
    }
}
//get estate
const getEstate= async (req, res) => {
    try {
      const estate = await Estate.findById(req.params.id);
      if(!estate) return res.status(404).json('That estate does not exist')
      res.status(200).json(estate);
    } catch (e) {
      res.status(500).json(e);
    }
}
// //update post
const updateEstate=async(req,res)=>{
  try {
    const estate=await Estate.findById(req.params.id);
    if(!estate) return res.status(404).json({message:"Estate not Found"})
    if(estate.image){
        for(let image in estate.image){
            await cloudinary.uploader.destroy(image);
        }
    }
    const files=req.files;
    const url=[];
    for(const file of files){
        const result=await cloudinary.uploader.upload(file.path)
        url.push(result.secure_url)
    }
    const updatedEstate = await Estate.findByIdAndUpdate(req.params.id,{$set:{
        location:{
            province:req.body.province,
            District:req.body.district,
            street:req.body.street
        },
        image:url,
        price:req.body.price,
        beds:req.body.beds,
        description:req.body.description,
        bath:req.body.bath,
        status:req.body.status,
        LotSize:req.body.lotsize,
        YearBuilt:req.body.year
      }},{new:true});
      res.status(200).json({
        status:"success",
        data:updatedEstate
      });
    } catch (error) {
        res.status(400).json({status:"error", error: error.message });
      }
}
// //delete post
const deleteEstate=async(req,res)=>{
    try {
        const estate = await Estate.findById(req.params.id);
        if (estate.images) {
            for(let image in estate.images){
                await cloudinary.uploader.destroy(image)
            }
          try {
            await estate.delete();
            res.status(200).json("estate has been deleted...");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can delete only your post");
        }
      } catch (err) {
        res.status(500).json(err);
      }  
}



module.exports={
    createEstate,getAllEstate,getEstate,deleteEstate,updateEstate
}