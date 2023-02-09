const router=require('express').Router();
const {verifyToken}=require('../middleware/auth')
const blogComment=require('../controllers/comment')
const multer=require('../../helpers/multer');
const { route } = require('./auth');


//router.post('/',multer.upload.single("image"),auth.userRole,createPost);
//  router.route('/').post(auth.userRole,createPost)
// router.route('/get/:id').get(getPost)
router.post('/create/:id',verifyToken,blogComment.create)

  


module.exports=router