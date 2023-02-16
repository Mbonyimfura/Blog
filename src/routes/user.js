const router=require('express').Router();


const {userRole, verifyToken}=require('../middleware/auth')
const {updateUser,getUser,deleteUser,getAllUsers}=require('../controllers/user');
const { route } = require('./auth');
//Update  router
router.route('/update/:id').patch(verifyToken,updateUser)
//get user
router.route('/:id').get(verifyToken,getUser)
//delete
router.route('/delete/:id').delete(verifyToken,deleteUser)
//get all users
router.route('/').get(verifyToken,getAllUsers)

module.exports=router