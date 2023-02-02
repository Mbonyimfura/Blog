const router=require('express').Router();
const auth=require('../middleware/auth')
const {createPost,getAllPost,getPost,updatePost,deletePost}=require('../controllers/post')
const multer=require('../../helpers/multer');
router.post('/',multer.upload.single("image"),auth.userRole,createPost);
// router.route('/').post(userRole,createPost)
router.route('/:id').get(getPost)

//Update post
router.route('/:id').patch(auth.userRole,updatePost)
//delete post
router.route('/:id').delete(auth.userRole,deletePost);
//GET ALL POSTS
router.route('/').get(getAllPost)
  


module.exports=router