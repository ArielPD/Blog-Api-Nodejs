const bcrypt = require('bcryptjs'); 
const User = require ("../../model/User/User");

//Register
const userRegisterCtrl = async(req, res)=> {
    const {firstname, lastname, profilePhoto, email, password} = req.body;
    try {
        //Check if email exist
        const userFound = await User.findOne({email});
        if(userFound) {
            return res.json({
                msg: 'User Already Exist'
            })
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashdPassword = await bcrypt.hash(password, salt);

        //create the user
        const user = await User.create({
            firstname, 
            lastname, 
            profilePhoto, 
            email, 
            password: hashdPassword
        });
        res.json({
           status: 'success',
           data: user
        })
    } catch(error) {
        res.json(error.message)
    }
}

//Login
const userLoginCtrl = async(req, res)=> {
    const {email, password } = req.body;
    try {
        //Check if email exist
        const userFound = await User.findOne({email});
        if (!userFound) {
            return res.json({
                msg: "Wrong Email credentials",
            });
        }
        //validate of the password
        const isPasswordMatched = await User.findOne({password});
        if (!isPasswordMatched) {
            return res.json({
                msg: "Wrong password credentials",
            });
        }
        res.json({
           status: 'success',
           data: 'user login' 
        })
    } catch(error) {
        res.json(error.message)
    }
};

//all
const usersCtrl = async(req, res)=> {
    try {
        res.json({
           status: 'success',
           data: 'All users route' 
        })
    } catch(error) {
        res.json(error.message)
    }
};

//profile
const userProfileCtrl = async(req, res)=> {
    try {
        res.json({
           status: 'success',
           data: 'Porfile route' 
        })
    } catch(error) {
        res.json(error.message)
    }
};

//Delete
const userDeleteCtrl = async(req, res)=> {
    try {
        res.json({
           status: 'success',
           data: 'delete user route' 
        })
    } catch(error) {
        res.json(error.message)
    }
};

//Update
const userUpdateCtrl = async(req, res)=> {
    try {
        res.json({
           status: 'success',
           data: 'update user route' 
        })
    } catch(error) {
        res.json(error.message)
    }
}

module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    usersCtrl,
    userProfileCtrl,
    userDeleteCtrl,
    userUpdateCtrl,
}