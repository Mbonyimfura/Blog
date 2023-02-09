const Post=require('../models/post')
const Comment=require('../models/comment')
exports.create=async(req,res)=>{
    const post=await Post.findById(req.params.id)
    if(!post) return res.status(404).json('post not exist')
    try {
     const comment=await Comment.create({
        comment:req.body.comment,
        post:req.params.id,
       user:req.user.id
     });
    post.comments.push(comment)
    await post.save()
    res.status(201).json(comment) 

    }
    
     catch (error) {
        res.status(400).json('Bad request')
    }
}

