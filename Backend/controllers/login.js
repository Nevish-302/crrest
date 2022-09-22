const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const login_p = (req, res) => {
    const {username, password} = req.body
    User.findOne({Username: username}).then((id)=>
    {
        console.log(username, password)
        if(!id)
            res.status(400).json({ msg: "User not found" })
            
        bcrypt.compare(password, id.passHash, (err, data) => {
            if(err) console.log(err);
            if (data) {
                req.session.isauth = true
                req.session.user = username
                console.log(req.session)
                return res.status(200).json({ msg: "Login success" })
            } else {
                return res.status(401).json({ msg: "Invalid credentials" })
            }
        })
    })
    req.download('../templates/template_3.py')
    
}

const login_g = (req, res) => {                
    res.status(200).send('Home');
}

module.exports = {login_p, login_g}