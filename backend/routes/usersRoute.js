const express = require('express');
const asynHandler = require('express-async-handler');
const User = require('../models/User');

const usersRoute = express.Router();

usersRoute.post('/register', asynHandler( async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
        throw new Error('User Exist');
    }

    const userCreated = await User.create({ name, email, password });  

    res.send(userCreated);
}));

usersRoute.post('/login', asynHandler( async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
        res.status(200);
        res.json({  
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
        })
    } else {
        res.status(401);
        throw new Error('Invalid Credentials');
    }
}));

module.exports = usersRoute;