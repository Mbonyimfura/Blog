const router=require('express').Router()

const {createMessage,getMessages,getMessage,deleteMessage,updateMessage}=require('../controllers/message')

router.post('/create/',createMessage)
router.get('/getAll/',getMessages)
router.get('/get/:id',getMessage)
router.patch('/update/:id',updateMessage)
router.delete('/delete/:id',deleteMessage)
module.exports=router
