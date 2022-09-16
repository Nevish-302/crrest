const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const login = (req, res) => {
    const {username, password} = req.body
    User.findOne({Username: username}).then((id)=>
    {
        console.log(username, password)
        if(id)
        console.log(id)
        else{
            res.status(400).json({ msg: "User not found" })
        return }
        bcrypt.compare(password, id.passHash, (err, data) => {
            if(err) console.log(err);
            if (data) {
                return res.status(200).json({ msg: "Login success" })
            } else {
                return res.status(401).json({ msg: "Invalid credentials" })
            }
        })
    })
    
}

const loginpage = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {login, loginpage}