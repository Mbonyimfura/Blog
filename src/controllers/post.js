const cloudinary=require("../helpers/cloudinary");
const comment = require("../models/comment");
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
        res.status(500).json('internal server')
    } 
}
//get post
const getPost= async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if(!post) return res.status(404).json('post does not exist')
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
}
//update post
const updatePost=async(req,res)=>{
  try {
    const post=await Post.findById(req.params.id);
    if(!post) return res.status(404).json('post does not exist')
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
        posts = await Post.find({ username })
      } else {
        posts = await Post.find().populate('comments')
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json('post do not exist');
    }
}
//post likes
const postLikes=async(req,res)=>{
  try {

    // console.log("this is the user Id " + userId)
    const {likeByID} = await Post.findById(req.params.id);
    
    const post = await Post.findById(req.params.id);

    if (post) {

        if(likeByID.includes(req.user.id)){
            
            try {
                
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,

                    {  
                        
                        $pull: { likeByID:req.user.id},
                        $inc: { likes: -1 },
                        
                    },
                    { new: true }
                )
                return res.status(200).json(updatePost);
            } catch (err) {
                console.log(err);
                return  res.status(404).json({ status: "error", err: err.message })
            }
        } else {
            try {
                const updatePost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $inc: { likes: 1 },
                        $push: { likeByID:req.user.id}
                    },
                    { new: true }
                );
                return  res.status(200).json(updatePost);
            } catch (err) {
                return   res.status(404).json(err)
            }
        }
    }

    else {
        return  res.status(401).json({ status: "Post not Exits", err: err.message })
    }
} catch (err) {
    return   res.status(500).json({ status: "Server error", err: err.message })
}

}
module.exports={
    createPost,updatePost,getAllPost,getPost,deletePost,postLikes
}