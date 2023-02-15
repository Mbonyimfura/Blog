const router=require('express').Router();
const {verifyToken}=require('../middleware/auth')
const blogComment=require('../controllers/comment')
const multer=require('../helpers/multer');
const { route } = require('./auth');



router.post('/create/:id',verifyToken,blogComment.create)

module.exports=router