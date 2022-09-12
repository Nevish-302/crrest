const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user.model')

const register = (req, res) => {
    const {username, password} = req.body;
    const saltrounds = 10
    const passhash = bcrypt.genSalt(saltrounds)
    .then(salt => {
        return bcrypt.hash(password, salt);
    })
    
    const user = new User({username: username, passhash});
    user.save((err, userName) =>{
        if (err)
        {
            console.error(err);        
        }
        else
        {
            res.status(200).send('User has registered successfully');
        }
    })
    
}
const registerpage = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {register, registerpage}