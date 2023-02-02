const router=require('express').Router();
const auth=require('../middleware/auth')
const {createPost,getAllPost,getPost,updatePost,deletePost}=require('../controllers/post')
const multer=require('../../helpers/multer');
router.post('/',multer.upload.single("image"),auth.userRole,createPost);
 router.route('/').post(auth.userRole,createPost)
router.route('/get/:id').get(getPost)

//Update post
router.route('/update/:id').patch(multer.upload.single("image"),auth.userRole,updatePost)
//delete post
router.route('/delete/:id').delete(auth.userRole,deletePost);
//GET ALL POSTS
router.route('/getAll/').get(getAllPost)
  


module.exports=router