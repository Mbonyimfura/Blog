const multer=require("multer");
const path=require('path');

exports.upload = multer({
    storage:multer.diskStorage({}),
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    },
    fileFilter:(req,file,cb) =>{
        let extention = path.extname(file.originalname);
        if(!extention === '.jpg' && !extention === '.jpeg' && extention === '.png'){
            cb(new Error('Unsupported file!',false));
            return;
        }
        cb(null,true);
    }
});