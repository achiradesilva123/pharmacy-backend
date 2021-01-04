const express=require('express');
const controller=require('../controller/userController');

const router=express.Router();

router.post("/save",controller.saveUser);
router.get('/login',controller.checkLogin);

module.exports=router;
