const router=require('express').Router();


const {userRole}=require('../middleware/auth')
const {updateUser,getUser,deleteUser,getAllUsers}=require('../controllers/user');
const { route } = require('./auth');
//Upadate  router
router.route('/:id').patch(userRole,updateUser)
//get user
router.route('/:id').get(userRole,getUser)
//delete
router.route('/:id').delete(userRole,deleteUser)
//get all users
router.route('/').get(userRole,getAllUsers)

module.exports=router