const router=require('express').Router();


const {userRole, verifyToken}=require('../middleware/auth')
const {updateUser,getUser,deleteUser,getAllUsers}=require('../controllers/user');
const { route } = require('./auth');
//Update  router
router.route('/update/:id').patch(userRole,updateUser)
//get user
router.route('/:id').get(userRole,getUser)
//delete
router.route('/delete/:id').delete(userRole,deleteUser)
//get all users
router.route('/').get(userRole,getAllUsers)



module.exports=router