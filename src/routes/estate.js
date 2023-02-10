const router=require('express').Router();
const auth=require('../middleware/auth')
//const {createPost,getAllPost,getPost,updatePost,deletePost,postLikes,unLikePost}=require('../controllers/post')
const {createEstate,getAllEstate,getEstate,deleteEstate,updateEstate}=require('../controllers/estate')
const multer=require('../../helpers/multer');
//router.post('/',multer.upload.single("image"),auth.userRole,createPost);
router.post('/',multer.upload.array("images"),createEstate);
// router.route('/').post(auth.userRole,createPost)

 router.route('/get/:id').get(getEstate)

// //Update post
router.route('/update/:id').patch(multer.upload.array("images"),updateEstate)
// //delete estate
 router.route('/delete/:id').delete(deleteEstate);
// //GET ALL Estate
 router.route('/getAll/').get(getAllEstate)
module.exports=router