const cloudinary=require("../../helpers/cloudinary");
const Post=require('../models/post')
//Create post
const createPost=async(req,res)=>{
  try{
      const result=await cloudinary.uploader.upload(req.file.path);
        const post=await Post.create({
          title:req.body.title,
          desc:req.body.desc,
          image:result.secure_url
        });
        res.status(201).json(post)
    }
    catch(e){
        res.status(500).json(e)
    } 
}
//get post
const getPost= async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
}
//update post
const updatePost=async(req,res)=>{
  try {
    const post=await Post.findById(req.params.id);
    await cloudinary.uploader.destroy(post.image);
    const result = await cloudinary.uploader.upload(req.file.path);
    const updated = await Post.findByIdAndUpdate(req.params.id,{$set:{
        title:req.body.title, 
        desc:req.body.desc,
        image:result.secure_url,
      }},{new:true});
      res.status(200).json({
        status:"success",
        data:updated
      });
    } catch (error) {
        res.status(500).json({status:"error", error: error.message });
      }
}
//delete post
const deletePost=async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            await post.delete();
            res.status(200).json("Post has been deleted...");
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
//const get all posts
const getAllPost=async(req,res)=>{
    const username = req.query.user;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
}

module.exports={
    createPost,updatePost,getAllPost,getPost,deletePost
}