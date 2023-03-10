const express = require('express');
const { 
    userRegisterCtrl, 
    userLoginCtrl, 
    usersCtrl, 
    userProfileCtrl, 
    userDeleteCtrl,
    userUpdateCtrl } = require("../../controllers/users/userCtrl");
const userRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");

//POST/api/v1/users/register
userRouter.post('/register', userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login",userLoginCtrl );

//GET/api/v1/users
userRouter.get('/', usersCtrl);

//GET/api/v1/users/:id
userRouter.get('/profile/', isLogin, userProfileCtrl);

//DELETE/api/v1/users/:id
userRouter.delete('/:id', userDeleteCtrl);

//PUT/api/v1/users/:id
userRouter.put('/:id', userUpdateCtrl)

module.exports = userRouter;